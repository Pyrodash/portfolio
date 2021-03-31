const path = require('path')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin');

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const rootPath = path.join(__dirname, '..')
const basePath = path.join(rootPath, 'src')
const mode = process.env.NODE_ENV || 'development'

const siteName = process.env.SITE_NAME
const siteDescription = process.env.SITE_DESCRIPTION
const siteDomain = process.env.SITE_DOMAIN
const siteImage = process.env.SITE_IMAGE

const cname = process.env.CNAME

const config = {
    mode,
    entry: path.join(basePath, 'index.ts'),
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/\.vue$/] },
                    },
                    'eslint-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            url: (url, resourcePath) => {
                                return !url.startsWith('/'); // don't try to process absolute paths (e.g. nginx aliases, iis directories etc)
                            },
                            esModule: false,
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.vue', '.js'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '~': basePath,
            '@': basePath,
        },
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(rootPath, 'tsconfig.json'),
            }),
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: siteName,
            meta: {
                author: siteName,
                description: siteDescription,
                'theme-color': '#E85F87',
                // cross platform/browser stuff
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                HandheldFriendly: 'True',
                'apple-mobile-web-app-capable': 'yes',
                'X-UA-Compatible': { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
                // open graph
                'og:type': 'website',
                'og:site_name': siteName,
                'og:title': siteName,
                'og:description': siteDescription,
                'og:url': `https://${siteDomain}.com`,
                'og:image': `https://${siteDomain}.com${siteImage}`,
            },
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(rootPath, 'dist'),
        publicPath: '/'
    },
}

if (cname) {
    config.plugins.push(
        new CnameWebpackPlugin({
            domain: cname,
        })
    )
}

module.exports = config
