
Question explaination 

You are given a grid (matrix) of `m x n` integers where each cell represents the height of the terrain. Water can flow in four possible directions (up, down, left, right) from one cell to another, but only if the destination cell has an equal or lower height (i.e., water can only flow downhill or on flat ground).

The goal is to determine the cells from which water can flow to **both** the Pacific and Atlantic oceans. The Pacific Ocean touches the left and top edges of the matrix, and the Atlantic Ocean touches the right and bottom edges.
Height matrix:
  Pacific ~   ~   ~   ~   ~ 
           1   2   2   3   (5) 
           3   2   3   (4)  4 
           2   4   5   3   1 
           (6) (7) 1   4   5 
           (5) 1   1   2   4 
                     ~   ~   ~   ~ Atlantic


Output: The coordinates of cells from which water can flow to both oceans.-

def pacificAtlantic(matrix: List[List[int]]) -> List[List[int]]:
    if not matrix or not matrix[0]:
        return []

    # Matrix dimensions
    m, n = len(matrix), len(matrix[0])

    # Sets to store reachable cells for each ocean
    pacific_reachable = set()
    atlantic_reachable = set()

    # DFS function
    def dfs(x, y, reachable, prev_height):
        if ((x, y) in reachable or  # Already visited
                x < 0 or y < 0 or x >= m or y >= n or  # Out of bounds
                matrix[x][y] < prev_height):  # Water can't flow uphill
            return
        reachable.add((x, y))
        # Explore neighbors
        dfs(x + 1, y, reachable, matrix[x][y])
        dfs(x - 1, y, reachable, matrix[x][y])
        dfs(x, y + 1, reachable, matrix[x][y])
        dfs(x, y - 1, reachable, matrix[x][y])

    # Run DFS for Pacific ocean from the top row and left column
    for i in range(m):
        dfs(i, 0, pacific_reachable, matrix[i][0])  # Left column (Pacific)
        dfs(i, n - 1, atlantic_reachable, matrix[i][n - 1])  # Right column (Atlantic)
    for j in range(n):
        dfs(0, j, pacific_reachable, matrix[0][j])  # Top row (Pacific)
        dfs(m - 1, j, atlantic_reachable, matrix[m - 1][j])  # Bottom row (Atlantic)

    # Find the intersection of cells that can flow to both oceans
    return list(pacific_reachable & atlantic_reachable)


### Explanation:

- We define two sets: `pacific_reachable` and `atlantic_reachable` to store the cells that can reach each ocean.
- DFS (or BFS) starts from the edges of the matrix corresponding to each ocean, visiting each valid cell.
- The water can flow from one cell to a neighboring one if the neighbor's height is lower or equal to the current cell.
- The result is the intersection of the two sets, which gives the cells where water can flow to both the Pacific and Atlantic oceans.

### Complexity Analysis:

- **Time Complexity**: O(m * n), where m is the number of rows and n is the number of columns. We perform a DFS from each edge cell, and each cell is processed once.
- **Space Complexity**: O(m * n) due to the space needed for the DFS stack and the sets to store reachable cells.