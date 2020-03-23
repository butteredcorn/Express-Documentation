# Glossary

#### Application Programming Interface (API)

A third party service that hosts HTTP end points to receive and send data typically in the form of JSON.

#### Dependency Injection

The ability for the software or code that calls a function or object to pass in arguments, such as an argument for a database or a port number to start up a server. The idea behind dependency injection is to break down code into modular bits that do not depend on code that is not essential to its core function. This makes the application easier to debug and test.

#### JavaScript Object Notation (JSON)

A file format used for data exchange. Data is stored and transmitted as key/value pairs.

#### Magic Numbers

Specific values that have some sort of context and are used (repeatedly) in code.

For example, some arbitrary number like 100 may be a boundary number. This 100 would repeatedly appear in the code to enforce validation. There is meaning to this number, as it refers to some maximum. However, without definition, other developers will not really understand the context of the number. Replacing all the numbers 100 with something like BOUNDARY_MAXIMUM will give context to other developers so they understand the number's meaning.

#### Route

A route is a particular end point that handles that specific HTTP request. A route can have more than one function that handles the routing process. 

#### Routing

Routing refers to how your application handles HTTP requests.

#### Views

A type of file that can be rendered to HTML. Such file extensions include Embedded JavaScript (EJS), Handlebars, and React.

#### View Engine

A module or library that is responsible for rendering HTML from views. Typically a combination of HTML plus a programming language.