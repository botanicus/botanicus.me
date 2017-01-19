desc 'Build api.botanicus.me.'
task 'api.botanicus.me' do
  sh 'blog-generator.rb posts/ api.botanicus.me/'
end

desc 'Build blog.botanicus.me.'
task 'blog.botanicus.me' do
  Dir.chdir('blog.botanicus.me') do
    sh 'npm run build'
  end
end

desc 'Build the Docker image.'
task 'docker:build' do
  sh 'docker build . -t botanicus/botanicus.me'
end

desc 'Build everything.'
task build: ['api.botanicus.me', 'blog.botanicus.me', 'docker:build']

desc 'Run the web server.'
task :run do
  sh 'docker run -it -p 8000:80 botanicus/botanicus.me'
end
