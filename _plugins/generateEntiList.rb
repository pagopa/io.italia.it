#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO GENERATE A NEW JSON WITH ENTI'S DATA 
=end
require 'json'

file = File.read('./_data/visible-services-extended.json')
data_hash = JSON.parse(file)
new_content = {}
new_content["items"] = []
services_counter = 0
blacklist = ['Città di ', 'Comune di ', 'comune di ', 'COMUNE DI ', 'Regione ', 'REGIONE ']
Jekyll::Hooks.register :site, :after_init do |doc, payload|
    data_hash.each_with_index do |item, index|
        item_new_values = {}
        services_counter += item["s"].length()
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
            item_new_values["st"] = item["o"].gsub(prefix, "").upcase.strip
        else
            item_new_values["fn"] = item["o"]
            item_new_values["st"] = item["o"].upcase.strip
        end
        new_content["items"].push( item.merge(item_new_values) )
        if index == 20
            break
        end
    end
    new_content["servnum"] = services_counter
    new_content["entinum"] = data_hash.length()
    File.write('./_data/enti-servizi.json', JSON.dump(new_content))

end