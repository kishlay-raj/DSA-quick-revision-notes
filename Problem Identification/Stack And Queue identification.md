**How to Identify If a Problem Can Be Solved Using a Stack or Queue?**

  

Stacks and Queues are fundamental data structures used in problems requiring **sequential processing, ordering constraints, or backtracking**.

**1️⃣ When to Use a Stack (LIFO - Last In First Out)?**

  

A **stack** is useful when the problem involves:

✅ **Reversing elements** (e.g., reversing a string or list).

✅ **Processing elements in the opposite order they were encountered**.

✅ **Maintaining a history of operations** (like recursion, backtracking, or function calls).

✅ **Handling nested structures** (e.g., parentheses, XML/HTML validation).

✅ **Monotonic constraints** (monotonic increasing/decreasing stack).

**2️⃣ Common Stack-Based Problems**

|**Problem Type**|**How to Identify?**|**Approach**|
|---|---|---|
|**Balanced Parentheses**|“Is a sequence of brackets valid?”|Push ( onto stack, pop when ) appears.|
|**Next Greater Element**|“Find the next greater/smaller element for each item in an array.”|Use a **monotonic stack**.|
|**Evaluate Reverse Polish Notation (Postfix Expression)**|“Evaluate an expression without parentheses.”|Use a stack for operands, process operators.|
|**Convert Infix to Postfix/Prefix**|“Convert arithmetic expression formats.”|Stack for operators & precedence rules.|
|**Undo/Redo Operations**|“Maintain a history of operations.”|Use a stack to track previous states.|
|**Depth-First Search (DFS) Iterative**|“Solve DFS without recursion.”|Use a stack to simulate recursion.|

**3️⃣ Stack Example Problems**

  

**✅ Example: Balanced Parentheses**

```
def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:  # Closing bracket
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:  # Opening bracket
            stack.append(char)
    
    return not stack  # Stack should be empty if balanced
```

✅ **Use when:** Checking if an expression is properly nested.

**✅ Example: Next Greater Element (Monotonic Stack)**

```
def next_greater_element(nums):
    stack = []
    res = [-1] * len(nums)  # Default answer is -1
    
    for i in range(len(nums) - 1, -1, -1):  # Iterate in reverse
        while stack and stack[-1] <= nums[i]:  
            stack.pop()  # Remove smaller elements
        res[i] = stack[-1] if stack else -1
        stack.append(nums[i])  # Push current element onto stack
    
    return res
```

✅ **Use when:** Finding the next greater element in O(n).

**4️⃣ When to Use a Queue (FIFO - First In First Out)?**

  

A **queue** is useful when the problem involves:

✅ **Processing elements in the order they arrive (First In First Out).**

✅ **BFS (Breadth-First Search) traversal.**

✅ **Task scheduling / rate limiting (e.g., print jobs, CPU scheduling).**

✅ **Sliding window problems.**

✅ **Producer-Consumer problems.**

**5️⃣ Common Queue-Based Problems**

|**Problem Type**|**How to Identify?**|**Approach**|
|---|---|---|
|**Breadth-First Search (BFS)**|“Find the shortest path in an unweighted graph.”|Use a queue to explore level by level.|
|**Sliding Window Maximum**|“Find the max value in a moving window.”|Use a deque (**monotonic queue**).|
|**Task Scheduling**|“Simulate tasks with delays or order constraints.”|Use a queue to manage execution order.|
|**First Unique Character in a String**|“Find the first non-repeating character.”|Use a queue to track occurrences.|
|**Implement a Stack Using Queues**|“Use only queues to implement a stack.”|Use two queues to mimic LIFO.|

**6️⃣ Queue Example Problems**

  

**✅ Example: Breadth-First Search (BFS)**

```
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = set([start])

    while queue:
        node = queue.popleft()  # Process front of queue
        print(node)  # Do something with node
        for neighbor in graph[node]:
            if neighbor not in visited:
                queue.append(neighbor)
                visited.add(neighbor)
```

✅ **Use when:** Exploring shortest paths in an unweighted graph.

**✅ Example: Sliding Window Maximum (Monotonic Queue)**

```
from collections import deque

def max_sliding_window(nums, k):
    dq = deque()
    res = []

    for i, num in enumerate(nums):
        while dq and nums[dq[-1]] <= num:  # Remove smaller elements
            dq.pop()
        dq.append(i)

        if dq[0] == i - k:  # Remove elements outside the window
            dq.popleft()

        if i >= k - 1:  # Store max for valid windows
            res.append(nums[dq[0]])

    return res
```

✅ **Use when:** Finding **max values in a sliding window efficiently (O(n))**.

**7️⃣ Stack vs Queue: When to Use Which?**

|**Feature**|**Stack (LIFO)**|**Queue (FIFO)**|
|---|---|---|
|**Order of Processing**|Last In First Out|First In First Out|
|**Use Case**|Undo/Redo, Recursion, Monotonic Stack|BFS, Sliding Window, Task Scheduling|
|**Common Data Structure**|list or collections.deque|collections.deque|

**8️⃣ Stack Variants**

  

**🟢 Monotonic Stack (Increasing/Decreasing)**

• Used to **process elements while maintaining order**.

• Helps solve **next greater/smaller element**, **stock span**, **trapping rainwater**, etc.

  

**🟡 Min/Max Stack**

• Supports efficient min/max retrievals while maintaining push/pop operations.

  

**🔴 Two Stacks for Queue (Queue via Stacks)**

• Used to **implement a queue using two stacks**.

**9️⃣ Queue Variants**

  

**🟢 Monotonic Queue**

• Maintains increasing or decreasing order to optimize sliding window problems.

  

**🟡 Circular Queue**

• Useful for buffering data efficiently (e.g., CPU scheduling).

  

**🔴 Priority Queue (Heap)**

• Useful when elements must be dequeued in a **specific order** (e.g., Dijkstra’s algorithm).

**🔟 Final Checklist: Is It a Stack or Queue Problem?**

  

✅ **Does it require backtracking, recursion, or undo operations?** → **Stack**

✅ **Does it require FIFO ordering (first-come, first-served)?** → **Queue**

✅ **Is it about finding the “next greater” or “next smaller” element?** → **Monotonic Stack**

✅ **Does it involve level-wise traversal of a tree/graph?** → **Queue (BFS)**

✅ **Does it require sliding window optimizations?** → **Monotonic Queue**

  

If **YES** to any of these, you’ve identified the correct data structure! 🚀

  

Would you like help solving a specific **stack/queue** problem? 😊