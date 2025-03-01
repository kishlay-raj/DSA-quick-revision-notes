**How to Identify If a Coding Problem Is a Binary Search Tree (BST) Problem**

  

A **Binary Search Tree (BST)** is a special type of **Binary Tree** where for every node:

• The **left subtree** contains values **smaller** than the node.

• The **right subtree** contains values **greater** than the node.

• The left and right subtrees must also be BSTs (recursive structure).

  

**1️⃣ How to Identify If a Problem Involves a BST?**

  

✅ **The problem explicitly mentions a “Binary Search Tree.”**

✅ **The problem requires searching for elements efficiently (O(log n) expected).**

✅ **The problem involves finding the “smallest,” “largest,” “predecessor,” or “successor.”**

✅ **The problem involves range queries (find values between X and Y).**

✅ **The problem involves inserting, deleting, or balancing nodes in a tree.**

✅ **The problem requires sorting-related operations using a tree structure.**

✅ **The problem involves checking BST properties (is this a valid BST?).**

**2️⃣ Common BST Problem Patterns & When to Use a BST**

|**Problem Type**|**How to Identify?**|**Approach**|
|---|---|---|
|**Search for an element**|“Find X in a tree efficiently.”|Use **BST property** (left < root < right) to search in O(log n).|
|**Insert/Delete a node**|“Modify the tree by adding/removing nodes.”|Use **recursive BST insertion/deletion**.|
|**Find the kth smallest/largest element**|“Find the k-th smallest/largest number.”|Use **inorder traversal (sorted order)** or **Augmented BST with node counts**.|
|**Check if a tree is a BST**|“Validate if a tree follows BST rules.”|Use **inorder traversal** (must be sorted) or **min/max range check**.|
|**Find Lowest Common Ancestor (LCA) in BST**|“Find the lowest common ancestor of two nodes.”|Use BST properties (if both nodes are on the same side, move down).|
|**Find the Inorder Successor/Predecessor**|“Find the next or previous node in sorted order.”|Use **BST inorder traversal** or **parent tracking**.|
|**Convert Sorted Array to a BST**|“Construct a height-balanced BST from a sorted array.”|Use **midpoint selection recursively**.|
|**Range Sum or Range Search**|“Find all values between [L, R].”|Use **BST property to prune unnecessary branches**.|

**3️⃣ Example 1: Search in a BST**

  

**Problem Statement:**

Given the root of a BST and a value X, return the node containing X, or None if not found.

  

**Identification:**

  

✅ The problem involves **searching** for a value.

✅ A **BST property (left < root < right) can be used to optimize search to O(log n).**

  

**Solution (Recursive Approach)**

```
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def search_bst(root, X):
    if not root or root.val == X:
        return root  # Found the node or reached a null node
    if X < root.val:
        return search_bst(root.left, X)  # Search in the left subtree
    return search_bst(root.right, X)  # Search in the right subtree
```

✅ **Time Complexity:** O(log n) (for balanced BST), O(n) (for skewed BST).

✅ **Why It Works?** **BST property allows us to skip half of the tree at each step.**

**4️⃣ Example 2: Check If a Tree Is a Valid BST**

  

**Problem Statement:**

Given the root of a tree, determine if it is a valid **Binary Search Tree (BST)**.

  

**Identification:**

  

✅ The problem asks if a tree follows **BST rules**.

✅ We need to check if **left < root < right holds everywhere**.

✅ A **recursive min/max boundary approach** can verify this efficiently.

  

**Solution (Recursive Min/Max Approach)**

```
def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    if not root:
        return True
    if not (min_val < root.val < max_val):
        return False  # Current node violates the BST rule
    return (is_valid_bst(root.left, min_val, root.val) and
            is_valid_bst(root.right, root.val, max_val))
```

✅ **Time Complexity:** O(n)

✅ **Why It Works?** **Ensures every node satisfies BST constraints using min/max bounds.**

**5️⃣ Example 3: Find the Kth Smallest Element in a BST**

  

**Problem Statement:**

Find the **k-th smallest element** in a BST.

  

**Identification:**

  

✅ The problem asks for an **ordered** element → **Inorder traversal gives sorted order**.

✅ We can efficiently **stop at the k-th element** → Use a counter.

  

**Solution (Inorder Traversal Approach)**

```
def kth_smallest(root, k):
    stack = []
    while root or stack:
        while root:
            stack.append(root)
            root = root.left  # Move to leftmost node (smallest first)
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val  # Found the k-th smallest element
        root = root.right  # Move to next larger element
```

✅ **Time Complexity:** O(k) (For balanced BST, better than O(n) traversal).

✅ **Why It Works?** **BST inorder traversal gives elements in sorted order.**

**6️⃣ Example 4: Find Lowest Common Ancestor (LCA) in a BST**

  

**Problem Statement:**

Find the **Lowest Common Ancestor (LCA)** of two nodes in a BST.

  

**Identification:**

  

✅ The problem involves finding a **common ancestor**.

✅ Since it’s a BST, the **LCA is where the paths to p and q split**.

  

**Solution (Using BST Properties)**

```
def lowest_common_ancestor_bst(root, p, q):
    if not root:
        return None
    if p.val < root.val and q.val < root.val:
        return lowest_common_ancestor_bst(root.left, p, q)  # Both nodes are in the left subtree
    if p.val > root.val and q.val > root.val:
        return lowest_common_ancestor_bst(root.right, p, q)  # Both nodes are in the right subtree
    return root  # This is the split point (LCA)
```

✅ **Time Complexity:** O(log n) for balanced BST, O(n) for skewed BST.

✅ **Why It Works?** **We traverse only one path based on BST properties.**

**7️⃣ When NOT to Use a BST?**

  

🚫 **If the problem does NOT require searching, ordering, or hierarchical relationships.**

🚫 **If a HashMap (O(1) lookup) is faster for finding elements.**

🚫 **If the problem requires frequent rebalancing (BST insertions/deletions are O(log n) but require balancing in AVL or Red-Black Trees).**

🚫 **If dealing with unstructured data (linked lists, heaps, or hash tables may be better).**

  

Example: **“Find if an element exists in an unsorted array.”**

• A **hash table (O(1) lookup) is better than a BST (O(log n)).**

**8️⃣ Final Checklist: Is It a BST Problem?**

  

✅ **Does the problem involve searching efficiently?**

✅ **Does it involve sorting-related operations with a tree?**

✅ **Does it require checking BST rules or properties?**

✅ **Does it involve finding ordered elements (smallest/largest/k-th)?**

✅ **Does the problem mention LCA, successor, or predecessor?**

  

If **YES**, then **BST is the right approach!** 🚀

  

Would you like help with a specific BST problem? 😊