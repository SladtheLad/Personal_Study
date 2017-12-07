# *** Typescript Udemy Course Notes *** 

## **Spread Operators**
* **Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
* Syntax:
  1. For function calls:
    * myFunction(...iterableObj);
  2. For array literals or strings:
    * [...iterableObj, '4', 'five', 6];
  3. For object literals (new in ECMAScript; stage 3 draft):
    * let objClone = { ...obj };