# Evaluate a News Article with NLP

This project is the 3rd and last project in the advanced Web Dev Udacity Nanodegree!
the app using meaningcloud api to evaluate an articles with Natural language processing, with a simble unit testing.

- [App demo](https://evaluate-articles-with-nlp.netlify.app/)

## How to use

### Prerequisites

Make sure that Node is installed in your local machine

- [Download Node js](https://nodejs.org/en/download/)

### Installing

A step by step series of examples that tell you how to get a development env running

1.  Download the repo using terminal :

    ```
    git clone https://github.com/emiribegic/evaluate-news-nlp.git

    ```

2.  Install dependencies after open the project,
    open the terminal and use :

        ```
        npm install
        ```

3.  Install development dependencies:

    ```
    npm install -D webpack webpack-cli
    npm install -D @babel/core @babel/preset-env babel-loader
    npm install -D @babel/plugin-transform-runtime
    npm install -D style-loader node-sass css-loader sass-loader
    npm install -D html-webpack-plugin
    npm install -D mini-css-extract-plugin
    npm install -D optimize-css-assets-webpack-plugin terser-webpack-plugin
    npm install -D jest

    ```

4.  Sing in https://www.meaningcloud.com/ to get your API key

5.  Create .env file in the root of the app to save your api key inside it

```
API_KEY = **********************
```

## Running the App

In order to start the app :

Build the production folder

```
npm run build-prod
```

Run the server

```
npm start
```

Now you can open your browser at [localhost:8000](localhost:8000)

## Built With

- webpack build tools
- Node and Express for server side
- Jest for testing
- meaningcloud API
- vanilla javascript

## Authors

- **Khaled Farghly**
