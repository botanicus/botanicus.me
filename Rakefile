desc 'Build api.botanicus.me.'
task 'api.botanicus.me' do
  sh 'blog-generator.rb posts/ api.botanicus.me/'
end

desc 'Build blog.botanicus.me.'
task 'blog.botanicus.me' do
  Dir.chdir('blog.botanicus.me') do
    sh 'npm install && npm run build'
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
