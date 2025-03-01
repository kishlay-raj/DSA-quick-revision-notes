import java.util.*;

public class MaximumXOR {

    // Trie Node class
    static class TrieNode {
        TrieNode[] children = new TrieNode[2]; // For 0 and 1
    }

    // Insert a number into the Trie
    private static void insert(TrieNode root, int num) {
        TrieNode node = root;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1; // Get the i-th bit of the number
            if (node.children[bit] == null) {
                node.children[bit] = new TrieNode();
            }
            node = node.children[bit];
        }
    }

    // Find the maximum XOR for a given number using the Trie
    private static int findMaxXOR(TrieNode root, int num) {
        TrieNode node = root;
        int maxXOR = 0;

        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1; // Get the i-th bit of the number
            int oppositeBit = 1 - bit; // Try to pick the opposite bit

            if (node.children[oppositeBit] != null) {
                maxXOR |= (1 << i); // Set the i-th bit in the result
                node = node.children[oppositeBit];
            } else {
                // If the opposite bit isn't available, take the same bit
                node = node.children[bit];
            }
        }

        return maxXOR;
    }

    // Function to find the maximum XOR of two numbers in the array
    public static int findMaximumXOR(int[] nums) {
        TrieNode root = new TrieNode();

        // Insert all numbers into the Trie
        for (int num : nums) {
            insert(root, num);
        }

        // Find the maximum XOR
        int maxXOR = 0;
        for (int num : nums) {
            maxXOR = Math.max(maxXOR, findMaxXOR(root, num));
        }

        return maxXOR;
    }

    public static void main(String[] args) {
        int[] nums = {3, 10, 5, 25, 2, 8};
        int result = findMaximumXOR(nums);
        System.out.println("Maximum XOR: " + result); // Output: 28
    }
}