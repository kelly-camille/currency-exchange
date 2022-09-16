# (Application Name)
currency-exchange
#### (Brief Description of Application)
displays the conversion of usd to other currencies
#### By Kelly Bruce

## Technologies Used

* HTML
* Javascript
* Jest
* Babel
* Webpack
* Node
* env


## Description
This application displays conversions of currencies between usd and other select currencies. 

## Setup/Installation Requirements
* Clone this repository to your desktop by using the URL.
* Open Git bash
* Change to directory you'd like to work in
* Use command Git Clone with URL
* Press Enter to command cloning
* Open folder where you cloned repository into
* _Install all packages with $ npm install._
* _Build the project using webpack with $ npm run build_
* install .env with $ npm install dotenv-webpack@2.0.0 --save-dev
* _Start a development server with $ npm run start_
* _Lint JS files in the src folder with $ npm run lint_
* _Run tests with Jest using $ npm run test_
* Open index.html in your browser default browser.

The API functionalities will not be available until you do the following:

* Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button.
* You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
* At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
* Create a .env file in the root of the project 
* run the following command in the command line  $ npm install dotenv-webpack@2.0.0 --save-dev
* Configure webpack with const Dotenv = require('dotenv-webpack');
* add new Dotenv() to plugins
* store your API key in the .env file and name it API_KEY
* call the key with ${process.env.API_KEY}

## Known Bugs

* No bugs at this time

## License
[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)


Copyright (c) _2022_ _Kelly Bruce_