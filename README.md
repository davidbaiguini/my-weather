# simple-header
Simple app showing the actual weather in Auckland as well as the temperature for the next 3 days

### To run

* You'll need to have [git](https://git-scm.com/), installed in your system as well as node

* Fork and clone the project:
```
> $ git clone https://github.com/davidbaiguini/simple-header.git
```

* Then install the dependencies:
```
> $ npm install
```

* Start the dev server
```
> $ npm run start
```

* You can simply run Webpack build using this command:
```
> $ npm run build
```


* Open the web browser to `http://localhost:3000/`
* If using dev, you can also use: http://localhost:3000/webpack-dev-server/ to run in iframe mode


### Additional Links

[React Developer  Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)


### Tech Used

| **Tech** | **Description** | **Version** |
| ---------|-----------------|-------------|
| [React](https://facebook.github.io/react/) | View layer | XXX |
| [React Router](https://github.com/reactjs/react-router) | Universal routing | XXX |
| [Redux](http://redux.js.org/) | State management | XXX |
| [Ducks](https://github.com/erikras/ducks-modular-redux) | Keep Actions, Reducers in the same module | XXX |
| [Reselect](https://github.com/reactjs/reselect) | Help with memoization and simplicity | XXX |
| [Webpack](https://webpack.github.io/) | Module bundling + build for client | XXX |
| [SASS/SCSS](http://sass-lang.com/) |  stylesheet language, makes CSS fun again | XXX |



### TODO
- [ ] Add logo and icons and some animations / Better UI
- [ ] Add open/close for menu when mobile
- [ ] Add other linter
- [ ] Deployed to a droplet using a Docker container
- [ ] Connect to a DataBase, somewhere (Using graphQl for fun maybe?)
- [ ] Add field text to search by city
