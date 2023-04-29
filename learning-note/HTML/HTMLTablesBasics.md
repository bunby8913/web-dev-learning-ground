# HTML tables basics

### What is a table

- Data made up of rows + columns
	- Indicate connection in data, allow user to quickly to look at particular data

##### How table works

- Visual association between rows + columns
- Should be accessible through screen reader + enhance the user experience

##### Table styling

- Table requires CSS styling to be aesthetically pleasing to use

##### When not to use HTML tables

- Should not be used to layout the page
	- Used to be commonly used as CSS was not well supported cross browser
	- Reduce accessibility for visually impaired users
		- Not the right tool for layout, screen reader will confuse the user
	- Table produces tag soup
		- Using table to structure website will use more complex markup structure, code being hard to write, maintain + debug
	- Not automatically responsive
		- Will not be responsive to the width of the browser
##### Table basics

- Table content are contained within “<table>” element, in the body section of the HTML
- Smallest table container are the “<td>” element (table data)
	- Each cell will line up next to each other, creating a row
- To contain all the cells in a row, wrap it in the “<tr>” element (table row)

### Adding header with “<th>” elements

- “<th>” element (table header) work exactly the same as “<td>” (table data), but are recognized as header for each column

##### The usefulness of header

- Make the table more accessible, associated data in the same row / column
	- Allow screen reader to access each individual row / column

### Allowing cells to span multiple rows + column “colspan” + “rowspan”

- Table header + cells has “colspan” + “rowspan” attributes
- Accept numerical values, indicate the # of rows / column we want to expand

### Providing common styling to columns

##### Styling without “<col>”

- Defining styling for entire column in 1 place, instead of specify styling on every data + header cells

##### Styling with “<col>”

- Contained within the “<colgroup>” element
- Each column will require its own “<col>” element
	- Even if styling is empty, should still include an empty “<col>” element
- We can use the “span” attribute to apply the column styling to multiple lines