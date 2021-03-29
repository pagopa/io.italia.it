module Jekyll::CustomFilter
    # Put a "." every third numbers
    def friendly_number(input)
        displaynumber = input.to_s.gsub(/\D/, '').reverse.gsub(/.{3}/, '\0.').reverse
        "#{displaynumber}"
    end
    # Generate the Ente detail url path
    def ente_detail_name(input)
        displayname = input.gsub(/[^0-9A-Za-zÀ-ú\s]/, '').gsub('  ',' ')
        "#{displayname}"
    end
    # Regex for logo's name on CDN
    def cdn_name(input)
        displayname = input.gsub(/^0+/, '')
        "#{displayname}"
    end
    # Override key
    def override_content(inputhash)
        inputhash["content"] = ""
        inputhash
    end

end
Liquid::Template.register_filter(Jekyll::CustomFilter)