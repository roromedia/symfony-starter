const Encore = require("@symfony/webpack-encore");
const path = require("path");

module.exports = {
    get(Encore) {
        const path = require('path');

        Encore
            .setOutputPath('public/frontend/build/')
            .setPublicPath('/frontend/build')
            .enablePostCssLoader((options) => {
                options.postcssOptions = {
                    config: path.resolve(__dirname, 'postcss.config.js')
                }
            })
            .addEntry('app', './assets/frontend/app.js')
            .enableStimulusBridge('./assets/controllers.json')
            .splitEntryChunks()
            .enableSingleRuntimeChunk()
            .cleanupOutputBeforeBuild()
            .enableBuildNotifications()
            .enableSourceMaps(!Encore.isProduction())
            .enableVersioning(Encore.isProduction())
            .configureBabel((config) => {
                config.plugins.push('@babel/plugin-proposal-class-properties');
            })
            .configureBabelPresetEnv((config) => {
                config.useBuiltIns = 'usage';
                config.corejs = 3;
            })
        ;
    }
}