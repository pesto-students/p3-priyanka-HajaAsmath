# How Browser works

### Basic Flow
<img width="504" alt="Broser Flow" src="https://user-images.githubusercontent.com/26501453/174451508-3d4ad3f6-c80e-43e5-a610-3b3e5620b5ef.png">

### Rendering Engine:
It renders the HTML and CSS component delivered by the web server
EX:
- IE - Trident
- Firefox - Gecko
- Safari - WebKit
- Opera - Blink


##### When rendering engine receives the HTML document from a web server, 
1. It created a Content tree I.e it created a tree using the DOM nodes and also parse the style elements along with the tree construction
2. The styling information and DOM tree is used to create “Render tree”
3. It then goes through “Layout Process”. Which make sure that each element is placed in exact coordinates where it should appear in the screen.
4. Finally the render tree is parsed and painted using UI backend layer

DOM tree -> Render Tree -> Layout Process -> Painting the render tree

Note: The broker does not wait until all the above process is completed. It keep on displaying the content parallely as the rendering engine completes its processing

## Parser:
Parser can be divided into two parts. Lexical Analysis and Syntax analysis.
Lexical analysis break the html document into token.
Syntax analysis match the token with the syntax rules. If a token matches the rule it add a valid node to the parse tree.

Document -> Lex analysis -> Syntax analysis -> parse tree

Parsing is a iterative process. It takes a token and try to match it with a syntax rule. If none of the rule matches with the token then it raises a exception.

### Translation:
It is a process of translating a parse tree into machine code. Similar to compilation In java.

### Context Free Grammar: (CFG)

Parsing is done based on syntax. The language should obey the syntax rules to be parsed. This is called Context Free Grammar/Language. Human language is not context free since it may change based on the context/situation it is spoken.

Where as programming language are context free since it follows a certain rules.

### HTML - Not a Context Free Grammar:

Unlike other languages HTML cannot be parsed using conventional method of parsing. This is mainly due to the forgiving nature of HTML syntax. The language allows the developer to miss some tag which will be added by HTML implicitly.(The main reason why HTML is so popular). 
There is a formal format for defining HTML document - DTD (Document Type Definition) but this is not context free.

Unlike other parser which uses regular expression to define syntax, HTML cannot be parsed using regular expression. Due to this browsers create custom parsers for parsing HTML.

### HTML Parsing:

The parsing algorithm has two stages: Tokenisation and Tree Construction
Tokenisation is same as lexical analysis. It breaks down the document and form Tokens.
Tree Construction uses the token and form parser tree.

### CSS Parsing:
Unlike HTML, CSS can be parsed using a context free grammar parser. The syntax can be defined using regular expressions.
Webkit uses Flex and Bison parser generator to create parsers automatically from the CSS grammar files. 

### Order of processing scripts and style sheets:

#### Scripts:
The model of web is synchronous. When parsing a document if a script is encountered the script is executed first before continuing the execution of the rest of the document. This was the case until HTML4. HTML5 introduced scripts to be executed asynchronously which means it will be executed in a different thread.

#### Style sheets:
Stylesheets are parsed parallel to document parsing. This may cause issues at some occasion when a script is requesting for a style which is not yes parsed. So parser blocks the all the script which required style sheet which is yet to be parsed.
 

## Rendering:
While DOM tree is constructed the browser constructs another tree called render tree. The tree is a visual element in order of which they will be displayed. It is the visual representation of the document.
The rendering engine creates placeholder rectangles for the DOM elements with the dimensions mentioned in the stylesheet.

## Layout:
When render tree is created the element in the render tree doesn’t have position and size. Calculating the value is the process of creating layout. 

HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.

## Painting: 

Painting is the process of traversing the render tree and display content in screen with certain design. It uses painting infrastructure component. 

The painting process is done in the order in which the elements are stacked.
 The stacking order of a block renderer is:
* background color
* background image
* border
* children
* outline
