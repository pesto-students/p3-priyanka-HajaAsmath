How Browser works

User Interface -> Browser Engine -> Rendering Engine -> Networking
					|							->Javascript Interpreter
			Data Persistence						-> UI Backend

Rendering Engine:
It renders the HTML and CSS component delivered by the web server
EX:
IE - Trident
Firefox - Gecko
Safari - WebKit
Opera - Blink

When rendering engine receives the HTML document from a web server, 
1. It created a Content tree I.e it created a tree using the DOM nodes and also parse the style elements along with the tree construction
2. The styling information and DOM tree is used to create “Render tree”
3. It then goes through “Layout Process”. Which make sure that each element is placed in exact coordinates where it should appear in the screen.
4. Finally the render tree is parsed and painted using UI backend layer

DOM tree -> Render Tree -> Layout Process -> Painting the render tree

Note: The broker does not wait until all the above process is completed. It keep on displaying the content parallely as the rendering engine completes its processing

Parser:
Parser can be divided into two parts. Lexical Analysis and Syntax analysis.
Lexical analysis break the html document into token.
Syntax analysis match the token with the syntax rules. If a token matches the rule it add a valid node to the parse tree.

Document -> Lex analysis -> Syntax analysis -> parse tree

Parsing is a iterative process. It takes a token and try to match it with a syntax rule. If none of the rule matches with the token then it raises a exception.

Translation: 
It is a process of translating a parse tree into machine code. Similar to compilation In java.

Context Free Grammar: (CFG)
Parsing is done based on syntax. The language should obey the syntax rules to be parsed. This is called Context Free Grammar/Language. Human language is not context free since it may change based on the context/situation it is spoken.

Where as programming language are context free since it follows a certain rules.

HTML - Not a Context Free Grammar:
Unlike other languages HTML cannot be parsed using conventional method of parsing. This is mainly due to the forgiving nature of HTML syntax. The language allows the developer to miss some tag which will be added by HTML implicitly.(The main reason why HTML is so popular). 
There is a formal format for defining HTML document - DTD (Document Type Definition) but this is not context free.

Unlike other parser which uses regular expression to define syntax, HTML cannot be parsed using regular expression. Due to this browsers create custom parsers for parsing HTML.

The parsing algorithm has two stages: Tokenisation and Tree Construction
 
