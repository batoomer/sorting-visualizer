# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.0.4] - 2023-01-?
- Background Images for light and dark theme

### Changed
- Colors
- Overall style

### Added
- Added view/pages/sort/inplace/InPlaceSortPage.js. 
- Added view/pages/sort/SortPage.js. Every Page inherits from this class and overides its createVisualizer method.
- Added views/pages/home/HomePage.js
- Navbar component
- Created a new ToggleButton Component 
- App.js where all the parts are combined
- views/pages folder to host the pages
- views/shared_components folder to host shared components 

### Changed
- Replaced Theme Button of header with a ToggleButton Component
- Footer and Header Background color
- view folder structure

## [0.0.3] - 2023-01-16

### Added
- Added view/pages/sort/inplace/InPlaceSortPage.js. 
- Added view/pages/sort/SortPage.js. Every Page inherits from this class and overides its createVisualizer method.
- Added views/pages/home/HomePage.js
- Navbar component
- Created a new ToggleButton Component 
- App.js where all the parts are combined
- views/pages folder to host the pages
- views/shared_components folder to host shared components 

### Changed
- Replaced Theme Button of header with a ToggleButton Component
- Footer and Header Background color
- view folder structure

## [0.0.2] - 2023-01-16

### Added
- toggle button for dark/light theme
- header and header style
- footer and footer style
- general styles to index.css
- main view folder, with Main.js and main.css
- header view folder, with Header.js and header.css
- footer view folder, with Footer.js and footer.css
- views folder, which will contain the different parts of the app.
- colors.css. This file contains colors for light and dark theme.
- src/styles folder, which will contain general style files

### Changed
- Moved index.css into src/styles

## [0.0.1] - 2023-01-15

### Added
- Added src folder, with the index.js, index.css and a subfolder templates, which contains the template html file
- Added webpack.config.js
- Installed webpack-dev-server, css-loader, HtmlWebpackPlugin, MiniCssExtractPlugin
- Added webpack configuration
- Installed webpack