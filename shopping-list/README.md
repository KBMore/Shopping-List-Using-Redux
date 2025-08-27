# Shopping List App

This project is a simple Shopping List application built with React and TypeScript. It demonstrates a basic shopping cart where you can add and remove items. Initially, the app uses the `useState` hook to manage the state within [`ShoppingList`](src/components/ShoppingList/ShoppingList.tsx).

## App Overview

The current application allows you to add items to your shopping cart and remove them using local component state. The UI is styled with basic CSS, and the item list is dynamically rendered.

## Task

Candidates are expected to complete the following tasks:

1. **Implement State Management**  
   Replace the current local state management using the `useState` hook with a global state management solution such as Redux, Recoil, or another library of your choice.

2. **Handle Cart Operations via Global State**  
   Ensure that all operations for adding and removing items from the shopping cart are managed through the chosen global state management solution.

3. **Complete the Test Cases**  
   Update and complete the test cases outlined in [`ShoppingList.test.tsx`](src/components/ShoppingList/ShoppingList.test.tsx) to verify the functionality of adding and removing items from the cart.
