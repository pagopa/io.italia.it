#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO GENERATE A NEW JSON WITH ENTI'S DATA 
=end
require 'json'
enti_to_list = Jekyll.configuration({})['enti_to_list']
file = File.read('./_data/visible-services-extended.json')
data_hash = JSON.parse(file)
new_content = {}
new_content["items"] = {}
services_counter = 0
blacklist = ['Città di ', 'Comune di ', 'comune di ', 'COMUNE DI ', 'Regione ', 'REGIONE ']
Jekyll::Hooks.register :site, :after_init do |doc, payload|
    data_hash.each_with_index do |item, index|
        # tipically in dev mode: don't process all the items
        if enti_to_list and index > enti_to_list
            break
        end
        item_new_values = {}
        services_counter += item["s"].length()
        # if the org name has a "black list word" let's divide the name
        # ex. Comune di Caltanisetta -> prefix: Comune di , friendlyname: Caltanisetta
        if blacklist.any? { |s| item["o"].include? s }
            orgName = item["o"]
            prefix = ""
            blacklist.each { |bw|
                if orgName.start_with?(bw)
                    prefix = bw
                end
            }
            item_new_values["prefix"] = prefix
            item_new_values["fn"] = item["o"].gsub(prefix, "").strip
            # "st" value is useful to sort the list (sortable title)
            item_new_values["st"] = item["o"].gsub(prefix, "").upcase.strip
        else
            item_new_values["fn"] = item["o"]
            # "st" value is useful to sort the list (sortable title)
            item_new_values["st"] = item["o"].upcase.strip
        end
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
        # creation of a json for every Ente
        filename = "./assets/entijson/#{item['fc'].to_s}.json"
        File.write(filename, JSON.dump(complete_hash))
    end
    #counters
    new_content["servnum"] = services_counter
    new_content["entinum"] = new_content["items"].length()
    # conversion of hash in array
    new_content["items"] = new_content["items"].values
    File.write('./_data/enti-servizi.json', JSON.dump(new_content))

end