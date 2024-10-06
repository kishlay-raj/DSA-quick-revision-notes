1. sort 
### 2. **Iterate through the array**:

- For each element `nums[i]`, treat it as the first element of the triplet.
- Skip duplicates: If `nums[i]` is the same as the previous element (`nums[i] == nums[i-1]`), skip it to avoid duplicate triplets.

### 3. **Use two-pointer approach**:

- After fixing the element at index `i`, use two pointers:
    - **Left pointer (`left`)** starts just after `i` (i.e., `left = i + 1`).
    - **Right pointer (`right`)** starts at the end of the array (i.e., `right = n - 1`).
- Now, the goal is to find the combination of `nums[left] + nums[right]` that sums to `-nums[i]`.

### 4. **Adjust pointers based on the sum**:

- Calculate the sum: `current_sum = nums[i] + nums[left] + nums[right]`.
- If `current_sum == 0`, you've found a valid triplet. Add it to the result, then move both pointers inward (left++, right--) while skipping duplicates.
- If `current_sum < 0`, increment the `left` pointer to increase the sum.
- If `current_sum > 0`, decrement the `right` pointer to decrease the sum