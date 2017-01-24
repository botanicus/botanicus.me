source 'https://rubygems.org'

group(:development) do
  # bundle config local.blog-generator ~/Projects/Software/blog-generator
  # bundle
  # delete the RubyGems-generated bin stub.
  # This is a generic solution, should work whether one has the blog-generator installed locally or not.
  # Before I was putting in gem nokogiri, since
  # globally installed gems are not visible from bundled
  # environment, but it's not a clean solution.
  gem 'blog-generator'
  gem 'guard'
  gem 'guard-shell'
end
