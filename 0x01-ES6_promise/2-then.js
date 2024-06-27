export default function handleResponseFromAPI(promise) {
	return promise
		.then(() => ({ status: 200, body: 'success' }))
		.catch(() => ({ status: 'error', body: 'An error occurred' }))
		.finally(() => console.log('Got a response from the API'));
}
