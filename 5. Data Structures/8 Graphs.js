/**
 *         ------------------------
 *                GRAPHS
 *         ------------------------
 * A graph is a collection of nodes an connections between those nodes.
 * - uses => [social networks, location mapping, recommendation engine, Routing algorithms]
 *
 *              Terminology
 *             -------------
 *  (1) Vertex - A node
 *  (2) Edge   - Connection between nodes
 *  (3) Weighted/unweighted - Values assigned to distance between vertices
 *  (4) Directed/Undoirected - Directions assigned to distance between vertices
 *
 *              Storing Graphs
 *             ----------------
 *   (1) Adjacency Matrix - A 2D array indicating the connections between vertices
 *   (2) Adjacency List - A collection of lists or array each representing connections for a node
 *
 *              Adjacency Matrix VS Adjacency list
 *           -----------------------------------------
 *      |V| -> Number of vertices
 *      |E| -> Number of edges
 *  -----------------------------------------------------------------------------------
 *    Operation       |         Adjacency List        |     Adjacency matrix
 *  -----------------------------------------------------------------------------------
 *  Add vertex        |          O(1)                 |     O(|V^2|)
 *  Add Edge          |          O(1)                 |     O(1)
 *  Remove Vertex     |          O(|V| + |E|)         |     O(|V^2|)
 *  Remove edge       |          O(|E|)               |     O(1)
 *  Query             |          O(|V| + |E|)         |     O(1)
 *  Storage           |          O(|V| + |E|)         |     O(|V^2|)
 *  -----------------------------------------------------------------------------------
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add a relationship between vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Sever an edge from the graph
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Sever a vertex from the graph
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  //traversing the graph - DFS
  // (1) Recursive solution
  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  // (2) Iterative solution
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  //traversing the graph - BFS
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

/**
 *           A
 *          /  \
 *         C    B
 *        /      \
 *       E  ----  D
 *        \      /
 *         \    /
 *          \  /
 *            F
 */
