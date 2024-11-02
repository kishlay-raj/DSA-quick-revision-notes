Here’s how to implement a Trie data structure that supports the three operations `insert`, `search`, and `startsWith`.

### 1. **TrieNode Class**

Each node in the Trie should have:

- A dictionary to store references to its child nodes.
- A boolean flag to mark the end of a word.
### 2. **Trie Class**

The `Trie` class will:

- Contain methods for `insert`, `search`, and `startsWith`.
- Use the root node to access the Trie.

class TrieNode {
    // Array to hold references to child nodes
    TrieNode[] children;
    // Flag to mark the end of a word
    boolean isEndOfWord;

    // Constructor to initialize TrieNode
    public TrieNode() {
        children = new TrieNode[26]; // 26 for each letter a-z
        isEndOfWord = false;
    }
}

class Trie {
    private TrieNode root;

    // Initialize Trie with a root node
    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into the Trie
    public void insert(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a'; // Calculate index (0-25) for each character
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        // Mark the end of the word
        current.isEndOfWord = true;
    }

    // Search for a word in the Trie
    public boolean search(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                return false; // Character path doesn't exist
            }
            current = current.children[index];
        }
        // Return true if end of word is reached
        return current.isEndOfWord;
    }

    // Check if any word starts with the given prefix
    public boolean startsWith(String prefix) {
        TrieNode current = root;
        for (char ch : prefix.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                return false; // Prefix path doesn't exist
            }
            current = current.children[index];
        }
        return true; // All characters in prefix exist in the Trie
    }
}


**Example Usage**

public class Main {
    public static void main(String[] args) {
        Trie trie = new Trie();

        // Insert words
        trie.insert("apple");
        trie.insert("app");

        // Search for full words
        System.out.println(trie.search("apple")); // Output: true
        System.out.println(trie.search("app"));   // Output: true
        System.out.println(trie.search("appl"));  // Output: false

        // Check if any word starts with a given prefix
        System.out.println(trie.startsWith("app")); // Output: true
        System.out.println(trie.startsWith("apl")); // Output: false
    }
}

### Explanation

1. **`insert(String word)`**:
    
    - Converts each character to an index (`ch - 'a'`) and adds nodes to the Trie if they don’t exist at each level.
    - Marks the end of the word when the word is fully inserted.
2. **`search(String word)`**:
    
    - Checks each character in the word to see if the path exists in the Trie.
    - Returns `true` if all characters are found and the last node is marked as the end of a word.
3. **`startsWith(String prefix)`**:
    
    - Similar to `search`, but it doesn’t check `isEndOfWord`, only confirming if the path for the prefix exists.

This implementation is efficient for each operation, running in O(n)O(n)O(n) time, where nnn is the length of the word or prefix.