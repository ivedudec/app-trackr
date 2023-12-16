/*
 * Filename: complex_code.js
 * Description: This code demonstrates a complex and sophisticated implementation of a data structure and algorithms in JavaScript.
 *              It includes various advanced concepts like recursion, memoization, dynamic programming, and object-oriented programming.
 */

// Custom data structure for representing a binary tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to perform an inorder traversal of a binary tree
function inorderTraversal(node) {
  if (node) {
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
  }
}

// Function to find the nth Fibonacci number using memoization
function fib(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  
  if (n <= 2) {
    return 1;
  }
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Dynamic programming approach to solve the knapsack problem
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = [];
  
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= capacity; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          values[i - 1] + dp[i - 1][j - weights[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  
  return dp[n][capacity];
}

// Object-oriented programming example with classes and inheritance
class Shape {
  constructor(color) {
    this.color = color;
  }
  
  getColor() {
    return this.color;
  }
  
  area() {
    throw new Error("Area method not implemented!");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  area() {
    return this.width * this.height;
  }
}

// Usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Inorder Traversal:");
inorderTraversal(root);

console.log("Fibonacci Numbers:");
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));

console.log("Knapsack Problem:");
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
console.log(knapsack(weights, values, capacity));

console.log("Area Calculation:");
const circle = new Circle("red", 5);
console.log(circle.area());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.area());
