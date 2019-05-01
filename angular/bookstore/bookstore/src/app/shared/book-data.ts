import { Book } from './book';
import { BookBinding } from './book-binding'

export const BOOK_DATA = [
  new Book('1484223063', 'Adam Freeman', 'Pro Angular', 49.99, 'Apress', 2017, BookBinding.PAPERBACK, 778, 'Angular 5 updates for this book are now available. Follow the Download source code link for this book on the Apress website. Get the most from Angular 2, the leading framework for building dynamic JavaScript applications. Best-selling author Adam Freeman begins by describing the MVC pattern and the benefits it can offer and then shows you how to use Angular in your projects, starting from the nuts-and-bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need. Each topic is covered clearly and concisely and is packed with the details you need to learn to be truly effective. The most important features are given a no-nonsense in-depth treatment and chapters include common problems and details of how to avoid them. What you’ll learn Gain a solid architectural understanding of the MVC Pattern Learn how to create rich and dynamic web app clients using Angular 2 Learn how to extend and customize Angular 2 Learn how to test your Angular 2 projects Who this book is for Web developers with a foundation knowledge of HTML and JavaScript who want to create rich client-side applications.', 'https://images-na.ssl-images-amazon.com/images/I/41Sa4r%2B1KhL.jpg'),
  new Book('1542916674', 'Greg Lim', 'Beginning Angular 2 with Typescript', 19.99, 'CreateSpace Independent Publishing Platform', 2017, BookBinding.PAPERBACK, 164, '*Updated to Angular 4! Angular 2 is one of the leading frameworks to develop apps across all platforms. Reuse your code and build fast and high performing apps for any platform be it web, mobile web, native mobile and native desktop. You use small manageable components to build a large powerful app. No more wasting time hunting for DOM nodes! In this book, we take you on a fun, hands-on and pragmatic journey to master Angular 2 from a web development point of view. You\'ll start building Angular 2 apps within minutes. Every section is written in a bite-sized manner and straight to the point as I don’t want to waste your time (and most certainly mine) on the content you don\'t need. In the end, you will have what it takes to develop a real-life app. About the Reader This book is for developers with basic familiarity with HTML, CSS, Javascript and object-oriented programming. No TypeScript or AngularJS experience needed. About the Author Greg Lim is a technologist and author of several programming books. Greg has many years in teaching programming in tertiary institutions and he places special emphasis on learning by doing. Table of Contents Introduction Creating and Using Components Bindings Working with Components Conditional Rendering, Pipes and Ng-Content Template Driven Forms Model Driven Forms Introduction to Observables Getting Data From RESTful APIs with Observables Routing Structuring Large Apps With Modules C.R.U.D. with Firebase', 'https://images-na.ssl-images-amazon.com/images/I/41H4EsdBZgL.jpg'),
  new Book('1546376232', 'Nathan Murray, Ari Lerner, Felipe Coury, Carlos Taborda', 'ng-book: The Complete Guide to Angular 4', 59.00, 'CreateSpace Independent Publishing Platform', 2017, BookBinding.PAPERBACK, 622, 'ng-book. The in-depth, complete, and up-to-date book on Angular 4. Become an Angular 4 expert today. Updated for Angular 4, Angular CLI, and Community Style Guide Ready to master Angular 4? What if you could master the entire framework - with solid foundations - in less time without beating your head against a wall? Imagine how quickly you could work if you knew the best practices and the best tools? Stop wasting your time searching and have everything you need to be productive in one, well-organized place, with complete examples to get your project up without needing to resort to endless hours of research. You will learn what you need to know to work professionally with ng-book: The Complete Book on Angular 4. Get up and running quickly The first chapter opens with building your first Angular 4 app. Within the first few minutes, you\'ll know enough to have an app running Lots of Sample Apps and Code When you buy ng-book, you\'re not buying just a book, but dozens of code examples. Every chapter in the book comes with a complete project that uses the concepts in the chapter. The code is available for download, free from our website. Table of Contents Writing your first Angular 4 web application How Angular Works Built-in Directives Forms in Angular 2 HTTP and APIs Routing Dependency Injection Data Architecture in Angular 2 Data Architecture with Observables and RxJS Data Architecture with Redux Redux and TypeScript Data Architecture with Redux Advanced Components Testing Converting an Angular 1 app to Angular 4 Comprehensive You\'ll learn core Angular 4 concepts - from how Angular works under the hood, to rich interactive components, from in-depth testing to real-world applications Best Practices Learn Angular 4 best practices, such as: testing, code organization, and how to structure your app for performance. We\'ll walk through practical, common examples of how to implement complete components of your applications Example Apps included in the book The book comes with sample apps that show you how to create: A component-based Reddit clone A real-time chat app using RxJS Observables A YouTube search-as-you-type app A Spotify search for tracks with playable song preview Plus lots more mini-examples that show you how to write Components, how to use Forms, and how to use APIs The code examples currently have over 5,500+ lines of runnable code (TypeScript, non-comment lines) What our Customers Say "Fantastic work guys! I have no idea where I\'d be with Angular without ng-book. You guys have made this SOOOO much easier to learn and keep up with. Thanks again..you guys are awesome!" -- Jacob Cheriathundam "Just finished ng-book2. I think it is the best learning material one can find about Angular today." -- Jegor Uglov FAQ What version does the book cover? This revision of the book covers up to angular-4.1.0 . An updated version of the code is available for free at our website. Do I have to know Angular 1? Nope! We don\'t assume that you\'ve used Angular 1. This book teaches Angular 4 from the ground up. Of course, if you\'ve used Angular 1, we\'ll point out common ideas (because there are many), but ng-book stands on its own Is ng-book an upgrade to ng-book 1? No. This is a completely new book and shares no content or code with ng-book 1. Angular 1 and Angular 2+ are two different frameworks and ng-book 1 and ng-book are two different books.', 'https://images-na.ssl-images-amazon.com/images/I/5192lzDZ7zL.jpg'),
  new Book('1617293318', 'Jeremy Wilken', 'Angular in Action: Covers Angular 2', 44.99, 'Manning Publications', 2018, BookBinding.PAPERBACK, 310, 'When developers move beyond building simple web sites or small applications, things get complicated. Managing data gets messy, handling browser incompatibilities takes time, juggling competing user interactions and integrating the work of multiple developers gets tricky. The Angular 2 framework handles these common problems, making it ideal for writing large-scale web applications that can be maintained, extended, and tested. Because it\'s popular, it offers a well-supported code base, vibrant community, and rich ecosystem. Best of all, Angular 2 emphasizes performance and focuses on mobile apps by being compact and memory efficient. Angular in Action teaches readers modern application development with Angular 2. It begins with the basics, such as key features of TypeScript, newer ES6 syntax and concepts, and details about the tools needed to write professional Angular 2 applications. Next, readers learn how to build an Angular 2 application from scratch. Using many examples, the book teaches the core parts of Angular 2, such as Components, the Router, and Services. It also covers techniques like server-side rendering and incrementally adding Angular 2 to existing Angular applications. Finally, if offers insight into advanced skills, such as testing, tooling options, and performance tuning. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.', 'https://images-na.ssl-images-amazon.com/images/I/516HHf6JIKL.jpg'),
  new Book('1617295345', 'Yakov Fain, Anton Moiseev', 'Angular Development with Typescript', 49.99, 'Manning Publications', 2018, BookBinding.PAPERBACK, 475, 'This practical book covers real-world development concerns like state management, data and views, user interaction with forms, and communicating with servers, as well as testing and deploying your applications. This new edition has been fully revised to cover the latest Angular CLI along with current best practices and updates to Angular 5. Angular Development with Typescript, Second Edition is an intermediate-level tutorial that introduces Angular and TypeScript to developers comfortable with building web applications using other frameworks and tools. You\'ll start by exploring what makes Angular different by building an online auction app. As you move through the chapters, you\'ll explore TypeScript as you learn to write type-aware classes, interfaces, generics, and more. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.', 'https://images-na.ssl-images-amazon.com/images/I/51lAL5ohHrL.jpg'),
  new Book('1785880233', 'Mathieu Nayrolles, Rajesh Gunasundaram, Sridhar Rao', 'Expert Angular', 49.99, 'Packt Publishing - ebooks Account', 2017, BookBinding.PAPERBACK, 454, 'Learn everything you need to build highly scalable, robust web applications using Angular release 4 About This Book Apply best practices and design patterns to achieve higher scalability in your Angular applications Understand the latest features of Angular and create your own components Get acquainted with powerful, advanced techniques in Angular to build professional web applications Who This Book Is For This book is for JavaScript developers with some prior exposure to Angular, at least through basic examples. We assume that you\'ve got working knowledge of HTML, CSS, and JavaScript. What You Will Learn Implement asynchronous programming using Angular Beautify your application with the UI components built to the material design specification Secure your web application from unauthorized users Create complex forms, taking full advantage of 2-way data binding Test your Angular applications using the Jasmine and Protractor frameworks for better efficiency Learn how to integrate Angular with Bootstrap to create compelling web applications Use Angular built-in classes to apply animation in your app In Detail Got some experience of Angular under your belt? Want to learn everything about using advanced features for developing websites? This book is everything you need for the deep understanding of Angular that will set you apart from the developer crowd. Angular has introduced a new way to build applications. Creating complex and rich web applications, with a lighter resource footprint, has never been easier or faster.', 'https://images-na.ssl-images-amazon.com/images/I/51f2a05vJVL.jpg'),
  new Book('1786461722', 'Mathieu Nayrolles', 'Angular 2 Design Patterns and Best Practices', 44.99, 'Packt Publishing - ebooks Account', 2018, BookBinding.PAPERBACK, 504, 'Key Features Get to grips with the benefits and applicability of using different design patterns in Angular 2 with the help of real-world examples Identify and prevent common problems, programming errors, and anti-patterns Packed with easy-to-follow examples that can be used to create reusable code and extensible designs Book Description This book is an insightful journey through the most valuable design patterns, and it will provide clear guidance on how to effectively use them in Angular 2. You will explore some of the best ways to work with Angular 2 and use it to meet the stability and performance required in today\'s web development world. You\'ll get to know some Angular best practices to improve your productivity and the code base of your application. We will take you on a journey through Angular 2 designs for the real world with a combination of case studies, design patterns to follow, and anti-patterns to avoid. By the end of the book, you will understand the various features of Angular 2 and will be able to apply well-known, industry-proven design patterns in your work. What you will learn Understand Angular 2 design patterns and anti-patterns Implement the most useful GoF patterns for Angular 2 Explore some of the most famous navigational patterns for Angular 2 Get to know and implement stability patterns Explore and implement operations patterns Explore the official best practices for Angular 2 Monitor and improve the performance of Angular 2 applications', 'https://images-na.ssl-images-amazon.com/images/I/51dPSOrYveL.jpg'),
  new Book('1787125270', 'Minko Gechev', 'Getting Started with Angular - Second Edition', 29.99, 'Packt Publishing - ebooks Account', 2017, BookBinding.PAPERBACK, 278, 'Want to build quick and robust web applications with Angular? This book is the quickest way to get to grips with Angular and take advantage of all its new features. Key Features Guide through the changes made from AngularJS with side-by-side code samples to help demystify the Angular learning curve Tips to start working with Angular’s new method of implementing directives Using TypeScript to write modern, powerful Angular applications Understanding the change detection method and other architectural changes Working with the new router in Angular Using new features of Angular, including pipes Understanding updated features of Angular, including forms, services and dependency injection Keeping new applications SEO-friendly with server-side rendering Enhancing applications using Ahead-of-Time compilation and Web Workers Who is this book for Developers who are familiar with AngularJS and JavaScript Anyone looking to learn all about Angular IT professionals interested in assessing changes to Angular before moving over What will you learn You’ll learn how to take full advantage of Angular, with updates on the latest API changes introduced by Angular 2 and 4 and a crash-course on TypeScript. Whether building a new app with Angular ASP.NET or upgrading from Angular JS with ngUpgrade, this book will give you all the tools to complete your project. Who is the Author Minko Gechev is a software engineer who strongly believes in open source software. He has developed numerous such projects including codelyzer, the AngularJS style guide, aspect.js and many others, and is one of the coauthors of the official Angular style guide.', 'https://images-na.ssl-images-amazon.com/images/I/51nhwS3igML.jpg'),
  new Book('1787288900', 'Victor Savkin', 'Angular Router', 34.99, 'Packt Publishing - ebooks Account', 2017, BookBinding.PAPERBACK, 118, 'Key Features Written by the creator of the Angular router, giving you the best information straight from the source Get full coverage of the entire Angular Router library and understand exactly how every command works Essential for all serious users of Angular who need to manage states within their applications Book Description Managing state transitions is one of the hardest parts of building applications. This is especially true on the web, where you also need to ensure that the state is reflected in the URL. In addition, you might want to split applications into multiple bundles and load them on demand. Doing this transparently isn’t easy. The Angular router solves these problems. Using the router, you can declaratively specify application states, manage state transitions while taking care of the URL, and load bundles on demand. This book is a complete description of the Angular router written by its designer. It goes far beyond a how-to-get-started guide and talks about the library in depth. The mental model, design constraints, and the subtleties of the API-everything is covered. You’ll learn in detail how to use the router in your own applications. Predominantly, you’ll understand the inner workings of the router and how you can configure it to work with any edge cases you come across in your sites. Throughout the book, you’ll see examples from real-world use in the MailApp application. You can view the full source of this application and see how the router code works to manage the state of the application and define what is visible on screen. Reading this book will give you deep insights into why the router works the way it does and will make you an Angular router expert. What you will learn Understand the role of the Angular router and how to make the most of it Build and parse complex URLs Learn about the componentless and empty-path routes Take control of states in your application Make use of imperative navigation Understand guards and how they can benefit your applications Optimize configuration and run tests on your routing About the Author Victor Savkin has been on the Angular team since the inception of Angular 2. He developed dependency injection, change detection, forms, and the router. Victor has worked for many years as a software architect helping to build large Angular applications. He gives talks and writes articles on front-end architectures for InfoQ, DZone, Hackerbits, and his blog. Nrwl.io - Angular consulting for enterprise customers, from core team members Victor is co-founder of Nrwl, a company providing Angular consulting for enterprise customers, from core team members. Table of Contents What Do Routers Do? Overview URLs URL Matching Redirects Router State Links and Navigation Lazy Loading Guards Events Testing Router Configuration Fin', 'https://images-na.ssl-images-amazon.com/images/I/412C6svdATL.jpg'),
  new Book('1788293762', 'Victor Savkin, Jeff Cross', 'Essential Angular', 29.99, 'Packt Publishing - ebooks Account', 2017, BookBinding.PAPERBACK, 108, 'Key Features Written by two Angular core contributors A complete overview of the key aspects of Angular Up to date with the latest Angular release Book Description Essential Angular is a concise, complete overview of the key aspects of Angular, written by two Angular core contributors. The book covers the framework\'s mental model, its API, and the design principles behind it. This book is fully up to date with the latest release of Angular. Essential Angular gives you a strong foundation in the core Angular technology. It will help you put all the concepts into the right places so you will have a good understanding of why the framework is the way it is. Read this book after you have toyed around with the framework, but before you embark on writing your first serious Angular application. This book covers concepts such as the differences between Just-In-Time (JIT) and Ahead-Of-Time (AOT) compilation in Angular, alongside NgModules, components and directives. It also goes into detail on Dependency Injection and Change Detection: essential skills for Angular developers to master. The book finishes with a look at testing, and how to integrate different testing methodologies in your Angular code. What you will learn Understand why and how to use JIT and AOT compilation in Angular Bootstrap and inject NgModules Learn about the component lifecycle Understand the two phases of Change Detection Visualize and parse the Injector tree Understand advanced Lazy Loading Integrate and run different testing strategies on your code About the Author Victor Savkin and Jeff Cross are core contributors to the Angular projects. Victor Savkin has been on the Angular team since the inception of Angular 2. Victor developed dependency injection, change detection, forms, and the router. Jeff Cross was one of the earliest core team members on Angular 1. He developed the Angular 2 HTTP and AngularFire2 modules, contributed to RxJS 5, and was most recently the Tech Lead of the Angular Mobile team at Google. Nrwl.io - Angular consulting for enterprise customers, from core team members Victor and Jeff are founder of Nrwl, a company providing Angular consulting for enterprise customers, from core team members. Table of Contents Compilation NgModules Components and Directives Templates Dependency Injection Change Detection Forms Testing Reactive Programming in Angular', 'https://images-na.ssl-images-amazon.com/images/I/41XlMPymFHL.jpg')
];
