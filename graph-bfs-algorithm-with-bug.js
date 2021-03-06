// Find a nearby designer a freelance job in a contact list
// This algorithm has a bug, if we have double connections, we could have problems and create an infinite loop
// Graph in https://docs.google.com/presentation/d/17-MCqxa1742OEBFLLrxLk4jCHBjL3WkE3mK5pPOfWX0/edit?usp=sharing

class People {
  constructor(name, contactList, role) {
    this.name = name;
    this.contactList = contactList;
    this.role = role;
  }
}

const graph = new Map();

// Create the persons
const adrian = new People("Adrian", ["Dionata", "Bruninho"], "Developer");
const dionata = new People("Dionata", ["Barbara"], "Developer");
const bruninho = new People("Bruninho", ["Marcello"], "Developer");
const marcello = new People("Marcello", [], "Designer");
const barbara = new People("Barbara", ["Raquel"], "devops");
const raquel = new People("Raquel", [], "Designer");

// The order we add don't make any difference
graph.set(adrian.name, adrian);

graph.set(dionata.name, dionata);

graph.set(bruninho.name, bruninho);

graph.set(marcello.name, marcello);

graph.set(barbara.name, barbara);

graph.set(raquel.name, raquel);

// Algorithm function
function findTheFirstByRole(graphNetwork, startPoint, roleToFind) {
  // We should create a new array, otherwise it will remove from the original contact list atributte, this will cause an error when calling this function in the second time
  // This happen because we pass the same memory reference
  const contactQueue = [...graphNetwork.get(startPoint).contactList];

  let designerContact = null;

  while (contactQueue.length > 0) {
    const firstContact = contactQueue.shift();
    console.log("contact", graphNetwork.get(firstContact).name);
    if (graphNetwork.get(firstContact).role === roleToFind) {
      designerContact = graphNetwork.get(firstContact);
      break;
    }
    contactQueue.push(...graphNetwork.get(firstContact).contactList);
  }

  return designerContact;
}

findTheFirstByRole(graph, "Adrian", "Marketing");
findTheFirstByRole(graph, "Adrian", "Designer");
