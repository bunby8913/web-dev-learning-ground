# CSS Normal flow

- How webpage elements layout without any changes
- Reminder: should always start with well-structured HTML

### How are elements laid out by default

- Block level elements content fills given space by the parent element
  - Content always increase in the block dimension
- "display" value should be default to "inline"
  - Some elements has "width" + "height" to changes its dimension in the "inline" display styles
- Block-level elements are in block flow direction by default
  - Each element on a new line under the previous
  - Aware margin collapsing on the vertical direction
- Inline elements all sits on the same line, adjust / wrap text content to stay on the same line, if not enough space, the content will overflow to the next line