Here is a detailed `README.md` file that will guide users on how to add new content to the site, provide an overview of the structure, and explain how changes to files impact others.

```markdown
# Webfusion Solutions Website

Welcome to the Webfusion Solutions website! This repository contains the source code for the company's website, which specializes in AI, Automation, and Digital Services such as web design, social media, and marketing.

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [How to Add New Content](#how-to-add-new-content)
   - [Adding a New Service](#adding-a-new-service)
   - [Adding a New Product](#adding-a-new-product)
   - [Adding a New Page](#adding-a-new-page)
4. [How Changes Impact the Site](#how-changes-impact-the-site)
5. [Development and Deployment](#development-and-deployment)

## Overview

The Webfusion Solutions website is built using Jekyll, a static site generator. The site is designed to be easy to scale, allowing you to add new sections, elements, and animations with minimal changes to the existing files.

## Project Structure

The project is organized as follows:

- **_includes/**: Contains partial HTML files that can be included in other files. Commonly used for headers, footers, and reusable sections like the hero banner, services, and products.

- **_layouts/**: Defines the overall structure of the pages. The `default.html` layout includes the header, footer, and main content areas. All pages on the site use this layout.

- **_sass/**: Contains all the Sass (CSS preprocessor) files organized into subfolders:
  - **base/**: Global styles, such as resets and typography, are stored here.
  - **components/**: Styles for individual components like buttons, cards, and forms.
  - **layout/**: Styles for the layout of the site, including the header, footer, and grid system.
  - **utilities/**: Utility classes and helper functions, including animations and responsive design.

- **_data/**: Stores data files in YAML format. You can use this directory to store data that can be used in your templates (e.g., services, products).

- **_services/**: Contains individual Markdown files for each service offered by Webfusion Solutions.

- **_products/**: Contains individual Markdown files for each product offered by Webfusion Solutions.

- **assets/**: Contains static assets like CSS, JavaScript, and images.
  - **css/**: Stores the compiled CSS file, generated from the Sass files.
  - **js/**: Stores JavaScript files.
  - **images/**: Stores images used throughout the site.

- **Gemfile**: Defines the Ruby gems (libraries) that the project depends on, including Jekyll and any plugins.

- **_config.yml**: The main configuration file for the Jekyll site. This file sets various site-wide options, such as the site's title, URL, and any plugins used.

## How to Add New Content

### Adding a New Service

1. **Create a New Markdown File:**
   - Navigate to the `_services/` directory.
   - Create a new Markdown file named after the service (e.g., `ai-solutions.md`).

2. **Add the Service Details:**
   - Add the following front matter to the file:
     ```yaml
     ---
     title: "AI Solutions"
     description: "Harness the power of AI to optimize your business processes."
     ---
     ```
   - Write the content of the service below the front matter.

3. **Update the Services Section:**
   - The new service will automatically appear in the "Our Services" section of the site, as it pulls data from the `_services/` directory.

### Adding a New Product

1. **Create a New Markdown File:**
   - Navigate to the `_products/` directory.
   - Create a new Markdown file named after the product (e.g., `automation-tools.md`).

2. **Add the Product Details:**
   - Add the following front matter to the file:
     ```yaml
     ---
     title: "Automation Tools"
     description: "Streamline your workflow with our advanced automation tools."
     price: "$199"
     ---
     ```
   - Write the content of the product below the front matter.

3. **Update the Products Section:**
   - The new product will automatically appear in the "Our Products" section of the site, as it pulls data from the `_products/` directory.

### Adding a New Page

1. **Create a New Markdown or HTML File:**
   - In the root directory, create a new file for the page (e.g., `about.md` or `contact.html`).

2. **Add Front Matter:**
   - Add the following front matter at the top of the file:
     ```yaml
     ---
     layout: default
     title: "About Us"
     ---
     ```

3. **Write the Page Content:**
   - Below the front matter, write the content of the page.

4. **Link the Page:**
   - Add a link to the new page in the site's navigation (usually in `_includes/header.html`).

## How Changes Impact the Site

- **_includes/**: Changes to files in this directory affect all pages that include these files. For example, updating the `_includes/header.html` file will change the header on all pages.

- **_layouts/**: Changing a layout file will impact all pages that use that layout. For example, modifying `default.html` will affect the overall structure of the entire site.

- **_sass/**: Changes to Sass files will regenerate the site's CSS. Updating files in `_sass/base/` will generally affect the entire site, while changes in `_sass/components/` or `_sass/layout/` will only impact specific elements or layouts.

- **_data/**: Updating data files in `_data/` can automatically update sections of the site that rely on this data, like lists of services or products.

- **_config.yml**: Changes to this file will affect site-wide settings and configurations. For example, changing the `baseurl` will alter how URLs are generated across the site.

## Development and Deployment

### Prerequisites

- **Ruby**: Ensure you have Ruby installed. You can check by running `ruby -v` in your terminal.
- **Bundler**: Install Bundler if it's not already installed: `gem install bundler`.

### Setup

1. **Install Dependencies:**
   Run the following command to install all required gems:
   ```sh
   bundle install
   ```

2. **Serve the Site Locally:**
   Start the Jekyll server to view the site locally:
   ```sh
   bundle exec jekyll serve
   ```
   The site will be available at `http://127.0.0.1:4000`.

### Deployment

- The site is designed to be deployed on GitHub Pages. Simply push your changes to the `main` branch, and GitHub Pages will automatically build and deploy your site.

## Contributing

Feel free to contribute to the Webfusion Solutions website by submitting a pull request. Make sure to follow the project's style and contribute to the existing structure to maintain consistency.

---

Thank you for visiting Webfusion Solutions!
```