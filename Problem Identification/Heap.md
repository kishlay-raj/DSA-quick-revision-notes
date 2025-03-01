**How to Identify If a Problem Can Be Solved Using a Heap (Priority Queue)?**

  

A **Heap (Priority Queue)** is a specialized tree-based data structure that efficiently retrieves the **smallest (Min Heap) or largest (Max Heap) element** in **O(1)** time and supports **insertion/deletion in O(log n)**.

  

Heap-based problems often involve **sorting, finding the k-th largest/smallest element, merging multiple lists, or maintaining a running median**.

**1️⃣ When to Use a Heap?**

  

✅ **You need quick access to the smallest or largest element.**

✅ **The problem requires finding the k-th smallest/largest element.**

✅ **You need to continuously add/remove elements while maintaining order.**

✅ **The problem involves scheduling or prioritization (e.g., Huffman coding, Dijkstra’s algorithm).**

✅ **You need to merge sorted arrays or process streams efficiently.**

**2️⃣ Common Heap-Based Problems**

|**Problem Type**|**How to Identify?**|**Approach**|
|---|---|---|
|**Find Kth Smallest/Largest Element**|“Find the k-th smallest/largest element in an array.”|Use **Min Heap for largest** and **Max Heap for smallest**.|
|**Merge K Sorted Lists/Arrays**|“Efficiently merge multiple sorted lists into one sorted list.”|Use a **Min Heap to keep track of smallest elements**.|
|**Top K Frequent Elements**|“Find the top k most frequent elements.”|Use a **Min Heap with frequency counts**.|
|**Running Median in a Stream**|“Find the median of a stream of numbers.”|Use **two heaps (Min Heap & Max Heap)**.|
|**Task Scheduling (CPU Scheduling, Priority Queue)**|“Process tasks with priority constraints.”|Use a **Max Heap for priority ordering**.|
|**Dijkstra’s Algorithm (Shortest Path in Graphs)**|“Find the shortest path from a source node.”|Use a **Min Heap (priority queue) to process edges efficiently**.|

**3️⃣ Example: Find Kth Largest Element in an Array**

```
import heapq

def kth_largest(nums, k):
    min_heap = nums[:k]  
    heapq.heapify(min_heap)  # Convert to Min Heap

    for num in nums[k:]:
        if num > min_heap[0]:  
            heapq.heappushpop(min_heap, num)  # Maintain only k largest elements

    return min_heap[0]  # Kth largest element
```

✅ **Use when:** Finding the **k-th largest element efficiently in O(n log k) instead of O(n log n) sorting**.

**4️⃣ Example: Merge K Sorted Lists**

```
import heapq

def merge_k_sorted_lists(lists):
    heap = []
    
    # Push first element of each list into heap
    for i, l in enumerate(lists):
        if l:
            heapq.heappush(heap, (l[0], i, 0))  # (value, list index, element index)

    result = []
    
    while heap:
        val, list_idx, elem_idx = heapq.heappop(heap)
        result.append(val)
        
        # Push next element from the same list
        if elem_idx + 1 < len(lists[list_idx]):
            heapq.heappush(heap, (lists[list_idx][elem_idx + 1], list_idx, elem_idx + 1))
    
    return result
```

✅ **Use when:** Merging multiple sorted arrays **efficiently in O(n log k) instead of O(nk)**.

**5️⃣ Example: Find Top K Frequent Elements**

```
import heapq
from collections import Counter

def top_k_frequent(nums, k):
    freq_map = Counter(nums)  
    return heapq.nlargest(k, freq_map.keys(), key=freq_map.get)  # O(n log k)
```

✅ **Use when:** Finding **top k frequent elements in O(n log k)**.

**6️⃣ Example: Find Running Median in a Stream (Two Heaps)**

```
import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # Max Heap (invert sign to simulate Max Heap)
        self.large = []  # Min Heap

    def add_num(self, num):
        heapq.heappush(self.small, -num)  # Push to Max Heap
        
        if self.small and self.large and (-self.small[0] > self.large[0]):  
            heapq.heappush(self.large, -heapq.heappop(self.small))

        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        elif len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def find_median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2.0
```

✅ **Use when:** Keeping track of the **median in a stream in O(log n) per insert**.

**7️⃣ Example: Dijkstra’s Algorithm (Shortest Path)**

```
import heapq

def dijkstra(graph, start):
    min_heap = [(0, start)]  # (distance, node)
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    while min_heap:
        curr_dist, node = heapq.heappop(min_heap)

        if curr_dist > distances[node]:  
            continue  

        for neighbor, weight in graph[node]:
            distance = curr_dist + weight
            if distance < distances[neighbor]:  
                distances[neighbor] = distance
                heapq.heappush(min_heap, (distance, neighbor))

    return distances
```

✅ **Use when:** Finding the **shortest path in a graph using a Min Heap**.

**8️⃣ Min Heap vs Max Heap**

|**Heap Type**|**How to Identify?**|**Usage**|
|---|---|---|
|**Min Heap** (heapq default)|“Find the k-th largest/smallest, merge sorted lists, Dijkstra’s algorithm.”|Smallest element is at the root.|
|**Max Heap** (heapq with -value)|“Find the k-th smallest/largest, priority scheduling, running median.”|Largest element is at the root.|

✅ **Python’s heapq is a Min Heap by default.**

✅ **To implement a Max Heap, push negative values (-value).**

**9️⃣ Heap vs Sorting vs Other Approaches**

|**Problem**|**Brute Force (Sorting/Looping)**|**Heap-Based Approach**|
|---|---|---|
|**Find k-th largest element**|O(n log n) (Sorting)|O(n log k) (Heap)|
|**Find top k frequent elements**|O(n log n) (Sorting)|O(n log k) (Heap)|
|**Merge k sorted lists**|O(nk) (Iterate through lists)|O(n log k) (Heap)|
|**Dijkstra’s Algorithm**|O(V²) (Adjacency Matrix)|O((V + E) log V) (Heap)|

**🔟 Final Checklist: Is It a Heap Problem?**

  

✅ **Do you need to repeatedly find the smallest or largest element quickly?** → **Heap**

✅ **Do you need to efficiently find the k-th smallest/largest element?** → **Heap**

✅ **Do you need to merge sorted lists efficiently?** → **Heap**

✅ **Are you implementing Dijkstra’s shortest path algorithm?** → **Min Heap**

✅ **Are you dealing with a stream of numbers that need dynamic ordering?** → **Heap (two heaps for median tracking)**

  

If **YES**, then a Heap is the right approach! 🚀

  

Would you like help with a specific heap-related problem? 😊