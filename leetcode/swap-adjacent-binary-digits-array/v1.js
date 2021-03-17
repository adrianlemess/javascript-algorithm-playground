
function minMoves(arr) {
    var start = 0;
    var end = 1;
    var moves = 0;
   while(start < arr.length) {
      if (arr[start] === 1 && arr[end] == 0) {
           moves++;
           [arr[start], arr[end]] = [arr[end], arr[start]];
           start--;
           end = start + 1;
      } else {
          start++;
          end++;
      }
    }

    return moves;
}

minMoves([0,0,1,0,1,0,1,1]) // Result: 3
minMoves([0,0,1,0,1,0,1,1,0]) // Result: 7
minMoves([1,0,0,0,0,1,0,1]) // Result: 6