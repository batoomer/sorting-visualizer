# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.1.0] - 2023-01-22

### Fixed
- Switching between pages would not stop the visualization

### Changed
- page classes structure to clear resources
- Router.js to support clearing of resources
- README.md

### Added
- Deployed the page
- GitHub pages

## [0.0.5] - 2023-01-22

### Added
- Added Media Queries for responsiveness
- Added Qucik Sort Data
- Added Quick Sort Page
- Insertion Sort Data
- Insertion Sort Page
- Documentation 
- Routing with Hash History
- Seleciton Sort Data
- Selection Sort Page

## [0.0.4] - 2023-01-20

### Added
- Input Range general style
- Shuffle Button Icon
- bubbleSort.js
- SortModel.js
- InPlaceVisualizer Style
- InPlaceVisualizer to the InPlaceSortPage.js
- shared_components/inplace_visualizer/InPlaceVisualizer.js
- Background Images for light and dark theme

### Changed
- Start/Stop Button Icons
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