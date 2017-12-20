module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};
