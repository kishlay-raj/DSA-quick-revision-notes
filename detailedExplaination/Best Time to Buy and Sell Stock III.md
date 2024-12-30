**Problem Statement**:  
You are allowed to perform **at most two transactions** (buy and sell) on stock prices provided in an array. Each transaction consists of one buy and one sell, and you cannot engage in multiple transactions simultaneously (i.e., you must sell before buying again). The goal is to maximize your total profit.


### **Key Insights**

1. **Two Transactions**:
    
    - You can split the stock prices into two segments: one for each transaction.
    - The first transaction covers the days from the start to day iii.
    - The second transaction covers the days from day i+1i+1i+1 to the end.
2. **Maximum Profit Calculation**:
    
    - Compute the **maximum profit for one transaction** up to each day.
    - Compute the **maximum profit for one transaction** from each day to the end.
    - Combine these two results to get the maximum total profit.
3. **Dynamic Programming Approach**:
    
    - Use two arrays:
        - **`leftProfit[i]`**: Maximum profit achievable with one transaction from day 000 to day iii.
        - **`rightProfit[i]`**: Maximum profit achievable with one transaction from day iii to the end.
        - 
- ### **Algorithm**

#### **Step 1: Compute `leftProfit`**

- Traverse from left to right.
- Track the **minimum price so far** and calculate the maximum profit for each day.

#### **Step 2: Compute `rightProfit`**

- Traverse from right to left.
- Track the **maximum price so far** and calculate the maximum profit for each day.

#### **Step 3: Combine Results**

- For each day iii, compute the total profit as: <code>totalProfit[i]=leftProfit[i]+rightProfit[i+1]\text{totalProfit}[i] = \text{leftProfit}[i] + \text{rightProfit}[i+1]totalProfit[i]=leftProfit[i]+rightProfit[i+1] </code>
    - Maximize the total profit over all days.
-
<code>
public class BestTimeToBuyAndSellStockIII {

    public static int maxProfit(int[] prices) {
        int n = prices.length;
        if (n == 0) return 0;

        // Step 1: Calculate leftProfit
        int[] leftProfit = new int[n];
        int minPrice = prices[0];
        for (int i = 1; i < n; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            leftProfit[i] = Math.max(leftProfit[i - 1], prices[i] - minPrice);
        }

        // Step 2: Calculate rightProfit
        int[] rightProfit = new int[n];
        int maxPrice = prices[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            maxPrice = Math.max(maxPrice, prices[i]);
            rightProfit[i] = Math.max(rightProfit[i + 1], maxPrice - prices[i]);
        }

        // Step 3: Combine results
        int maxProfit = 0;
        for (int i = 0; i < n; i++) {
            maxProfit = Math.max(maxProfit, leftProfit[i] + rightProfit[i]);
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {3, 3, 5, 0, 0, 3, 1, 4};
        System.out.println("Maximum Profit: " + maxProfit(prices));
    }
}
</code>

