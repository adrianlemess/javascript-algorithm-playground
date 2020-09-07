// Book price

const bookPrice = new Map();
bookPrice.set("apple", 0.67);
bookPrice.set("milk", 1.49);
bookPrice.set("Avocado", 1.49);

console.log(bookPrice.get("avocado"));

// Contact list

const contactList = new Map();

contactList.set("Emergency", "911");
contactList.set("Jenny", "555199723123");

console.log(contactList.get("Jenny"));

// Voting  system

const votingMap = new Map();

function checkIfCanVote(name) {
  if (votingMap.get(name)) {
    console.log("You already vote, leave now");
  } else {
    votingMap.set(name, true);
    console.log("Yes you can vote");
  }
}

checkIfCanVote("Tom"); // Yes you can vote
checkIfCanVote("Bárbara"); // Yes you can vote
checkIfCanVote("Tom"); // You already vote
