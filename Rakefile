desc 'Build the Docker image.'
task 'docker:build' do
  sh 'docker build . -t botanicus/botanicus.me'
end

desc 'Push the Docker image.'
task 'docker:push' do
  sh 'docker push botanicus/botanicus.me'
end

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
