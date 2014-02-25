---
featured-image: ""
title: 2% Of Web Developers Order CSS Like Me
subtitle: (by line length)
categories:
  - code
summary: >
  A poll taken on CSS Tricks showed that
  only 2% of people order CSS properties
  by line length, like I do. Let me
  explain why I prefer to do it this way.
seo-keywords: "css, properties, poll, 2%, order, code, preference, grouped by type, grouped by line length"
seo-description: >
  A poll taken on CSS Tricks showed that
  only 2% of people order CSS properties
  by line length, like I do. Let me
  explain why I prefer to do it this way.
---
<p>
          In 2012 Chris Coyier posted the results of <a href="http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/">a poll on css-tricks.com</a>, in which he asked readers how they prefer to order their CSS properties.
</p>
<p>
          The results were:
</p>
<p>
   <img src="/_themes/mattsoria/img/blog/orgchart.png" alt="39% Randomly, 45% Grouped By Type, 2% By Line Length, 14% Alphabetical">
</p>
<p>
   I was really surprised by these results, as I found myself in the 2% that order their CSS properties by line length. I don't think any one of these techniques is invalid, or necessarily better than any other, but I'm really happy with ordering them by line length, and was just surprised that more people that read CSS Tricks didn't feel the same way!
</p>
<p>
   The main reason I order my CSS properties by line length is for ease of reading. I find that when I have properties ordered by line length, from shortest to longest, it is easier for me digest the information as I scroll through a stylesheet. It's weird because in most other areas in my life I don't feel a need to have things to be in a very neat, proper order, despite being a designer, but in my CSS I really like to try and have thing be as neat and readable as possible.
</p>
<p>
   Here is an example of a stylesheet from my site ordered by type:
</p>
<pre class="language-css">
  <code>
.post_content {
  margin: 0 auto;
  max-width: 800px;
  color: $black;
  font-family: $serif;
  h3 {
    margin: 2rem 0 1rem;
    color: $black;
    font-size: $med;
    font-family: $sans;
  }
  h4, h5, h6 {
    margin-bottom: 1rem;
    color: $dark;
    font-size: $mid;
    line-height: 1.5;
  }
  ul {
    padding-left: 1rem;
    li {
      list-style-type: disc;
    }
  }
  ol {
    padding-left: 1.5rem;
  }
  img {
    margin: 1rem auto;
  }    
  a {
    @include transition(text-shadow 0.3s ease 0s);
    position: relative;
    color: $black;
    text-decoration: underline;
    white-space: nowrap;
    &:hover, &:active, &:focus {
      @include text-shadow(1px 1px $base);
    }
  }
  blockquote {
    @include text-shadow(1px 1px rgba(255,255,255,0.25));
    margin: 2rem 0;
    padding: 0.5rem 2rem;
    width: 100%;
    border-left: 6px solid $black;
    background: $base;
    color: $black;
    font-style: italic;
    p {
      display: inline;
      font-size: $mid;
    }
    footer {
      cite {
        font-size: $small;
      }
    }
  }
  pre {
    margin: 2rem 0;
  }
  .post_image {
    margin-bottom: 1rem;
    img {
      margin: 0;
    }
    figcaption {
      padding: 0.25rem 0.5rem;
      background: rgba(0,0,0,0.05);
      color: $darkGray;
    }
  }
}
  </code>
</pre>
<p>
  As you can see the properties are ordered by type, so that properties relating to positioning are grouped together; properties relating to size are grouped together; properties relating to type treatment are grouped together; etc. This is fine, but what I don't like about it is that makes me have to think more about that order, and make decisions on how to order the groups as well as the properties within those groups (though you could use something like <a href="http://csscomb.com/">CSScomb</a> to sort your CSS with a keystroke, and help make those decisions for you).
</p>
<p>
  Here is the same code ordered by line length:
</p>
<pre class="language-css">
<code>
.post_content {
  color: $black;
  margin: 0 auto;
  max-width: 800px;
  font-family: $serif;
  h3 {
    color: $black;
    font-size: $med;
    font-family: $sans;
    margin: 2rem 0 1rem;
  }
  h4, h5, h6 {
    color: $dark;
    font-size: $mid;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  ul {
    padding-left: 1rem;
    li {
      list-style-type: disc;
    }
  }
  ol {
    padding-left: 1.5rem;
  }
  img {
    margin: 1rem auto;
  }    
  a {
    color: $black;
    position: relative;
    white-space: nowrap;
    text-decoration: underline;
    @include transition(text-shadow 0.3s ease 0s);
    &:hover, &:active, &:focus {
      @include text-shadow(1px 1px $base);
    }
  }
  blockquote {
    width: 100%;
    color: $black;
    margin: 2rem 0;
    background: $base;
    font-style: italic;
    padding: 0.5rem 2rem;
    border-left: 6px solid $black;
    @include text-shadow(1px 1px rgba(255,255,255,0.25));
    p {
      display: inline;
      font-size: $mid;
    }
    footer {
      cite {
        font-size: $small;
      }
    }
  }
  pre {
    margin: 2rem 0;
  }
  .post_image {
    margin-bottom: 1rem;
    img {
      margin: 0;
    }
    figcaption {
      color: $darkGray;
      padding: 0.25rem 0.5rem;
      background: rgba(0,0,0,0.05);
    }
  }
}
</code>
</pre>
<p>
  Ah...that's much better. It's visually much more organized, and easier to scan going down the page. What I like about this method besides its visual appeal is that it takes out a lot of decision making when coding. I don't have to think about what property it is that I'm trying to sort and where it should be grouped, and what letter it begins with - the longest line is the longest line. That's it! I don't find that having the properties in basically a random order in terms of what they relate to creates any challenge either - for example the <code class="language-css">.featured_image</code> class has its <code class="language-css">height</code> declared at the top of the property list, and its <code class="language-css">width</code> declared at the bottom. It does make sense to have those two properties next to each other, but I rarely have classes with more than ten or so properties declared, and scanning those lists for the property I'm looking for takes hardly a second.
</p>
<p>
  The one gray area might be when you put a comment after a property, which I do sometimes to explain something weird, or to give a little background. I've made the decision to <em>not</em> include comments as part of the line length.<br /> Here's what I mean:
</p>
<pre class="language-css">
  <code>
.selector {
  color: #444;
  width: 100%; // full-width baby!
  font-size: 2rem;
  background: #fff;
}
</code>
</pre>
<p>
  In the example above the <code class="language-css">width</code> property has a comment after it, making its line appear to be the longest, but I ignore comments when considering line length, so the <code class="language-css">width</code> property gets placed in between <code class="language-css">color</code> and <code class="language-css">font-size</code>. I do this because visually the comment gets grayed-out, and it makes sense to ignore it visually, but also because the comment might be a temporary note that gets removed later, and then I don't have to move the property around if that happens.
</p>
<p>
  Something as mundane as how you order your CSS is absolutely personal preference, and any of the other methods are completely valid, and have their own merits. This is just the way I like to do it, and wondered why more people don't (based on the poll). 
</p>
<p>
  If anyone can share with me the way they like to order their CSS properties, and why (or why you think the way I do it sucks, and there's a reason I'm in the 2%), leave a comment or <a href="mailto:contact@mattsoria.com">email me</a> - I'd love to read about it!
</p>