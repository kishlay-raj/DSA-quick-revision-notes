Insert (word): To insert a string `word` in the Trie. Count Words Equal To (word): Return the count of occurrences of the string word in the Trie. Count Words Starting With (prefix): Return the count of words in the Trie that have the string “prefix” as a prefix. Erase (word): Delete one occurrence of the string word from the Trie.


class TrieNode {
    TrieNode[] children = new TrieNode[26];
    int prefixCount = 0;   // Counts how many words pass through this node
    int wordCount = 0;     // Counts how many words end at this node
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into the Trie
    public void insert(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
            current.prefixCount++;
        }
        current.wordCount++;
    }

    // Count words equal to the given word
    public int countWordsEqualTo(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                return 0;
            }
            current = current.children[index];
        }
        return current.wordCount;
    }

    // Count words starting with the given prefix
    public int countWordsStartingWith(String prefix) {
        TrieNode current = root;
        for (char ch : prefix.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) {
                return 0;
            }
            current = current.children[index];
        }
        return current.prefixCount;
    }

    // Erase one occurrence of the given word from the Trie
    public void erase(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            TrieNode child = current.children[index];
            if (child == null) {
                return; // Word does not exist, nothing to erase
            }
            child.prefixCount--;
            if (child.prefixCount == 0) {
                current.children[index] = null; // Remove unused nodes
                return;
            }
            current = child;
        }
        current.wordCount--;
    }
}

