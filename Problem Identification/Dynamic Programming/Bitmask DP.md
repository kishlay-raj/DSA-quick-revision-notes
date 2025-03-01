**How to Identify Bitmask DP**

Bitmask DP is a **subset-based** dynamic programming approach used for problems where the **state of multiple elements** (on/off, visited/unvisited, selected/not selected) needs to be efficiently represented. It is commonly used when dealing with **subset optimization problems** like **Traveling Salesman Problem (TSP), Set Cover, and Combinatorial Problems**.

**📌 Key Identifiers of Bitmask DP Problems**

  

1️⃣ **The problem involves choosing subsets of elements.**

• The state represents a **set of choices** (e.g., visited cities, selected items).

• Example: **“Find the shortest path visiting all nodes exactly once.”** (TSP).

• Example: **“Find the number of ways to assign tasks to workers.”**

  

2️⃣ **Constraints indicate a small N (typically N ≤ 20).**

• Since 2^N grows exponentially, Bitmask DP is feasible **only for small values of N** (usually N ≤ 20-25).

• If N > 30, standard DP or greedy methods are preferred.

  

3️⃣ **A subset or state can be represented using a binary mask (bitmask).**

• Instead of maintaining a list or array, the **state** is encoded in a **single integer** (0 or 1 for each element).

• **Example:**

• For N = 4, a subset {A, C} is represented as **0101 (binary) = 5 (decimal)**.

• Each **bit in an integer** (0 or 1) represents whether an element is included.

  

4️⃣ **Transitions involve adding/removing elements from the state.**

• You add/remove elements by setting or clearing bits in the mask.

• Example: If mask = 0101 (subset {A, C}), adding B gives mask = 0111 (subset {A, B, C}).

• This is done using **bitwise operations**:

• **Add element x to mask** → mask | (1 << x)

• **Remove element x from mask** → mask & ~(1 << x)

• **Check if x is in mask** → (mask & (1 << x)) != 0

  

5️⃣ **DP state depends only on the bitmask and an index.**

• **Common DP state format:**

```
dp[mask][i] = best answer for subset `mask` ending at `i`
```

  

• The mask represents the subset of elements already considered.

**🎯 Common Types of Bitmask DP Problems**

**1️⃣ Traveling Salesman Problem (TSP)**

  

**🔹 Problem Statement:** “Find the shortest Hamiltonian path that visits all cities exactly once.”

📌 **Common Problems:**

• **TSP (Classic)**

• **Find the shortest cycle covering all nodes in a weighted graph.**

  

**🛠️ Approach:**

• **State:** dp[mask][i] → Minimum cost to visit all cities in mask, ending at i.

• **Recurrence Relation:**

• **Final Answer:** min(dp[all_visited][i] + cost[i][0]) (Returning to start).

• **Time Complexity:** O(N² * 2^N).

**2️⃣ Assigning Tasks to Workers**

  

**🔹 Problem Statement:** “There are N workers and N tasks. Assign tasks to workers such that total cost is minimized.”

📌 **Common Problems:**

• **Job Assignment Problem**

• **Minimum Cost to Assign Jobs**

  

**🛠️ Approach:**

• **State:** dp[mask] → Minimum cost to assign tasks in mask.

• **Recurrence Relation:**

• **Time Complexity:** O(N² * 2^N).

**3️⃣ Counting Hamiltonian Paths in a DAG**

  

**🔹 Problem Statement:** “Find the number of paths in a DAG that visit all nodes exactly once.”

📌 **Common Problems:**

• **Count Hamiltonian Paths**

  

**🛠️ Approach:**

• **State:** dp[mask][i] → Number of ways to visit all nodes in mask, ending at i.

• **Recurrence Relation:**

• **Time Complexity:** O(N² * 2^N).

**4️⃣ Set Cover / Minimum Vertex Cover**

  

**🔹 Problem Statement:** “Find the minimum number of subsets needed to cover all elements.”

📌 **Common Problems:**

• **Set Cover Problem**

• **Vertex Cover Problem**

  

**🛠️ Approach:**

• **State:** dp[mask] → Minimum number of sets needed to cover mask.

• **Recurrence Relation:**

• **Time Complexity:** O(N * 2^N).

**📝 Summary: How to Identify Bitmask DP?**

|**Pattern**|**Key Clue in Problem Statement**|**Common Examples**|
|---|---|---|
|**Subset Optimization**|“Find the best way to process subsets of N items”|TSP, Set Cover|
|**Subset Counting**|“Find the number of ways to process a subset”|Hamiltonian Paths|
|**State Representation Using Bits**|“Each element has ON/OFF state in DP”|Job Assignment|
|**Given N ≤ 20**|“Check all subsets of elements efficiently”|All Bitmask DP Problems|

**💡 How to Approach Bitmask DP Problems?**

  

1️⃣ **Identify if DP is needed** → Does the problem involve **subset selection**?

2️⃣ **Use a bitmask to represent states** → **Convert subset information into a single integer**.

3️⃣ **Define dp[mask] or dp[mask][i]** → What does dp[mask] represent?

4️⃣ **Find the recurrence relation** → How does dp[mask] depend on dp[mask - {element}]?

5️⃣ **Use bitwise operations for transitions** →

• Add element x: mask | (1 << x)

• Remove element x: mask & ~(1 << x)

• Check if x is in mask: (mask & (1 << x))

6️⃣ **Use O(N * 2^N) complexity wisely** → **Ensure N ≤ 20 before using Bitmask DP.**

This guide should help you **identify and solve Bitmask DP problems efficiently!** 🚀

Let me know if you need **code examples or more details!** 😊