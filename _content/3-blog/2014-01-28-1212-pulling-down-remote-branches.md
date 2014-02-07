---
title: How to Pull Down a Feature Branch to Work on in Git
subtitle: 
categories:
  - github
summary: 'Every time I need to do this I have to google it, so I'm sharing the answer, and committing it to memory.'
featured-image: ""
---
<p>I wanted to archive this on my blog because it's something I don't do every day, but every couple weeks or so I need to, and every time I need to do it I have to google it.</p>
<p>So you are working on a github repo collaboratively, and a co-worker or friend creates a new branch to work on a feature, and you need to do some work on it. So how do you pull it down to work on locally?</p>
<pre class="language-markup"><code>git checkout --track origin/the-feature-branch-you-need-to-work-on</code></pre>
<p><strong>That's how.</strong></p>
<p>It will pull down the remote branch, create a new local branch with the same name, and switch you to that branch.
Perfect!</p>
<p><strong><em>But...</em></strong>
Sometimes I get the following error message:</p>
<pre class="language-markup"><code>
fatal: Cannot update paths and switch to branch 'the-feature-branch-you-need-to-work-on' at the same time.
Did you intend to checkout 'origin/the-feature-branch-you-need-to-work-on' which can not be resolved as commit?
</code></pre>
<p>In this case you should be able to just fetch all of the remote branches from the repo with <code class="language-markup">git fetch origin</code>, and then create a new working branch that is set to track the origin of the feature branch you need to work on:</p>
<pre class="language-markup"><code>
git checkout -b feature-branch-work origin/the-feature-branch-you-need-to-work-on
</code></pre>
<p>To break it down, <code class="language-markup">git checkout -b feature-branch-work</code> will create a new local branch and switch to it, and <code class="language-markup">origin/the-feature-branch-you-need-to-work-on</code> will set its origin to the remote feature branch.</p>
<p>After that you are free to work on the feature branch locally! When you're finished you can commit your changes, and push them back up to the remote branch with <code class="language-markup">git push origin the-feature-branch-you-need-to-work-on</code>.</p>
<p>Read more about working with remote branches at <a href="http://git-scm.com/book/ch3-5.html">git-scm.com</a></p>
