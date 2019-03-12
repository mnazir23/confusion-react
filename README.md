## ConFusion

To successfully run this project, you need to fulfill the below mentioned tasks.

### 1. JSON Server
To run this project, you need the `json-server` module because `json-server` is being used as server in this project to load website data.

The `json-server` module is included in this repository as a zipped folder with the name of `json-server.zip`

Perform the following steps

1. Install `json-server` globally in your machine using the following command
    ```
    npm install json-server -g
    ```
2. Cut and unzip the `json-server.zip` outside this repository in some other folder. It contains a file called `db.json` that contains all the data that gets loaded into the `ConFusion` website.
3. Go to the `json-server` folder.
4. Run the `json-server` by running the following command
    ```
    json-server --watch db.json -p 3001
    ```

### 2. ConFusion
To run the `ConFusion` website, perform the following steps

1. Install all the project dependencies by running the following command
    ```
    npm install package.json
    ```
    Where `package.json` contains all the project dependencies that need to be installed along with scripts to run the project.
2. Make sure the `json-server` is running.
3. Run
    ```
    npm start
    ```
    This will load the website on `localhost:3000`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
