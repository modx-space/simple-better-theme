---
layout: post
title: "Simple-Better-Theme配置"
description: "应用/自定义Simple-Better-Theme指南"
modified: "2014-12-30"
tags: [配置]
image:
  author:
  link:
  file:
comments: true
---

####<span class="label label-info">应用/定制Simple Better主题指南</span>

+ #####__针对全新Jekyll站点的设置__

  1. 如果还没有Jekyll环境,[请阅读并安装Jekyll](http://jekyllrb.com).
  2. 安装Ruby和`bundler gem`,<a href="https://github.com/shawzt/simple-better-theme" target="_blank" class="btn">克隆本主题</a>
  3. 在`simple-better-theme`下运行`bundle install`
  4. 根据个人站点的信息编辑`_config.yml`文件.
  5. 删除`_posts`目录下的样例文章.
  6. 关于更详细的定制, 请阅读以下文档.

---

+ #####__针对已有Jekyll站点的设置__

  1. 替换站点中的以下目录: `_includes`, `_layouts`, `assets`.
  2. 根据需求编辑如下文件: `about.md`, `archives.html`, `index.html`, `tags.html`.
  3. 根据需求编辑`_config.yml`文件.

---

####<span class="label label-info">Simple Better主题详解</span>

+ #####__目录结构__

{% highlight bash %}
simple-better-theme/
├── _includes/
|    ├── browser_tip.html         #浏览器升级提示(<IE10)
|    ├── disqus_comments.html     #Disqus插件
|    ├── footer.html              #页脚
|    ├── head.html                #页头
|    ├── image_show.html          #显示Page图片
|    ├── logo_show.html           #显示Logo图片
|    ├── navigator.html           #导航栏
|    ├── partials.html            #包含navigator,browser_tip,search,logo_show
|    ├── post_info.html           #Post的基本信息
|    ├── search.html              #search插件
|    └── scripts.html             #脚本:bootstrap,jquery,search...
├── _layouts/
|    ├── page.html                #页面布局
|    └── post.html                #文章布局
├── _posts/                       #文章
├── assets/
|    ├── css/                     #css样式
|    ├── images/                  #图片资源
|    ├── js/                      #search,navigator的js文件
|    |   ├── jekyll-search.js
|    |   └── navigator.js
├── 404.md                        #'404'页面
├── _config.yml                   #Jekyll站点配置文件
├── about.md                      #'关于'页面
├── archives.html                 #按日期归档页面
├── favicon.ico                   #favicon图标
├── feed.xml                      #feed文件
├── index.html                    #首页,附有分页功能
├── search.json                   #用于search的JSON数据
├── shawzt.png                    #Author头像
├── site-logo.png                 #Logo图标
└── tags.html                     #标签页面
{% endhighlight %}

+ #####__配置文件_config.yml__
{% highlight yaml %}
title:            站点名称
description:      站点描述
logo:             site-logo.png
theme:            https://github.com/shawzt/simple-better-theme/
# 站点domain. 本地运行时，请保留现有设置.
# PS:设置不正确,将导致站点无法正常工作.
url:              http://localhost:4000

# 作者信息
owner:
  name:           your-name
  avatar:         your-photo.jpg
  email:          your@email.com
  # 用于页脚的社交账号,根据个人需求更新.
  # 名称需要和 http://fortawesome.github.io/Font-Awesome/icons/上的图标名称一致
  # 以确保图标的正常显示
  socials:
    - name: twitter
      url:  https://twitter.com/shawzt
    - name: github
      url:  https://github.com/shawzt
    - name: google-plus
      url:  https://plus.google.com/+ShawZTProo

# 站点分析工具
google_analytics:
  enable: true/false
  id:     媒体资源的跟踪ID
  res:    跟踪ID对应的默认网址

# Disqus评论插件
disqus_shortname: logsomething

# 启用search功能
search:           true
# 启用feed功能
feed:             true

# 页眉的导航项
# PS:外部链接,需要添加external: true
links:
  - title: About
    url: /about
  - title: Archives
    url: /archives
  - title: GitHub
    url: http://github.com/shawzt
    external: true

timezone:    Asia/Shanghai
future:      true
highlighter: pygments
markdown:    kramdown

# 链接样式 
permalink:   none

# 插件
# 参考https://help.github.com/articles/using-jekyll-plugins-with-github-pages/
gems:
  - jemoji
  - jekyll-sitemap

kramdown:
  input: GFM
  auto_ids:      true
  footnote_nr:   1
  entity_output: as_char
  toc_levels:    1..6
  smart_quotes:  lsquo,rsquo,ldquo,rdquo
  use_coderay:   false

  coderay:
    coderay_wrap:              div
    coderay_line_numbers:      inline
    coderay_line_number_start: 1
    coderay_tab_width:         4
    coderay_bold_every:        10
    coderay_css:               style
{% endhighlight %}

`_config.yml`文件中的变量会在.html文件中使用,可以根据自己的需求进行更新.站点内部的链接均以`{{ "{{ site.url " }}}}`为前缀,所以在本地测试时请确保`_config.yml`中变量`url`值为`http://localhost:4000`, 否则将导致资源无法加载.
**`Push至github时请替换成`username.github.io`，否则站点可能无法正常工作.`**

---

####<span class="label label-info">特色图片</span>

Simple Better主题有两种主要的布局: 用于博文的`post.html`和用于页面的`page.html`.两种样式的布局均支持插入特色图片,让页面不再单调.若需要使用特色图片功能,请将图片资源放入`assets/images`目录下,同时在博文或页面的头部配置项中添加如下信息:
{% highlight yaml %}
image:
  file:  image-name.jpg
  author:   author-name
  link:     image-link 
{% endhighlight %}

---

####<span class="label label-info">添加视频</span>

借助[FitVids](http://fitvidsjs.com/),可在博文/页面中加入响应式视频媒体.代码如下:
{% highlight html %}
<iframe width="560" height="315" src="http://www.youtube.com/embed/PWf4WUoMXwg" frameborder="0"> </iframe>
{% endhighlight %}
<span class="label label-warning">提示: 为了视频的正常工作,请在`<iframe>`标签之间添加一个空格且移除`allowfullscreen`属性.</span>

---

####<span class="label label-info">检索</span>

在`_config.yml`中添加以下信息,开启检索功能:
{% highlight yaml %}
search: true
{% endhighlight %}

<figure>
  <img src="{{ site.url }}/assets/images/search-demo.png" alt="search screenshot">
  <span class="label label-success">点击导航栏中的'SEARCH',按文章名进行全站检索.</span>
</figure>

---

####<span class="label label-info">社交分享</span>

在头部配置项中添加以下信息,即可以开启分享社交功能,如Twitter、Google+:
`代码在post_info.html中line:35-48`
{% highlight yaml %}
share: true
{% endhighlight %}

---

####<span class="label label-info">Disqus评论</span>

  1.创建[Disqus](http://disqus.com)账号   
  2.将`_config.yml`中`disqus_shortname`修改为你Disqus账号信息中的*shortname*.   
  3.在post的头部配置项中添加以下信息，可开启评论功能:
  {% highlight yaml %}
  comments: true
  {% endhighlight %}

---

####<span class="label label-info">Google Analytics</span>

  1.创建[Google Analytics](https://www.google.com/analytics/)账号   
  2.将`_config.yml`中`google_analytics_id`修改为你Google Analytics对应的媒体资源的跟踪ID   
  3.将google_analytics_res修改为你Google Analytics中与上述跟踪ID对应的默认网址.<span class="label label-warning">ps:去除https:// 或 http://</span>    
  4.这些信息会在Google Analytics的跟踪代码中使用.<span class="label label-warning">跟踪代码见`_includes/scripts.html</span>   
  5.配置成功,便可以使用Google Analytics跟踪分析站点的访问数据了.

---

####<span class="label label-info">许可说明</span>

+ This theme is free and open source.
+ Feel free to to modify this theme to suit your needs.
+ Sound pretty sweet to give me credit on your site [@shawzt](https://github.com/shawzt/simple-better-theme/).

---

####<span class="label label-info">问题?</span>

如果你在使用本主题过程中,遇到什么问题或想咨询相关信息,欢迎留言

---
