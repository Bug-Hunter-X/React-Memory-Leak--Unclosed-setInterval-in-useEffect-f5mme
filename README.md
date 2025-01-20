# React Memory Leak: Unclosed setInterval in useEffect
This repository demonstrates a common React memory leak caused by the improper use of `setInterval` within the `useEffect` hook. The `setInterval` function is called repeatedly, and because the return value (the interval ID) isn't stored and cleared using a cleanup function within `useEffect`, it remains active even after the component is unmounted. This leads to continuous updates and a memory leak.

## Bug
The `bug.js` file showcases the problematic code. The `setInterval` function creates an interval that increments a counter every second.  Because no cleanup function is provided, the interval continues even after the component is removed from the DOM.

## Solution
The `bugSolution.js` demonstrates the correct usage of `setInterval` within `useEffect`.  A cleanup function is returned, which is executed when the component unmounts, effectively clearing the interval and preventing the memory leak. This ensures resources are properly released.