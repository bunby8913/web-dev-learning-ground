# Styling tables

### Styling table

##### Spacing + layout

- “table-layout”: “fixed” is usually the good value
	- Makes the table behave more predictably
		- Normally, table columns width are determined by the content they contain, could lead to unexpected result
	- “fixed” size the column according to the heading
- Set the “width” of the table to 100%, fill any box its contained in
- “border-collapse” should be set to “collapse” for standard best practice
	- Collapse the space between individual cells in the table
- “border” around the table is necessary to include header + footer + tables will look weird without them
- “padding” around “<th>” (table header) + “<td>” (table data) for more breathing room

##### Simple typography

- Can use font from google fonts by provide the link using the “<link> element
- Consider adding “letter-spacing” for heading + data for better readability
- Set the table body’s “text-align” to the centre

##### Graphics + colours

- Text should always contrast well from the background for readability

### Table styling quick tips

- Use “zebra striping” (alternate coloured row) for better readability
- Break table into different sections (head, body, foot) to provide extra places
