# What we are learning 
 1. VS Code 
 2 . HTML
 3. CSS
 4. JS
 5. DOM
 6. Assignments

 | Normal Life                         | Smart Life                               |
|-------------------------------------|------------------------------------------|
| 1. Tags                             | 1. External styles,classes and ids       |
| 2. Attributes                       | 2. Flexbox                               |
| 3. Inline styles(bg color,fonts,..) | 3. Connecting JS to HTML (Selectors,DOM) |
| 4. JS Basics,data types,loops       | 4. Chrome Dev tools                      |

## What we're building
- Zerodha Clone
 - Stage 1 (HTML)
 - Stage-2 (HTML+CSS)
 - Stage-3  (HTML+CSS+JS)

### What are browsers ?
 Browsers are software applications that allow users to access and navigate the World Wide Web. They interpret and display web content, including text, images, videos, and other multimedia, by fetching data from web servers and rendering it in a user-friendly format.

Some of the most popular web browsers include Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera. Browsers provide features like bookmarks, history, tabbed browsing, private browsing modes, and extensions or add-ons to enhance functionality. They also support various web technologies such as HTML, CSS, JavaScript, and more, enabling users to interact with and consume content available on the internet.

### How do they render websites ?

Web browsers render websites by following a series of steps that involve fetching, parsing, interpreting, and displaying the content retrieved from web servers. Here's a simplified overview of the process:

1. **Fetching Resources:** When a user enters a URL or clicks a link, the browser sends a request to the respective web server for the web page and its associated resources (HTML, CSS, JavaScript, images, videos, etc.).

2. **HTML Parsing:** Upon receiving the HTML file, the browser starts parsing it. HTML defines the structure and content of the web page. The browser builds the Document Object Model (DOM) tree, a representation of the structure of the page, by breaking down the HTML into a hierarchical structure of elements.

3. **CSS Parsing and Styling:** While parsing the HTML, the browser also fetches linked CSS files or embedded CSS and begins parsing them. CSS (Cascading Style Sheets) defines the visual presentation and layout of the elements. The browser creates a CSS Object Model (CSSOM) based on the CSS rules, associating styles with the respective elements in the DOM.

4. **Rendering:** With the DOM and CSSOM constructed, the browser proceeds to create the render tree. It combines the DOM and CSSOM to create a render tree, which contains only the elements necessary to display the content visually. This process involves determining the visual properties of each element, such as size, position, color, and visibility.

5. **Layout:** The browser calculates the layout of the elements based on the render tree. It determines the exact position and size of each element on the screen, considering factors like viewport size, CSS box model, and any specified styling.

6. **Painting:** Once the layout is computed, the browser paints the content on the screen by converting the elements into pixels according to their specified styles and positions.

7. **Rendering Updates:** As users interact with the web page, such as scrolling or clicking, the browser might need to update the rendering. It optimizes this process by reusing cached resources and minimizing redundant calculations to ensure a smooth user experience.

This rendering process involves multiple steps that browsers execute rapidly to display web content accurately and efficiently. Various optimizations and techniques are employed by browser developers to enhance performance and improve the overall user experience.

### How much of this do we actually use in the industry

HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript (JS) are core technologies used in web development, each serving its own distinct purpose:

1. **HTML (HyperText Markup Language):**
   - Purpose: HTML is the standard markup language used to create the structure and content of web pages. It defines the elements that make up a web page, such as headings, paragraphs, images, links, forms, and more.
   - Role: HTML provides the basic structure of a webpage, organizing content into a structured format that browsers understand. It creates the backbone upon which the content is presented.

2. **CSS (Cascading Style Sheets):**
   - Purpose: CSS is a style sheet language used for describing the presentation of HTML documents. It enables the separation of content from presentation, allowing developers to control the layout, design, and visual appearance of web pages.
   - Role: CSS is responsible for styling HTML elements, defining how elements should look, their layout, colors, fonts, spacing, and more. It enhances the visual appeal and user experience of a website.

3. **JavaScript (JS):**
   - Purpose: JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web pages. It is widely used for client-side scripting, allowing developers to create responsive and interactive web applications.
   - Role: JavaScript enables functionalities such as form validations, animations, DOM manipulation (changing HTML/CSS dynamically), event handling, fetching data asynchronously (AJAX/fetch API), and much more. It allows web pages to react to user actions and modify content dynamically without needing to reload the entire page.

In summary, HTML structures content, CSS styles and formats that content, and JavaScript adds interactivity and dynamic behavior to web pages. Together, these three technologies work in harmony to create rich and interactive web experiences.
 1.HTML -> Very minimal
 2. CSS -> minimal
 3. JS  -> heavy

# Integrated Development Environment

 IDE stands for Integrated Development Environment. It's a software application that provides comprehensive facilities to computer programmers for software development. An IDE typically includes a source code editor, build automation tools, and a debugger, often bundled together to provide a streamlined and efficient environment for developers to create, test, and debug their software applications.

Here are the key components and functionalities typically found in an IDE:

1. **Source Code Editor:** An IDE includes a text editor with features tailored for writing and editing code. It usually offers syntax highlighting, code completion, auto-indentation, code formatting, and other tools to assist developers in writing code efficiently. Examples of popular text editors within IDEs include Visual Studio Code, Sublime Text, or Atom.

2. **Build Automation Tools:** IDEs often provide tools for compiling, building, and running applications. They might include integrated compilers, build systems, and support for managing dependencies. These tools automate the process of transforming source code into executable programs or deployable packages.

3. **Debugger:** Debugging is an essential part of software development. IDEs come with built-in debuggers that allow developers to set breakpoints, inspect variables, step through code execution, and trace errors or bugs in their programs. Debuggers help identify and resolve issues within the code.

4. **Version Control Integration:** Many IDEs integrate with version control systems like Git, SVN, or Mercurial. They offer features to manage code repositories, commit changes, pull, push, and merge code branches, facilitating collaboration among developers working on the same project.

5. **Project Management:** IDEs often provide tools for organizing and managing projects. They allow developers to create, open, save, and manage multiple files within a project. Project management features may include file navigation, project templates, and tools for managing project configurations.

6. **Language Support and Plugins:** IDEs support various programming languages and offer plugins or extensions to enhance functionality. They provide language-specific tools, libraries, and frameworks tailored for different programming languages, enabling developers to work effectively in their preferred language.

7. **User Interface:** IDEs usually have a user-friendly interface with customizable layouts, allowing developers to arrange tools, panels, and windows according to their preferences. They offer themes and customization options to personalize the appearance and improve user experience.

Some popular Integrated Development Environments across different programming languages include:
- Visual Studio (for C#, .NET, etc.)
- IntelliJ IDEA (for Java, Kotlin, etc.)
- PyCharm (for Python)
- Eclipse (for Java, C/C++, etc.)
- Xcode (for iOS/macOS development)
- Android Studio (for Android app development)

Overall, an IDE serves as a powerful and centralized platform for developers, providing a suite of tools and features to streamline the software development process and improve productivity.