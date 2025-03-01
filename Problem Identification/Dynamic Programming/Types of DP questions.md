

**📌 Categories of Dynamic Programming (DP) Problems**

  

DP problems typically have **overlapping subproblems** and **optimal substructure** properties. To identify them, check for:

✅ **Repeated subproblems** (Recursive calls solving the same problem multiple times)

✅ **Decision-making at each step** (Choices leading to optimal results)

✅ **Optimal substructure** (Optimal solution built from optimal sub-solutions)

**1. 1D DP (Linear DP)**

  

✅ **Identification**: Problems where the solution depends on **previous states in a linear sequence**.

🔹 **Examples**:

• Fibonacci sequence

• Climbing Stairs (Ways to reach Nth step)

• House Robber Problem (Max sum of non-adjacent elements)

• Maximum sum subarray (Kadane’s Algorithm)

  

📌 **Approach**: Use an **array or variables** to store previously computed values.

**2. 2D DP (Grid-Based Problems)**

  

✅ **Identification**: Problems that involve **moving through a grid/matrix**, with a decision at each cell.

🔹 **Examples**:

• Unique Paths in an MxN Grid

• Minimum Path Sum in a Grid

• Edit Distance (String transformation cost)

• Longest Common Subsequence (LCS)

  

📌 **Approach**: Use a **2D DP table** (dp[i][j]) where each cell represents a subproblem’s solution.

**3. Subset/Partition DP (Knapsack-Type)**

  

✅ **Identification**: Problems where you need to **include/exclude elements** to achieve a goal.

🔹 **Examples**:

• 0/1 Knapsack (Maximize profit with limited weight)

• Subset Sum (Check if a subset with given sum exists)

• Partition Equal Subset Sum (Divide array into two equal-sum subsets)

• Coin Change (Ways to form an amount using given coins)

  

📌 **Approach**: Use a **boolean or integer DP array** to track achievable sums or max values.

**4. DP on Strings (Sequence Alignment)**

  

✅ **Identification**: Problems where you compare/manipulate strings.

🔹 **Examples**:

• Longest Common Subsequence (LCS)

• Longest Palindromic Subsequence

• Edit Distance (Convert one string to another)

• Wildcard Matching / Regular Expression Matching

  

📌 **Approach**: Use **2D DP table** (dp[i][j] represents a subproblem solution for prefixes of the strings).

**5. DP on Trees**

  

✅ **Identification**: Problems where the input is a **tree** (graph with no cycles) and require recursion.

🔹 **Examples**:

• Maximum Path Sum in a Binary Tree

• Diameter of a Binary Tree

• House Robber III (Rob houses in a tree structure)

  

📌 **Approach**: Use **postorder traversal (bottom-up DP)** and store values at each node.

**6. DP on Graphs**

  

✅ **Identification**: DP problems that involve **shortest paths, longest paths, or DAG traversal**.

🔹 **Examples**:

• Shortest Path in a Weighted Graph (Bellman-Ford Algorithm)

• Longest Path in a Directed Acyclic Graph (DAG)

• Minimum Cost to Reach a Node

  

📌 **Approach**: Use **topological sorting** or **memoized recursion** to track optimal paths.

**7. Bitmask DP**

  

✅ **Identification**: Problems where subsets of elements are represented using **bitwise operations** (e.g., 1101 represents subset {1,3,4}).

🔹 **Examples**:

• Traveling Salesman Problem (TSP)

• Minimum XOR Sum of Two Arrays

• Assigning Tasks to Workers

  

📌 **Approach**: Use **bitwise states (dp[mask])** to store subproblem results efficiently.

**8. Palindromic DP**

  

✅ **Identification**: Problems related to **finding, partitioning, or extending palindromes**.

🔹 **Examples**:

• Longest Palindromic Subsequence

• Palindrome Partitioning (Minimum cuts to make all substrings palindromes)

• Count Palindromic Substrings

  

📌 **Approach**: Use **2D DP table (dp[i][j])** where dp[i][j] tracks palindrome status between i and j.

**9. DP on Intervals**

  

✅ **Identification**: Problems where decisions involve **ranges or segments** in an array or string.

🔹 **Examples**:

• Matrix Chain Multiplication (Find min cost of multiplying matrices)

• Minimum Cost to Cut a Stick

• Merge Stones to Minimize Cost

  

📌 **Approach**: Use **interval-based DP (dp[i][j])**, iterating over possible partition points.

**10. Digit DP**

  

✅ **Identification**: Problems where you count numbers **within a range** that satisfy certain conditions.

🔹 **Examples**:

• Count Numbers with Unique Digits

• Count Stepping Numbers in a Given Range

• Find Numbers Without Consecutive 1s

  

📌 **Approach**: Use **DP with digit constraints** to efficiently count valid numbers.

**11. Game Theory DP**

  

✅ **Identification**: Problems where two players make moves, and you need to determine **winning/losing positions**.

🔹 **Examples**:

• Nim Game

• Predict the Winner (Optimal Strategy for the Game)

• Stone Game

  

📌 **Approach**: Use **backtracking + memoization** to track winning positions.

**12. DP with Probability**

  

✅ **Identification**: Problems where the solution involves **expected values or probabilities**.

🔹 **Examples**:

• Knight Probability in Chessboard

• Tossing Coins to Reach a Target

• Random Walk Problems

**11.DP on squares**
12 . **MAM DP | Partition DP**
13 **DP on Stocks** 



  

📌 **Approach**: Use **fractional DP (dp[i][j] tracks probability at step i, state j)**.

**📌 How to Identify the Right DP Category?**

  

**✅ Check for these patterns in the problem statement:**

13. **Recursive choices?** → Likely a DP problem.

14. **State transitions over time?** → 1D or 2D DP.

15. **Subset selection?** → Knapsack-type.

16. **String comparison?** → LCS/Edit Distance.

17. **Tree structure?** → DP on Trees.

18. **Counting possibilities?** → Bitmask or Digit DP.

19. **Range-based decisions?** → Interval DP.

20. **Player-based decisions?** → Game Theory DP.

This is a **complete guide** to DP problem types. Let me know if you need **detailed explanations, pseudocode, or solutions** for any category! 🚀😊