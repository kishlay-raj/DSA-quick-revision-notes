• A **Trie (prefix tree)** is used to store all unique substrings of the given string.

• Every path in the Trie from the root to a node represents a substring.

• By inserting all substrings into the Trie, we can count the number of distinct substrings by simply counting the number of nodes in the Trie (excluding the root).


import java.util.HashMap;

public class DistinctSubstrings {

    // Trie Node class
    static class TrieNode {
        HashMap<Character, TrieNode> children = new HashMap<>();
    }

    // Function to insert substrings into the Trie
    private static int insertSubstrings(TrieNode root, String s) {
        int distinctCount = 0;

        for (int i = 0; i < s.length(); i++) {
            TrieNode current = root;

            for (int j = i; j < s.length(); j++) {
                char c = s.charAt(j);

                // If the character is not in the current node, create a new child
                if (!current.children.containsKey(c)) {
                    current.children.put(c, new TrieNode());
                    distinctCount++; // Increment the count of distinct substrings
                }

                // Move to the child node
                current = current.children.get(c);
            }
        }

        return distinctCount;
    }

    // Function to calculate the number of distinct substrings
    public static int countDistinctSubstrings(String s) {
        TrieNode root = new TrieNode();
        return insertSubstrings(root, s);
    }

    public static void main(String[] args) {
        String s = "abc";
        int result = countDistinctSubstrings(s);
        System.out.println("Number of distinct substrings: " + result);
    }
}
