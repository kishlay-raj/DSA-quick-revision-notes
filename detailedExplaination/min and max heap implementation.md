
In coding interviews, implementing **Min-Heap** and **Max-Heap** is often a key requirement, especially for problems involving priority queues or dynamic ordering. Here’s how you can implement both heaps in Java using an array-based approach.

### **Min-Heap:**

A **Min-Heap** is a complete binary tree where each parent node is smaller than or equal to its child nodes. The smallest element is always at the root, and the heap property ensures efficient retrieval and deletion of the minimum element.

### **Max-Heap:**

A **Max-Heap** is a complete binary tree where each parent node is greater than or equal to its child nodes. The largest element is always at the root, and the heap property ensures efficient retrieval and deletion of the maximum element.

---

### **Implementation of Min-Heap and Max-Heap:**

We'll implement both heaps by maintaining the heap property through two main operations:

1. **Heapify**: Ensure the heap property is satisfied at a given index.
2. **Insert**: Add a new element and adjust the heap to maintain the heap property.

### **Min-Heap Implementation:**

```java
import java.util.*;

public class MinHeap {
    private List<Integer> heap;

    public MinHeap() {
        heap = new ArrayList<>();
    }

    // Parent and child index calculation
    private int parent(int i) { return (i - 1) / 2; }
    private int leftChild(int i) { return 2 * i + 1; }
    private int rightChild(int i) { return 2 * i + 2; }

    // Heapify operation to maintain heap property
    private void heapify(int i) {
        int smallest = i;
        int left = leftChild(i);
        int right = rightChild(i);

        // Find the smallest among root, left child, and right child
        if (left < heap.size() && heap.get(left) < heap.get(smallest)) {
            smallest = left;
        }
        if (right < heap.size() && heap.get(right) < heap.get(smallest)) {
            smallest = right;
        }

        // If smallest is not root, swap and continue heapifying
        if (smallest != i) {
            Collections.swap(heap, i, smallest);
            heapify(smallest);
        }
    }

    // Insert operation
    public void insert(int value) {
        heap.add(value);
        int i = heap.size() - 1;
        while (i > 0 && heap.get(parent(i)) > heap.get(i)) {
            Collections.swap(heap, i, parent(i));
            i = parent(i);
        }
    }

    // Extract minimum (root)
    public int extractMin() {
        if (heap.size() == 0) {
            throw new NoSuchElementException("Heap is empty");
        }
        int root = heap.get(0);
        heap.set(0, heap.get(heap.size() - 1));
        heap.remove(heap.size() - 1);
        heapify(0);
        return root;
    }

    // Peek minimum element (root)
    public int peekMin() {
        if (heap.size() == 0) {
            throw new NoSuchElementException("Heap is empty");
        }
        return heap.get(0);
    }

    // Print heap for visualization
    public void printHeap() {
        System.out.println(heap);
    }

    public static void main(String[] args) {
        MinHeap minHeap = new MinHeap();
        minHeap.insert(10);
        minHeap.insert(20);
        minHeap.insert(5);
        minHeap.insert(30);
        minHeap.printHeap();
        System.out.println("Extract Min: " + minHeap.extractMin());
        minHeap.printHeap();
    }
}
```

### **Max-Heap Implementation:**

```java
import java.util.*;

public class MaxHeap {
    private List<Integer> heap;

    public MaxHeap() {
        heap = new ArrayList<>();
    }

    // Parent and child index calculation
    private int parent(int i) { return (i - 1) / 2; }
    private int leftChild(int i) { return 2 * i + 1; }
    private int rightChild(int i) { return 2 * i + 2; }

    // Heapify operation to maintain heap property
    private void heapify(int i) {
        int largest = i;
        int left = leftChild(i);
        int right = rightChild(i);

        // Find the largest among root, left child, and right child
        if (left < heap.size() && heap.get(left) > heap.get(largest)) {
            largest = left;
        }
        if (right < heap.size() && heap.get(right) > heap.get(largest)) {
            largest = right;
        }

        // If largest is not root, swap and continue heapifying
        if (largest != i) {
            Collections.swap(heap, i, largest);
            heapify(largest);
        }
    }

    // Insert operation
    public void insert(int value) {
        heap.add(value);
        int i = heap.size() - 1;
        while (i > 0 && heap.get(parent(i)) < heap.get(i)) {
            Collections.swap(heap, i, parent(i));
            i = parent(i);
        }
    }

    // Extract maximum (root)
    public int extractMax() {
        if (heap.size() == 0) {
            throw new NoSuchElementException("Heap is empty");
        }
        int root = heap.get(0);
        heap.set(0, heap.get(heap.size() - 1));
        heap.remove(heap.size() - 1);
        heapify(0);
        return root;
    }

    // Peek maximum element (root)
    public int peekMax() {
        if (heap.size() == 0) {
            throw new NoSuchElementException("Heap is empty");
        }
        return heap.get(0);
    }

    // Print heap for visualization
    public void printHeap() {
        System.out.println(heap);
    }

    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap();
        maxHeap.insert(10);
        maxHeap.insert(20);
        maxHeap.insert(5);
        maxHeap.insert(30);
        maxHeap.printHeap();
        System.out.println("Extract Max: " + maxHeap.extractMax());
        maxHeap.printHeap();
    }
}
```

### **Explanation:**

- **Heapify**: The `heapify` function ensures the heap property is maintained by comparing the current node with its children and swapping if necessary. It then recursively heapifies the affected subtree.
- **Insert**: The `insert` function adds a new element to the heap. After adding the element at the end, it "bubbles up" (compares with the parent) to restore the heap property.
- **Extract**: The `extractMin` or `extractMax` function removes the root (either minimum or maximum) from the heap and replaces it with the last element, then calls `heapify` to restore the heap property.

### **Time Complexity:**

- **Insert**: O(log⁡n)O(\log n), where `n` is the size of the heap (due to the bubbling up process).
- **Extract**: O(log⁡n)O(\log n), because we need to heapify after removing the root.
- **Peek**: O(1)O(1), since the root element is always accessible directly.

### **Space Complexity:**

- **Space**: O(n)O(n), where `n` is the number of elements in the heap.

This approach allows efficient management of both **Min-Heaps** and **Max-Heaps** for a variety of use cases, such as priority scheduling or finding the k-th largest/smallest element.