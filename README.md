# FE-1

"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -b main -d build",
    "start": "react-scripts start",
    "build": "set 'GENERATE_SOURCEMAP=false' && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },