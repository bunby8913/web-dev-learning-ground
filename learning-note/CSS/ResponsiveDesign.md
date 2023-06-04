# Responsive design

- Web design approach to make web page looks good on all screen + resolutions
- HTML by default is responsive, dynamically fit into the viewport
- Cannot set page to be static, scrollbar on narrow device + empty space on wide display
- Responsive web design: A set of best practice to create adaptable layout can respond to any device
- Recommended to use float + media queries + fluid images

### Media queries

- Run a series of test, apply different rules base on different condition
- Each stylesheet can have a multiple media queries
- Breakpoint: The conditions / tests that changes to a different media query
- mobile / article first: Start with single column, use media query to implement multiple-column layout for desktop later
- When setting up breaking up, should always use relative unit > absolute unit
- Many different approach to implement styles using media queries
  - Could link different stylesheet in different media queries

### Responsive layout technologies

- Using flexible grid can avoid designing for every possible screen size
- Use breakpoint to change the design when the layout begin to look bad

##### Multi-col

- “column-count”: Specifies the # of column and let browser automatically calculate width according to screen size
- “column-width”: Specifies the width of the column, the browser is going to fit as many columns with that width as possible
	- Ensure column will be big enough to not be in-readable

##### Flex box

- Use “flex-shrink” + “flex-grow” to change flex item behaviour when there are more/less space around them

##### CSS grid

- Use “fr” unit to distribute available space across grid

### Responsive images

- The image should always have “max-width: 100%”
	- Allow items to be scaled down if needed, but won’t scale up and become pixelated
- Image can change size + dimension, depends on the type of display, square image (on mobile device) > landscape image (on desktop)
- Each “<picture”> element can have multiple sources, browser can choose between them base on device information
	- Internal media queries to download different images

### Responsive typography

- Changing font sizes within edina queries, base on viewport unit

##### Using media queries for responsive typography

- Select different font size using media queries to display appropriates sized text to the reader

##### Using viewport units for responsive typography

- Use the “vw” to directly link the size of font to viewport
	- No longer requires break point
	- However, user can no longer zoom any text using vw unit
	- Should never set text size using viewport unit alone
		- If combined with other absolute unit, it can increase readability
### The viewport meta tag

- Should use the “viewport” meta tag to set viewport width to device width + initialize document to 100% intended size
	- Mobile browser will lie about the actual width of the device
		- Could break responsive design of the site