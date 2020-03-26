---
layout: default
nav_order: 1
---

# Introduction
The purpose of this documentation is to assist someone new to coding with not only setting up your first Express server and application, but to do so in a fashion that is easy to read, easy to work with, easy to debug and easy to test.

## What is Express.js?

[Express.js](https://expressjs.com/) is a fast, minimalist web framework for Node.js. It is used for hosting everything from web pages, to RESTful APIs, to dedicated JSON web token authentication servers. With over 43,000 GitHub stars, Express.js is the most popular Node framework. 

## Is This Guide Right for You?
If the terms RESTful APIs and dedicated JSON web token authentication servers sounds half familiar and half foreign, then this guide is right for you. We assume that you have at least some beginner level programming knowledge, but not much beyond that. This guide is meant to help with someone who has not used Express.js before and just wants to make a modular bare basic skeleton to work with.

Topics this guide will cover includes:
<ul>
<li>Setup of a basic modular Express server</li>
<li>Requesting JSON data from a simple API</li>
<li>Rendering some HTML with Embedded JavaScript (EJS)</li>
<li>Integrating some middleware to add functionalities to Express.js</li>
<li>Integrating some centralized error monitoring with Sentry.io</li>
</ul>

## Software Versions

We utilize the following dependencies along with Node.js v10.16.3:
<ul>
<li>node.js: 10.16.3</li>
<li>ejs: 3.0.1</li>
<li>express: 4.17.1</li>
<li>request: 2.88.2</li>
<li>@sentry/node: 5.15.0</li>
</ul>

Other Software:
<ul>
<li>Visual Studio Code version 1.43.2</li>
<li>Command Shell: Bash version 3.2.57(1)</li>
<li>OS: MacOS Mojave</li>
</ul>

You may use any other suitable code editor, command shell, or operating system, however, the terminal commands may have to be adapted for your setup.

## Prerequisites
To follow along with these instructions, you will need the following:
<ul>
<li>Knowledge of basic programming concepts like conditional statements, loops, procedural programming, and handling asynchronous code</li>
<li>Knowledge of working with the your command line interface ie. terminal or powershell</li>
</ul>

While we believe you can follow this guide without having prior knowledge working with JavaScript and Node.js, you may need to refer to other resources to help you read through and understand some nuances with JavaScript.

## Typographical Conventions

In all of our syntactically highlighted code blocks, we will denote the filename the code block belongs to by stating the filename along with a line of dashes underneath it like so:

```javascript
file1.js
--------

some code here

file2.js
--------

some other code here

```

## Additional Notes and Warnings

All notes are separated into their own indented blocks of text like so:

>note: Our notes are noted like this.


