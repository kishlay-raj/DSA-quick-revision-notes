
**How to Identify Subset/Partition DP (Knapsack-Type)**

Subset/Partition DP problems, also known as **Knapsack-Type DP**, involve choosing elements from an array to **achieve a specific sum, maximize/minimize a value, or divide elements into groups.** These problems typically require **“Pick/Not Pick” (Take/Skip) decisions**, making them ideal for **dynamic programming**.

**📌 Key Identifiers of Subset/Partition DP Problems**

  

1️⃣ **The problem involves a choice of picking/not picking elements from an array**

• Example: “Can we form sum X using given numbers?”

• Example: “Find the number of ways to form X from the array.”

  

2️⃣ **The problem asks for either feasibility, count, or optimization based on subsets**

• “Is it possible to form a subset with sum X?” (**Boolean**)

• “How many ways can we form sum X?” (**Counting**)

• “What is the minimum/maximum subset sum we can achieve?” (**Optimization**)

  

3️⃣ **The solution depends on previous elements (Prefix/Subset dependency)**

• Example: dp[i][j] depends on dp[i-1][j] (not picking) and dp[i-1][j-arr[i]] (picking).

  

4️⃣ **Brute Force (Recursion) has Overlapping Subproblems**

• Without DP, recursion leads to **O(2ⁿ) complexity**, making DP necessary.

  

5️⃣ **A Knapsack-like structure exists (Capacity-Based Selection)**

• Example: A subset sum problem where we can “take” or “not take” an element.

• Example: A problem asking to **fill a container optimally (like a Knapsack)**.

**🎯 Common Types of Subset/Partition DP Problems**

**1️⃣ Subset Sum**

  

**🔹 Problem Statement:** “Can we form a subset with sum exactly X?”

📌 **Common Problems:**

• **Subset Sum Problem** (Given array arr[], find if subset sum X exists)

• **Partition Equal Subset Sum** (Check if array can be split into two equal sum subsets)

  

**🛠️ Approach:**

• **Define dp[i][j]** → True if we can achieve sum j using the first i elements.

• **Recurrence Relation:**

• If we don’t take the element: dp[i][j] = dp[i-1][j]

• If we take the element: dp[i][j] = dp[i-1][j-arr[i]]

• Final formula:

• **Space Optimization:** Convert O(N*M) DP table to O(M) by storing only the previous row.

**2️⃣ Count of Subsets with a Given Sum**

  

**🔹 Problem Statement:** “Find the number of ways to form a sum X using array elements.”

📌 **Common Problems:**

• **Count Subset Sum** (Count ways to form X using array elements)

• **Number of Ways to Reach Target with Given Numbers**

  

**🛠️ Approach:**

• **Define dp[i][j]** → Number of ways to achieve sum j using first i elements.

• **Recurrence Relation:**

• If we don’t take the element: dp[i][j] = dp[i-1][j]

• If we take the element: dp[i][j] += dp[i-1][j-arr[i]]

• Final formula:

• **Time Complexity:** O(N*M), **Space Optimization:** O(M) using a single row.

**3️⃣ 0/1 Knapsack (Classic)**

  

**🔹 Problem Statement:** “Find the **maximum value** that can be obtained from N items with a weight limit W.”

📌 **Common Problems:**

• **0/1 Knapsack** (Choose items to maximize profit without exceeding weight)

• **Subset Sum (with values instead of weights)**

  

**🛠️ Approach:**

• **Define dp[i][w]** → Maximum value achievable with first i items and weight limit w.

• **Recurrence Relation:**

• If we don’t take the item: dp[i][w] = dp[i-1][w]

• If we take the item: dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w - weight[i]])

• Final formula:

• **Space Optimization:** Convert O(N*W) DP table to O(W) by using a single row.

**4️⃣ Partition DP (Equal Subset Sum)**

  

**🔹 Problem Statement:** “Can we divide the array into two subsets of equal sum?”

📌 **Common Problems:**

• **Partition Equal Subset Sum**

• **Split Array into Two Equal Sum Parts**

  

**🛠️ Approach:**

• Find **sum of array** → If odd, return false.

• Check if **subset sum = total_sum/2 exists** → **Subset Sum DP**.

• Use **Subset Sum DP** with target = total_sum / 2.

• **Space Optimization:** O(target) using a single DP array.

**5️⃣ Minimum Subset Sum Difference**

  

**🔹 Problem Statement:** “Divide the array into two subsets such that their sum difference is minimized.”

📌 **Common Problems:**

• **Minimum Subset Sum Difference**

• **Partitioning for Balanced Subset Sums**

  

**🛠️ Approach:**

• Find **sum of array (S)**.

• Find **subset sums ≤ S/2 using Subset Sum DP**.

• Find the **closest sum to S/2**, minimizing the difference.

• **Space Optimization:** O(S/2) using a single DP array.

**📝 Summary: How to Identify Subset/Partition DP?**

|**Pattern**|**Key Clue in Problem Statement**|**Common Examples**|
|---|---|---|
|**Subset Sum**|“Can we form sum X using elements?”|Subset Sum, Partition Equal Subset Sum|
|**Count of Subsets**|“How many ways to form sum X?”|Count of Subsets with Sum|
|**0/1 Knapsack**|“Maximize profit with weight constraints”|0/1 Knapsack Problem|
|**Partition DP**|“Split array into equal sum subsets”|Partition Equal Subset Sum|
|**Min Subset Sum Difference**|“Minimize the difference between two subset sums”|Min Subset Sum Difference|

**💡 How to Approach Subset/Partition DP?**

  

1️⃣ **Identify if DP is needed** → Does the problem involve **choosing/not choosing elements to achieve a sum?**

2️⃣ **Define dp[i][j] clearly** → What does dp[i][j] represent?

3️⃣ **Find the recurrence relation** → How does dp[i][j] depend on dp[i-1][j] and dp[i-1][j-arr[i]]?

4️⃣ **Optimize space if possible** → Convert O(N*M) to O(M) using a **1D DP array**.

This guide should help you **identify and solve Subset/Partition DP problems efficiently!** 🚀

Let me know if you need **code examples or more details!** 😊