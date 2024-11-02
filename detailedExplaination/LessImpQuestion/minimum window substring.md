import java.util.HashMap;
import java.util.Map;

public class MinimumWindowSubstring {
    public String minWindow(String s, String t) {
        if (s == null || t == null || s.length() < t.length()) {
            return "";
        }

        // Character count map for string t
        Map<Character, Integer> targetCount = new HashMap<>();
        for (char c : t.toCharArray()) {
            targetCount.put(c, targetCount.getOrDefault(c, 0) + 1);
        }

        // Map to store the frequency of characters in the current window of s
        Map<Character, Integer> windowCount = new HashMap<>();

        int start = 0, minStart = 0;
        int minLength = Integer.MAX_VALUE;
        int required = targetCount.size(); // Total unique characters in t
        int formed = 0; // Number of unique characters in the current window that meet target frequency

        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            windowCount.put(c, windowCount.getOrDefault(c, 0) + 1);

            // If the character's frequency matches the target frequency, increment `formed`
            if (targetCount.containsKey(c) && windowCount.get(c).intValue() == targetCount.get(c).intValue()) {
                formed++;
            }

            // Try to contract the window if all characters are found
            while (formed == required) {
                // Update minimum window
                if (end - start + 1 < minLength) {
                    minLength = end - start + 1;
                    minStart = start;
                }

                // Try to remove characters from the start
                char startChar = s.charAt(start);
                windowCount.put(startChar, windowCount.get(startChar) - 1);

                // If removing startChar breaks the requirement, decrease `formed`
                if (targetCount.containsKey(startChar) && windowCount.get(startChar).intValue() < targetCount.get(startChar).intValue()) {
                    formed--;
                }

                start++; // Move start pointer rightward
            }
        }

        // Return the smallest valid window or an empty string if no valid window was found
        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);
    }

    public static void main(String[] args) {
        MinimumWindowSubstring solution = new MinimumWindowSubstring();
        String s = "ADOBECODEBANC";
        String t = "ABC";
        System.out.println("Minimum window substring: " + solution.minWindow(s, t)); // Output: "BANC"
    }
}
