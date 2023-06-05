# Beginner's guide to media queries

### Media query basics

- Basic media query

- ```css
  @media media-type and (media-feature-rule)
  {
      /*CSS rules*/
  }
  ```

- Media-type: Tells the browser what kind of media the code is for

- Media expression: rule/test for the CSS to be applied

- CSS rules to be applied

##### Media type

- There are 3 types of media query
  - all, print, screen
- Print type media query will only be applied when the page if printed
  - Does not load in browser
- Media types are optional, if not selected, then the rule apply to all media types

##### Media feature rules

###### Width + height

- The feature used the most to create responsive designs
- Apply to CSS if viewport is below / above certain width / height
- Width + height can have min/max prefix, to be used as range
  - Much more useful, width + height rarely used alone

###### Orientation

- Test for portrait / landscape mode
- Standard desktop view is in landscape orientation
- Phone / tablets are usually in portrait mode

###### Use of pointing devices ("hover: hover")

- Test if the user has the ability to hover over elements
  - Pointing device vs. touchscreen / keyboard navigation
- Change the display method if the user cannot hover over element
- "pointer" media feature, has 3 possible values
  - "none": User has no pointing devices, might be using keyboard control / voice command
  - "fine" Mouse / trackpad, precise tracking
  - "coarse": Finger on a touchscreen

### More complex media queries

##### "and" logic in media queries

- Use the "and" keyword to combine multiple rules together

##### "or" logic in media queries

- Use "," to separate rules in media queries to represent "or" logic gate

##### "not" logic in media queries

- Use the "not" keyboard to reverse the meaning of the media queries

### How to choose breakpoints

- Change the design of the size when the content starts to break in some way
  - Breakpoints

### The viewport meta tag

- Controls how mobile browsers render content
  - By default, most mobile browser lies about their width
- The viewport meta tag tells the browser to render at true device width

### Do you really need a media query?

- Flexbox, grid + multi-column all provide native responsive design without using media queries
- Combine with media queries to produce the best result

