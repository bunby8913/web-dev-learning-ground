# HTML text fundamentals notes

- Every text must be wrapped in tag

### Implementing structural hierarchy

-  Single h1 tag per page
- No more than 3 different heading per page

### Why we need structure?

- - Improve readability and user experience
- SEO, engine often use header as keyword, influencing page’s search ranking
- Accessibilities, allow screen reader to pick out header to provide text context
- Easier to find content in CSS + JavaScript

### Why we need semantics?
- Use the correct elements to provide correct context/meaning to user
- I.e. h1: the top level heading of the page

## Lists

### Unordered <ul>

- When the order of the list doesn’t matter
- Each element of the list is wrapped in <li> tag

### Ordered <ol>

- Wrap each elements using the <li> tag
- Each elements are listed with index value in front of them

### Nesting lists
- Can nest one list inside another one

## Emphasis + importance

- Want mark certain word as important/uniquely

### Emphasis <em>

- stress words by putting them in italics
- Recognized by screen reader, can be read out differently
- Browser render text in emphasis tag as italic, for italic effect only, should use <span> or <i> tags (or CSS)

### Strong importance <strong>

- Emphasize important words in bold
- Recognized by screen reader, can be read differently
- Similar to Emphasis, if only for bold styling, should use <span> or <b> tags (or CSS)

### Italic, bold, underline <b>, <i>, <u> (Legacy)

- Created when CSS support was poor
- Only affect presentation, not semantics (Presentational elements)
- Keep in mind that underline is associated with hyperlink