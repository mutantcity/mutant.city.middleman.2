# mutant.city.middleman
Middleman version of mutant.city


### Setup
1. ``` npm install ```
2. ``` bundle install ```

### Development
3. Run the middleman watcher:  ``` middleman ```
4. Run the webpack watcher: ``` webpack-cli ```
  * note: the webpack compiles main.js and main.css to bundle.js and bundle.css



### Notes
* use article.summary(250) if you have Nokogiri available to show just the first 250 characters or article.body to show full

### To do
* Only let Nokogiri show the (more...) if there is actually more
* enable anonymous comments/clean up that disqus clutter
* QA on mobile
