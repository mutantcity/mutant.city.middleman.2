// webpack.config.js
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './source/assets/javascripts/main.js',
    output: {
        path: path.resolve(__dirname, 'source/assets/javascripts/'),
        filename: 'bundle.js',
    },
    watch: true,
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }],
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'TweenLite': 'gsap/src/minified/TweenLite.min.js',
            'TweenMax': 'gsap/src/minified/TweenMax.min.js',
            'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
            'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
            'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
            'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
        }
    },
    plugins: [
        new ExtractTextPlugin("../stylesheets/bundle.css")
    ]
};
