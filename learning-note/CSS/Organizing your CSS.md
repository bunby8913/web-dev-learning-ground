# Organizing your CSS

### Tips to keep your CSS tidy

##### Coding style guide

- Team style guideline > personal preferences
	- Consistency is the key

##### Keep it consistent

- i.e. Same naming convention, consistent method of describing colour, maintaining consistent format

##### Formatting readable CSS

- CSS does not care if rules are single vs. multi-lines
	- However, multi-lines improve readability

##### Comment your CSS

- Not only help with collaboration, but also help your to pick the project up faster
- Add comment between different section of CSS
- Should always comment decision in CSS
- Comment specified lines / ways for browser incompatibilities
- Comment URL to resources

##### Create logical section in your style sheet

- Common styling should be at the top
- Utility classes (styles that are going to be applied to multiple elements)
- Then add everything used sitewide
	- Basic page layout, header, navigation styling, etc.
- Finally, include styles for specific, page-based elements
- Easier to navigate the style sheet to the specific areas

##### Avoid overly-specific selectors

- Apply rules to as border selector as possible, avoid using overly specific selectors unless necessary

##### Break large style sheets into multiple smaller ones

- Break down large style sheets base on their functionality
	- Fewer situation when 2 people will be working on the same style sheets

### Other tools that can help

- Web community developed tools + approaches to manage large CSS projects

##### CSS methodologies

- Instead of writing own rules for CSS, consider adopting an approach designed by the community + tested with multiple projects
	- Help other developer understand your approach easier

###### OOCSS (Object-oriented CSS)

- Separate CSS into reusable objects
	- Can be re-used anywhere on the site
- The media object pattern: fixed size image / videos / other element on 1 side, flexible content on the other
- Create custom CSS base on where the style is going to be used
- Create a base style sheet and extend it to deal with small difference between different types of content
- Specifies different “class” of content (media vs. content)   

###### BEM (Block element modifier)

- Block: Stand-alone entity
	- button, menu, logo
- Element: list item / title, tied to the block is in
- Modifier: flag / element changes the styling/ behaviour
- Uses a lot of dashes + under score on the name
- BEM has strict naming conventions
- Widely used in large project

###### Other common systems

- Many other available methodologies
	- SMACSS
	- Atomic CSS
	- ITCSS
- Using methodologies may seem overly complex

###### Build systems for CSS

- Using pre-processor (runs raw file to generate style sheet) + post-processor (takes finished sheet and optimize / modify it)
- Popular pre-processor: Sass

###### Defining variables

- Define all the colour + font used in the project as settings
	- Use variable to represent them + use them in project

###### Compiling component style sheets

- Able to create many micro-style sheets
	- Separate style sheets for each components

###### Post processing for optimization

- Use post-processing tools to take out extra comments, extra space
	- cssnano

