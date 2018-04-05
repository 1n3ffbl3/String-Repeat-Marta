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
    Goal of the challenge is to design a solution to multiply text N times.
    ```
1. Phrased as a function  
    ```
    Function repeatStringNTimes should take two arguments (times, text) and return text multipled N times. 
    ```
2. Define arguments and return value   
    ```
    ${times} - number, which indicates how many times text should be multiplied
    ${text} - our string, which will be multipled
    ${return value} - ${text} multiplied N ${times}
    ```
3. Convert that sentence into high-high level pseudocode.
    ```
    Begin repeatStringNTimes(times, string)
        for times
          repeat the string and concatenate
        return concatenated string
    End solution
    ```
4. Declare return value, isolate the challenging bit.
    ```
    repeatStringNTimes(times, string)
        result <- ""
        for times
          concatenate current result with next repetion of string
        return result
    End solution   
    ```
5. Begin exploring the challenging bit.
    ```
    repeatStringNTimes(times, string)
        result <- ""
        available options:
            - for or while loops ?
            - if statements ? 
            + string methods ?
        return result
    End solution   
    ```
6. Continue exploring the challenging bit.
    ```
    repeatStringNTimes(times, string)
        result <- ""
        available options: String methods
            - String.length
            - String.indexOf
            - String.search
            - String.split
            - String.substring
            - String.slice
            - String.replace
            + String.repeat
        return result
    End solution   
    ```
7. Continue exploring the challenging bit.
    ```
    repeatStringNTimes(times, string)
        result <- ""
        two possible strategies:
            + String.repeat
            - for loop / while loop
        return result
    End solution   
    ```
8. Continue exploring the challenging bit.
    ```
    repeatStringNTimes(times, string)
        if times < 0 => handle invalid case i.e.:
          + Console.log - display information about incorrect input
          + Exception - throw an exception from method
          + Console.log + return undefined OR Console.log and return string
        result <- ""
        for i range 0..times
         result = String.concatenate(result, string)
        OR 
        result = String.repeat(times, string)
        return  result
    End solution   
    ```
9. Decided on a strategy.
    ```
    repeatStringNTimes(times, string)
        if times < 0 => throw exception
        result <- ""
        result = String.repeat(times, string)
        return result
    End solution   
    ```
10. Refactoring pseudocode closer to real code
    ```
    repeatStringNTimes(times, string)
        if (times < 0) throw "Times must be positive number"
        result = "";
        result = String.repeat(times, string);
        return result
    End solution   
    ```
11. Convert pseudocode to real code.
    ```js
    function repeat_String_NumTimes(times, text) {
        if (times < 0) throw "{times} argument must be positive number";
        return text.repeat(times);
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
* str.repeat() method
* exception throwing
* pseudocode 
* abstract approach of problem

New vocabulary:
* concatenate
* exception
* pseudocode
*

Things I struggled with:
* Solution Design Process
* 
* 
* 

My study goals and stragegies:
* Improve solution design process
* Learn how to implement solution from solution design process 
* Work smarter not faster  
* Be more effectvive  
*


[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

