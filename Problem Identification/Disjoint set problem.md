**How to Identify a Disjoint Set (Union-Find) Problem?**

  

**🔹 What Is a Disjoint Set (Union-Find)?**

  

A **Disjoint Set** (also called **Union-Find**) is a data structure that keeps track of a partitioned set of elements, supporting two primary operations:

1. **Find(x):** Determines which set an element x belongs to (with path compression for efficiency).

2. **Union(x, y):** Merges the sets containing x and y (with union by rank/size for efficiency).

  

🔹 **Time Complexity:** **O(α(N)) ≈ O(1)** (almost constant time with path compression).

🔹 **Best used when working with connected components, dynamic connectivity, and merging sets.**

**1️⃣ How to Identify If a Problem Requires Disjoint Set?**

  

✅ **The problem involves partitioning elements into groups.**

✅ **The problem involves checking if two elements belong to the same group.**

✅ **The problem involves dynamically merging sets or components.**

✅ **The problem involves “connected components” in a graph.**

✅ **The problem requires cycle detection in an undirected graph.**

✅ **The problem involves incremental edge additions to a graph.**

**2️⃣ Common Problem Patterns & When to Use Disjoint Set (Union-Find)**

|**Problem Type**|**How to Identify?**|**Approach**|
|---|---|---|
|**Connected Components in a Graph**|“Find the number of groups of connected nodes.”|Use **Union-Find to merge connected nodes**.|
|**Cycle Detection in an Undirected Graph**|“Check if adding an edge creates a cycle.”|Use **Union-Find: If two nodes belong to the same set, adding an edge forms a cycle**.|
|**Checking if Two Nodes Are Connected**|“Given multiple queries, check if nodes belong to the same component.”|**Use Union-Find to efficiently determine connectivity**.|
|**Redundant Connection (Extra Edge in a Tree)**|“Find the edge that, when removed, makes the graph a valid tree.”|**Use Union-Find to detect cycles in the graph**.|
|**Dynamic Graph Connectivity**|“Edges are added dynamically, and queries ask if nodes are connected.”|**Use Union-Find to handle dynamic connectivity efficiently**.|
|**Smallest Lexicographical String with Swaps**|“Given swaps, find the lexicographically smallest string.”|**Use Union-Find to group swappable indices**.|
|**Friend Circles / Similar Groups**|“Find how many separate friend groups exist in a social network.”|**Use Union-Find to track connected friend groups**.|
|**Kruskal’s Algorithm for Minimum Spanning Tree (MST)**|“Find the minimum cost to connect all nodes.”|**Use Union-Find to merge nodes in Kruskal’s MST Algorithm**.|

**3️⃣ Example 1: Finding Connected Components (Graph Problem)**

  

**Problem Statement:**

You are given n nodes and an edge list edges, where edges[i] = [a, b] represents an undirected edge between a and b.

Find the **number of connected components** in the graph.

  

**Identification:**

  

✅ The problem involves **finding connected components in a graph.**

✅ The problem is about **grouping nodes together based on connectivity.**

✅ **Union-Find** is optimal since we dynamically merge connected nodes.

  

**Solution (Union-Find Approach)**

```
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]
    
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX == rootY:
            return False  # Already connected
        if self.rank[rootX] > self.rank[rootY]:
            self.parent[rootY] = rootX
        elif self.rank[rootX] < self.rank[rootY]:
            self.parent[rootX] = rootY
        else:
            self.parent[rootY] = rootX
            self.rank[rootX] += 1
        return True

def countConnectedComponents(n, edges):
    dsu = DSU(n)
    for u, v in edges:
        dsu.union(u, v)
    
    # Count unique root nodes
    return len(set(dsu.find(i) for i in range(n)))

# Example usage:
n = 5
edges = [[0,1], [1,2], [3,4]]
print(countConnectedComponents(n, edges))  # Output: 2 (two separate components)
```

✅ **Time Complexity:** **O(N + E)**

✅ **Why It Works?** Uses **Union-Find** to efficiently merge and count connected components.

**4️⃣ Example 2: Cycle Detection in an Undirected Graph**

  

**Problem Statement:**

You are given an undirected graph with n nodes and edges[i] = [a, b].

Determine if the graph contains a **cycle**.

  

**Identification:**

  

✅ The problem asks if **adding an edge creates a cycle.**

✅ The graph is **undirected**, and we need to **track connectivity.**

✅ **Union-Find** is optimal for checking cycles in an undirected graph.

  

**Solution (Union-Find Approach)**

```
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]
    
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX == rootY:
            return False  # Cycle detected
        self.parent[rootX] = rootY
        return True

def hasCycle(n, edges):
    dsu = DSU(n)
    for u, v in edges:
        if not dsu.union(u, v):  # If union fails, cycle is detected
            return True
    return False

# Example usage:
edges = [[0,1], [1,2], [2,3], [3,0]]  # Cycle exists
print(hasCycle(4, edges))  # Output: True
```

✅ **Time Complexity:** **O(E log N)**

✅ **Why It Works?** If union(x, y) fails, it means x and y are already in the same set, forming a **cycle**.

**5️⃣ Example 3: Finding Redundant Connections (Extra Edge in a Tree)**

  

**Problem Statement:**

Given a tree with n nodes (a connected graph with n nodes and n-1 edges), an **extra edge** is added, creating a cycle.

Find **the edge that should be removed** to make it a tree again.

  

**Identification:**

  

✅ The problem asks for **an extra edge forming a cycle.**

✅ The problem involves **cycle detection in an undirected graph.**

✅ **Union-Find** is optimal because **it can efficiently detect redundant edges.**

  

**Solution (Union-Find Approach)**

```
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]
    
    def union(self, x, y):
        rootX, rootY = self.find(x), self.find(y)
        if rootX == rootY:
            return False  # Cycle detected
        self.parent[rootX] = rootY
        return True

def findRedundantConnection(edges):
    dsu = DSU(len(edges))
    for u, v in edges:
        if not dsu.union(u, v):  # If adding this edge creates a cycle
            return [u, v]

# Example usage:
edges = [[1,2], [1,3], [2,3]]  # Edge [2,3] creates a cycle
print(findRedundantConnection(edges))  # Output: [2, 3]
```

✅ **Time Complexity:** **O(E log N)**

✅ **Why It Works?** The **first edge that causes a cycle** is the redundant edge.

**6️⃣ Final Checklist: Is It a Disjoint Set (Union-Find) Problem?**

  

✅ **Does the problem involve merging elements into groups?**

✅ **Does the problem ask for connectivity between elements?**

✅ **Does the problem require cycle detection in an undirected graph?**

✅ **Does the problem involve dynamically merging components?**

✅ **Does the problem require checking redundant connections?**

  

If **YES**, then **Union-Find (Disjoint Set) is the right approach!** 🚀

  

Would you like help with a specific problem? 😊