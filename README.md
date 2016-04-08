![Logo](app/images/logo.png?raw=true)

# flipbook - api

flipbook is a tool for 'bringing your images to life', with which a user could
upload an image and, using some basic drawing tools, create an animated gif
on top of that image. If no image frames are selected for the GIF, the user can
instead use their webcam to create the GIF of themselves. A simple caption can
be written, stylized, and placed on top of the GIF itself for added hilarity.

## Technology Used

flipbook's client side is written with Angular, Bootstrap, HTML5, and Sass. The
api is written with a MongoDB database, along with Express and Node.js for the
full MEAN stack experience.

## General Approach

For my final project I wanted to experiement with some technologies I wasn't
really comfortable with yet; despite having just finished writing
[upBucket](http://apalmer0.github.io/upbucket-client/index.html) I was still a
shaky on Express and Node, so those were the first choices on the api
side. On the front end, I wanted to be sure to use a front-end framework. I've
been curious about Angular for a long time, so it made the most sense to dive in
headfirst and commit myself to learning it in time for this project rather than
allowing myself the freedom to tinker with it independently and indefinitely
when no deliverable is actually due.

Regarding the app itself - I wanted to build a tool that did something fun, and
I wanted to tinker with an idea I had for my side project; this was a first
draft of that idea.

## User Stories

Generally speaking, a user can:

-   use their email address (ideally a fake one) to sign up
-   use that email address to log in
-   get a token back from the API upon login that authenticates their session
-   upload an image as a background for a GIF
-   draw on top of the uploaded image
-   save each image as a 'frame' of a GIF
-   pick and choose which 'frames' to include in the GIF
-   add a variety of styles to a custom caption
-   turn their 'frames' into a GIF
-   view a collection of all of the GIFs they've created, and no one else's
-   view the individual GIF
-   edit the GIF's attributes (just name and a comment, for now)

## Installation

After `npm install` run `grunt` for building and `grunt serve` for preview.

## Wireframes

Homepage
![Create GIF experience](app/images/homepage.JPG?raw=true)

Creating a GIF
![Create GIF experience](app/images/create_gif.JPG?raw=true)

## Screenshots

Homepage
![Homepage experience](app/images/homepage_screenshot.png?raw=true)

Create GIF
![Create GIF experience](app/images/create_screenshot.png?raw=true)

GIF Gallery
![GIF Gallery experience](app/images/gallery_screenshot.png?raw=true)
