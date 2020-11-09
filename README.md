# JavaScript algorithms

This is a playground with notes about algorithms. I'm using JavaScript to experiment each algorithm

Most of the algorithms was taken from: https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230

## Set

- Conjuntos
- Might be used to compare with others sets and making operations
  - Intersection
  - Union
  - Difference

## Binary Search

- It's good to find something in a list
- The list mus be ordened
- In this search, the algorithm will choose a element in the half of the list and see if is bigger os less than
- In a dictionary with 240.000 words, the simple search (one each time) could take until 240.000 times to find the word and with the binary search is 2^18
- Binary search is O(logN) == O(log^2 N) where N is the times to find the element
- log^10 100 is how much 10 we need multiply to get in 100. log^10 100 = 2
- With big O notation is always using log^2

## Big O Notation

- It's to measure how fast an algorithm runs
- We need to know if an algorithm increase the time as the list increase
- The big O notation consider the worst cenario posible
- The performance of an algorithm its not measure in time, but calculating how much the operations will increase
- Big O notation is to calculate the execution time of an algorithm
- O(logN) increase the performance as increase the number of elements in the list
- We always ignore the divisions, sums, multiply and subtraction (ex: O(n - 25), O(n+30))

### Examples in order (fasters to slowers)

O (log N) - binary search
O (n) -> simple search, 1 for, etc -> its linear time
O(n \* log N) -> quick sort
O(n^2) -> algoritmo lento de ordenacao, ex: selection sort
O(n!) -> algoritmo bem lento, como o do caixeiro viajante

1.3 - O(logN)
1.4 - O(n)
1.5 - O(n)
1.6 - O(N)

## Factorial

Are factorials used in real life or are they just a mathematical exercise? Uh yes, factorials can be very useful. The number n! is the number of ways you can arrange n objects.

Let’s say that you have three dogs (Alpha, Beta, Charlie) and you want to see in how many ways you can arrange them in a line. 3! will give us 6 different ways. And if we write it out, we will find that it is indeed so:

1.  Alpha, Beta, Charlie
2.  Alpha, Charlie, Beta
3.  Beta, Alpha, Charlie
4.  Beta, Charlie, Alpha
5.  Charlie, Alpha, Beta
6.  Charlie, Beta, Alpha

## Lists

- When we work with an array, the memory allocated should be all together, grouped
- If we need more spaces in our array we need to find another space in memory
- We could pre-allocate memory but would be a waste and there is a chance we more than the allocated space and change our space in memory again
- With list we solve this problem because the itens in a list don't need to be grouped in a memory space
- Lists are better than array when we need to insert elements
- The read in a list is not good, because is O(n)
- Arrays are better to read elements randomically
- To insert elements in the middle, lists are better than array, because you should only change the memory address reference, to delete element is the same thing
- The deletion and insertion is faster in list only when you have the first and last item of a chain list

### Big O notation to operations in array and list

|           | List | Array |
| --------- | ---- | ----- |
| Insertion | O(1) | O(n)  |
| Read      | O(n) | O(1)  |
| Deletion  | O(1) | O(n)  |

## Recursion

- Its to make an answer objetive and clear
- The recursion perfomance is not a benefit, in some cases loops can even be faster
- Recursion transform the code easier to understand
- We should pay attention to avoid infinite loop when use recursion
- You need to informace a stop condition in a recursive function
- Its important to understand call stack when use recursion

### Call stack

- Stack is a simple data struct with only to methods, push and pop (remove and read the value)
- We only insert item on top and pop items on top
- It's the way the operation system deal with function allocate in the memory. Each function is allocated a space on memory, when a function call another function, it's allocate on top of the memory on the first function. when the second function return the value, the memory of function2 is removed and is created a variable with the value returned in the function1 memory
- When the program has an infinite loop with recursion in some point the memory will throw an overflow error.
- The top call in the stack is the current function being executed
- When a recursive function is using too much memory because the call stack we have two options:
  - Rewrite the code using loops
  - Use a tail recursion

## Quick Sort

- Divide to conquer
- Using recursion we should identify in our problem what is the base case
- The base case will be our stop condition
- To find the base case you must to think what is the simple cenario to do a task? where I want to stop
  - ex: If I have an array of numbers and a need to sum, the base case is the array with 1 or 0 elements. Usually when we work with an array the base case will be the empty array or with 1 element
  - The worst case the big O notation is O(N²)
  - The medium case is O(N log N)
  - Merge sort is always O(N log N)
  - Quicksort will change the big O notation according to the pivot choosed
- Merge sort has a constant that is slower than quick sort and quick sort almost always will work on the medium case
- The best way to implement quick sort is choosing a random number of the array to be the pivot

## Hash Tables

- Are probably the most usefull data structure
- Has O(1) complexity
- Hash function is a function where we input a string and return a number
- The number returned is the index of an array
- With the de index of the array we can than return any value
- The hash function make 2 operations: the first one is to find the index of the array and the second one, get this index to find where is the value in the array.
- the hash function knows the size of the array and will always return a valid length
- Hash table is a hash function + array
- We will probably never implement a hash table by our own, every programming language has by default a hash map implemented
- its also knows as dictionaries, map hash and dispersion tables

- Rules
  - Must have consistence, a function with string "foo" should if return index 4 should always return 4
  - Each string (key) should be related to a diferent index, its unique
  - We cannot have two keys with the same name.

### Where to use hash tables

- Search, modelate relation between two itens, caching and filter duplicates
- Contact list of our smartphones
- As DNS to solve name address to IP
- To avoid duplicate entries
  - When we want to organize a vote system where a people can only vote once
  - Evaluation system where we can only evaluate once
  - As a cache of information

### Colision and performance

#### Colision

- A hash function only using array is a problem, because it contain rules:
  - Example: every string starting with A going on the index 0, but what happen when we have another key starting with A?
- We should use array and when we have to repeat a key in a array position we could start a chain list in that position.
- This is called colision.

#### Performance

- The time of hash table is not always the same, but its constant, this mean its not linear like simple search.
- The time to find any element in the hash table is always the same to that specific hash table
- Constant does not mean instantaneous, but independent of the length of the hash table, will be always the same time
- What will make the time change is the algorithm choose to the hash function
- On the best scnerario, the hash table will always be O(1) to insertion, read and delete
- On the worst scenario will be always O(n) to insertion, read and delete
- To avoid operate in the worst scenario we should:

  - Use a good hash function
  - A low load factor (baixo fator de carga) = Items number on hash table / total space number

  ##### Load Factor

  - An hash table with 5 items in an array with 10 items has 5/10 or 1/2 load factor
  - If we have 100 items to an array with 50 items we have load factor === 2
  - If a load factor is > 1 we should resize our array to add more spaces
  - A good load factor is less than 1, because we can avoid colisions
  - Good rule: every time our load factor is > 0,7 we should resize our array
  - Resize an array is expense, we should avoid resize frequently, but even when we resize, hash trable has exection time of O(1)

##### A good hash function

- The hash function should minimize colisions
- A function that is not good group values and produces a lot of colisions
- A good one distribute the values symmetrically
- We will probably never have to implement a hash function

## Graphs and Breadth-first search (BFS)

### When to use BFS

- Is used to find the less path between two objects.
  - An A.I. algorithm to calculate the number of moviments to find a victory in a checkers match
  - Show the nearby doctor for you
  - Write a spell check algorithm to do the less change posible in a wrong word to find a correct word
- This kind of algorithms is called "problema do caminho minimo" shortest path problem
- To use this algorithm we need:
  - Modelate the problem to transform in graphs
  - Solve the problem using BFS

### Graph

- A graph model is a set of conections
- Each graph has vertices and edges
- Vertice is the entity
- Edges are the conection
- Each vertice may have multiple conections with another vertice or neighbor
- Graph is a way to model how diferent events are connect between each other
- Check type of edges image

### BFS Breadth-first search

- This algorithm help us to answer 2 kind of questions:

  - Is there a path between vertice A to vertice B?
  - What is the minimum path between vertice A and Vertice B?

- If you have a list of friends and we want to know who is developer

1 - Check every friend in your list asking if is a developer
2 - If none was found, we should check the friends of our friends, until we find a developer
3 - We should now search in the second level until we be su
re that we do not found any developer

1 grau connection is searched first.

We should always find the people in the order that was added. What is the best data structure to this? Queue

Execution time is: O(V + E;

V = vertices
E = edges

- This algorithm is to find shortest path based on jumps, but not necessaraly is the fastest path

#### Queue or Stack?

- We have only two methods: queue and unqueue.
- Queue is FIFO
- Stack is Lifo
- The BFS algorithm should use queue structure, the order when add on the queue matters, we should always check the first element, to guarantee that we check all the first level before the second level, before the third and so on

##### Graphs

- We can use graphs to create topology lists this way we can co-related activities and check what is first and know posibles order to execute
- If we have edges only for one direction, we can call trees.
- Trees are only one direction
- a Tree is always a graph, but the opposite may not always be true
- A graphic with no weight is called unweighted graph and best algorithm to calculate is the BFS
- A graphic with weight associated with edged is called weighted graph and the best algorithm is the Dijkstra
- A graphic un-directed has a cicle

## Dijkstra Algorithm

- This algorithm consider the time of each edge
- Is to find the shortest path
- The cost or the number associated with each edge is called weight
- When calculate the fastest path we should avoid cicle
- Each time we pass in a cicle we add more weight to the final path
- Its not always to path, could be used to reduce different values
- We cannot use this algorithm with:
  - Edges with direct cicles: This algorithm only works in a Directed Acyclic graph - is a finite directed graph with no directed cycles
  - Negative weights (to this cases we should use the Bellman-Ford algorithm) - When you compare two vertices and start with the minimuim value, the algorithm suppose that is the minimum effort to that vertice
- This algorithm use chain list and recursion

## Bellman-Ford algorithm

@TODO

## Greedy algorithms

- Its a simples solution to complex problems
- In each stage/interation we need to choose the ideal moviment, the ideal solution
- They are not perfect, sometimes we have a good solution but not the best
- Sometimes, find the best solution could take a lot of time, that's why the greedy algorithms is a good take

## The traveler salesman (Caixeiro Viajante)

- Given a list of cities and the distance between each pair of cities, what the shorthest posible path?
- The possibilities is a factorial function:

Cities numbers | routes:
!1 | 1 route
!2 | 2 initial cities _ 1 route = 2 routes
!3 | 3 initial cities _ 2 route = 6 routes
!4 | 4 initial cities _ 6 route = 24 routes
!5 | 5 initial cities _ 24 route = 120 routes

!6 = 720 rotas
!7 = 5040 rotas

- In factorial functions, its almost imposible to calculate the correctly solution when the number is too elevate
- Greedy solution: choose a random city and each moment we need to choose the shortest path to a city not visited yet and directly connected
- Sets and the travaller salesman is a NP-completeness problem: We calculate each posible solution and get the shortest

## NP-completeness

A problem is NP-completeness when:

- A nondeterministic Turing machine can solve it in polynomial-time.
- A deterministic Turing machine can solve it in large time complexity classes (e.g., EXPTIME, as is the case with brute force search algorithms) and can verify its solutions in polynomial time.
- It can be used to simulate any other problem with similar solvability.

## NP problem example.

Johna is mounting a soccer team and has a set of characteristic he want to fill in his team:

- Ability to play in the rain
- Work under pression
- A good quaterback
- A good Running back

But the team has a limit in number of players.

Jonah wants a team to fill all the wisher characteristics. This is a set cover problem.

- Algorithm:
  - Choose the player with the maximum number of characteristics not find yet
  - Reapeat until all the characterist was fill or the limit of players is filled

When a problem is a NP problem we should stop try to solve perfectly and start doing in a greedy way with a shorthest algorithm

## How to identify an NP problem

- Is fast with a few items but is slow with more items
- All the combinations to find something usually means NP-completeness
- You need to calculate each posible version of X because you cannot divide in short sub problems
- A sequence of something like cities and its hard to solve
- If involves a set and its hard to solve
- Its similar with the cover set problem or the salessman traveler problem? so its

## Big O notation to check all sets posibilities

When we need to check multiple possibilities to check the best combination posible, the simplest algorithm is O(2^n), its too slow.

To each 3 items: 2^3 = 8 combinations
to each 4 items combinations: 2^4 = 16 combinations

## Dynamic programming

- Don't work when the values of the items has a relation
- Example: want to now place A, B and C in Paris.

To travel from london to paris take half day. If I travel to place A, place B and C will be shepear.

But wont work to this scneario. The values of each item must not have any relation

It works when we want optimize in relation to a limit. Ex: In the bag items problem, we want to take maximize the value of the items with a capacity limit in our case;

To solve a Dynamic programming problem we need to split the problem into smaller parts.

Tips to find a solution:

- Every solution of dynamic programing involve a table
- The values in each cell its what we want to optimize
- Each cell is a sub-problem we need to think how to split it into smaller parts to solve.

Dictionary to suggest the correct word when the user enters a wrong word is a good idea to use dynamic programming

There is no magical formula to calculate problems with dynamic programming

## KNN (K-Nearest Neighbors)

Use cases?

- Prevent a number

  - Would the user like a movie?
  - Which value would be the market stock tomorrow?

- We can check N nearest neighbors. Not only 3, 5, 2, but even more.
- We can use this algorithm to learn something based on characterists to be able to predict the future value.
- To discover the K value we need to identify the how much users (N) do we have in our system and calculate the square of N users;

## Binary search

It's a data structure. To read, insert and delete has O(log N) in the average.

## Hash text (indexing)

We get a string and put in a hash table with the address to find.

## fourier transform

Its a good tool to process signs. For example, get frequencies of a music.

Its used to:

- Analyse DNA
- Prevent terremotes
- Compress song frequencies
- Compress image

The app Shazam use this algorithm.

## Paralel algorithms

- Its related to scalability
- Solve problems like load balancing of tasks
- How to split a complex task between two or more nodes?

## Map Reduce

Its usefull when we need to proccess a lot of tasks in parallel

ITs has to functions, the map function and the reduce function

### Map Functions

To each item in array execute a function. This function can be executed with multiple proccess in parallel

## Reduce function

The reduce function get all the values in array and reduce to a single one

## Bloom filters

- Might be used to replace hash algorithms problem when we have a huge amount of data (like Google indexing pages)
- Its use less memory than hash data structure.
- But its not 100% perfect, it might offer a false positive.

## HyperLogLog

- Its when we need to extract info in a probablistic way without storing a lot of data.

## Sha algoritmos

- Its a hash algorithm that
- Its a hash function that receives a string and returns another string;
- Might be used to:
- Check if files with a big size are identical;
- Encrypt password
- We can convert a string to a hash but not the opposite

## SimHash

- Its used to compare similar hashes

## Diffie-Hellman change keys

Both parts of the transaction don't need to know the current cypher.

Its has two keys, a public one and a private one.

### Public Key

The public key is used to encrypt the message. It can be shared.

### Private Key

A encripted message with the public key can only be decrypted by the private key. Only the person with the private key can decrypt the message.

### Linear promgraming

- its to maximize the result of a problem with a limitation.

Graphos is inside of linear programming.
