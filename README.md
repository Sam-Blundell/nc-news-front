# NC-News FrontEnd
This is the front-end portion of my NorthCoders News project, a social news-aggregate site in the style of Reddit.

It was made using React and CSS with ReachRouter for endpoint routing. It makes requests to a purpose built web-api for populating different pages with data.

This project was hosted on heroku and can be accessed here:
https://nc-news-sam-b.herokuapp.com/

The repo for the backend web-api can be found here:

https://github.com/Sam-Blundell/nc-news

and the hosted back-end can be found here:

https://samb-ncnews.herokuapp.com/api


## Requirements
In order to run this project locally you will need NPM and Node.js installed on your machine.

To check that you have these installed open your console and type
```bash
npm -v
node -v
```

Ensuring that the version numbers returned are at least 6.10.3 for NPM and 12.10.0 for Node.js. If not, please install and/or update.

## Setup

1. Fork and clone the repo to a local directory on your machine.
2. Run `npm init -y` to initialise a new package.json.
3. Type `npm start` to run the start script.

This should setup and run a version of the project hosted locally on your machine. This can be accessed in your browser by navigating to localhost:3000.

Note: 3000 is the default port chosen by the script, it is possible your instance of the project may use a different port. If this is the case your terminal will output information on the port you are using when you run the start script.