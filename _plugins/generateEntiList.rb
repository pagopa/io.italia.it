#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO GENERATE A NEW JSON WITH ENTI'S DATA 
=end
require 'json'
require 'down'

# If the pipeline isn't scheduled, then break the flow
if ENV['PIPELINE_TYPE']=='BatchedCI' && ENV['JEKYLL_ENV']=='production'
    File.write('_data/enti-servizi.json', JSON.dump({"items":[]}))
    return "+++++++ ENTI LIST GEN DISABLED +++++++"
end

downloadUrl = "https://iopstcdnassets.blob.core.windows.net/services/services-webview/visible-services-extended.json"
begin
    file =  Down.download(downloadUrl, open_timeout: 15)
rescue
    # fallback in case we cannot download the source file
    raise "File unreachable"
end

def sanitizeString(str)
    # except in case of acronym 
    if str.upcase==str and str.length<5
        return str
    end
    prepositions = /Dei |Degli |Di |Della |Delle |Dell'|Dell’|Del |Allo |Al |A |Sul |Sulla |Per | E |D'|Im |In |Am /
    specials = / Ii/
    # drop special characters
    cleanString = str.gsub(/[!@%&" ]/,'').strip
    # Let's transform all the words of a OrgName in capitalize
    capitalizedString = cleanString.gsub(/\S+/, &:capitalize)
    # Solve problem with composed string ex. D'iseo -> D'Iseo
    capitalizedStringComposed = capitalizedString.gsub(/('[a-z]|-[a-z]|’[a-z])/, &:upcase)
    # Lowercase for prepositions (in italian and german)
    capitalizedStringComposedPrepositions = capitalizedStringComposed.gsub(prepositions, &:downcase)
    return capitalizedStringComposedPrepositions.gsub(specials, &:upcase)
end

def renderEntiList(file, site)
    data_hash = JSON.parse(file.read)
    fcBlacklist = ['15376371009', '00000000000', '00000000001', '00000000002', '00000000003', '00000000004', '00000000005', '00000000006']
    new_content = {}
    new_content["items"] = {}
    # Creation of an hash only to display in a json for the App Io webview
    new_content_webview = {}
    # ARRAY to use as json source for search in page
    enti_searchable = []
    services_counter = 0
    prefixNames = /^(Comune di |Città di |Regione del |Regione |Città Metropolitana di |Comune della |Comunità Montana |Federazione dei Comuni del |Istituto Comprensivo Statale di |Consiglio Regionale della |Provincia del |Provincia di |Unione di Comuni di |Unione di Comuni |Unione dei Comuni del |Unione dei Comuni dell’|Unione dei Comuni dell'|Unione dei Comuni della |Unione dei Comuni Montani |Unione Comuni del |Unione Comuni della |Unione Comuni |Unione dei Comuni |Unione Montana dei Comuni dell’|Unione Montana dei Comuni | Unione Montana |Unione di Comuni Montani |Unione )/
    prefixGermanNames = /Gemeinde /
    enti_to_list = site.config['enti_to_list']
    converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
    data_hash.each_with_index do |item, index|
        # go to the next if this org is in the blacklist
        next if fcBlacklist.include? item["fc"]

        enti_searchable.push("#{item['o'].upcase}|#{item['fc'].to_s}")
        # tipically in dev mode: don't process all the items
        if enti_to_list and index > enti_to_list
            break
        end
        # content creation for webview list
        new_content_webview_item = {}
        new_content_webview_item[ item["fc"] ] = sanitizeString(item["o"])

        scope = ""
        # ---
        item_new_values = {}
        # ordering services by name
        item["s"].sort_by! { |k| k["n"]}
        services_counter += item["s"].length()
        # for every service we use the markdownify filter
        item["s"].each_with_index do | service, index |
            scope = service["sc"]
            if service["d"]
                item["s"][index]["d"] = converter.convert(service["d"])
            end
        end
        item["o"] = sanitizeString(item["o"])
        @orgName = sanitizeString(item["o"])
        # if the org name has a "prefix name" we put it in another field
        # ex. Comune di Caltanissetta -> prefix: Comune di , friendlyname: Caltanissetta
        prefix = @orgName[prefixNames]
        prefixGerman = @orgName[prefixGermanNames]
        prefixDroppedString = prefixNames.match(@orgName) ? @orgName.gsub!(prefixNames, '') : @orgName
        prefixDroppedString = prefixGerman ? prefixDroppedString.gsub!(prefixGerman, '') : prefixDroppedString
        item_new_values["prefix"] = prefixGerman ? prefix + "/ " + prefixGerman : prefix
        item_new_values["fn"] = prefixDroppedString.strip
        # "st" value is useful to sort the list (sortable title)
        item_new_values["st"] = prefixDroppedString.upcase.strip

        # let's merge the original values with the "new" ones (as friendly name and sortable title)
        complete_hash = item.merge(item_new_values)
        # Unfortunately there are some Enti that has the same name, but different fiscal code
        # so we fix this merging them by org name
        if new_content["items"].key?(item["o"])
            new_values = complete_hash["s"] | new_content["items"][item["o"]]["s"]
            complete_hash["s"] = new_values
        end
        # creation of a new item in the new_content hash with the org name as key
        new_content["items"][item["o"]] = complete_hash

        # add the org to the webview's list ONLY IF LOCAL
        if scope=="LOCAL"
            new_content_webview[item["o"]] = new_content_webview_item
        end

        # creation of a json for every Ente
        filename = "./assets/entijson/#{item['fc'].to_s}.json"
        File.write(filename, JSON.dump(complete_hash))
    end
    #counters
    new_content["servnum"] = services_counter
    new_content["entinum"] = new_content["items"].length()
    # conversion of hash in array
    new_content["items"] = new_content["items"].values

    numbers_info = {"enti" => new_content["entinum"], "services" => new_content["servnum"]}

    enti_searchable_sorted = enti_searchable.sort

    File.write('./assets/json/enti-list-webview.json', JSON.dump( new_content_webview.values.sort_by{ |hsh| hsh.values[0] } ).gsub(/[\p{Cntrl}]/, ''))
    File.write('./assets/json/enti-list-searchable.json', JSON.dump(enti_searchable_sorted).gsub(/[\p{Cntrl}]/, ''))
    File.write('./assets/json/enti-list-numbers.json', JSON.dump(numbers_info).gsub(/[\p{Cntrl}]/, ''))
    File.write('_data/enti-servizi.json', JSON.dump(new_content).gsub(/[\p{Cntrl}]/, ''))
end

Jekyll::Hooks.register :site, :after_init do |site|
    # if we receive the file via CDN we can build a updated list
    # otherwise nothing, in this manner we use the data also stored from the last build
    unless file.nil?
        renderEntiList(file, site)
    end

end