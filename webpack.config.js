const Encore = require('@symfony/webpack-encore');
const backendConfig = require('./assets/backend/webpack.config')
const frontendConfig = require('./assets/frontend/webpack.config')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

backendConfig.get(Encore);
const backend = Encore.getWebpackConfig();
backend.name = 'backend';
Encore.reset();

frontendConfig.get(Encore)
const frontend = Encore.getWebpackConfig();
backend.name = 'frontend';
Encore.reset();

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
    })
    .enableSingleRuntimeChunk()
;

const general = Encore.getWebpackConfig()

module.exports = [backend, frontend, general];
