// We need to choose stations to broadcast to all the 50 states on USA

// First we need to create an array with all the states we want to broadcast

console.time("greedy");
// estados_abranger
let remainingStates = new Set([
  "SP",
  "RS",
  "PR",
  "SC",
  "RO",
  "GO",
  "RJ",
  "BA",
  "AC",
  "AM",
]);

// Now we need to create the stations and associated with the posibles states

const stations = new Map();

stations.set("kOne", new Set(["SP", "RS", "AM"]));
stations.set("kTwo", new Set(["PR", "RS", "RO", "AC"]));
stations.set("kThree", new Set(["GO", "RJ", "BA"]));
stations.set("kFour", new Set(["BA", "AC", "AM"]));
stations.set("kFive", new Set(["PR", "SC"]));

// Set with the stations choosed
const finalStations = new Set([]);

while (remainingStates.size > 0) {
  // Now we need to store the final set of stations
  let bestStation = null;
  // Estados_cobertos
  let coverageStates = new Set([]);

  stations.forEach((states, stationKey) => {
    console.log(states);
    // Intersection between remainingStates and states
    let statesIntersection = new Set(
      [...remainingStates].filter((x) => states.has(x))
    );

    if (statesIntersection.size > coverageStates.size) {
      bestStation = stationKey;
      coverageStates = statesIntersection;
    }
  });

  // Remove the remainingStates
  remainingStates = new Set(
    [...remainingStates].filter((x) => !coverageStates.has(x))
  );
  // Optization to avoid repeat station
  stations.delete(bestStation);

  // Solution must be: kTwo, kThree, kOne, kFive,
  finalStations.add(bestStation);
}
console.log(finalStations);
console.timeEnd("greedy"); // 1.42822265625ms
