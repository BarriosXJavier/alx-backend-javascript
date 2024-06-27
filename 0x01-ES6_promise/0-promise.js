function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;
			if (success) {
				resolve("API Call successful");
			} else {
				reject("API Call failed");
			}, 2000});
	});
}

export default getResponseFromAPI;
