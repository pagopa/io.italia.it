module Jekyll::CustomFilter

    def friendly_name(input)
        blacklist = ['Città di ', 'Comune di ', 'Regione ', 'COMUNE DI ', 'REGIONE ']
        stringtest = blacklist.any? { |s| input.include? s }
        blacklist.each { |item|
            input.sub! item, ''
        }
        "#{input}"
    end
end
Liquid::Template.register_filter(Jekyll::CustomFilter)