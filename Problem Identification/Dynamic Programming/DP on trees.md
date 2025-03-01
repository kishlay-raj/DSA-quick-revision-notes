**How to Identify DP on Trees**

**📌 Key Identifiers of Tree DP Problems**

  

1️⃣ **The problem is based on a Tree structure (Graph without cycles).**

• The input is given as N-1 edges forming a **connected, acyclic** structure.

• Common structures include **binary trees, general trees, or rooted trees**.

  

2️⃣ **The problem requires computing values based on children of a node.**

• Example: Finding **max sum of non-adjacent nodes** → Requires DP based on child values.

• Example: Finding **diameter, longest path, or subtree sum** → Requires aggregation of child results.

  

3️⃣ **Recursion with memoization (Top-Down) or DP table (Bottom-Up) is needed.**

• Brute force leads to repeated calculations for subtrees (**Overlapping Subproblems**).

• Each node’s answer depends on its **children’s DP values**.

  

4️⃣ **You can define a DP state at each node based on its subtree calculations.**

• dp[node] → Represents some value (like max sum, min cost, longest path) for the **subtree rooted at node**.

• dp[node][0] & dp[node][1] → Often used when there are **two choices** (e.g., take/not take).

**🎯 Common Types of Tree DP Problems**

**1️⃣ Maximum Sum of Non-Adjacent Nodes (House Robber on Tree)**

  

**🔹 Problem Statement:** “Find the maximum sum of non-adjacent nodes in a tree.”

📌 **Common Problems:**

• **House Robber III** (LeetCode)

• **Maximum Weight Independent Set in a Tree**

  

**🛠️ Approach:**

• **Define dp[node][0]** → Max sum **excluding** current node.

• **Define dp[node][1]** → Max sum **including** current node.

• **Recurrence Relation:**

• If we include the node:

• If we exclude the node:

• **Final Answer:** max(dp[root][0], dp[root][1]).

• **Time Complexity:** O(N), processed in one DFS pass.

**2️⃣ Diameter of a Tree (Longest Path Between Two Nodes)**

  

**🔹 Problem Statement:** “Find the longest path between any two nodes in a tree.”

📌 **Common Problems:**

• **Binary Tree Diameter**

• **Longest Path in an Unweighted Tree**

  

**🛠️ Approach:**

• Define dp[node] → **Max depth of subtree rooted at node**.

• Recurrence relation:

• Diameter is the **maximum value of dp[left] + dp[right] + 1**.

• **Final Answer:** Stored globally as max_diameter.

• **Time Complexity:** O(N), solved using a **single DFS**.

**3️⃣ Count of Nodes in a Subtree**

  

**🔹 Problem Statement:** “Find the number of nodes in the subtree of each node.”

📌 **Common Problems:**

• **Subtree Size Computation**

  

**🛠️ Approach:**

• Define dp[node] → **Size of subtree rooted at node**.

• Recurrence relation:

• **Time Complexity:** O(N), solved using DFS.

**4️⃣ Minimum Cost to Delete a Tree (DP on Deletion)**

  

**🔹 Problem Statement:** “Find the minimum cost to delete a tree where each node has a deletion cost.”

📌 **Common Problems:**

• **Tree Pruning Problems**

  

**🛠️ Approach:**

• Define dp[node] → **Minimum cost to delete subtree rooted at node**.

• Recurrence relation:

• **Time Complexity:** O(N), solved using DFS.

**5️⃣ Tree Coloring / Painting**

  

**🔹 Problem Statement:** “Find the minimum cost to color a tree such that adjacent nodes have different colors.”

📌 **Common Problems:**

• **Tree Coloring with Constraints**

  

**🛠️ Approach:**

• Define dp[node][color] → **Min cost to color node with color**.

• **Recurrence Relation:**

• **Time Complexity:** O(N * K), solved using DP.

**📝 Summary: How to Identify Tree DP?**

|**Pattern**|**Key Clue in Problem Statement**|**Common Examples**|
|---|---|---|
|**Subtree-Based DP**|“Compute some value for each subtree”|Subtree Size, Max Independent Set|
|**Path-Based DP**|“Find longest or shortest path in a tree”|Diameter, Longest Path|
|**Inclusion/Exclusion DP**|“Pick or not pick a node for some property”|House Robber on Tree|
|**Coloring / Partitioning DP**|“Min/max cost with coloring constraints”|Tree Coloring Problems|

**💡 How to Approach Tree DP Problems?**

  

1️⃣ **Identify if DP is needed** → Does the problem involve **aggregating values from children**?

2️⃣ **Define dp[node] or dp[node][state]** → What does dp[node] represent?

3️⃣ **Find the recurrence relation** → How does dp[node] depend on dp[child] values?

4️⃣ **Optimize space if possible** → Tree DP often runs in **O(N) space**, but in some cases, recursion depth can be reduced.

This guide should help you **identify and solve Tree DP problems efficiently!** 🚀

