---

title: Code Quality, Mysticism or Science? or Both?
date: 2018-04-19 02:59 UTC
tags: example
image: https://drive.google.com/uc?id=1et7kJYa10HpafhegL9f_2ualUTkkJGyz
author: Nick

---


We learn a lot in school about algorithms, problem solving, complex systems, OOP and functional languages.  But what about the basic foundations of how to write “good” code?

Working code is only part of the puzzle: maintenance, readability, extensibility, portability, and other factors are all involved in writing good code.

A quick google will give you a lot of articles online that have the Buzzfeed style: “9 ways to improve your code!”

But what do we do that actually makes our code ‘good code’?
Is it mysticism and superstition and we just know it by instinct? Or are there scientific and engineering based laws of what makes ‘good code’ and therefore objective rules on how to craft it?

In this article series I will attempt to elucidate what makes ‘good code’, all the factors that are entailed, and describe objective laws developers can use in their daily work to write good, or at least better, code.  And do this with examples and, hopefully, grounded in as much scientific rigor as is possible… for a subject like this.


Future articles:

Evil dirty things: cyclomatic complexity, large functions, state, side effects, and other treacherous code styles
Premature Optimization is the root of all evil: performance bottlenecks are only on a tiny fraction of the codebase, why not make it readable instead?
Theory of good code: Good code is simply code that reduces employees time spent on a task.
THIS INCLUDES DEVELOPERS: Code maintenance is definitely a task.
Resources: Code complete, Clean code book,  Sandi Metz
Code Quality Automation Tools:  Sonar, Code formatting, etc.
Overall elucidation of principles and methods for writing clean code


<div id="disqus_thread"></div>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT
     *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR
     *  PLATFORM OR CMS.
     *
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
     *  https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
        // Replace PAGE_URL with your page's canonical URL variable
        this.page.url = ';

        // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        this.page.identifier = PAGE_IDENTIFIER;
    };
    */

    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement('script');

        // IMPORTANT: Replace EXAMPLE with your forum shortname!
        s.src = 'https://mutant-city.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>
    Please enable JavaScript to view the
    <a href="https://disqus.com/?ref_noscript" rel="nofollow">
        comments powered by Disqus.
    </a>
</noscript>