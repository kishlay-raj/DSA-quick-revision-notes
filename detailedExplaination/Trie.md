Trie method should support following methods:

1. Insert

2. count words equal to

3. count words starting with 

4. Erase
A **Trie** (also called a Prefix Tree) is a specialized tree-like data structure used to store and manage strings efficiently, especially for operations like searching, prefix matching, and word counting. Here’s how it works conceptually:

  

**Key Concepts:**

1. **Structure of a Trie**:

• Each node in the Trie represents a single character of a word.

• Nodes are connected to form a path, where each path from the root to a leaf represents a word.

• A node contains:

• children: A dictionary (or array) of child nodes for the next characters.

• word_count: The number of times a word ends at this node.

• prefix_count: The number of words that pass through this node (i.e., words starting with this prefix).

2. **Insert Operation**:

• When you insert a word, you start from the root and follow/create nodes for each character.

• At each node:

• If the character doesn’t exist, create a new node.

• Increment the prefix_count to reflect that a word passes through this prefix.

• At the last character’s node, increment the word_count to indicate a word ends there.

3. **Count Words Equal To**:

• To count words equal to a specific word, traverse the Trie following the characters of the word.

• If the path exists, the word_count at the last node represents how many times the word was inserted.

• If the path doesn’t exist, the word isn’t in the Trie, and the count is 0.

4. **Count Words Starting With**:

• To count words starting with a prefix, follow the characters of the prefix in the Trie.

• If the path exists, the prefix_count at the last node indicates how many words start with that prefix.

• If the path doesn’t exist, no words have that prefix.

5. **Erase Operation**:

• Erasing a word involves recursively traversing the Trie to find the nodes corresponding to the word.

• At each node:

• Decrement the prefix_count to reflect that fewer words pass through this prefix.

• If the prefix_count and word_count for a node reach 0, the node can be deleted to save space.

**Why Tries Are Useful:**

• **Efficiency**: Operations like insertion, searching, and prefix matching are fast, with a time complexity of , where is the length of the word or prefix.

• **Prefix Management**: Tries make it easy to handle prefixes and count occurrences of words or prefixes.

• **Memory Optimization**: Instead of storing entire strings, Tries store common prefixes once, saving space in cases with overlapping data.

  

This structure is especially useful in applications like autocomplete, dictionary implementations, and solving problems involving prefixes or substrings.


class TrieNode {
    // Children nodes
    TrieNode[] children;
    int wordCount;       // Count of words ending at this node
    int prefixCount;     // Count of words starting with this prefix

    // Constructor
    public TrieNode() {
        children = new TrieNode[26]; // Assuming only lowercase a-z
        wordCount = 0;
        prefixCount = 0;
    }
}

public class Trie {
    private TrieNode root;

    // Constructor
    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into the Trie
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
            node.prefixCount++;
        }
        node.wordCount++;
    }

    // Count the number of words equal to the given word
    public int countWordsEqualTo(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return 0;
            }
            node = node.children[index];
        }
        return node.wordCount;
    }

    // Count the number of words that start with the given prefix
    public int countWordsStartingWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return 0;
            }
            node = node.children[index];
        }
        return node.prefixCount;
    }

    // Erase a word from the Trie
    public void erase(String word) {
        eraseHelper(root, word, 0);
    }

    private boolean eraseHelper(TrieNode node, String word, int depth) {
        if (node == null) {
            return false;
        }

        if (depth == word.length()) {
            if (node.wordCount > 0) {
                node.wordCount--;
                return true;
            }
            return false;
        }

        char c = word.charAt(depth);
        int index = c - 'a';
        if (eraseHelper(node.children[index], word, depth + 1)) {
            node.children[index].prefixCount--;
            if (node.children[index].prefixCount == 0 && node.children[index].wordCount == 0) {
                node.children[index] = null;
            }
            return true;
        }

        return false;
    }

    // Main method for testing
    public static void main(String[] args) {
        Trie trie = new Trie();

        trie.insert("apple");
        trie.insert("apple");
        trie.insert("app");

        System.out.println(trie.countWordsEqualTo("apple")); // Output: 2
        System.out.println(trie.countWordsStartingWith("app")); // Output: 3

        trie.erase("apple");

        System.out.println(trie.countWordsEqualTo("apple")); // Output: 1
        System.out.println(trie.countWordsStartingWith("app")); // Output: 2
    }
}
