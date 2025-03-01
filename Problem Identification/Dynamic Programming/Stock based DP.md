**How to Identify DP on Stocks (Stock Trading DP Problems)**

Stock trading problems using **Dynamic Programming (DP)** generally involve **buying and selling stocks** under given constraints to **maximize profit**. The key idea is to track different states (holding, not holding, transactions left, etc.) and use **recursion with memoization or bottom-up DP** to solve the problem efficiently.

**📌 Key Identifiers of DP on Stocks Problems**

  

1️⃣ **The problem involves making decisions over multiple days.**

• Example: **“Maximize profit by buying and selling stocks on different days.”**

• Example: **“Find the best strategy to execute K transactions.”**

  

2️⃣ **The problem has constraints on buying/selling, cooldown periods, or transaction limits.**

• Common constraints:

• **“You can only hold one stock at a time.”**

• **“You must sell before buying again.”**

• **“You can only make at most K transactions.”**

• **“You must wait a cooldown period before buying again.”**

• **“Each transaction has a fee.”**

  

3️⃣ **You can define states based on transactions, holding status, or cooldown periods.**

• **State variables commonly used:**

• **i** → Represents the day (0 to N-1).

• **transactions left** → The number of remaining transactions (0 to K).

• **holding** → Whether you currently hold a stock (0 = No, 1 = Yes).

• **cooldown** → Whether you are in a cooldown period after selling.

  

4️⃣ **Recurrence relation follows a “choice-based” structure.**

• **Common DP state transitions:**

• **Buy** → dp[i][holding] = max(dp[i-1][holding], dp[i-1][not holding] - price[i])

• **Sell** → dp[i][not holding] = max(dp[i-1][not holding], dp[i-1][holding] + price[i])

• **Cooldown or fee deduction** when applicable.

**🎯 Common Types of Stock DP Problems**

**1️⃣ Best Time to Buy and Sell Stock (One Transaction)**

  

**🔹 Problem Statement:** “Find the maximum profit from at most **one** buy-sell transaction.”

📌 **Common Problems:**

• **Best Time to Buy and Sell Stock (Leetcode 121)**

  

**🛠️ Approach:**

• **State:** dp[i] → Maximum profit ending on day i.

• **Optimized Solution:** Keep track of **minimum price so far** and compute max profit:

• **Time Complexity:** O(N), Space: O(1).

**2️⃣ Best Time to Buy and Sell Stock II (Infinite Transactions Allowed)**

  

**🔹 Problem Statement:** “Maximize profit by making as many transactions as possible (buy and sell multiple times).”

📌 **Common Problems:**

• **Best Time to Buy and Sell Stock II (Leetcode 122)**

  

**🛠️ Approach:**

• **State:** dp[i][holding] where:

• holding = 1 → Holding a stock.

• holding = 0 → Not holding a stock.

• **Recurrence Relation:**

• **Optimized Solution:** Just sum all **positive price differences** (price[i] - price[i-1] if positive).

• **Time Complexity:** O(N), Space: O(1).

**3️⃣ Best Time to Buy and Sell Stock III (At Most 2 Transactions)**

  

**🔹 Problem Statement:** “Find the maximum profit with at most **two** transactions.”

📌 **Common Problems:**

• **Best Time to Buy and Sell Stock III (Leetcode 123)**

  

**🛠️ Approach:**

• **State:** dp[i][transactions][holding] where:

• transactions ∈ {0, 1, 2} → Remaining transactions.

• holding ∈ {0, 1} → Whether you currently hold a stock.

• **Recurrence Relation:**

• **Time Complexity:** O(N), Space: O(1).

**4️⃣ Best Time to Buy and Sell Stock IV (At Most K Transactions)**

  

**🔹 Problem Statement:** “Find the maximum profit with at most **K** transactions.”

📌 **Common Problems:**

• **Best Time to Buy and Sell Stock IV (Leetcode 188)**

  

**🛠️ Approach:**

• **State:** dp[i][k][holding], where k is the number of transactions left.

• **Time Complexity:** O(NK).

**5️⃣ Best Time to Buy and Sell Stock with Cooldown**

  

**🔹 Problem Statement:** “You must wait **one day** after selling before buying again.”

📌 **Common Problems:**

• **Best Time to Buy and Sell Stock with Cooldown (Leetcode 309)**

  

**🛠️ Approach:**

• **State:** dp[i][holding], with a cooldown period.

• **Recurrence Relation:**

• **Time Complexity:** O(N).

**6️⃣ Best Time to Buy and Sell Stock with Transaction Fee**

  

**🔹 Problem Statement:** “Each transaction incurs a fee.”

📌 **Common Problems:**

• **Best Time to Buy and Sell Stock with Transaction Fee (Leetcode 714)**

  

**🛠️ Approach:**

• **Modify recurrence to include transaction fee:**

• **Time Complexity:** O(N).

**📝 Summary: How to Identify DP on Stocks?**

|**Pattern**|**Key Clue in Problem Statement**|**Common Examples**|
|---|---|---|
|**One transaction**|“Buy and sell once”|Leetcode 121|
|**Unlimited transactions**|“Buy and sell multiple times”|Leetcode 122|
|**K transactions limit**|“At most K transactions”|Leetcode 188|
|**Cooldown**|“Wait one day before buying again”|Leetcode 309|
|**Transaction fee**|“Each transaction has a fee”|Leetcode 714|

**💡 How to Approach Stock DP Problems?**

  

1️⃣ **Identify if DP is needed** → Is **buying/selling restricted** in any way?

2️⃣ **Define dp[i][holding] or dp[i][k]** → What does the DP state represent?

3️⃣ **Find the recurrence relation** → How does dp[i] depend on dp[i-1]?

4️⃣ **Use an iterative DP approach (often O(N)).**

5️⃣ **Optimize with greedy, binary search, or Kadane’s algorithm if possible.**

This guide should help you **identify and solve DP on Stocks problems efficiently!** 🚀

Let me know if you need **code examples or more details!** 😊