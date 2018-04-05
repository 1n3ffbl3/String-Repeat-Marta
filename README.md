# String-Repeat-Marta

> 1. Fork+clone this repo
> 2. Set your gh-pages to build from master branch
> 3. Put a link to the tests in your repo's description
> 4. Choose a Codewar Kata to study
> 5. Go through the repo and fill in every blank
> 6. Publish and include this repo in your Codewar Gallery


# [String Reverser](https://www.codewars.com/kata/string-repeat/train/javascript>)

Explain the challenge as completely as you can.

String_Repeat: Function
* Args: 2
 1. Number: used to determine how many  duplicates to make
 2. String: the thing that's duplicated
  * (List each arg, it's type, and it's purpose)
* Return: String
 * The argument string concatinated to itself "String" many times
 * Behavior: The function takes in a number and a string, it copies the string x number  of times where x is the first argument to the function. It will return those copies stuck together in a single string.
 
 var result = String_Repeat ()
 console.log(result)
 



### Index
* [Solution Process](#solution-process)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)  
* [Language Features](#language-features)
* [Uses](#uses)
* [Learning Journal](#learning-journal)

---

## Solution Process

Using plain sentences and pseudocode, explain the process you followed from reading the Codewar prompt to coding your final solution.  Describe what you were thinking at every step, how that step moved you forward (or backwards, note that too!), and provide a little pseudocode to illustrate each step.

This may feel tedious but we promise you it will pay off in the long run.  By paying attention to you thinking process you will start to notice what strategies work for you, which strategies you use too often, and where you struggle.  Even more importantly, writing out your process will help you generalize your problem solving skills - taking them from the world of coding small challenges to the world of application development.

If you find yourself getting stuck or having trouble understanding just what you're supposed to do, try taking a few simple examples inputs and solving them by hand.  This will make the problem more tangible and less abstract.  Be sure to include these manual solutions in your process description!

Stick with it!  It's best to learn how to analyze your thinking while the problems are simpler.  You don't want to be trying to understand a full project __and__ your problem solving style a the same time.

[TOP](#index)


0. Codewars challenge
    ```
    Complete the solution so that it repeats the string.
    ```
1. Phrased as a function  
    ```
    Write a function called repeatStr which repeats the given string string exactly n times.
    ```
2. Define arguments and return value   
    ```
    Write a function that takes in a string and duplicates the string n times. 
    ```
3. Convert that sentence into high-high level pseudocode.
    ```
    solution(string)
        repeat the string
        return number of repeat string n times
    End solution
    ```
4. Declare return value, isolate the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        reverse the string
        return reversed_string
    End solution   
    ```
5. Begin exploring the challenging bit.
    ```
    solution(string)
       repeatStr <- ""
        available options:
            - for or while loops
            - if statements
            + string methods
        return reversed_string
    End solution   
    ```
6. Continue exploring the challenging bit.
    ```
    solution(string)
        repeatStr<- ""
        available options: String methods
            - String.length
            - String.indexOf
            - String.search
            + String.split
            - String.substring
            + String.slice
            + String.replace
        return repeatStr
    End solution   
    ```
7. Continue exploring the challenging bit.
    ```
    solution(string)
        repeatStr <- ""
        two possible strategies:
            +
            -
        return repeatStr
    End solution   
    ```
8. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        convert to array and back to string
            String.split
            Array.reverse
            convert array back to string
                - read out and concatinate each element in a loop
                + Array.join
        return reversed_string
    End solution   
    ```
9. Decided on a strategy.
    ```
    solution(string)
        reversed_string <- ""
        convert to array and back to string
            String.split
            Array.reverse
            Array.join
        return reversed_string
    End solution   
    ```
10. Refactoring pseudocode closer to real code
    ```
    solution(string)
        reversed_string <- ""
        temp_array = [];
        temp_array <- string.split("")
        temp_array <- temp_array.reverse()
        reversed_string <- temp_array.join("")
        return reversed_string
    End solution   
    ```
11. Convert pseudocode to real code.
    ```js
    function solution(string) {
        let reversed_string = "";
        let temp_array = [];
        
        temp_array = string.split("");
        temp_array = temp_array.reverse();
        reversed_string = temp_array.join("");
        
        return reversed_string;
    };  
    ```    
    
[TOP](#index)

---


---

## Solution Explanation

Explain your solution in detail, however works for you.  Perhaps by using a specific input to illustrate, by listing the strategies you used, or by including a diagram [directly from Sketchboard.io](https://sketchboard.io/blog/2014/03/06/github-sketchboard.html).

[TOP](#index)

---

## Constraints

List and explain the constraints you placed on your solution.


[TOP](#index)
___

## Language Features

List the language features used in your solution.

The focus of these exercises are to strengthen you problem solving skills, not to learn the newest ES6 tricks. When you have the choice between to different language features it is better to choose the option that is easiest to read, most common, or most consistent with the rest of your solution.  

Keeping track of the language features you use will enable you separate the problem solving strategy from the implementation.  Being aware of this difference will be an asset later on when you're faced with larger applications and popular frameworks.

[TOP](#index)

---
## Uses

* anti-publishing
* informative error logging
* virtual measuring tape
* dynamically generating html
 * ie.portfolio project boxes


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:
* 
*
*
*

New vocabulary:
* 
* 
*
*

Things I struggled with:
* 
* 
* 
* 

My study goals and stragegies:
* 
* 
* 
*


[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

