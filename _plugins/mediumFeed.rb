#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO DOWNLOAD DATA FROM MEDIUM RSS FEED
=end
require 'rss'
require 'open-uri'
require 'json'

url = "https://medium.com/feed/io-lapp-dei-servizi-pubblici"

Jekyll::Hooks.register :site, :after_init do |doc, payload|
    begin
        new_content = []
        URI.open(url) do |rss|
            feed = RSS::Parser.parse(rss)
            feed.items.each do |item|
                itemEl = {}
                itemEl['title'] = item.title
                itemEl['link'] = item.link
                # extract first img source from text
                itemEl['img'] = item.content_encoded.to_s.match(/<img.*?src="(.*?)"[^>]+>/)[1] || ""
                # extract first header string from text
                itemEl['subtitle'] = item.content_encoded.to_s.match(/<h[^>]+>(.*?)<\/h[^>]+>/)[1] || ""
                new_content.push(itemEl)
            end
        end
        filename = "_data/mediumposts.json"
        File.write(filename, JSON.dump(new_content))
    rescue
        puts "### PROBLEMI nella generazione del json MEDIUM"
    end
end