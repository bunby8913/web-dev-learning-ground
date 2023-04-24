# From object to iframe - other embedding technologies

### A short history of embedding

- Used to be popular to combine small part of website in individual HTML page, and embed them on the master document (frameset)
  - Allow developer to specify area each screen of the frame occupied
  - Better for doanload speed
- Frameset died due to the many issue it has, soon emerged the plugin technologies
  - Allow developer to embed Java applets + flash to HTML pages using the <object> element (or lesser used <embed> element)
  - However, bad for accessibilities, security, file size, etc.
- Finally modern standard supports <iframe> element, embed entire web document inside another one

### iframes in details

- Essential attributes for iframes
  - "border: none": Displayed the embedded document without a border surrounding (usually more desirable)
  - allowfullscreen: Able to placed the browser in full screen
  - "src": Contain the URL to the document
    - Good practice to set the source after the page is loaded using JavaScript
      - Decrease official page load time, increase SEO metrics
  - "width" + "height": Specify the width + height of the document
  - "sandbox": Requests heightened security settings

##### Security concerns

- iframes has been common target (attack vector) for cyber attacks, maliciously modify the webpage, or trick people revealing sensitive information
- Clickjacking: Embed invisible iframe into document, used to capture user's interaction, steal sensitive data
- "x-frame options": set as "DENY" Prevent people from embedding the MDN page into other pages
  - Disallow them from being embedded inside
  - Prevent content stealing + clickjacking

###### Only embed when necessary

- Never be too cautious
  - If embedding someone else's content, assume it's dangerous until proven otherwise
- Aware intellectual property issues
  - Never display anything you don't own the copyright, or without written, unequivocal permission
- Obey license terms, credit the author

###### Use HTTPS

- Encrypted version of HTTP
  - Reduce chance that remote content has been tampered
  - Prevent embedded content from accessing the parent document, vice versa
- Service usually offer HTTPS support without additional cost / effort

###### Always use the "sandbox" attribute

- Give attackers as little power as possible
  - Only the permission to do what is suppose to do
- Otherwise could potentially run JavaScript, Submit forms + trigger popup, etc.
  - Can add individual permission through the "sandbox" attribute
    - Never add both "allow-script" + "allow-same-origin"
      - Malware can bypass same-origin policy + use JavaScript to turn off sandbox

###### Configure CSP directives

- CSP: Content security policy, Provide set of HTTP header to improve HTML security
  - By sending appropriate x-fame-option headers, can prevent other site embedding your contents

### The <embed> + <object> elements

- General purpose embedding tools for embedding external content, i.e. PDFs
  - Usually better to link to PDF rather than embed them on your sites
- Historically handled by plugins, but now obsolete + not supported by modern browsers
- Keep in mind PDF pose many accessibility challenges

