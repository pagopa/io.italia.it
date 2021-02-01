#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO DOWNLOAD DATA USEFUL TO LIST "COBADGES" CARDS & INFO
=end
require 'down'

SERVICESHOST = "https://raw.githubusercontent.com/pagopa/io-services-metadata/master/status/"
ABIHOST = "https://raw.githubusercontent.com/pagopa/io-services-metadata/master/status/"

Jekyll::Hooks.register :site, :after_init do |doc, payload|
    Down.download(SERVICESHOST + "cobadgeServices.json", destination: "./_data/cobadgeServices.json")
    Down.download(ABIHOST + "abi.json", destination: "./_data/abi.json")
end