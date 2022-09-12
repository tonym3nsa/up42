# UP42 Code Challenge

A React 18 single page application used to fetch BLOCKS from the UP42 marketplace and add/remove blocks to a cart to be purchased by a user.

Demo of the application is available [here](https://up42-clinet.onrender.com/)

### Requirements

Requirements:
- Git
- Node
- npm

### Setup

To run the app locally:

```bash
git clone git@github.com:tonym3nsa/up42.git
cd up42
npm install
npm start
open http://localhost:3000 in your browser of choice
```

To run tests:
```bash
npm run test
```

To build project:
```bash
npm run build
```


### Considerations

- The given endpoint to retrieve data throws a CORS error. In order to mitigate that, I setup a simple Node Express server with Cross-Origin Resource Sharing allowed (find the code [here](https://github.com/tonym3nsa/up42-node-server))
- The state of the various components is managed with Redux. 
- Client-side hosted on a render.com server

