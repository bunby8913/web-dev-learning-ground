# HTML advanced text formatting

## Description lists <dl>

- Combine items + associated descriptions
	- Terms + definitions
	- Question + answer
- Wrap terms using <dt>
- Represent definition <dd>

### Multiple descriptions for one term
- each term can have multiple definition

## Quotations

### Block quotes <blockquote>

- Quote a block level content
- Use “cite” attribute to points to the source of the quote
- Will default render as indented paragraph

### Inline quotations <q>

- Also can use “cite” attribute to points to source
- Will be rendered as normal text with quotation around them

### Citations <cite>

- Cannot natively display citation as part of the page
- <cite> element are used to contain title of the resource being quoted
	- Can link the <cite> element to the quote source

## Abbreviations <abbr>

- Provide full expansion of a term on first use
- Tells the browser how to render the content
- Inform the user the definition of the abbreviation
- Wrap any abbreviations in <abbr> tag

## Marking up contact details <address>

- Wrap around contact details
	- Name, city, street name, country, phone number, email, etc.
- Can contain any paragraph + list + anchor elements but not required
- Should only be used no the nearest <body> + <article> elements

## Superscript + subscript <sup> + <sub>


## Representing computer code <code>

- # of available options
	- <code>: Generic code
	- <pre>: For retaining whitespace in code block
		- Wrap around the <code> block
	- <var>: Marking variable names
	- <kbd>: Marking keyboard input 
	- <same>: Marking output of a program

## Marking up times + dates <time>
- Use the “datetime” attribute to store the date and time
- Unambiguous, machine readable format
- “W”: represent week
- “T”: represent time
- “+”: represent timezone offset