# Startup Name Checker
Domain names and social media handles availability checker.

<img src="https://raw.githubusercontent.com/thibautvs/startup-name-checker/master/screenshot.png" width="702" />

## Setup
First, make sure you have [Node.js][nodejs] installed.

Then, clone the repository and execute `npm install` or `yarn` in the local folder.

## Run
Type `npm start <startupName>` or `yarn start <startupName>`.

Ex: `yarn start awesomestartup`.

## Configure
You can configure the app by editing the `config.json` file. It has the following format:

    {
      "domains": [
        ".com",
        ...
      ],
      "social": [
        { "name": "Facebook", "url": "https://www.facebook.com/{startupName}" },
        ...
      ],
      "requestTimeout": 5000
    }

### Add a domain check
Add an entry to the `domains` array. Ex: `".tv"`.

### Add a social media check
Add an entry to the `social` array. The entry must be an object with the 2 following properties :

- `name`: the name of the social network. Will be used when displaying results.
- `url`: the URL pattern to check. Must include the `{startupName}` placeholder, which will be replaced by the name you supplied when running the app. The easiest way to find the URL pattern is to search for an existing company page on the desired social media.

### Request timeout
Specify a value in milliseconds for `requestTimeout`. Should be short enough so that unresponsive web servers won't delay the display of the results for too long.

## Remarks
The app was optimized for output readability instead of max performance. Instead of executing the HTTP calls in parallel and displaying the results as they arrive, the checks are here executed sequentially. This guarantees that all outputs will be in the exact same order, making it easier to compare them.

[nodejs]: https://nodejs.org
[more-info]: https://stackoverflow.com/questions/31597125/how-to-find-out-programmatically-if-a-domain-name-is-registered-or-not
