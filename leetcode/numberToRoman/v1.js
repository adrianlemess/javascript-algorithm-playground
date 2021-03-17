/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	var romanDictionary = new Map();
	
	romanDictionary.set(1000, 'M');
	romanDictionary.set(900, 'CM');;
	romanDictionary.set(500, 'D');
	romanDictionary.set(400, 'CD');
	romanDictionary.set(100, 'C');
	romanDictionary.set(90, 'XC');
	romanDictionary.set(50, 'L');
	romanDictionary.set(40, 'XL');
	romanDictionary.set(10, 'X');
	romanDictionary.set(9, 'IX');
	romanDictionary.set(5, 'V');
	romanDictionary.set(4, 'IV');
	romanDictionary.set(1, 'I');

	var rest = num;
	var romanNumber = '';
	
	var romanDictionaryKeys = romanDictionary.keys();
	var currentNumber = romanDictionaryKeys.next().value;

	while(rest > 0) {
		if (rest >= currentNumber) {
			rest -= currentNumber;
			romanNumber = `${romanNumber}${romanDictionary.get(currentNumber)}`

		} else {
			currentNumber = romanDictionaryKeys.next().value;
		}
	}

	return romanNumber;
};