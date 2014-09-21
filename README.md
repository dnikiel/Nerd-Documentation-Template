![Built with Yeoman](http://pixel-cookers.github.io/built-with-badges/yeoman/yeoman-long-flat.png)

#Nerd

Nerd is a simple, responsive documentation template built using Foundation5, Yeoman, Grunt, Bower, HTML5, CSS3 and JavaScript. It as an open source template for other developers to utilise in their projects.

##Getting started

For development purposes, this repository requires the use of [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) in order to run the application.

Grunt is a JavaScript based task runner, for tasks such as unit testing, compilation, uglifying, livereload, serving web pages and many many more. If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

Bower is a package manager tool (much like [NuGet](http://www.nuget.org/) or [Bundler](http://bundler.io/)) which can manage your third party asset library for you. You can find information on using and installing Bower over at their [github](https://github.com/bower/bower) page.

Furthermore, you will need **npm** for both of these tools to function. You can find a quick and easy installation guide over at the [npm github](https://github.com/npm/npm).

##Resolving dependencies

First off, you will need to install the Grunt package dependencies listed in `package.json`:

    npm install

Then you will need to install the Bower asset dependencies, listed in `bower.json`:

    bower install

##Build process

Now we have all our required dependencies, we can start to use the Grunt task runner. Nerd uses [generator-zf5](https://github.com/juliancwirko/generator-zf5) for Yeoman so all tasks are the same. To start viewing the application on the Grunt web server, run the following command:

    grunt (compile Jade, compile Sass, bower install, livereload, watch)

If you would like to create a distribution package of the application, ready for use in your application, run the following command:

    grunt publish (compile Jade, compile Sass, validate-js, copy, concatenation, minifications)

##How to contribute

* Fork the project
* Create your feature or bug fix
* Commit
* Send a pull request against the *master* branch

##Copyright
Copyright (c) 2014 [skyharbor](https://github.com/skyharbor)
Licenced under the MIT licence.


