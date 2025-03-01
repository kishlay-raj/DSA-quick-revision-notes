**How to Identify If a Coding Problem Can Be Solved Using Topological Sort**

  

**🔹 What Is Topological Sort?**

  

Topological Sort is an ordering of **nodes in a Directed Acyclic Graph (DAG)** where for every directed edge u → v, **node u appears before node v** in the ordering.

• **Applicable only to DAGs** (Directed Acyclic Graphs).

• Used for **dependency resolution** problems.

• Typically solved using **Kahn’s Algorithm (BFS)** or **DFS with a stack**.

**1️⃣ How to Identify If a Problem Requires Topological Sorting?**

  

✅ **The problem involves a dependency chain.** (e.g., “X must come before Y”).

✅ **The problem states that tasks, courses, or events must be scheduled in a specific order.**

✅ **The problem explicitly mentions a Directed Acyclic Graph (DAG).**

✅ **The problem requires detecting cyclic dependencies.**

✅ **The problem asks for a valid sequence of execution.**

✅ **The problem involves finding an order of operations where some tasks depend on others.**

**2️⃣ Common Problem Patterns & When to Use Topological Sort**

|**Problem Type**|**How to Identify?**|**Approach**|
|---|---|---|
|**Course Scheduling (Prerequisites)**|“Determine if a set of courses can be completed given prerequisite dependencies.”|Model the problem as a DAG and apply **Topological Sort**.|
|**Task/Job Scheduling with Dependencies**|“Find the correct order to execute tasks with dependencies.”|Use **Kahn’s Algorithm (BFS)** or **DFS-based Topological Sorting**.|
|**Build System Dependency Resolution**|“Determine the order in which files/packages should be compiled or installed.”|Represent the dependencies as a DAG and use **Topological Sorting**.|
|**Find the Order of Characters in an Alien Dictionary**|“Given sorted words in an unknown language, determine the character order.”|Construct a graph from adjacent words and apply **Topological Sort**.|
|**Detect Cycles in a Dependency Graph**|“Find if there are cyclic dependencies in a task graph.”|If **Topological Sort fails (not all nodes are visited), there is a cycle**.|
|**Assembly Line Processing Order**|“Determine the sequence to process components with dependencies.”|Model it as a DAG and apply **Topological Sorting**.|
|**Finding the Longest Path in a DAG**|“Find the longest sequence of tasks that can be performed.”|Use **Topological Sort + DP** for **O(V + E)** solution.|

**3️⃣ Example 1: Course Schedule (Kahn’s Algorithm – BFS)**

  

**Problem Statement:**

You are given n courses labeled 0 to n-1 and a list of prerequisite pairs where [a, b] means “course a depends on course b.”

Return **True** if all courses can be finished, otherwise return **False**.

  

**Identification:**

  

✅ The problem states **“some tasks must be completed before others”** → **Use Topological Sort**

✅ The problem involves **finding an order of execution**

✅ **Graph-based dependency problem**

  

**Solution (Kahn’s Algorithm - BFS Approach)**

```
from collections import deque

def canFinish(numCourses, prerequisites):
    graph = {i: [] for i in range(numCourses)}
    in_degree = {i: 0 for i in range(numCourses)}
    
    # Build graph and in-degree array
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        in_degree[course] += 1
    
    # Queue for nodes with no incoming edges (0 in-degree)
    queue = deque([node for node in in_degree if in_degree[node] == 0])
    visited_count = 0
    
    while queue:
        node = queue.popleft()
        visited_count += 1
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return visited_count == numCourses  # If we visited all nodes, it's possible to finish courses
```

✅ **Time Complexity:** **O(V + E)**

✅ **Why It Works?** Uses **Kahn’s Algorithm** (BFS) to ensure nodes are processed in dependency order.

**4️⃣ Example 2: Finding a Valid Task Order (DFS Approach)**

  

**Problem Statement:**

Given n tasks labeled 0 to n-1 with dependencies [a, b] (task a depends on task b), return a valid order of execution.

  

**Identification:**

  

✅ The problem asks for **“a valid sequence of execution.”**

✅ It involves **ordering tasks with dependencies** → **Use Topological Sort**

✅ **DAG-based problem**

  

**Solution (DFS Approach – Using Stack)**

```
def findOrder(numTasks, dependencies):
    graph = {i: [] for i in range(numTasks)}
    for task, prereq in dependencies:
        graph[prereq].append(task)
    
    visited = {}  # 0 = unvisited, 1 = visiting, 2 = visited
    stack = []
    
    def dfs(node):
        if visited.get(node, 0) == 1:
            return False  # Cycle detected
        if visited.get(node, 0) == 2:
            return True  # Already processed
        visited[node] = 1  # Mark node as visiting
        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
        visited[node] = 2  # Mark node as visited
        stack.append(node)  # Add to topological order
        return True

    for node in range(numTasks):
        if visited.get(node, 0) == 0:
            if not dfs(node):
                return []  # Cycle detected, return empty list
    
    return stack[::-1]  # Reverse stack to get the correct order
```

✅ **Time Complexity:** **O(V + E)**

✅ **Why It Works?** Uses **DFS with a stack** to determine the correct task order.

**5️⃣ Example 3: Alien Dictionary (Find Character Order)**

  

**Problem Statement:**

Given a sorted list of words in an alien language, determine the order of characters in that language.

  
**Identification:**


✅ The problem asks for **“determining an order of elements.”**

✅ The problem involves **comparing adjacent words to extract a dependency graph.**

✅ **Graph-based ordering problem** → **Use Topological Sorting**

  
**Solution (Graph + Topological Sort)**

```
from collections import deque, defaultdict

def alienOrder(words):
    graph = defaultdict(set)
    in_degree = {char: 0 for word in words for char in word}
    
    # Build the graph from adjacent words
    for first, second in zip(words, words[1:]):
        for c1, c2 in zip(first, second):
            if c1 != c2:
                if c2 not in graph[c1]:
                    graph[c1].add(c2)
                    in_degree[c2] += 1
                break
        else:
            if len(second) < len(first): return ""  # Invalid order
    
    # Topological sort using Kahn's Algorithm
    queue = deque([char for char in in_degree if in_degree[char] == 0])
    order = []
    
    while queue:
        char = queue.popleft()
        order.append(char)
        for neighbor in graph[char]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return "".join(order) if len(order) == len(in_degree) else ""
```

✅ **Time Complexity:** **O(C)** (C = total number of characters in input)

✅ **Why It Works?** Extracts character dependencies and applies **Kahn’s Algorithm** for ordering.

**6️⃣ When NOT to Use Topological Sort?**

  

🚫 If the graph is **not a DAG** (i.e., contains cycles).

🚫 If the problem doesn’t involve ordering based on dependencies.

🚫 If elements can be sorted using **simple sorting algorithms** instead.

**7️⃣ Final Checklist: Is It a Topological Sort Problem?**

✅ **Does the problem involve dependencies?**

✅ **Does it ask for a valid ordering of tasks/elements?**

✅ **Is the input graph a Directed Acyclic Graph (DAG)?**

✅ **Does the problem involve cycle detection in dependencies?**

If **YES**, then **Topological Sort is the right approach!** 🚀