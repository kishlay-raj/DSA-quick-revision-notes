### Explanation: Count the Number of Subarrays with Given XOR KK

To solve the problem, we utilize the **prefix XOR** technique and a **hashmap** to efficiently count the subarrays.

---

![[Pasted image 20241124115642.png]]

![[Pasted image 20241124115659.png]]
### Algorithm:

1. Traverse the array while calculating the running prefix XOR.
2. For each prefix XOR:
    - Compute prefixXOR⊕K\text{prefixXOR} \oplus KprefixXOR⊕K.
    - Check if prefixXOR⊕K\text{prefixXOR} \oplus KprefixXOR⊕K exists in the hashmap:
        - If yes, add its frequency to the count (because it represents valid subarrays ending at the current index).
    - Add/update the current prefix XOR in the hashmap.

This approach efficiently counts all subarrays with the desired XOR KKK.