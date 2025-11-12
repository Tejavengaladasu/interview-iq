export const PROBLEMS = {
    "two-sum": {
      id: "two-sum",
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: {
        text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
        notes: [
          "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
          "You can return the answer in any order.",
        ],
      },
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
        },
        {
          input: "nums = [3,3], target = 6",
          output: "[0,1]",
        },
      ],
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists",
      ],
      starterCode: {
        javascript: `function twoSum(nums, target) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
  console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
        python: `def twoSum(nums, target):
      # Write your solution here
      pass
  
  # Test cases
  print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
  print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
  print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
        java: `import java.util.*;
  
  class Solution {
      public static int[] twoSum(int[] nums, int target) {
          // Write your solution here
          
          return new int[0];
      }
      
      public static void main(String[] args) {
          System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
      }
  }`,
      },
      expectedOutput: {
        javascript: "[0,1]\n[1,2]\n[0,1]",
        python: "[0, 1]\n[1, 2]\n[0, 1]",
        java: "[0, 1]\n[1, 2]\n[0, 1]",
      },
    },
  
    "reverse-string": {
      id: "reverse-string",
      title: "Reverse String",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "Write a function that reverses a string. The input string is given as an array of characters s.",
        notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
      },
      examples: [
        {
          input: 's = ["h","e","l","l","o"]',
          output: '["o","l","l","e","h"]',
        },
        {
          input: 's = ["H","a","n","n","a","h"]',
          output: '["h","a","n","n","a","H"]',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
      starterCode: {
        javascript: `function reverseString(s) {
    // Write your solution here
    
  }
  
  // Test cases
  let test1 = ["h","e","l","l","o"];
  reverseString(test1);
  console.log(test1); // Expected: ["o","l","l","e","h"]
  
  let test2 = ["H","a","n","n","a","h"];
  reverseString(test2);
  console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
        python: `def reverseString(s):
      # Write your solution here
      pass
  
  # Test cases
  test1 = ["h","e","l","l","o"]
  reverseString(test1)
  print(test1)  # Expected: ["o","l","l","e","h"]
  
  test2 = ["H","a","n","n","a","h"]
  reverseString(test2)
  print(test2)  # Expected: ["h","a","n","n","a","H"]`,
        java: `import java.util.*;
  
  class Solution {
      public static void reverseString(char[] s) {
          // Write your solution here
          
      }
      
      public static void main(String[] args) {
          char[] test1 = {'h','e','l','l','o'};
          reverseString(test1);
          System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
          
          char[] test2 = {'H','a','n','n','a','h'};
          reverseString(test2);
          System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
      }
  }`,
      },
      expectedOutput: {
        javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
        python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
        java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      },
    },
  
    "valid-palindrome": {
      id: "valid-palindrome",
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
        notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
      },
      examples: [
        {
          input: 's = "A man, a plan, a canal: Panama"',
          output: "true",
          explanation: '"amanaplanacanalpanama" is a palindrome.',
        },
        {
          input: 's = "race a car"',
          output: "false",
          explanation: '"raceacar" is not a palindrome.',
        },
        {
          input: 's = " "',
          output: "true",
          explanation:
            's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
      starterCode: {
        javascript: `function isPalindrome(s) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
  console.log(isPalindrome("race a car")); // Expected: false
  console.log(isPalindrome(" ")); // Expected: true`,
        python: `def isPalindrome(s):
      # Write your solution here
      pass
  
  # Test cases
  print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
  print(isPalindrome("race a car"))  # Expected: False
  print(isPalindrome(" "))  # Expected: True`,
        java: `class Solution {
      public static boolean isPalindrome(String s) {
          // Write your solution here
          
          return false;
      }
      
      public static void main(String[] args) {
          System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
          System.out.println(isPalindrome("race a car")); // Expected: false
          System.out.println(isPalindrome(" ")); // Expected: true
      }
  }`,
      },
      expectedOutput: {
        javascript: "true\nfalse\ntrue",
        python: "True\nFalse\nTrue",
        java: "true\nfalse\ntrue",
      },
    },
  
    "maximum-subarray": {
      id: "maximum-subarray",
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Array • Dynamic Programming",
      description: {
        text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        notes: [],
      },
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
          explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
        },
        {
          input: "nums = [1]",
          output: "1",
          explanation: "The subarray [1] has the largest sum 1.",
        },
        {
          input: "nums = [5,4,-1,7,8]",
          output: "23",
          explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
        },
      ],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxSubArray(nums) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
  console.log(maxSubArray([1])); // Expected: 1
  console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
        python: `def maxSubArray(nums):
      # Write your solution here
      pass
  
  # Test cases
  print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
  print(maxSubArray([1]))  # Expected: 1
  print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
        java: `class Solution {
      public static int maxSubArray(int[] nums) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
          System.out.println(maxSubArray(new int[]{1})); // Expected: 1
          System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
      }
  }`,
      },
      expectedOutput: {
        javascript: "6\n1\n23",
        python: "6\n1\n23",
        java: "6\n1\n23",
      },
    },
  
    "container-with-most-water": {
      id: "container-with-most-water",
      title: "Container With Most Water",
      difficulty: "Medium",
      category: "Array • Two Pointers",
      description: {
        text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
        notes: [
          "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
          "Return the maximum amount of water a container can store.",
          "Notice that you may not slant the container.",
        ],
      },
      examples: [
        {
          input: "height = [1,8,6,2,5,4,8,3,7]",
          output: "49",
          explanation:
            "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
        },
        {
          input: "height = [1,1]",
          output: "1",
        },
      ],
      constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxArea(height) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
  console.log(maxArea([1,1])); // Expected: 1`,
        python: `def maxArea(height):
      # Write your solution here
      pass
  
  # Test cases
  print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
  print(maxArea([1,1]))  # Expected: 1`,
        java: `class Solution {
      public static int maxArea(int[] height) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
          System.out.println(maxArea(new int[]{1,1})); // Expected: 1
      }
  }`,
      },
      expectedOutput: {
        javascript: "49\n1",
        python: "49\n1",
        java: "49\n1",
      },
    },
    // --- Additional Problems ---
"merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums2 into nums1 as one sorted array.",
      notes: ["The final sorted array should not be returned by the function, but instead be stored inside the array nums1."],
    },
    examples: [
      { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" },
      { input: "nums1 = [1], m = 1, nums2 = [], n = 0", output: "[1]" },
    ],
    constraints: ["nums1.length == m + n", "0 ≤ m, n ≤ 200", "-10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹"],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
    // Write your solution here
    
  }
  
  // Test cases
  let nums1 = [1,2,3,0,0,0];
  merge(nums1, 3, [2,5,6], 3);
  console.log(nums1); // Expected: [1,2,2,3,5,6]
  
  nums1 = [1];
  merge(nums1, 1, [], 0);
  console.log(nums1); // Expected: [1]`,
      python: `def merge(nums1, m, nums2, n):
      # Write your solution here
      pass
  
  # Test cases
  nums1 = [1,2,3,0,0,0]
  merge(nums1, 3, [2,5,6], 3)
  print(nums1)  # Expected: [1,2,2,3,5,6]
  
  nums1 = [1]
  merge(nums1, 1, [], 0)
  print(nums1)  # Expected: [1]`,
      java: `import java.util.*;
  class Solution {
      public static void merge(int[] nums1, int m, int[] nums2, int n) {
          // Write your solution here
      }
  
      public static void main(String[] args) {
          int[] nums1 = {1,2,3,0,0,0};
          merge(nums1, 3, new int[]{2,5,6}, 3);
          System.out.println(Arrays.toString(nums1)); // Expected: [1,2,2,3,5,6]
          
          nums1 = new int[]{1};
          merge(nums1, 1, new int[]{}, 0);
          System.out.println(Arrays.toString(nums1)); // Expected: [1]
      }
  }`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]\n[1]",
      python: "[1, 2, 2, 3, 5, 6]\n[1]",
      java: "[1, 2, 2, 3, 5, 6]\n[1]",
    },
  },
  
  "remove-duplicates": {
    id: "remove-duplicates",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
      notes: ["The relative order of the elements should be kept the same."],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "[1,2]" },
      { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "[0,1,2,3,4]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-100 ≤ nums[i] ≤ 100", "nums is sorted"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
    // Write your solution here
    
  }
  
  // Test cases
  let arr1 = [1,1,2];
  removeDuplicates(arr1);
  console.log(arr1); // Expected: [1,2]
  
  let arr2 = [0,0,1,1,1,2,2,3,3,4];
  removeDuplicates(arr2);
  console.log(arr2); // Expected: [0,1,2,3,4]`,
      python: `def removeDuplicates(nums):
      # Write your solution here
      pass
  
  # Test cases
  arr1 = [1,1,2]
  removeDuplicates(arr1)
  print(arr1)  # Expected: [1,2]
  
  arr2 = [0,0,1,1,1,2,2,3,3,4]
  removeDuplicates(arr2)
  print(arr2)  # Expected: [0,1,2,3,4]`,
      java: `import java.util.*;
  class Solution {
      public static void removeDuplicates(int[] nums) {
          // Write your solution here
      }
  
      public static void main(String[] args) {
          int[] arr1 = {1,1,2};
          removeDuplicates(arr1);
          System.out.println(Arrays.toString(arr1)); // Expected: [1,2]
          
          int[] arr2 = {0,0,1,1,1,2,2,3,3,4};
          removeDuplicates(arr2);
          System.out.println(Arrays.toString(arr2)); // Expected: [0,1,2,3,4]
      }
  }`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[0,1,2,3,4]",
      python: "[1, 2]\n[0, 1, 2, 3, 4]",
      java: "[1, 2]\n[0, 1, 2, 3, 4]",
    },
  },
  
  "fibonacci-number": {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    category: "Math • Dynamic Programming",
    description: {
      text: "The Fibonacci numbers, commonly denoted F(n), form a sequence such that each number is the sum of the two preceding ones. Given n, return F(n).",
      notes: ["F(0) = 0, F(1) = 1"],
    },
    examples: [
      { input: "n = 2", output: "1" },
      { input: "n = 3", output: "2" },
      { input: "n = 10", output: "55" },
    ],
    constraints: ["0 ≤ n ≤ 30"],
    starterCode: {
      javascript: `function fib(n) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(fib(2)); // Expected: 1
  console.log(fib(3)); // Expected: 2
  console.log(fib(10)); // Expected: 55`,
      python: `def fib(n):
      # Write your solution here
      pass
  
  # Test cases
  print(fib(2))  # Expected: 1
  print(fib(3))  # Expected: 2
  print(fib(10))  # Expected: 55`,
      java: `class Solution {
      public static int fib(int n) {
          // Write your solution here
          return 0;
      }
  
      public static void main(String[] args) {
          System.out.println(fib(2)); // Expected: 1
          System.out.println(fib(3)); // Expected: 2
          System.out.println(fib(10)); // Expected: 55
      }
  }`,
    },
    expectedOutput: {
      javascript: "1\n2\n55",
      python: "1\n2\n55",
      java: "1\n2\n55",
    },
  },
  
  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets and in the correct order."
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only"],
    starterCode: {
      javascript: `function isValid(s) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(isValid("()")); // Expected: true
  console.log(isValid("()[]{}")); // Expected: true
  console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
      # Write your solution here
      pass
  
  # Test cases
  print(isValid("()"))  # Expected: True
  print(isValid("()[]{}"))  # Expected: True
  print(isValid("(]"))  # Expected: False`,
      java: `class Solution {
      public static boolean isValid(String s) {
          // Write your solution here
          return false;
      }
  
      public static void main(String[] args) {
          System.out.println(isValid("()")); // Expected: true
          System.out.println(isValid("()[]{}")); // Expected: true
          System.out.println(isValid("(]")); // Expected: false
      }
  }`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i ≠ j, i ≠ k, and j ≠ k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: [
        "Notice that the solution set must not contain duplicate triplets.",
      ],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],
    constraints: [
      "3 ≤ nums.length ≤ 3000",
      "-10⁵ ≤ nums[i] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function threeSum(nums) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
  console.log(threeSum([0,1,1])); // Expected: []
  console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
      # Write your solution here
      pass
  
  # Test cases
  print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
  print(threeSum([0,1,1]))  # Expected: []
  print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,
      java: `import java.util.*;
  
  class Solution {
      public static List<List<Integer>> threeSum(int[] nums) {
          // Write your solution here
          
          return new ArrayList<>();
      }
  
      public static void main(String[] args) {
          System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
          System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
          System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0,0,0]]
      }
  }`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },
  
  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Matrix • Simulation",
    description: {
      text: "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).",
      notes: [
        "You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
      },
      {
        input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      },
    ],
    constraints: [
      "n == matrix.length == matrix[i].length",
      "1 ≤ n ≤ 20",
      "-1000 ≤ matrix[i][j] ≤ 1000",
    ],
    starterCode: {
      javascript: `function rotate(matrix) {
    // Write your solution here
    
  }
  
  // Test cases
  let m1 = [[1,2,3],[4,5,6],[7,8,9]];
  rotate(m1);
  console.log(m1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]
  
  let m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
  rotate(m2);
  console.log(m2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      python: `def rotate(matrix):
      # Write your solution here
      pass
  
  # Test cases
  m1 = [[1,2,3],[4,5,6],[7,8,9]]
  rotate(m1)
  print(m1)  # Expected: [[7,4,1],[8,5,2],[9,6,3]]
  
  m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  rotate(m2)
  print(m2)  # Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      java: `import java.util.*;
  
  class Solution {
      public static void rotate(int[][] matrix) {
          // Write your solution here
          
      }
  
      public static void main(String[] args) {
          int[][] m1 = {{1,2,3},{4,5,6},{7,8,9}};
          rotate(m1);
          System.out.println(Arrays.deepToString(m1)); // Expected: [[7,4,1],[8,5,2],[9,6,3]]
      }
  }`,
    },
    expectedOutput: {
      javascript: "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      python: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
      java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
    },
  },
  
  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Breadth-First Search • Graph",
    description: {
      text: "Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
      notes: [
        "Each transformation changes exactly one letter.",
        "Each transformed word must exist in the wordList.",
      ],
    },
    examples: [
      {
        input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
        output: "5",
        explanation: "The shortest transformation is hit → hot → dot → dog → cog, which has 5 words.",
      },
      {
        input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "endWord.length == beginWord.length",
      "1 ≤ wordList.length ≤ 5000",
      "All words are lowercase English letters.",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(ladderLength('hit','cog',['hot','dot','dog','lot','log','cog'])); // Expected: 5
  console.log(ladderLength('hit','cog',['hot','dot','dog','lot','log'])); // Expected: 0`,
      python: `def ladderLength(beginWord, endWord, wordList):
      # Write your solution here
      pass
  
  # Test cases
  print(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))  # Expected: 5
  print(ladderLength("hit","cog",["hot","dot","dog","lot","log"]))  # Expected: 0`,
      java: `import java.util.*;
  
  class Solution {
      public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
          // Write your solution here
          
          return 0;
      }
  
      public static void main(String[] args) {
          System.out.println(ladderLength("hit","cog",Arrays.asList("hot","dot","dog","lot","log","cog"))); // Expected: 5
          System.out.println(ladderLength("hit","cog",Arrays.asList("hot","dot","dog","lot","log"))); // Expected: 0
      }
  }`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },
  
  
  };
  
  export const LANGUAGE_CONFIG = {
    javascript: {
      name: "JavaScript",
      icon: "/javascript.png",
      monacoLang: "javascript",
    },
    python: {
      name: "Python",
      icon: "/python.png",
      monacoLang: "python",
    },
    java: {
      name: "Java",
      icon: "/java.png",
      monacoLang: "java",
    },
  };