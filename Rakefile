desc 'Build the Docker image.'
task 'docker:build' do
  sh 'docker build . -t botanicus/botanicus.me'
end

desc 'Push the Docker image.'
task 'docker:push' do
  sh 'docker push botanicus/botanicus.me'
end

namespace :dev do
  desc 'Compile posts and drafts.'
  task :compile_posts do
    sh 'blog-generator.rb generate api.botanicus.me --include-drafts'
  end

  desc 'Run api.botanicus.me.'
  task 'api.botanicus.me' do
    sh "docker run -it -p 8000:80 -v #{Dir.pwd}/api.botanicus.me:/webs/api.botanicus.me -v #{Dir.pwd}/blog.botanicus.me/build:/webs/blog.botanicus.me botanicus/botanicus.me"
  end

  desc 'Run the web server.'
  task 'botanicus.me' do
    Dir.chdir('blog.botanicus.me') do
      sh 'npm start'
    end
  end

  desc 'Compile posts on change.'
  task :guard do
    sh 'bundle exec guard'
  end

  # TODO: Make an all-in-one task for writting. (run and guard do not quit, maybe
  #       using docker -d and kill it on quit?)
  #       task writing: [:build, :run, :guard]
end
