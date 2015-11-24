module.exports = {
    context: __dirname + "/src",
    entry: {
        app:'./js/app.js',
        student:'./js/student.js'
    },
    output: {
        path: __dirname + "/assets",
        filename: "[name].js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx$/,
                include:[
                    path.resolve(__dirname,'src/js/components')
                ],
                loader: "babel-loader"
            }
        ]
    }
};

