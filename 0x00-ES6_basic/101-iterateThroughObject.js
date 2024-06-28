export default function iterateThroughObject(reportWithIterator) {
	let result = '';

	// Iterate through the iterator
	for (const employee of reportWithIterator) {
		result += `${employee} | `;
	}

	// Remove the last ' | ' from the result string
	if (result.endsWith(' | ')) {
		result = result.slice(0, -3);
	}

	return result;
}
