const path = require('path')

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve(__dirname, 'material-components-vue', 'node_modules')],
                            },
                        },
                    ],
                },
            ],
        },
    },
    chainWebpack: config => {
        config.module.rule('eslint').uses.clear()
    }
}
