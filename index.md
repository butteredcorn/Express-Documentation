---
layout: default
title: Home
---

![servers](./images/servers.jpg)

# Welcome to a Guide on How to Setup a Modular Express.js Web Server

Here I will guide you on how to not only setup your first HTTP end point, but to do so in a fashion that is easy to read, easy to work with, easy to debug and easy to test.

In an age of test driven development, modularity is no longer an option, but an essential part of writing code. Everything suggested here is for the sake of not only providing a contrieved working example of Express.js, but to provide a skeleton that can be used to really get you started with your Express application.

If you are new to Express.js, we recommend that you read our guide in the order provided on the left side navigation menu.

We will be covering the following six topics. The sub-sections in each topic are also listed below as follows:

### Introduction
<ol>
<li>What Is Express.js?</li>
<li>Is This Guide Right For You?</li>
<li>Software Versions and Prerequisites</li>
</ol>

### Part 1: Creating Your First Express Server
<ol>
<li>Setting Up Your Server’s Root Directory</li>
<li>Hosting Your First Web Server with Express.js</li>
</ol>

### Part 2: Refactoring the Code to Increase Modularity
<ol>
<li>Removing Magic Numbers From Your Code</li>
<li>Moving the Hosting Functionality to Another File</li>
<li>Moving Express Apps into Sub-Folders</li>
<li>Hosting Your Apps and the Importance of Routing</li>
</ol>

### Part 3: Creating a Simple Application
<ol>
<li>Setting up Dependencies</li>
<li>Creating a Function that Calls an API</li>
<li>Requesting and Parsing JSON Data</li>
<li>Wrapping your Express Application</li>
<li>Error Handling - The Optional but Not Really Part</li>
</ol>

### Part 4: A Primer On Embedded JavaScript
<ol>
<li>Installing and Setting Up Embedded JavaScript (EJS)</li>
<li>Rendering Data to the EJS File</li>
<li>Creating an EJS File and Handling Data</li>
</ol>

### Part 5: Using Express Routers for Even Better Modularity
<ol>
<li>Creating a Routes Folder</li>
<li>Calling the Express Router Function in our Route Files</li>
<li>Using router.get() Instead of app.get()</li>
<li>Requiring Our Route Files and Using Them in app.js</li>
</ol>

### Part 6: Centralized Error Handling with Sentry.io
<ol>
<li>Installing Sentry For Express.js</li>
<li>Requiring Sentry in our app.js File</li>
<li>Instructing Express to Use Sentry</li>
<li>Configuring Your End Point to Use Sentry</li>
</ol>


#### Special Thanks

A very special thank you to the team at [Just-The-Docs](https://github.com/pmarsceill/just-the-docs) for creating this excellent Jekyll Theme.