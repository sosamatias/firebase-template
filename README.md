# firebase-template

Template configured with:
- Firebase functions
- Firestore database
- Express & middleware example
- Typescript & eslint
- JsonSchema validator
- Jest & service mock example
- Layers:
    - repositories
    - services
    - controllers
    - middlewares
    - routers

TODO:
- Add file storage example
- Add firebase authentication 
- Add firebase Machine Learning API

## CI/CD 
This project is using Github actions:

- Go to github settings -> secrets -> actions 
- Add the secret: FIREBASE_TOKEN


To get the token execute:
```
firebase login:ci
```

## Run in local
```
cd functions && npm start
```

## Execute tests
```
cd functions && npm test
```

## Debug requirements
https://www.java.com/en/download/

## Firebase console
https://console.firebase.google.com/

## Local database
http://localhost:4000/firestore

## Firebase docs
https://firebase.google.com/docs/functions/typescript

## Execute requests from VS Code
https://marketplace.visualstudio.com/items?itemName=humao.rest-client
