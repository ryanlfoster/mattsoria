---
title: A New Year, a New Site
subtitle: a long-overdue re-design
categories:
  - code
summary: '2013 was a huge year, filled with risks  and changes, and I (almost) finished it off by finally re-designing my site.'
featured-image: ""
seo-title: New Year, New Site
seo-keywords: >
  statamic, re-design, picturefill,
  process, review, rebuild
seo-description: '2013 was a huge year, filled with risks  and changes, and I (almost) finished it off by finally re-designing my site.'
---
<h4><strong>2013 was a monumental year for me.</strong></h4>
<h4> I began working in web design full-time, got in my first car accident, quit my full-time job, started working remotely, and I moved to Chile with my girlfriend.</h4>
<p>
	                   I feel good about the past year because I took a lot of risks, and despite all of the worrying and second guessing, everything turned out really well! I tried a ton of new things, both personally and professionally, and I achieved a lot of my goals. But one thing escaped me yet again: re-designing my website.
</p>
<p>
	                   Another year passed without getting a new site done. I attempted a couple of times earlier in the year, but extreme indecisiveness and a hectic schedule got the best of me. If there's a lesson I learned (or re-learned perhaps), it's that <strong>designing for yourself is hard</strong>. <em>Really</em> hard. Especially when you are already working full-time. Every decision can turn into a great debate, and decisions you made confidently early on in the process suddenly seem insane or nonsensical later. It's maddening. One day while listening to an episode of <a href="http://www.thefreelanceweb.com"><em>The Freelance Web</em></a>, I heard Liz Elcoate talking about working on your own site, and how she found that if she gave herself a deadline, it was much easier to sit down and make it happen. Something about just hearing another person verbalize that really motivated me to take the same approach, and finally get the job done, so I told myself right then, <strong>"you have until the end of the year."</strong>
</p>
<p>
	                   Today is January 18th, so clearly I failed to meet that deadline, <strong>but</strong> I still got it done. I actually started writing this post at about 3:30 AM on January 1st, thinking that I was actually going to be able to finish it on time. But I had to wake up at 5 AM that morning to catch a bus to the airport to fly to Peru to <a href="http://permisovalparaiso.com/camino-inca-day-1/" target="_blank">hike to Machu Picchu</a>, so I opted for the hour of sleep. Of course, after spending 10 days away from my computer, I returned home only to realize that there were still a handful of major tasks to be completed before I could feel comfortable pushing the site live. To get it done I started waking up every day at 4:30 AM to get a few hours of work in on it before starting my actual work day (I <em>am</em> actually a morning person), and I'm quite pleased for now.
</p>
<h3>  The Process</h3>
<p>
	                   Throughout the past year I did about a dozen or so sketches and half-started photoshop documents, never really getting very far, and always getting stuck on details like a logo or colors. After some time I finally realized that <strong>no design is going to be perfect - period.</strong> After coming to terms with that fact, designing became a lot easier. I started caring less about a shiny final product, and more about the process I took to get there. I did a few rough sketches in my notebook that didn't bother much with details and just got the basic layout of content across.
</p>
<p style="text-align: center;">
	<img src="/_themes/mattsoria/img/blog/site_sketch.jpg">
</p>
<p>
	         It doesn't even really look like much to go off of, but it was enough to get started - so I did.
</p>
<p>
	                   Early on I decided I wanted to try to build the site for <a href="http://statamic.com/">Statamic</a>,  a dynamic static site generator (with a control panel UI too) that I  came across months ago while researching alternatives to using Wordpress  as a CMS for a client project. I debated for a while between using  Statamic and <a href="http://www.getkirby.com">Kirby</a>, but after some  feedback, and and overwhelming loud and helpful response from the  Statamic community and its creators, I decided to give it a try, and  bought a license immediately. Several months later I finally got to try  it out (. I started <a href="https://news.layervault.com/stories/11295-ask-dn-whats-your-process-for-designing-in-the-browser-for-a-cmsframework">a discussion</a>, and asked some friends and colleagues  about whether or not I should start coding the site directly into the  template system, or just begin in flat HTML files first, and for some  reason I decided to go the HTML route - but after getting to know Statamic, I think it's simple enough to start off coding directly into it. I coded up the basic structure of the site,  and then broke up the files into templates and partials for Statamic,  and finished off the detail work there - working locally.
</p>
<p>
	        I coded the site using <a href="http://www.sass-lang.com">Sass</a> with <a href="http://www.compass-style.org">Compass</a>, which I have been using on almost all of my projects lately. I wrote the responsive code from the smallest screen size up ("mobile first"), using <a href="http://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/"><strong>REM units</strong></a> for handling font sizes and some spacing to make adapting layouts at different breakpoints easier.
</p>
<p>
	        About halfway through the process I decided to try out <a href="http://gruntjs.com/"><strong>Grunt.js</strong></a> after reading <a href="http://24ways.org/2013/grunt-is-not-weird-and-hard/">Chris Coyier's post on 24 Ways</a> about how to get started with it, so I am using it to run a couple simple tasks like concatenating the  javascript files, and compressing images. It's capable of a lot more that I'd like to try out, but for now I'm really happy with how it helps my workflow.
</p>
<p>
	        While designing for the details of the site I struggled with finding a balance between my own personality, and the conventions of modern design. I think it's hard to design without feeling the pressures to conform with the popular trends of the day - being super clean, and minimal. One thing that has been constant throughout my designs, dating back even to when I was making sites as a kid with Yahoo Geocities, is the element of the hand-made, or hand-written. I've always dug the visual and conceptual contrast between that and the non-physical thing that you are actually making when you create a website. So to stay true to that I decided to create a hand-written "mark" for the header. I played around with some sketches, and was inspired by a local graffiti artist named <strong>Vómito</strong>, who is absolutely <strong>everywhere</strong> in Valparaiso, who adds an extra "hump" in the "M" of his name.
</p>
<p>
	<img src="/_themes/mattsoria/img/blog/vomito.jpg">
</p>
<p>
	        So I stole it. I sketched out my own name with an extra hump in the "M". I did this a few months ago, but I adapted it for the re-design, and trying to be efficient and semantic, I created a font out of it using <a href="http://www.icomoon.io">IcoMoon.io</a> (which is an awesome web app that I highly recommend for icon font needs). I mapped each character to its corresponding letter, so that the "M" is actually the letter M. The problem using this method was that I have two "A"s and two "T"s in my name. I settled for mapping one to the lowercase character, and one to the uppercase character, so that if you look at the source code it actually reads "matT soriA." The upside of this is that it Screen readers will read it properly, it's semantic (right?), and I didn't have to use an image. The downside is that if for some reason the custom font fails to load, it's going to look a bit goofy.
</p>
<p>
	<img src="/_themes/mattsoria/img/blog/mmmatt-soria-header.jpg">
</p>
<p>
	        I also included a few other UI icons in the custom font - like arrows and the social media icons in the footer. For these icons I used a technique to help with screen readers that I borrowed from <a href="http://daverupert.com/">Dave Rupert's site</a>, that looks like this:
</p>
<pre class="language-markup">
<code>
&lt;li&gt;
  &lt;a aria-hidden="true" href="http://www.twitter.com/poopsplat"&gt;
  	&lt;i class="icon-twitter"&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;span class="screen-reader-text"&gt;twitter profile&lt;/span&gt;
&lt;/li&gt;
</code>
</pre>
<p>
	        For the project detail pages listed under the Work section I wanted to simply show some screenshots of the project and write about my involvement in it, but I wanted a way to show the responsiveness at the same time. At first I considered a GIF to show the browser resizing, but really didn't like the idea of something on a constant loop while you're trying to read about it, and the file size would suck. I ended up using a responsive image solution to do the trick, in this case, Scott Jehl's <a href="https://github.com/scottjehl/picturefill">Picturefill</a>. I saved a different screenshot for three (rough) breakpoint sizes, so that if you are viewing the project page on a small screen, you'll be seeing a screenshot of the small-screen version of the site; if viewing it on a large screen you'll be seeing a screenshot of the large-screen version of the site (<a href="http://work/ryan-duggan">try it out</a>). Maybe it's just web-nerdery, or maybe it's not even that and it's just me, but I found it satisfying to be using a responsive image solution to help visualize my solutions to responsive design. I think I could get a lot fancier with how I showcase these projects, and I might, but for this first iteration of the site I just wanted to get something up.
</p>
<p>
	<img src="/_themes/mattsoria/img/blog/picturefill.jpg">
</p>
<p>
	        For the images on the <strong>Play</strong> page I employed the use of the <a href="http://www.appelsiini.net/projects/lazyload">Lazy Load Plugin for jQuery</a> to help with page load time. It delays the loading of the image files until the image scrolls into view. This was a great help for this page, since it is very image-heavy.
</p>
<p>
	<img src="/_themes/mattsoria/img/blog/lazy-loader.jpg">
</p>
<p>
	        Throughout the whole time that I was working on the site, I kept changing the color theme. I couldn't make up my mind, and every time I settled on some colors my satisfaction would only last a few days. After looking through <a href="http://www.birkajazz.com/archive/bluenote4000.htm">collections of old Blue Note jazz records</a>  (most of them designed by Reid Miles) for inspiration, I finally decided on the  current colors. I loved the simplicity of this style - usually a black and white image with a single highlight color. I chose a very dark shade of blue-green for the black, and based on the faded white of the old record sleeves, I chose a light color. I chose a gold yellow for the highlight color, and I'm still not completely satisfied with it, but I'm  considering switching the color theme up on a regular basis (any thoughts on that  idea?).
</p>
<p style="text-align: center;">
	 <img src="http://mattsoria.com/_themes/mattsoria/img/blog/budpowell.jpg" alt="Bud Powell">
</p>
<h3>Still to do</h3>
<p>
	        I wanted to push the site live as soon as it was working well enough to serve its purpose, but there are still some things I'd like to do before I feel completely satisfied:
</p>
<ul>
	<li>Create a pattern library</li>
	<li>Revise the layout for the footer content</li>
	<li>Come up with a good solution to showing some content on the <strong>Play</strong> page without loading a ton of unnecessary image files</li>
	<li>Add search, categories, and archive options to the <strong>Blog</strong> page</li>
	<li>Write some proper copy for the <strong>About</strong> page</li>
	<li>Write more thorough case studies for the work projects</li>
</ul>
<h3>Review</h3>
<p>
	                   This is (as far as I can remember), the <strong>sixth</strong>  design of my site. I've been building and rebuilding my site since  2008, but approaching this re-design was challenging in that it would be  the first time I was designing the site with the intention of  showcasing my work as a web designer. All of my previous designs were  created solely to showcase my work as a photographer and artist. I think  I've come a long way in that time, and feeling nostalgic, I dug up this  gem from 2010 - a final project I created in Dreamweaver for my senior web class, taking that hand-made aesthetic quite literally:
</p>
<p style="text-align: center;">
	<img src="http://mattsoria.com/_themes/mattsoria/img/blog/mysite-2010.jpg" alt="">
</p>
<p>
	                   Overall I'm very happy with this re-design. It's by far the most thorough, and well-done re-design I've done, and I employed the use of a lot of new tools and techniques. Besides these technical things that I learned about, I also learned to let go of perfection and to value the process over the outcome. The beauty of having your own site is that you can continuously improve upon it, and it can grow with your needs - because there isn't any client or employer involved! Based on the past year it's optimistic to think that I will actually continuously work on the site, but I've started out by making it  much easier to do so by creating a well-organized code structure on top  of an easy-to-adapt templating system.
</p>
<h4><strong> </strong> </h4>
<p>
	                    All that being said, I think there is a ton of room for improvement, and I would love to get some feedback from everyone - so if you have any thoughts or critiques, please feel free to leave a comment on this post, send me an email at <a href="mailto:contact@mattsoria.com?hello%20matt!">contact@mattsoria.com</a>, or publicly degrade me on twitter <a href="https://twitter.com/poopsplat">@poopsplat</a>. I have also put <a href="https://github.com/poopsplat/mattsoria">the code up on Github</a>, so you can inspect it further there, and if you're a true saint, you can even open an issue if you find a bug, or suggestion for improvement.
</p>
<p>
	        It is my hope that this site can also serve as a place for me to share my experiences and learning with the web industry, and other people that are getting started out that might benefit from the mistakes I've made, and the things I've learned. I think I've benefited the most by reading other web folks' blogs, and hearing about their own experiences and thought processes, so I would love to be able to pay it forward to someone else.
</p>
<h4>Thank you, and I wish you the best of luck for 2014.</h4>