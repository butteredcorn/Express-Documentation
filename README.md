# An Introductory Guide to Express.js

Welcome to my introductory guide for learning how to setup a modular Express.js web server. Here I will guide you on how to not only setup your first HTTP end point, but to do so in a fashion that is easy to read, easy to work with, easy to debug and easy to test.

In an age of test driven development, modularity is no longer an option, but an essential part of writing code. Everything suggested here is for the sake of not only providing a contrieved working example of Express.js, but to provide a skeleton that can be used to really get you started on your first Express application.

## Why Modular Code?

Modularity has major benefits to even small applications. When complex code gets intertwined, not only is it hard to read and follow, but it becomes hard to debug and test. Automated unit testing is based on the **principle of single responsibility**
. Each individual test has a single expectation that given a single input, there is one expected output. If code is too complex to unit test, there will inevitably be bugs - bugs that would've been caught had the code been subjected to proper unit testing. 

However, of course, benefits from modularity grows expenentially as the code base grows larger, and the number of cooperating developers increases. Everything from communication, version control management, cooperative development, to testing and quality assurance becomes easier with better modularity, and all of these things are essential for continuous integration and continuous deployment.

Without modularity, your continuous integration/continuous deployment pipeline is more like a pipe dream!

## Modularity and Microservice Architecture

Modularity is also a necessity if you ever want to develop an application with a microservice architecture, or if you wanted your company to transition to a microservice architecture. In order for each of your components to be developed, deployed, and maintained independently, they will need to be hyper modularized.

## Key Benefits of Microservice Architecture

There are many tangible benefits to having a microservice architecture all of which are essential to transitioning to a **DevOps/DevSecOps culture**, like these following oftenly touted benefits:
<ul>
<li>Continuous Deployment</li>
<li>Scalable Development</li>
<li>Fault Isolation</li>
<li>More Efficient Use Of Resources.</li>
</ul>

However, it's definitely more than just things like this. In an age where all platforms understand JSON, firms are now able to develop their multi-platform applications in as many differing languages as they want. In other words, firms and their platforms can be **language agnostic** - as long as one microservice component can speak to another component (via JSON), it no longer matters that one team is most comfortable working with Python and another with JavaScript.

Bottom Line: **Modularity is critically important and it isn't going away**.

***


<div align="center"><h3> Thank You</h3></div>

Thank you for reading and if nothing else, I hope to inspire you to think about modularity the next time you write code.

A very special thanks to the team at [Just-The-Docs](https://github.com/pmarsceill/just-the-docs) for providing this excellent Jekyll theme.