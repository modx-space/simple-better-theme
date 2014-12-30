require "stringex"
class Jekyll < Thor
  desc "new", "create a new post"
  method_option :editor, :default => "subl"
  def new(*title)
    title = title.join(" ")
    date = Time.now.strftime('%Y-%m-%d')
    filename = "_posts/#{date}-#{title.to_url}.md"

    if File.exist?(filename)
      abort("#{filename} already exists!")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{title}\""
      post.puts "description:"
      post.puts "modified: \"#{date}\""
      post.puts "tags: []"
      post.puts "image:"
      post.puts "  author:"
      post.puts "  link:"
      post.puts "  file:"
      post.puts "comments:"
      post.puts "---"
    end

    system(options[:editor], filename)
  end
end