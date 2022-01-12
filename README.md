# Mentoring FbW D03-2

## 2021-01-14

### Review Topics

:arrow_right: [code shseet](files/ex_javascript_functions.js)

1.  **isPlainObject** - Write a method that verifies an argument is a plain object, not an array or null
 * **Task description:** Write a method that verifies an argument is a plain object, not an array or null  
 * **Expected Result:** True if object is plain, false otherwise.   
     ({ a: 1 }) => true,   
     ([1, 2, 3]) => false
​
     ```js
        const data = { a: 1 };
        console.log(isPlainObject(data)); // true
     ```
​
2.  **MakePairs** - Write a method that returns a deep array like [[key, value]]
  * **Task description:** Write a method that returns a deep array like [[key, value]]   
  * **Expected Result:** ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]   
​
    ```js
        const data = { a: 1, b: 2 };
        console.log(makePairs(data)); // [['a', 1], ['b', 2]] 
     ```
​
3.  **Without** - Write a method that returns a new object without provided properties
 
  * **Task description:** Write a method that returns new object without provided properties   
  * **Expected Result:** ({ a: 1, b: 2 }, 'b') => { a: 1 }   
​
    ```js
        const data = { a: 1, b: 2 };
        console.log(without(data, 'b')); // { a: 1 }
     ```
​
4.  **IsEmpty** - Write a method that makes a shallow check is object empty
  * **Task description:** Write a method that makes a shallow check is object empty   
  * **Expected Result:** ({}) => true, ({ a: undefined }) => true,   
      ({ a: 1 }) => false   
​
    ```js
        const data = { a: 1, b: undefined };
        const data2 = { a:undefined };
        console.log(isEmpty(data)); // false
        console.log(isEmpty(data2)); // true 
     ```
​
5.  **IsEqual** - Write a method that makes a shallow compare of two objects
  * **Task description:** Write a method that makes a shallow compare of two objects   
  * **Expected Result:** True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true   
​
    ```js
        const data = { a: 1, b: 1 };  
        const data2 = { a: 1, b: 1 };  
        const data3 = { a: 1, b: 2 };
        console.log(isEqual(data, data2)); // true  
        console.log(isEqual(data, data3)); // false
     ```
​
6.  **Invoke** - Write a method that invokes an array method on a specific path
  * **Task description:** Write a method that invokes an array method on a specific path   
  * **Expected Result:** ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]   
​
    ```js
        const data = { a: { b: [1, 2, 3] } }
        console.log(invoke(data, 'a.b', 
        'splice', [1, 2]));
         // [2, 3]
     ```
​
7.  **IsEmptyDeep** - Write a method that makes a deep check is an object empty
 
  * **Task description:** Write a method that makes a deep check is an object empty   
  * **Empty values:** '', null, NaN, undefined, [], {}   
  * **Expected Result:** ({}) => true,   
      ({ a: { b: undefined } }) => true,   
      ({ a: { b: [] } }) => true   
​
    ```js
        const data = { a: { b: undefined } };
        console.log(isEmptyDeep(data));
        //true
     ```
​
8.  **IsEqualDeep** - Write a method that makes a deep compare of two objects
  
  * **Task description:** Write a method that makes a deep compare of two objects   
  * **Expected Result:** True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true   
​
    ```js
    const data = { a: 1, b: { c: 1 } };  
    const data2 = { a: 1, b: { c: 1 } };  
    const data3 = { a: 1, b: { c: 2 } };
    console.log(isEqualDeep(data, data2));// true  
    console.log(isEqualDeep(data, data3)); // false   
     ```
​
9.  **Intersection** - Write a method that finds shallow intersections of objects
   
  * **Task description:** Write a method that finds shallow intersections of objects   
  * **Expected Result:** ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }   
 
    ```js
        const data = { a: 1, b: 2 };  
        const data2 = { c: 1, b: 2 };
        console.log(intersection(data, data2)); // { b: 2 }
     ```
​
10.  **IntersectionDeep** - Write a method that finds all intersections of objects
   
  * **Task description:** Write a method that finds all intersections of objects  
  * **Expected Result:** ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }   
​
    ```js
        const data = { a: 1, b: { c: 3 } };  
        const data2 = { c: 1, b: { c: 3 } };
        console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
     ```

### Specific Topics

## 2021-01-07

### Review Topics

- https://github.com/edwardtanguay/test-employees-map-reduce-etc
- diese Woche:
	- Übung-PB-42-forEach-map
	- Übung-PB-43-map()
	- Einführung Array Method reduce()
	- Übung-PB-44-advArrays"
	- Warmup mit Übung-PB-48-mixed
	- Übung-PB-45-map
	- Übung-PB-46-reduce anfangen
	- PB-44-advArrays1
	- PB-50-advArrays2"
	- :muscle: CHALLENGE: display all company names of [Northwind](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/json) customers
	- display all Northwind company names with company id in parentheses
- array functions: 
	- `.join()` - **joins** array items together into a string
	- `.slice()` - **slices** a section out of array to produce another array 
		- `.slice(2,5)` - *slice starting at 2 and stop before 5*
	- `.splice()` - **splices** items out of an array and can insert other items into that space
		- `months.splice(4, 1, 'May');` - *before item with index 4, delete 1 item and insert "May"*
	- `.push(item)` - **push** an item onto the end of an array
	- `.pop()` - **pop** an item off the end of an array
	- `.unshift(item)` - **unshifts** an item onto the beginning of an array (like push but on the left)
	- `.shift()` - **shift** the first element off the array (like pop but on the left)
	- `.reverse()` - **reverses** the order of the array
	- `.sort()` - **sorts** the list (of strings) in alphabetical order
	- `.indexOf()` - gets the **index of** an item 
	- `.lastIndexOf()` - gets the **index of** the **last instance** of an item 
	- display numbers 1 to 10 separated by hyphens (`join`)
	- display numbers 1 to 10 in square brackets separated by hypens (`map`, `join`)
	- :muscle: CHALLENGE: display numbers 1 to 10 in colored boxes on HTML page (`map`, `join`)
	- display 
	- :muscle: CHALLENGE: use map() on HTML page to display divs
	- display the 2nd, 3rd and 4th Northwind customer (`slice`)
	- build an array of customer names (`push`)
	- remove the last customer name from Northwind name array (`pop`)
	- remove the first customer name in Northwind name array(`shift`)
	- add a new customer name to end of Northwind name array (`push`)
	- add a new customer name to beginning of Northwind name array (`unshift`)
	- sort the array alphabetically (`sort`)
	- replace a name in the array with "ERROR" (`splice`)
	- find out the index of the "ERROR" entry (`indexOf`)
	- add "ERROR" to end of array (`push`), then get the index of the last occurance of "ERROR"
	- if any company name is "ERROR" then output "invalid customer collection" (`includes`)
- **2021-12-16 from Niels**:
	- "Nesting arrays and objects:
		- Nesting and accessing arrays within each other
		- Nesting and accessing objects in objects
		- Nesting and accessing arrays in objects
		- Nesting and iterating over objects in arrays
	- "Advanced Array methods:
		- Iterating over arrays: `Array.prototype.forEach(<function>)`
		- Converting an array to a different array: `Array.prototype.map(<function>)`
		- Converting an array to a single value: `Array.prototype.reduce(<function>)`

### Specific Topics

- perhaps: Create a cashier calculator to return change: https://edwardtanguay.netlify.app/howtos?id=481

- **:muscle: How is JavaScript programmed?**
	- What do we want to look at and understand here and why? There is no one JavaScript code base but rather many implementations of ECMAScript, e.g. the V8 engine being one of the most popular, here the source code: https://github.com/v8/v8
- **:muscle: Vim editor basics:** learn how to use the vim editor in VSCode: [Vim editor basics](https://edwardtanguay.netlify.app/howtos?id=458)
- **:muscle: My recent howtos:**: https://edwardtanguay.netlify.app/howtos




## 2021-12-17

### Housekeeping: The Structure of Mentoring

- From the DCI Mentoring Concept: 
	- *"The structure of the Mentoring varies and **depends on the activity of the students** as much as the Mentor. The **questions of the students have priority**. The content of the mentoring lessons are **adapted to the students needs**.*
		- :star: The more you continually communicate to me what you want and need to learn, the more you determine the content of the mentoring. 
	- *"Recap **complex content**, build on **current topics**, answer **open questions**, support **student projects**, explain **new technologies**."*
		- :star: The more you continually communicate to me what content is complex to you, what current topics are difficult for you to understand and why, what open questions you have, what your projects are, and what new technologies you want to learn, the more mentoring will make you a better developer. 
	-  *"Mentoring aims to **respond to the different levels** within a class and to **support especially slow learners**."*
		- :star: We can structure our mentoring time anyway you feel is best. My recommendation is the following:
			1. first half (13:00-14:30) - **Review Topics**: repetition of the easiest material, make sure everybody understands everything covered this week and up to this point in the course, ask anything you want and it will be explained, no question is too simple, "leave nobody behind"
			2. second half (14:45-16:15) - **Specific Topics**: any question regarding any technology no  matter how advanced, live-coding requests on any topic, help with any specific project, request to learn new technology, etc. 
			3. keep **breakout rooms open** at all times: if the current topic is too easy, too difficult, or not interesting to you, feel free to work on your own or in groups in the breakout rooms, I will send a notice out via Zoom when we have a major change in topic
			4. **continually suggest new topics** that you want to do in mentoring, either mention them in class or write them in Slack and I will record and schedule them here in this document: the more **detailed** the request the better :muscle:, the more **prenotice** you give me the better :muscle:

### Review topics

- `if/else/switch` 
	- given an array of colors, display "warning!" if color is red, display "go!" if color is green, and for all other colors display "---"
		- do this task again with `switch` instead of `if/else`
	- make a function which receives a country and returns the capital, use `switch`
	- use `switch` to return what to wear depending on the weather
	- :muscle: CHALLENGE: use `switch` to create a function that takes "add", "subtract", "divide", or "multiply" and returns a function to perform this task 
- best-choices when to use which loops
	- a range of numbers: `for`
	- an array: `for-of` or `forEach()`
	- an array that is chained onto another ES6 array function: `forEach()`
	- properties in an object: `for-in`
- `.forEach() / for-of / for / for-in` 
	- display numbers 1 to 10
	- display numbers 10 to 1
	- display numbers 0 to 100 in increments of 5
	- display numbers 100 to 0 in decrements of 10
	- display numbers 1 to 1000 but stop at 23 
	- :muscle: CHALLENGE: display numbers 1 to 10 on HTML page in a UL/LI list
	- :muscle: CHALLENGE: display numbers 1 to 10 on HTML page in a dropdown list
	- display an array of five colors
	- display an array of five colors except for yellow
	- :muscle: CHALLENGE: display colors on HTML page in their own color
### Specific topics

- **:star: How to turn on symbols for tabs and spaces in VSCode**
	- Howto: [Make tabs and spaces appear in VSCode](https://onespace.netlify.app/howtos?id=457) 
- **:star: How to change VSCode font to cursive**
	- Howto: [How to make fonts cursive in VSCode](https://onespace.netlify.app/howtos?id=461)
- **:construction: Advanced VSCode debugging:** more debugging features, solutions to problems 
	- Foray: [doing research on it](https://onespace.netlify.app/forays?id=187)
---
- **:muscle: JavaScript/DOM Live-Coding:** [Create a number dropdown which shows that number of icons](https://onespace.netlify.app/howtos?id=453)
- **:muscle: star-clicking Live-Coding**: instead of the dropdown, one has 5 empty stars, when one clicks a star, that number of stars is selected, if you click e.g. 5, all 5 are selected
	- Howto: [Make five star control which can be clicked to change](https://onespace.netlify.app/howtos?id=462)
- **:muscle: localStorage Live-Coding**: use the star-dropdown example where the browser remembers the number for each customer, e.g. test: Firefox has one 3, Chrome has 4, you close them, open them, and they still have 3 and 4
	- Howto: [Make five star control which can be clicked to change](https://onespace.netlify.app/howtos?id=462)
- **:muscle: Vim editor basics:** learn how to use the vim editor in VSCode: [Vim editor basics](https://onespace.netlify.app/howtos?id=458)
## 2021-12-10


### Review topics

- `if/else/switch` 
	- given an array of numbers from 1-10, display numbers if greater than 3
	- given an array of colors, display "warning!" if color is red, but if not then display "neutral"
	- given an array of colors, display "warning!" if color is red, display "go!" if color is green, and for all other colors display "---"
		- do this task again with `switch` instead of `if/else`
	- make a function which receives a country and returns the capital, use `switch`
	
### Specific topics 

- **VSCode Extension:** display live preview of markdown files with the [Markdown Preview Enhanced](https://onespace.netlify.app/howtos?id=452) extension
- **VSCode Debugging:** [Debugging JavaScript in Node with VSCode](https://onespace.netlify.app/howtos?id=454)

## 2021-12-03

### Review topics

- **Howto:** [List of JavaScript basic topics](https://onespace.netlify.app/howtos?id=449)

### Specific topics

- **VSCode Extension:** display live results of `console.log()` in VSCode with [Quokka](https://quokkajs.com/docs/index.html) extension
- **Howto:** [The crazy truth that JavaScript arrays are really objects](https://onespace.netlify.app/howtos?id=448)
