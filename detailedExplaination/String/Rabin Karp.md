**Rabin-Karp Algorithm**

  

Rabin-Karp is a popular algorithm used for **string matching**. It efficiently finds a pattern (substring) in a given text using a **rolling hash technique**. This algorithm is particularly effective when you need to search for multiple patterns in a single text.

**Key Insights of Rabin-Karp**

1. **Hashing for Efficient Comparison**:

• Instead of directly comparing the pattern with substrings of the text (as done in naive approaches), Rabin-Karp calculates a **hash value** for the pattern and the substrings of the text.

• Hashing allows for a quick comparison of substrings.

2. **Rolling Hash Technique**:

• Instead of recalculating the hash from scratch for each substring, the **rolling hash** is updated efficiently using the previous hash value.

• This significantly reduces computation time, especially for large texts.

3. **Avoiding False Positives**:

• Hash collisions (different substrings with the same hash) are possible. When the hash values match, a direct string comparison is performed to confirm the match.

4. **Applications**:

• String pattern matching (e.g., finding a substring in a text).

• Detecting plagiarism (finding duplicate substrings in a document).

• Bioinformatics (matching DNA sequences).

• Searching for multiple patterns (extendable for multiple substrings).

**How Rabin-Karp Works**

1. Compute the hash value of the pattern.

2. Compute the hash value of the first substring of the text (of the same length as the pattern).

3. Slide the window over the text:

• Update the hash value of the current substring using the rolling hash formula.

• Compare the hash of the pattern with the hash of the current substring.

• If the hash matches, perform a direct string comparison to verify.

4. Continue until the end of the text.

**Mathematical Formula for Rolling Hash**

  

For a string , the hash of a substring is calculated as:

Where:

• is the base (usually the size of the character set, e.g., 256 for ASCII).

• is a large prime number to reduce hash collisions.

• is the length of the pattern.

  

When sliding the window, the hash is updated as:

Where is the new character entering the window.

**Java Code Implementation**

```
public class RabinKarp {

    public static final int d = 256; // Number of characters in the input alphabet

    public static void search(String pattern, String text, int q) {
        int m = pattern.length();
        int n = text.length();
        int i, j;
        int p = 0; // Hash value for pattern
        int t = 0; // Hash value for text
        int h = 1;

        // The value of h would be "pow(d, m-1) % q"
        for (i = 0; i < m - 1; i++) {
            h = (h * d) % q;
        }

        // Calculate the hash value of the pattern and the first window of text
        for (i = 0; i < m; i++) {
            p = (d * p + pattern.charAt(i)) % q;
            t = (d * t + text.charAt(i)) % q;
        }

        // Slide the pattern over text one character at a time
        for (i = 0; i <= n - m; i++) {
            // Check if the hash values of the current window and pattern match
            if (p == t) {
                // If the hash values match, check characters one by one
                for (j = 0; j < m; j++) {
                    if (text.charAt(i + j) != pattern.charAt(j)) {
                        break;
                    }
                }

                // If all characters match
                if (j == m) {
                    System.out.println("Pattern found at index " + i);
                }
            }

            // Calculate hash value for the next window of text
            if (i < n - m) {
                t = (d * (t - text.charAt(i) * h) + text.charAt(i + m)) % q;

                // If we get a negative hash value, convert it to positive
                if (t < 0) {
                    t = (t + q);
                }
            }
        }
    }

    public static void main(String[] args) {
        String text = "ABCCDABCD";
        String pattern = "ABCD";
        int q = 101; // A prime number
        search(pattern, text, q);
    }
}
```

**Explanation of Code**

1. **Precompute** h:

• h is the value of , used in the rolling hash calculation.

2. **Initial Hash Calculation**:

• Compute the hash value of the pattern and the first substring of the text.

3. **Sliding the Window**:

• Update the hash value for the next substring using the rolling hash formula:

• Handle negative hash values by adding q.

4. **Compare Hashes**:

• If the hash of the current substring matches the pattern hash, perform a direct character-by-character comparison to confirm the match.

5. **Output**:

• Print all starting indices where the pattern is found in the text.

**Example**

  

**Input:**

  

Text: ABCCDABCD

Pattern: ABCD

Prime: 101

  

**Output:**

```
Pattern found at index 5
```

**Complexity Analysis**

1. **Time Complexity**:

• Best Case: , where is the length of the text and is the length of the pattern. This happens when there are no hash collisions.

• Worst Case: , when hash collisions occur frequently, requiring character-by-character comparisons.

2. **Space Complexity**:

• : Only integer variables are used for computation.

**Advantages of Rabin-Karp**

1. Efficient for multiple pattern searches.

2. Can be extended to detect duplicate substrings or patterns in large texts.

3. Uses hashing, making it faster than naive string matching in most cases.
