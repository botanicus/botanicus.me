desc 'Build api.unplug.it.'
task 'api.unplug.it' do
  sh 'blog-generator.rb posts/ api.unplug.it/'
end

desc 'Build unplug.it.'
task 'unplug.it' do
  Dir.chdir('unplug.it') do
    sh 'npm run build'
  end
end

desc 'Build the Docker image.'
task 'docker:build' do
  sh 'docker build . -t botanicus/unplug.it'
end

desc 'Build everything.'
task build: ['api.unplug.it', 'unplug.it', 'docker:build']

desc 'Run the web server.'
task :run do
  sh 'docker run -it -p 8000:80 botanicus/unplug.it'
end
