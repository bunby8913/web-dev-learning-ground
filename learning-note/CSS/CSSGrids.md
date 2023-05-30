# CSS grids

### What is grid layout?

- Collection of horizontal + vertical lines (zones)
  - Provide consistency + stationary elements
- Gutters: The gaps between column / rows 

### Creating grid in CSS

##### Defining a grid ("display:grid")

- All child items becomes grid items
- Default to 1 column grid layout, not going to look different

- Use "grid-template-columns" to add column grid
  - The # of units / value determine how many columns, can use any length unit / percentage

##### Flexible grids with the "fr" unit

- "fr": 1 fraction of the available space in grid container
- Possible to mix "fr" with other fixed unit measurement
  - "fr" will be calculate space without the space fixed unit takes

##### Gaps between tracks ("gap")

- "gap" is the shorthand for "column-gap" + "row-gap"
  - "gap" can be any unit + percentage, CANNOT be "fr"
- "grid-gap" is also valid for legacy reasons

##### Repeating track listings ("repeat()")

- Repeat all / section of track listing
  - Specify the # of time to repeat + 1 or more track to repeat

##### The implicit + explicit grid

- Explicit grid: Grid defined by "grid-template-columns" + "grid-template-rows"
- Implicit grid: Defines content outside the explicit grid
  - auto sized, to just fit the content of the grid item
  - use "grid-auto-rows" + "grid-auto-columns" to set size of implicit grid

##### The "minmax()" function

- Set the minimum + maximum value of a track
- Takes 2 value, the minimum size (usually in unit) + the maximum size (auto to allow overflow)

##### As many column as will fit ("repeat (auto-fill, minmax())")

- Use "repeat" + "minmax" functions to create as many column as screen fit
  - Grid creates as many 200 pixel as will fit for container, any empty space will be evenly distributed with all grid items stated by (1 "fr")

### Line-based placement

- Index from 1, based on the writing mode directions
- grid-(column/row)-(start-end) to represent range of the grid items
  - Use line # to find the position on the grid
  - Can also use shorthand properties "grid-(column/row)"
    - Use "/" to separate start + end lines location
- Always count from the explicit grid edge, not implicit grid
- "-1" value will move target to the end of column/row

### Positioning with ("grid-template-areas")

- A way to place item on grid without using grid line #
- Every cell of the grid needs to be filled using keyword
  - Keyword will be given to different CSS selector using "grid-area"
- Repeat cell name if longer than 1 cell
- use "." to leave a cell empty
- All items must be rectangular
- Can't repeat the same area in different location

### Grid frameworks in CSS grid

- Based on 12 / 16 column grids
  - Already part of the default CSS

