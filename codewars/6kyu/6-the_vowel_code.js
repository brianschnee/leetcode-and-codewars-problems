/**
 * Name: The Vowel Code
 * Description: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
 *
 * a -> 1
 * e -> 2
 * i -> 3
 * o -> 4
 * u -> 5
 *
 * For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
 *
 * Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
 *
 * For example, decode("h3 th2r2") would return "hi there".
 *
 * Link: https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
 */

function encode(string) {
	const encodingMap = {
		'a': 1,
		'e': 2,
		'i': 3,
		'o': 4,
		'u': 5,
	};

	return [...string]
		.map((char) =>
			Object.hasOwn(encodingMap, char) ? encodingMap[char] : char,
		)
		.join('');
}

function decode(string) {
	const decodingMap = {
		1: 'a',
		2: 'e',
		3: 'i',
		4: 'o',
		5: 'u',
	};

	return [...string]
		.map((char) =>
			Object.hasOwn(decodingMap, char) ? decodingMap[char] : char,
		)
		.join('');
}
