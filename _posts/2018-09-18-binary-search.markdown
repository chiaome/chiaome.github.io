---
layout:     post
title:      "Binary Search"
subtitle:   "A quick search algorithm"
date:       2018-09-18
author:     "Zhao Chang"
header-img: "img/binarysearch/binary-search.png"
tags:
    - algorithms
    - Binary Search

---
### 1 What’s Binary Search?
Binary search is a search algorithm that finds the position of the target value within a given logic list. Binary search compares the target value to the middle of the list. If they are equal, the position of the middle value will be returned. Otherwise, the half which the target value can't lie in will be eliminated, again taking the middle value of the remaining half to compare to the target value. Repeat this process until the target value is found. If the search ends with the remaining half is empty, the target value is not on the list.

### 2 Classical Version and Variants

#### 1） Classical version
Return the position of the target value within a sorted array. If the target value is not in the array, return -1.

##### I. Code Rush

> <a href="http://tpcg.io/wYaWbY" target="\_blank" title="Click to test online ">Java Version</a>

```java
public class BinarySearch {
    public int binarySearch(int target, int[] arr) {
        if(arr == null || arr.length == 0) {
            return -1;
        }else {
            int left = 0;
            int right = arr.length - 1;
            while(left <= right) {
                int middle = (right + left) / 2;
                if (target == arr[middle]) {
                    return middle;
                }else if (target > arr[middle]) {
                    left = middle + 1;
                }else {
                    right = middle - 1;
                }
            }
            return -1;
        }
    }
    public static void main(String[] args) {
        BinarySearch b = new BinarySearch();
        int[] arr = new int[]{-1, 2, 3, 49, 100};
        int target = 3;
        System.out.println(b.binarySearch(target, arr));
    }
}
```

##### II. Time & Space complexity
The time complexity is $$O(n) = \log_{} n$$  because binary search divides the array into two parts each time until there is one element remaining. This process takes log(n) times.
The space complexity is $$O(1)$$.

#### 2） Apply binary search to a 2D matrix.
Question: Given a m*n matrix and a target value x, find the position of x in the matrix. Each row is sorted. The first element of the next row is smaller or equal than the last element of the previous row.

`Solution 1:`

We can apply binary search to column and row separately. The first binary search is used to locate the row in which the target value may lie. The second aims to find the position of target value within that row.


> <a href="http://tpcg.io/JVqqYE" target="\_blank" title="Click to test online ">Java Version</a>

```java
import java.util.Arrays;
public class BinarySearch2D {
    public int[] binarySearch2D(int target, int[][] metrix) {
        int[] res = new int[]{-1, -1};
        if(metrix == null || (metrix.length == 0 && metrix[0].length == 0)) {
            return res;
        }
        // first-time binary search
        int top = 0;
        int bottom = metrix.length - 1;
        int middle = 0;
        while(top < bottom - 1) {
            middle = (bottom + top) / 2;
            if(metrix[middle][0] == target) {
                res[0] = middle;
                res[1] = 0;
                return res;
            }else if(metrix[middle][0] > target) {
                bottom = middle;
            }else {
                top = middle;
            }
        }
        // post progress
        if(top == bottom) {
            res[0] = top;
        }else {
            if(metrix[bottom][0] < target) {
                res[0] = bottom;
            }else {
                res[0] = top;
            }
        }
        // second-time binary search
        int left = 0;
        int right = metrix[0].length - 1;
        middle = 0;
        while(left <= right) {
            middle = (right + left) / 2;
            if(metrix[res[0]][middle] == target) {
                res[1] = middle;
                return res;
            }else if(metrix[res[0]][middle] > target) {
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }
        res[0] = -1;
        res[1] = -1;
        return res;
    }
    public static void main(String[] args) {
        BinarySearch2D b = new BinarySearch2D();
        int metrix[][] = new int[][] {
                {1, 2, 3, 4},
                {4, 4, 5, 6},
                {7, 8, 9, 10}
        };
        int target = 5;
        System.out.println(Arrays.toString(b.binarySearch2D(target, metrix)));
    }
}
```
