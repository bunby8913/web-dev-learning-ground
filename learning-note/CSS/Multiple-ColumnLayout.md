# Multiple-Column layout

### Styling the columns

- To set the # of columns for the text use "column-count: "
  - Column will have flexible width
- To set a fixed width for the column, use "column-width: "
  - Takes any unit + values
  - Does not set the absolute width of the column, extra space will still be shared between all columns
- To change the gap between each column, use "column-gap: "
- To add rules between columns, use "column-rule"
  - shorthand for color, style + width

### Spanning columns ("column-span")

- Some elements can span across all columns, either none or all

### Columns + fragmentation

- Content in multi-column are fragmented
  - Must break the content

##### Fragmented boxes

- Breaking could lead to poor readability

##### Setting ("break-inside")

- Should set the "break-inside: avoid" to avoid internal breaking 