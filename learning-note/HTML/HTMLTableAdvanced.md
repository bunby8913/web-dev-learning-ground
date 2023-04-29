# HTML table advanced features + accessibility

### Adding a caption to your table with “<caption>”

- The description of the table contents
  - Particular useful for screen readers, to grasp the summary of the table before deciding to read the table in greater details
- The caption element should be added directly under the "<table>" tag

### Adding structure with "<thead>" "<tfoot>" + "<tbody>"

- mark up header, footer + body section of the table
  - Useful for styling + layout only
- Can provide different function + styling for different sections
- "<thead>": wrap the header (first row with the column heading)
  - The table header should be just below the "<colgroup>" elements
- "<tfoot>": final row with the sums
  - Browser will always render this section at the end of the table, can be placed anywhere in the HTML code
- "<tbody>": Wrap any other part of the table, Depends on the structure, anywhere between header + footer
  - Always include in the table implicitly

### Nesting tables

- Possible to nest a table inside another, but generally not advised, confusing
  - Just add the code for another table as a table data

### Tables for visually impaired users

##### Using column + row headers

- Screen reader will connect header with cells on the same row + column
- Use header to identify + interpret data for each cells

##### The "scope" attribute

- Explicitly tells the screen reader what header the cell belongs to
- Allow the screen reader to read out rows / column at once
- "colgroup" / "rowgroup" attribute: 2 more possible "scope" attribute, Defines the scope of several heading, categorize all related headings together

##### The "id" + "header" attributes

- Add unique "id" to each "<th>" element
- Add "headers" attribute to each "<td>" element, can contain more than 1 "id" that are the headers of the cell
- To work well, each "<td>" element need at least to "id" header