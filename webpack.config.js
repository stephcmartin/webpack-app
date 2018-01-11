module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
                // this means anyfile that ends with .css
            }
        ]
    }
}