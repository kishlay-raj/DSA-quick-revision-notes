Here’s a Python code snippet to reverse the bits of a 32-bit unsigned integer:

python

Copy code

def reverseBits(n):
    result = 0
    for _ in range(32):  # Process each bit in a 32-bit number
        result = (result << 1) | (n & 1)  # Shift result left and add the least significant bit of n
        n >>= 1  # Shift n right to process the next bit
    return result

# Example usage:
num = 43261596  # Example number
reversed_num = reverseBits(num)  # Output will be 964176192
print(reversed_num)


### Explanation:

- **`result = 0`**: Initialize the result to store the reversed bits.
- **`for _ in range(32)`**: Loop through each of the 32 bits of the number.
- **`result = (result << 1) | (n & 1)`**: Shift `result` left by 1 bit to make room for the next bit and then OR it with the least significant bit of `n` (`n & 1`).
- **`n >>= 1`**: Shift `n` right by 1 bit to process the next bit in the next iteration.
- **Return `result`**: After processing all bits, `result` will contain the reversed bits of the original number.