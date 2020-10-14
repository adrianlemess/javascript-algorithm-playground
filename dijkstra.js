// Imeplement Graph

const graph = new Map();

// Mount graph
graph.set("livro", { lpRaro: 5, poster: 0 });
graph.set("lpRaro", { baixo: 15, bateria: 20 });
graph.set("poster", { baixo: 30, bateria: 35 });
graph.set("baixo", { piano: 20 });
graph.set("bateria", { piano: 10 });
graph.set("piano", {});

// Mount costs table
const costs = new Map();
costs.set("lpRaro", 5);
costs.set("poster", 0);
costs.set("baixo", Infinity);
costs.set("bateria", Infinity);
costs.set("piano", Infinity);

// Mount parents table
const parents = new Map();
parents.set("lpRaro", "livro");
parents.set("poster", "livro");
parents.set("baixo", null);
parents.set("bateria", null);
parents.set("piano", null);

// Store nodes already processed
const processed = new Map();

// Need a function to find the node with low costs
const findNodoWithLowCostsNotProcessed = (costs, processed) => {
  let lowCost = Infinity;
  let nodeWithLowCost = null;
  costs.forEach((nodo, key) => {
    if (lowCost > nodo && !processed.get(key)) {
      lowCost = nodo;
      nodeWithLowCost = key;
    }
  });

  return nodeWithLowCost;
};

// Find node with low cost
let nodeWithLowCost = findNodoWithLowCostsNotProcessed(costs, processed);
// console.log("first Node", nodeWithLowCost);
// Will do the loop until all nodes be processed

while (nodeWithLowCost !== null) {
  const cost = costs.get(nodeWithLowCost);
  const neighbors = graph.get(nodeWithLowCost);

  for (let prop in neighbors) {
    const newCost = cost + neighbors[prop];
    // console.log({ prop, newCost });

    if (costs.get(prop) > newCost) {
      costs.set(prop, newCost);
      parents.set(prop, nodeWithLowCost);
    }
  }

  processed.set(nodeWithLowCost, true);
  nodeWithLowCost = findNodoWithLowCostsNotProcessed(costs, processed);
  // console.log({ costs, processed, nodeWithLowCost });
}

console.log("The cost to the minimum path is: ", costs.get("piano"));

let next = parents.get("piano");
var paths = [next, "piano"];
while (!!next) {
  next = parents.get(next);
  if (!!next) paths.unshift(next);
}

console.log("The path is:", paths.join("-> "));
