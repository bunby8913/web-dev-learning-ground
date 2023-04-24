# Document + website structure

## Basic sections of a document

- All website should share a similar structure (apart from special case)
- Header: Big strip across top of the page
	- Heading, logo + tagline
	- Stay the same across website
- Navigation bar: Link to major section of the site
	- Menu buttons, links, tab
	- Remain consistent across sites
	- Can be considered as part of header
		- Separated might be better for accessibility
- Main content: Vary from page to page
- Sidebar: contextual to what is in the main content
	- Peripheral info, links, ads, etc.
	- Could also include secondary navigation system
- Footer: print, copyright, contact info
	- Similar to header, but content secondary information
	- For SEO purpose

## HTML for structuring content

- Use the right element for the right job
	- For accessibility + automation reasons
- HTML provide tags to mark different section
	- header: <header>
	- navigation bar: <nav>
	- Main content: <main>
		- Also contains <article> <section> <div>
	- sidebar: <aside>, could also be part of <main>
- foster: <footer>


## HTML layout elements in more detail

- <main>: Content unique to the page, once per page
	- Shouldn’t be nested with other elements
- <article>: Block of related content, can be isolated
- <section>: grouping single part of page to a single functionality
	- Begin each <section> with a heading
- Each article can contain multiple sections, and vice versa
- <aside>: Not directly related to the main content, but provide additional information
- <header>: Introductory content
	- If a child of <body>, defines the global header for the page
	- If a child of <section> / <article>, define specific header for each section
- <nav>: main navigation
	- Should not include secondary navigation, usually part of <aside>
- <footer>: group of content at the end of the page

### Non-semantic wrappers
- Group set of element together, to affect them all in CSS / JavaScript
- Should use them with “class” attribute, to be able to referenced by CSS / JavaScript
- <span>: In-line Non-semantic element
	- Only use if there are no better semantic text wrapper / don’t want add specific meanings
- <div>: Block level non-semantic element

### Line breaks + horizontal rules <br> + <hr>

- <br />: the line break element
	- Line break in a paragraph
	- Placed within a p tag 
- <hr />: Horizontal rule between different sections
	- Draw a horizontal line
	- Placed outside the paragraph

## Planning a simple website

- Information architecture: Organizing information / content / functionality to provide best, usable + findable user experience
1. Make sure to use all the sections available, contact information in footer
2. Draw rough sketch of the structure of the page
3. Brain content to have on the website (in a list)
4. Sort all the contents into groups (card sorting)
5. Sketch a rough site map, bundle content into pages, connect pages together using arrows
	- have a home page and start from there
