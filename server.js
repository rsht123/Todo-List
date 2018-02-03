const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const app = express();

const compiler = webpack(config);
// const router = app.route();

app.use(express.static(path.join(__dirname, 'public')));

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.path,
    serverSideRender: true
}));

// app.use(webpackHotMiddleware(compiler, {
//     log: console.log
// }))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3000, () => {
    console.log('App running on port 3000');
})