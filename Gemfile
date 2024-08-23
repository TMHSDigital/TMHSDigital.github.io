source "https://rubygems.org"

gem "jekyll", "~> 4.3.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.7"
end

# Windows-specific gems
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# JRuby-specific gem
platforms :jruby do
  gem "http_parser.rb", "~> 0.6.0"
end

# Uncomment the following line if you want to use wdm on Windows
# gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?