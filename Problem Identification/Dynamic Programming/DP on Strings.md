**How to Identify DP on Strings (Sequence Alignment Problems)**

**String-related Dynamic Programming (DP) problems** typically involve **comparing, transforming, or analyzing strings** to find an optimal solution. These problems usually require **breaking the problem down into smaller subproblems**, often related to substrings.

  

**📌 Key Identifiers for DP on Strings:**

1. **The problem involves operations on two strings or substrings**

• Common operations: **Insert, Delete, Replace, Match, Mismatch**

• Example: Convert one string into another with minimal operations.

2. **Overlapping subproblems and optimal substructure**

• If solving a smaller version of the problem helps solve the larger problem efficiently.

• Example: Checking if the first half of a transformation holds true in the second half.

1. **Comparison-based problems (Matching, Aligning, Transforming)**

• Problems where you need to **align characters, find subsequences, or edit strings**.

2. **Constraints that indicate exponential brute-force solutions**

• If a brute-force approach leads to **O(2ⁿ) or O(n!) complexity**, DP is likely needed for optimization.

**🎯 Common Types of DP on Strings**

  

These problems **fall into several major types**, each with its own approach.

  

**1️⃣ Longest Common Subsequence (LCS) Type**

  

**🔹 Problem Statement:** Find the longest subsequence that appears in both strings (not necessarily contiguous).

📌 **Common Problems:**

• **Longest Common Subsequence (LCS)** → dp[i][j] stores LCS of s1[0...i-1] and s2[0...j-1]

• **Longest Common Substring** (continuous subsequence)

• **Shortest Common Supersequence** (merge both strings to maintain order)

• **Min Insertions/Deletions to Convert One String to Another**

  

**🛠️ Approach:**

• Define dp[i][j] as the length of the LCS for substrings s1[0...i-1] and s2[0...j-1].

• If characters match:

• Else:

• **Time Complexity:** O(N*M)

**2️⃣ Edit Distance (Levenshtein Distance) Type**

  

**🔹 Problem Statement:** Convert one string into another using the minimum number of **Insert, Delete, Replace** operations.

📌 **Common Problems:**

• **Edit Distance (Convert word1 to word2)**

• **String Transformation Problems**

• **Spell Correction Algorithms**

  

**🛠️ Approach:**

• Define dp[i][j] as **the minimum number of operations** to convert s1[0...i-1] into s2[0...j-1].

• Recurrence:

• If characters match:

• If they don’t match:

• **Time Complexity:** O(N*M)

**3️⃣ Regular Expression / Wildcard Matching**

  

**🔹 Problem Statement:** Determine if a string matches a pattern containing special characters like * and ?.

📌 **Common Problems:**

• **Wildcard Matching (? matches any character, * matches any sequence)**

• **Regex Matching (handling . and *)**

  

**🛠️ Approach:**

• Define dp[i][j] as **true** if s[0...i-1] matches p[0...j-1].

• Base Cases:

• dp[0][0] = true (empty string matches empty pattern).

• Recurrence:

• If characters match (s[i-1] == p[j-1] or p[j-1] == '?'):

• If pattern contains *:

• **Time Complexity:** O(N*M)

**4️⃣ Palindromic DP**

  

**🔹 Problem Statement:** Find palindromes within a given string.

📌 **Common Problems:**

• **Longest Palindromic Subsequence** (Find longest subsequence that is a palindrome)

• **Longest Palindromic Substring** (Find longest contiguous palindrome)

• **Minimum Insertions to Make a String a Palindrome**

• **Palindrome Partitioning (Min cuts to split a string into palindromes)**

  

**🛠️ Approach:**

• Define dp[i][j] as **true** if s[i...j] is a palindrome.

• Recurrence:

• If s[i] == s[j] and dp[i+1][j-1] is true, then dp[i][j] = true.

• Otherwise, dp[i][j] = false.

• **Time Complexity:** O(N²)

**5️⃣ Sequence Alignment Problems**

  

**🔹 Problem Statement:** Align two strings optimally by inserting gaps (-).

📌 **Common Problems:**

• **DNA Sequence Alignment (Bioinformatics)**

• **Needleman-Wunsch Algorithm (Global Alignment)**

• **Smith-Waterman Algorithm (Local Alignment)**

  

**🛠️ Approach:**

• Define dp[i][j] as **the best alignment score** up to s1[0...i-1] and s2[0...j-1].

• Apply scoring rules:

• Match: dp[i][j] = dp[i-1][j-1] + match_score

• Mismatch: dp[i][j] = dp[i-1][j-1] + mismatch_penalty

• Insert/Delete (Gap): dp[i][j] = max(dp[i-1][j] - gap_penalty, dp[i][j-1] - gap_penalty)

• **Time Complexity:** O(N*M)

**📝 Summary: How to Identify DP on Strings?**

|**Pattern**|**Key Clue in Problem Statement**|**Common Examples**|
|---|---|---|
|**LCS Type**|Find longest common subsequence/substring|LCS, Shortest Common Supersequence|
|**Edit Distance**|Convert one string to another using Insert/Delete/Replace|Edit Distance, Spell Correction|
|**Wildcard Matching**|Match string with * and ?|Regex Matching, Wildcard Matching|
|**Palindromic DP**|Find longest palindrome or min changes to make a palindrome|Longest Palindromic Subsequence, Palindrome Partitioning|
|**Sequence Alignment**|Align two sequences optimally with penalties|DNA Alignment, Global Alignment|

**💡 How to Approach These Problems?**

3. **Identify the problem type** (Subsequence? Transformation? Matching?)

4. **Define dp[i][j]** (What does dp[i][j] represent?)

5. **Find the recurrence relation** (How does the problem break into subproblems?)

6. **Optimize space if needed** (Convert O(N*M) DP to O(N) using rolling arrays)

7. **Handle base cases carefully** (Especially for empty strings)

This guide should help you **identify and solve DP on Strings problems effectively!** 🚀 Let me know if you need explanations or code examples! 😊