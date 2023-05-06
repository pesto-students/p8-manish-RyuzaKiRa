# Pesto Week 1 Assignment

Solution to 1st week of problem statements

## How to open/run the solution

Simply navigate to the week-1 folder and double-click the "Week-1.html" to open it in any of your browsers.
Week-1 folder contains solution to Exercise 1.2.

# Exercise 1.1

When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.
 * What is the main functionality of the browser?
 * High Level Components of a browser.
 * Rendering engine and its use
 * Parsers (HTML, CSS, etc)
 * Script Processors
 * Tree construction
 * Order of script processing
 * Layout and Painting

Solution:-
 When any user enters the URL in the browser, the browser searchs for the websites IP address. It can be found in any cache file, if not, a DNS query request is made to find the IP address that host the domain name.

 Main functionality: Browser fetches data from the servers and provide it to the user in a presentable manner.

 High level components:
    The browser's main components are :

    1. The user interface:

    This includes the things that user sees in the browser from his point of view, such as address bar, back button, forward button etc.

    2. The browser engine:
    
    Manages actions between the UI and the rendering engine.

    3. The rendering engine :

    It is responsible for displaying requested content in a formatted/presentable manner.

    4. Networking:

    For network calls such as HTTP requests, such a GET or POST API requests

    5. UI backend:

    Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

    6. JavaScript interpreter.

    Used to parse and execute JavaScript code.

    7. Data storage.

    Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem to store data locally for easy and quick fetch.

 Rendering engines and uses:

 It is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated.

 Parsers (HTML, CSS, etc):

 The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. CSS parsers converts text into the CSS Object Model, then uses it for styling layouts.

 