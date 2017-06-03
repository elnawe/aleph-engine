var config = require('./webpack.config');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    inline: true,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(8080, 'localhost', function (error) {
    if (error) {
        console.error('ERROR: ', error);
    }

    console.log('Listening: http://localhost:8080');
});
