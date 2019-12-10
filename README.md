# io.italia.it

[![CircleCI](https://circleci.com/gh/teamdigitale/io.italia.it.svg?style=svg)](https://circleci.com/gh/teamdigitale/io.italia.it)

A website for the IO project.

Getting started
The repo contains a [Jekyll](https://jekyllrb.com/)-based website, validated and deployed with [CircleCI](https://circleci.com/gh/teamdigitale/io.italia.it). The website relies on the [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) design library for basic styling and functionality.

If you already have `bundler` installed, you can install jekyll and budler gems with:

`bundle install`

You can build the site and make it available on a local server with:

`bundle exec jekyll serve --config _config.yml,_config_dev.yml`

 You can refer to the [official Jekyll docs](https://jekyllrb.com/docs/) for further details on how to install it locally.

### Notes

You can run the server just with `bundle exec jekyll serve`: the webiste will be available on http://localhost:4000/design-jeyll-theme. This is the default settings to allow usage with GitHub pages.

The aforementioned addition of `_config_dev.yml` is needed to run the server on http://localhost:4000 without any subpath.
