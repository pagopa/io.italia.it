#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO DOWNLOAD DATA USEFUL TO LIST "COBADGES" CARDS & INFO
=end
require 'down'
require 'fileutils'

Jekyll::Hooks.register :site, :after_init do |doc, payload|

    tempfileCobadge = Down.download("https://raw.githubusercontent.com/pagopa/io-services-metadata/master/status/cobadgeServices.json")
    FileUtils.mv(tempfileCobadge.path, "./_data/#{tempfileCobadge.original_filename}")

    tempfileAbi = Down.download("https://raw.githubusercontent.com/pagopa/io-services-metadata/master/status/abi.json")
    FileUtils.mv(tempfileAbi.path, "./_data/#{tempfileAbi.original_filename}")

end