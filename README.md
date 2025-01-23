# Template: Vite + SCSS + JS

## Description

- the template is more oriented towards building with pure JS, but can be rebuilt on a framework if desired.
- suitable for both single page application and multi-page application

## What's useful?

### Vite setup

- image optimisation
- componentisation with HTML
- auto-update on html changes
- added aliases for convenience

### Styles

#### Organisation of styles

- the necessary files for the styles are placed in the appropriate folders
- internal functions that are used only in other functions and utilities are located in abstract/utils
- each abstract folder (containing variables, mixins, functions) has a subfolder that contains a generic build file (it is without underscored: varibables.scss, mixins.scss, functios.scss). if you need to add a new mixin, function, variable for global use, just add it to one of generic build file

##### How to use it

- global.scss - might of the scss are collected into the file. use in components styles (hero.scss, copyrights.scss, etc).
- base.scss - all styles that you need for every page including global. use in pages styles (main.scss, contacts.scss, reviews.scss, etc).

#### Using abilities of SCSS

- variables: screen size, font size, colours, etc.
- mixins:
  - breakpoints (mobile-first prefer) with/without px-to-rem conversion
  - counting average tablet values with calc function if you have only for mobile and desktop (works correctly with px)
  - counting average values with calc functions depending on many values
- functions:
  - find average value between two units
  - values conversion functions (px to rem, px to percents)
  - colors conversion (hex-to-rgb/hex-to-rgba)

More about it you can find in the **<a href="src/styles/_INSTRUCTION.scss">\_INSTRUCTION.scss</a>** in the styles folder

#### What about the layout?

- it's have three main components:
  - header
  - main
  - footer
- parent of these (body) has grid-layout
- all of these three has 100% width of body. you need to use paddings/margins with containers to get desired result
- styles based on BEM methodology

## Support

If this was helpful to you, please put a star ❤
Thank you!
