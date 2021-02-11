#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO DOWNLOAD DATA USEFUL TO LIST "COBADGES" CARDS & INFO
=end
require 'down'

HOST = "https://assets.cdn.io.italia.it/status/"

Jekyll::Hooks.register :site, :after_init do |doc, payload|
    Down.download(HOST + "cobadgeServices.json", destination: "./_data/cobadgeServices.json")
    Down.download(HOST + "abi.json", destination: "./_data/abi.json")
end