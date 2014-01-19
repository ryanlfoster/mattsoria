---
title: A New year, a new site
subtitle: a long-overdue re-design
categories:
  - code
summary: '2013 was a huge year, filled with risks  and changes, and I (almost) finished it  off by finally re-designing my site.'
featured-image: ""
---
<h4><strong>2013 was a monumental year for me.</strong></h4>
<h4> I began working in web design full-time, got in my first car accident, quit my full-time job, started working remotely, and I moved to Chile with my girlfriend.</h4>
<p>
	         I feel good about the past year because I took a lot of risks, and despite all of the worrying and second guessing, everything turned out really well! I tried a ton of new things, both personally and professional, and I achieved a lot of goals. But one thing escaped me yet again: re-designing my website.
</p>
<p>
	         Another year passed without getting a new site done. I attempted a couple of times earlier in the year, but extreme indecisiveness and a hectic schedule got the best of me. If there's a lesson I learned (or re-learned perhaps), it's that <strong>designing for yourself is hard</strong>. <em>Really</em> hard. Especially when you are already working full-time. Every decision can turn into a great debate, and decisions you made confidently early on in the process suddenly seem insane or nonsensical later. It's maddening.
</p>
<p>
	         As December came around, and the end of the year drew nearer, the guilt of neglecting to take time to work on my own set in. Despite my previous statements, I actually really love working on my own sites - it's a blank canvas, and a great challenge. Finally, while listening to an episode of <a href="http://www.thefreelanceweb.com"><em>The Freelance Web</em></a>, Liz Elcoate brought up the subject of working on your own site, and how she found if she gave herself a deadline, it was much easier to site down and make it happen. Something about just hearing another person verbalize that really motivated me to take the same approach, and finally get the job done. So I told myself right then, <strong>"you have until the end of the year."</strong>
</p>
<p>
	         Today is January 18th, so clearly I failed to meet that deadline, <strong>but</strong> I still got it done. I actually started writing this post at about 3:30 AM on January 1st, thinking that I was actually going to be able to finish on time. But we had to wake up at 5 AM that morning to catch a bus to the airport to fly to Peru for a 10-day vacation, so I opted for the hour of sleep. Of course, after spending 10 days away from my computer, I returned home only to recognize that there were still a handful of major tasks to be completed before I could feel comfortable pushing the site live. To get it done I started waking up every day at 4:30 AM to get a few hours of work in on it before starting my actual work day (I <em>am</em> actually a morning person).
</p>
<h3>  The Process</h3>
<p>
	         After who knows how many crumpled up sketches, and half-started photoshop documents, I finally came to this realization:
</p>
<h4>No design is going to be perfect, or complete. <strong>Period.</strong> </h4>
<p>
	       After coming to terms with that fact, designing became a lot easier. I started to care less about the final product, and more about the experience of building it. I sketched up a simple mobile-first layout, and started coding right away. I still struggled to make some design desicions, and could not make up my mind on a color system, but after looking through <a href="http://www.birkajazz.com/archive/bluenote4000.htm">collections of old Blue Note jazz records</a> (most of them designed by Reid Miles) for inspiration, I decided on the current colors. I'm still not completely satisfied, and I'm even considering switching them up on a regular basis (any thoughts on that idea?).
</p>
<div class="post_image" style="text-align: center;">
	 <img src="/_themes/mattsoria/img/blog/budpowell.jpg" alt="Bud Powell">
	 <figcaption>An example of a typical color theme found on old jazz record album covers: a black(ish), a faded white, and a single highlight color like a yellow or green.</figcaption>
</div>
<p>
	         This is (as far as I can remember), the <strong>sixth</strong> design of my site. I've been building and rebuilding my site since 2008, but approaching this re-design was challenging in that it would be the first time I was designing the site with the intention of showcasing my work as a web designer. All of my previous designs were created solely to showcase my work as a photographer and artist. I think I've come a long way in that time, and feeling nostalgic, I dug up this gem from 2010 (which you can see in full at <a href="http://www.mattsoria.com/2010">mattsoria.com/2010</a>):
</p>
<p style="text-align: center;">
	<img src="/_themes/mattsoria/img/blog/mysite-2010.jpg" alt="">
</p>
<p>
	          I wanted this site to also serve as a place for me to share my experiences and learning with the web industry, and other people getting started out that might benefit from the mistakes I've made. Having worked remotely for a while now, while living abroad, I also hope to shed some light on that process, and get some input from other people in similar situations.
</p>
<p>
	         Early on I decided I wanted to try to build the site for <a href="http://statamic.com/">Statamic</a>, a dynamic static site generator (with a control panel UI too) that I came across months ago while researching alternatives to using Wordpress as a CMS for a client project. I debated for a while between using Statamic and <a href="http://www.getkirby.com">Kirby</a>, but after some feedback, and and overwhelming loud and helpful response from the Statamic community and its creators, I decided to give it a try, and bought a license immediately. Several months later I finally got to try it out, and after completing my first project with it I have to say that I am extremely pleased, and can't wait to do more projects with it! The <a href="http://statamic.github.io/statamic-cheat-sheet/">syntax</a> is really easy to understand, and the file structure is really straight-forward. I might write a separate post that goes into more detail about Statamic, but for now I'll just say that <strong>I highly recommend it</strong>.
</p>
<p>
	         I started <a href="https://news.layervault.com/stories/11295-ask-dn-whats-your-process-for-designing-in-the-browser-for-a-cmsframework">a discussion</a> about whether or not I should start coding the site directly into the template system, or begin in just flat html files first, and for some reason I decided to go the HTML route - but now that I know how simple the structure is, I realize there's really no need to. It would have been just as easy, and would have saved time, to just code right into the Statamic system right of the bat. I coded up the bulk of the site, and then broke up the files into templates and partials for Statamic, and finished off the detail work there.
</p>
<p>
	         Besides using Statamic, I employed the use of a few other new tools, like using <a href="http://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/"><strong>REM units</strong></a><strong></strong> for font sizing and some spacial definitions, and after reading <a href="http://24ways.org/2013/grunt-is-not-weird-and-hard/">Chris Coyier's post on 24 Ways</a> about getting started with <a href="http://gruntjs.com/"><strong>Grunt.js</strong></a>, I decided to use it for a couple simple tasks, like concatenating the javascript files, and compressing images. I also just tried to write the cleanest, leanest, and most organized code I ever have.
</p>
<p>
	         Aside from learning some new coding tricks, and trying out new approaches, I also just learned to let go of perfection, and to let my own site be a source of constant growth. I am pushing this site live knowing that there are still some things that need some work, and other things that might need to be reconsidered altogether - <em>but that's okay</em>! I've decided that with my own site it doesn't <em>need</em> to be perfect, and I can continue to work on it and change it as often as I like. It's optimistic to believe that I will continue to work on the site throughout this next year, but I've started out by making it much easier to do so by creating a well-organized code structure on top of an easy templating system.
</p>
<h3>   Critique and confidence</h3>
<p>
	      I am putting this site up, and publishing this post, in a semi-nervous state. I'm nervous because I haven't subjected myself to much critique by my peers since the photography and art courses I took in college. But at the same time I remind myself that if there is only a single thing I'm confident about in this industry, it's this:
</p>
<h4>I'm completely confident that I don't know all there is to know about any of what I'm doing, and I'm confident that I will always be open to learning a better way to do something. </h4>
<p>
	      In this way, even with a limited amount of knowledge and experience, I feel that I have an advantage over anyone who thinks they are an expert in this field of ever-changing technology. I don't ever want to assume I know all there is to know - about anything.
</p>
<p>
	         I'm constantly learning, and I hope for this site to be a source of growth and discussion for myself and anyone else.   And on that note I hope that anyone reading this will  offer their thoughts, criticisms, or guidance on the design or code. I've put the code up in a <a href="https://github.com/poopsplat/mattsoria">public Github repository</a>, so feel free to check that out too.
</p>
<h4>   Happy New Year, and thank you.</h4>