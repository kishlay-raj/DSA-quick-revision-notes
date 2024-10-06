**Topological sort** is an ordering of the nodes (or vertices) in a directed graph such that for every directed edge (u→v)(u \to v)(u→v), node uuu comes before node vvv in the ordering. It is used on **Directed Acyclic Graphs (DAGs)**, where there are no cycles, and it ensures that dependencies (prerequisites) are respected.

### Key Points:

1. **Directed**: Topological sorting only applies to directed graphs.
2. **Acyclic**: The graph must be acyclic (i.e., no cycles). If there's a cycle, a valid topological order is impossible.
3. **Prerequisite Structure**: A typical use case is tasks with dependencies, like in the **Course Schedule** problem, where a course must be completed before others.

### Example:

For courses and prerequisites, if you have:

- Course 0 depends on course 1: 1→01 \to 01→0
- Course 2 depends on course 1: 1→21 \to 21→2
- Course 3 depends on course 2: 2→32 \to 32→3

A topological sort would order the courses as: 1 → 0 → 2 → 3.

In this order, all prerequisites are respected.

### Methods to find Topological Sort:

1. **Kahn’s Algorithm (BFS)**: This algorithm is based on in-degree (the number of incoming edges to a node).
2. **DFS-based Approach**: Perform a Depth-First Search, and post-order the nodes in reverse order.

If the graph contains a cycle, topological sorting is impossible, which is what you need to check for in the **Course Schedule** problem.


Here’s how you can perform **topological sort** using two common methods: **Kahn’s Algorithm (BFS)** and **DFS-based approach**.

### 1. **Kahn’s Algorithm (BFS-based approach)**:

This method uses the concept of **in-degree** (number of incoming edges to a node).

#### Steps:

1. **Calculate in-degree**: For each node, count how many other nodes point to it (how many prerequisites each course has).
2. **Queue nodes with in-degree 0**: Start with nodes that have no incoming edges (courses with no prerequisites).
3. **Process nodes**: Remove a node from the queue, add it to the topological order, and reduce the in-degree of its neighbors (courses that depend on it).
4. **Repeat**: If the in-degree of any neighbor becomes 0, add it to the queue.
5. **Check for cycle**: If you process all nodes, you have a valid topological sort. If not, there’s a cycle.

#### Example:

For courses and prerequisites like:

- 0→10 \rightarrow 10→1
- 0→20 \rightarrow 20→2
- 1→31 \rightarrow 31→3
- 2→32 \rightarrow 32→3

Topological sort could be: `[0, 1, 2, 3]`.

---

### 2. **DFS-based Approach**:

This method uses **Depth-First Search** and works by exploring as far as possible along each branch before backtracking.

#### Steps:

1. **Visit nodes**: For each unvisited node, recursively explore all its neighbors.
2. **Mark as visited**: When all neighbors of a node are processed, add the node to the topological sort order.
3. **Detect cycle**: If you revisit a node that is still being processed (in the current recursion stack), there’s a cycle.
4. **Reverse order**: Once DFS finishes, reverse the order of nodes, as DFS adds them in post-order.

#### Example:

For the same course prerequisites, a DFS might visit nodes in the order: `[3, 1, 2, 0]`. After reversing, the topological sort would be `[0, 2, 1, 3]`.

---

### Summary:

- **Kahn’s Algorithm (BFS)**: Focuses on processing nodes with no prerequisites first.
- **DFS**: Recursively explores nodes and backtracks, building the sorted order in reverse.

Both methods ensure dependencies are respected!



Here are code snippets for performing **topological sort** using both **Kahn’s Algorithm (BFS)** and the **DFS-based approach**.

### 1. **Kahn’s Algorithm (BFS-based)**:


from collections import deque, defaultdict

def topological_sort_bfs(num_courses, prerequisites):
    graph = defaultdict(list)
    in_degree = [0] * num_courses

    # Build the graph and count in-degrees
    for course, pre in prerequisites:
        graph[pre].append(course)
        in_degree[course] += 1

    # Queue for courses with no prerequisites
    queue = deque([i for i in range(num_courses) if in_degree[i] == 0])
    topo_order = []

    while queue:
        current = queue.popleft()
        topo_order.append(current)

        # Decrease in-degree of neighbors
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # If all courses are processed, return the topological order
    return topo_order if len(topo_order) == num_courses else []

# Example usage
num_courses = 4
prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
print(topological_sort_bfs(num_courses, prerequisites))  # Output: [0, 1, 2, 3] or [0, 2, 1, 3]


2. **DFS-based Approach**:
def topological_sort_dfs(num_courses, prerequisites):
    graph = defaultdict(list)
    for course, pre in prerequisites:
        graph[pre].append(course)

    visited = [0] * num_courses  # 0 = unvisited, 1 = visiting, 2 = visited
    topo_order = []
    cycle_found = [False]  # To track if a cycle is found

    def dfs(node):
        if visited[node] == 1:  # Cycle detected
            cycle_found[0] = True
            return
        if visited[node] == 2:
            return

        visited[node] = 1  # Mark as visiting
        for neighbor in graph[node]:
            dfs(neighbor)
        visited[node] = 2  # Mark as visited
        topo_order.append(node)  # Add to topo order when fully explored

    for i in range(num_courses):
        if visited[i] == 0:
            dfs(i)
        if cycle_found[0]:
            return []  # Return empty if cycle is found

    return topo_order[::-1]  # Reverse the order to get topological order

# Example usage
num_courses = 4
prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
print(topological_sort_dfs(num_courses, prerequisites))  # Output: [0, 2, 1, 3] or similar
