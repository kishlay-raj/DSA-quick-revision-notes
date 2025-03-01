
Graph DP problems require **computing values at nodes or paths**, often using **shortest paths, longest paths, or ways to reach a node** while leveraging **overlapping subproblems** and **optimal substructure**. These problems typically involve **DAGs (Directed Acyclic Graphs)**, but can also apply to cyclic graphs with constraints.

**📌 Key Identifiers of DP on Graph Problems**

  

1️⃣ **The problem involves a graph (Nodes + Edges).**

• Graph is given as **adjacency list/matrix** or **edge list**.

• Nodes have **values, costs, or states** that need computation.

  

2️⃣ **Paths, Ways, or Costs are being optimized over multiple transitions.**

• Example: Finding **minimum cost path, longest path, number of ways** to reach a node.

• Example: Computing **max value collected along a path**.

  

3️⃣ **Graph has an inherent DP structure (State depends on previous states).**

• dp[node] → Represents **shortest path, longest path, or max/min value at node**.

• dp[u] depends on dp[v] for all edges (u, v).

  

4️⃣ **Topological Sorting (for DAGs) can be useful for processing DP states.**

• If the graph is **acyclic**, we process nodes in **topological order** to ensure correct DP computation.

• Example: Longest Path DP works by processing nodes in **topo order**.

  

5️⃣ **Recursion with memoization or iterative DP is required.**

• If brute force involves **exponential recursive calls**, DP helps in optimization.

• Overlapping subproblems exist (same node calculations repeat).

**🎯 Common Types of DP on Graph Problems**

**1️⃣ Shortest Path DP (Min Cost Path)**

  

**🔹 Problem Statement:** “Find the shortest path from src to all other nodes.”

📌 **Common Problems:**

• **Single-Source Shortest Path (Dijkstra, Bellman-Ford)**

• **Min Cost Path in Grid (DP on 2D Graphs)**

• **Minimum Steps to Reach Target in Graph**

  

**🛠️ Approach:**

• **Define dp[node]** → Minimum cost to reach node from source.

• **Recurrence Relation:**

• **Methods:**

• **Dijkstra’s Algorithm** (O((V+E) logV), for graphs with positive weights).

• **Bellman-Ford Algorithm** (O(VE), for graphs with negative weights).

• **Floyd-Warshall** (O(V³), for all-pairs shortest path).

**2️⃣ Longest Path DP (DAG)**

  

**🔹 Problem Statement:** “Find the longest path in a **DAG**.”

📌 **Common Problems:**

• **Longest Path in a Directed Graph**

• **Longest Increasing Path in a Matrix (Grid DP)**

  

**🛠️ Approach:**

• **Define dp[node]** → Length of longest path ending at node.

• **Recurrence Relation:**

• **Steps:**

• Compute **topological order** of DAG.

• Process nodes in **topo order**, updating dp[node].

• **Time Complexity:** O(V + E).

**3️⃣ Number of Ways DP (Counting Paths in Graph)**

  

**🔹 Problem Statement:** “Count the number of ways to reach a node from source.”

📌 **Common Problems:**

• **Count Paths in DAG**

• **Count Ways to Reach Bottom-Right in Grid (DP on Grid)**

  

**🛠️ Approach:**

• **Define dp[node]** → Number of ways to reach node from source.

• **Recurrence Relation:**

• **Steps:**

• Compute **topological order** of DAG.

• Process nodes in **topo order**, updating dp[node].

• **Time Complexity:** O(V + E).

**4️⃣ DP with Bitmasking (Traveling Salesman Problem - TSP)**

  

**🔹 Problem Statement:** “Find the shortest path visiting all nodes exactly once.”

📌 **Common Problems:**

• **Traveling Salesman Problem (TSP)**

• **Bitmask DP for Subset Problems on Graphs**

  

**🛠️ Approach:**

• **Define dp[mask][u]** → Minimum cost to visit nodes in mask ending at u.

• **Recurrence Relation:**

• **Time Complexity:** O(N² * 2ⁿ), used for small graphs (N ≤ 20).

**5️⃣ DP on Grid-Based Graphs (2D DP)**

  

**🔹 Problem Statement:** “Find the minimum/maximum cost path in a **grid**.”

📌 **Common Problems:**

• **Minimum Path Sum in Grid**

• **Unique Paths with Obstacles**

  

**🛠️ Approach:**

• **Define dp[i][j]** → Minimum cost to reach cell (i, j).

• **Recurrence Relation:**

• **Time Complexity:** O(N*M).

**📝 Summary: How to Identify DP on Graphs?**

|**Pattern**|**Key Clue in Problem Statement**|**Common Examples**|
|---|---|---|
|**Shortest Path DP**|“Find minimum cost path from source”|Dijkstra, Bellman-Ford|
|**Longest Path DP**|“Find longest path in DAG”|Longest Path in DAG|
|**Ways to Reach DP**|“Count ways to reach a node”|Count Paths in DAG|
|**Bitmask DP**|“Subset optimization on graph (TSP, Hamiltonian Path)”|TSP using Bitmask DP|
|**Grid DP (Graph as Grid)**|“Min/Max cost path in a grid-based structure”|Minimum Path Sum, Unique Paths|

**💡 How to Approach DP on Graph Problems?**

  

1️⃣ **Identify if DP is needed** → Does the problem involve **paths, ways, or costs** on a graph?

2️⃣ **Define dp[node] or dp[node][state]** → What does dp[node] represent?

3️⃣ **Find the recurrence relation** → How does dp[node] depend on dp[neighbor] values?

4️⃣ **Use Topological Sorting for DAGs** → Process DP states in **topo order**.

5️⃣ **Consider Dijkstra/Bellman-Ford for shortest paths** → If weighted graph, use shortest path algorithms.

6️⃣ **Optimize space if possible** → Graph DP often runs in O(V), but can sometimes be reduced.

This guide should help you **identify and solve DP on Graph problems efficiently!** 🚀

Let me know if you need **code examples or more details!** 😊