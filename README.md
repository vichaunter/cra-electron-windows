# Pure electron create react app boilerplate for windows development

This project is a Boilerplate made only with npx create-react-app, and added electron and electron-build on top.  
It has a really minimal configuration (/src/shared and /electron folders), to just make it work together.

It doesn't have any extra, is not using typescript, and is not ejected. The idea is to reduce as much as possible
the maintenance, and focus on coding.

Is only added small communication between electron and react as example to show app name and version:  
- [electron/main.js](https://github.com/vichaunter/cra-electron-windows/blob/master/electron/main.js#L38)
- [src/App.js](https://github.com/vichaunter/cra-electron-windows/blob/master/src/App.js#L38)

## Run development mode

Due nature of project and how is loaded, for development is needed to have running in background react service
and electron will load served page by default setted up to localhost:3000.

You need to run two commands in two different consoles:
1. `yarn start`
2. `yarn start:electron`

Remember that this is only for development. After packaging and publishing the app will load properly react script
from the bundled package.

## Available Scripts

In the project directory, you can run all the basic cra scripts with only one change:

`start` from react becomes `start:react`

### `start`

Initializes react app as usual, but with browser disabled. This will avoid react to open browser due as is linked
with electron app will throw errors if is not loaded inside it.

### `start:electron`

Runs the electron app in the development mode loading localhost react beign served.  
React should be running in [http://localhost:3000](http://localhost:3000) to view it inside the app (script `start`).

### `build:electron`

Will copy all electron dependencies into the build folder.  
Needed for packaging later.

### `package`

Compiles build folder into executable app in dist folder.  
For compiling mac you need package it from that OS.

for building in linux you can change package line to this one:
```
"package": "electron-builder build --win --linux -c.extraMetadata.main=build/electron/main.js --publish never"
```

Only adding --linux should work

## Help the project

This is a really basic project intended to be a starting point for anybody who needs a pure create react app without 
typescript or loads of components and preconfigurations that some times is hard to mantain if you don't know it.

If you find some problem in it, or want to collaborate with some improvement, feel free to send a request to add
your changes on it.

## References

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

