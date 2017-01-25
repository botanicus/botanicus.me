# A sample Guardfile
# More info at https://github.com/guard/guard#readme

## Uncomment and set this to only include directories you want to watch
# directories %w(app lib config test spec features) \
#  .select{|d| Dir.exists?(d) ? d : UI.warning("Directory #{d} does not exist")}

## Note: if you are using the `directories` clause above and you are not
## watching the project directory ('.'), then you will want to move
## the Guardfile to a watched dir and symlink it back, e.g.
#
#  $ mkdir config
#  $ mv Guardfile config/
#  $ ln -s config/Guardfile .
#
# and, you'll have to watch "config/Guardfile" instead of "Guardfile"

# Therer doesn't seem to be any wait option, so on the first run it will run
# many times as the compilation touches many files.
guard(:shell, all_on_start: true) do
  watch(/^(posts\/\d{4}-\d{2}-\d{2}-|drafts\/).+\.(html|md)$/) do |m|
    # We run ZSH to get our $PATH from ~/.zshenv.
    # Not optimal, but what the hell.
    system 'zsh -c "rake dev:compile_posts"'
  end
end
