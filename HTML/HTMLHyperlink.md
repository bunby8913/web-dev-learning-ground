# HTML hyperlinks

### What is a hyperlink?

- Link document, specific part of document, make app available at app address
	- HTML file, text file, image, text docs, video + audio, if cannot be opened on the web, will ask the user to download the file
- Goes to another web address

## Anatomy of a link <a>

- Wrapping text/other content in anchor tag
- Define link using href (hyperlink reference) attribute

### Block level links

- Block element can be links

### Image links

- can wrap the anchor tag around image, to turn image into a link

### Adding supporting information with the title attribute

- Title: additional information about the link, displayed when hovered over the link
	- Title is not accessible through touchscreen + keyboard, if title is really important, should display it as plain text

## A quick primer on URLs + paths

- URL: Uniform resource locator, use path to find file
- The root folder should contain index.html and other html file
- Other resources (image, pdf, project, etc.) should be contained in separate folders
	- Can have multiple index.html, as long they are in different folders
- using “../“ to move up a directory
	- Can combine multiple to move up directives further

### Document fragments

- Link to specific part of an HTML document
- Assign id to the element links to
	- Usually a specific heading
- include the the elements’ id in href using “#”
- Can use document fragment reference internally within a document

### Absolute vs. Relative URLs

- Absolute URL: Absolute location on the web
	- Domain name + specific protocol
	- Most web server have a index.html as landing page, do not need to specify it
- Relative URL: Relative to the file linking from
	- Specific the file location within the server
	- Depends on the location of the html file + the file structure

## Link best practices

### Use clear link wording

- Make links accessible to all readers
	- Use descriptive text to describe every link
- Always wrap anchor with semantic tags
- Don’t repeat URL as link text
- Avoid link/links to (unnecessary description)
- Keep text As short as possible
- Different text for different link

### Linking to non-html resources

- Add clear wording to avoid confusion
	- Indicate file type + file size

### Use the download attribute when linking to a downloadable file

- download provide default save name for the file

## Email links (mailto:) URL scheme

- open outgoing message
- The email address is not necessary

### Specifying details

- Can provide any mail header field
	- cc, bcc, subject, body
- Use “?” To start adding details, separate main URL from field values
- Use “%20” to represent space
- Use “&” to connect different details

