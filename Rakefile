desc 'Build api.botanicus.me.'
task 'api.botanicus.me' do
  sh 'blog-generator.rb generate api.botanicus.me'
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

desc 'Push the Docker image.'
task 'docker:push' do
  sh 'docker push botanicus/botanicus.me'
end

desc 'Build everything.'
task build: ['api.botanicus.me', 'blog.botanicus.me', 'docker:build']

desc 'Run the web server.'
task :run do
  sh "docker run -it -p 8000:80 -v #{Dir.pwd}/api.botanicus.me:/webs/api.botanicus.me -v #{Dir.pwd}/blog.botanicus.me/build:/webs/blog.botanicus.me botanicus/botanicus.me"
end

desc 'Compile posts on change.'
task :guard do
  sh 'bundle exec guard'
end

# TODO: Make an all-in-one task for writting. (run and guard do not quit, maybe using docker -d and kill it on quit?)
# desc 'XX'
# task writing: [:build, :run, :guard]
