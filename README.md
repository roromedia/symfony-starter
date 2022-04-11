# Symfony Starter Project

Unless you're looking to build an api or a command line application - no matter how small your project is or how big it grows - 
this is a general purpose starting point for pretty much every symfony project containing: 

- separated [frontend](assets/frontend/webpack.config.js) & [backend](assets/backend/webpack.config.js) & [general](webpack.config.js) webpack configurations (frontend & backend with tailwindcss setup)
- LiipImagineBundle [preconfigured](config/packages/liip_imagine.yaml) (including one image-style 'background_image')
- basic template structure (frontend, backend) with related base-templates.
- cssnano minification for assets on production builds
- [PagesController](src/Controller/Frontend/PagesController.php) with Http-Caching and Sitemap settings

# Installation

````shell
composer create-project roromedia/symfony-starter my_project_folder
cd my_project_folder 
cp .env .env.local
composer install

npm install && npm run build

# if using yarn 
#yarn install --force && yarn build

# only for production 
symfony console cache:clear
symfony console cache:warmup

symfony serve -d
```
