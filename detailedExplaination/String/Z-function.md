The Z-function algorithm is a powerful technique used primarily in string processing tasks, particularly for pattern matching within a text. It computes an auxiliary array known as the Z-array, which provides information about the longest substring starting from each position that matches the prefix of the string.

## Key Insights

### Definition
	Z-Function: For a given string  of length , the Z-function is an array  where  represents the length of the longest substring starting from position  that matches the prefix of . In other words, it gives the length of the longest common prefix between  and the substring starting at index .

### Efficient Computation
- The Z-function can be computed in linear time $$ O(n) $$ using a two-pointer technique to maintain a window over the string. This allows the algorithm to utilize previously computed values to avoid redundant comparisons.

### Applications
- **Pattern Matching**: The Z-function is used in algorithms like the Z-algorithm for finding occurrences of a pattern in a text efficiently.
- **String Analysis**: It can be applied in various string analysis tasks, such as finding repeated substrings or analyzing DNA sequences.
- **Data Compression**: The Z-function can assist in data compression algorithms by identifying repeated patterns.
  
For a given string  S , the Z-function of  S  is an array  Z , where  Z[i]  is the **length of the longest substring starting from**  S[i]  that is also a prefix of  S .

Example:

For the string abcababc, the Z-array is:

Z = [0, 0, 0, 2, 0, 3, 0, 1]

• Z[0] = 0  because we don’t consider the string starting from itself as a proper prefix.

• Z[3] = 2  because the substring starting at index 3 (ab) matches the prefix ab.

How It Works
	1.	Initialization: Start with an array  initialized to zero.
	2.	Two-Pointer Technique: Use two pointers,  and , to represent the current segment of matches:
	•	If the current index  is outside this segment (), compute  using a straightforward comparison.
	•	If  is within the segment (), use previously computed values to initialize . Specifically, set .
	3.	Update Segment: After computing , update the segment boundaries if necessary.

Naive Approach (Its time complexity will be O(nxm))
![[Pasted image 20250127073852.png]]
But we can skip some string matching bcz of z function which will give us better time complexity.
The current problem is that we are starting each loop comparison with i=0

## Java Code Implementation

Here’s how you can implement the Z-function algorithm in Java:

```java
public class ZAlgorithm {
    public static int[] computeZ(String s) {
        int n = s.length();
        int[] z = new int[n];
        int l = 0, r = 0;

        for (int i = 1; i < n; i++) {
            if (i > r) {
                l = r = i;
                while (r < n && s.charAt(r) == s.charAt(r - l)) {
                    r++;
                }
                z[i] = r - l;
                r--;
            } else {
                int k = i - l;
                if (z[k] < r - i + 1) {
                    z[i] = z[k];
                } else {
                    l = i;
                    while (r < n && s.charAt(r) == s.charAt(r - l)) {
                        r++;
                    }
                    z[i] = r - l;
                    r--;
                }
            }
        }
        return z;
    }

    public static void main(String[] args) {
        String input = "abacaba";
        int[] zArray = computeZ(input);
        
        System.out.print("Z-array: ");
        for (int z : zArray) {
            System.out.print(z + " ");
        }
    }
}
```

### Explanation of Code
- The `computeZ` method calculates the Z-array for a given string.
- It uses a loop to iterate through each character and applies the two-pointer technique to efficiently compute values.
- The `main` method demonstrates how to use this function and prints out the resulting Z-array.

This algorithm provides an efficient way to analyze strings and is particularly useful in competitive programming and various applications involving text processing.

**Problem Statement**

  

Find all occurrences of a pattern  P  in a text  T .

  

**Example:**

• **Text (T):** "ababcababc"

• **Pattern (P):** "abc"


**Problem Statement**

  

Find all occurrences of a pattern  P  in a text  T .

  

**Example:**

• **Text (T):** "ababcababc"

• **Pattern (P):** "abc"

**Detailed Example**

  

**Input:**

• T = “ababcababc” 

• P = “abc” 

  

**Step 1: Combine the Strings**

  

  

S = “abc\$ababcababc”

  

  

**Step 2: Compute the Z-array**

  

The Z-array for  S  is computed as follows:

1. Start with  Z[0] = 0  (always 0, since we don’t consider the prefix as a proper prefix).

2. Slide the Z-box and compute matches for each index:


**Index**  i **Substring starting at**  i **Z-value (length of prefix match)**

0 abc$ababcababc 0

1 bc$ababcababc 0

2 c$ababcababc 0

3 $ababcababc 0

4 ababcababc 3

5 babcababc 0

6 abcababc 3

7 bcababc 0

8 cababc 0

9 ababc 3

10 babc 0

11 abc 3

12 bc 0

13 c 0

**Z-array:**

  

  

Z = [0, 0, 0, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 0]

  

  

**Step 3: Identify Matching Indices**

• Pattern length  |P| = 3 .

• For each index  i  where  Z[i] = 3 , calculate the starting position of the match in the text:

  

\text{Match index in text} = i - |P| - 1

**Step 3: Identify Matching Indices**

• Pattern length  |P| = 3 .

• For each index  i  where  Z[i] = 3 , calculate the starting position of the match in the text:

  

\text{Match index in text} = i - |P| - 1

  

  

**Matches:**

• Z[4] = 3 : Match at index  4 - 3 - 1 = 0 .

• Z[6] = 3 : Match at index  6 - 3 - 1 = 2 .

• Z[9] = 3 : Match at index  9 - 3 - 1 = 5 .

• Z[11] = 3 : Match at index  11 - 3 - 1 = 7 .


**Key Insights**

1. **Combining Strings**:

• Using the separator ensures that the pattern and text do not interfere when calculating the prefix matches.

2. **Efficiency**:

• The Z-function algorithm works in  O(n + m) , where  n  is the length of the text and  m  is the length of the pattern.

3. **Hash Collisions**:

• Unlike hashing-based methods (e.g., Rabin-Karp), the Z-function does not suffer from hash collisions.


**How is time complexity of z-function o(n+m) and not o(n*m)?**

The **time complexity of the Z-function algorithm is** **, not** , because it uses an efficient **sliding window technique** to avoid redundant comparisons. Let’s break it down step by step to understand why this is true.

**Key Observations**

1. **Avoiding Redundant Comparisons**:

• The Z-function leverages a **Z-box** (defined by and ) to reuse previously computed values, avoiding repeated character comparisons.

• Once a match for a substring is determined, the algorithm can “skip” over the matched portion.

2. **Per Character Analysis**:

• Each character of the string is processed at most twice:

• **First time**: To compare it against the prefix.

• **Second time**: When sliding the bounds of the Z-box.

3. **Efficient Matching Within Z-box**:

• If the current index lies within the Z-box (), the algorithm uses the precomputed Z-values from earlier to extend the match, instead of starting from scratch.

**Time Complexity Breakdown**

  

**Let’s look at how the algorithm works for a string of length** **:**

1. **Initialization**:

• Initializing the Z-array takes , as it involves a single traversal of the string.

2. **Z-Box Extension**:

• For each character :

• If lies **outside the Z-box** (), comparisons are performed until the match fails, and the Z-box is updated.

• If lies **inside the Z-box**, reuse the Z-value and extend the match only if necessary.

• The **key observation** is that every character is either:

• Compared directly at most once (when expanding the Z-box), or

• Reused through a previous Z-value (constant time for reuse).

• No character is unnecessarily reprocessed, ensuring that the total work done is proportional to the length of the string.

  

**Total Work Done:**

• Each character contributes at most **one comparison for expanding the Z-box** and **one reuse operation**.

• This ensures that the algorithm runs in , where is the length of the text and is the length of the pattern.

**Comparison with Naive Pattern Matching**

  

In a naive pattern-matching approach:

• For every position in the text, we may compare the entire pattern, leading to .

  

In the Z-function approach:

• Comparisons are “globalized” across the string using the sliding window, avoiding redundant checks.

**Example Walkthrough**

  

Let’s consider a concrete example:

  

**Input:**

• **Pattern**:

• **Text**:

• **Combined String**:

  

**Steps:**

1. Process and compute the Z-array:

• At index , (no match is computed for the prefix itself).

• At index , (no match between and the prefix).

• At index , (match with prefix “abc”).

• At index , reuse previously computed .

  

**Z-array:**

  

  

**Observations:**

• Each character contributes to the computation **at most twice** (once for comparison, once for reuse).

• No unnecessary recalculations are performed.

**Key Insights**

1. **Sliding Window Optimization**:

• The Z-function dynamically maintains a sliding window, called the Z-box, where matches are already computed. By reusing these precomputed values, redundant work is eliminated.

2. **Character Processing**:

• Each character in the string is processed at most **twice**, ensuring linear time complexity.

3. **Efficient Matching**:

• The Z-function exploits the fact that if a substring matches the prefix, we don’t need to compare those characters again.

**Conclusion**

  

The Z-function algorithm’s time complexity is , not , because:

• It processes each character of the combined string (length ) at most twice.

• Redundant comparisons are avoided using the sliding window technique and precomputed Z-values.

  

Let me know if you’d like further clarification or another example! 😊