export default function createReportObject(employeesList) {
	// Extract department names from employeesList keys
	const departments = Object.keys(employeesList);

	// Function to get number of departments
	const getNumberOfDepartments = () => departments.length;

	// Constructing allEmployees object using spread syntax
	const allEmployees = {};
	for (let department of departments) {
		allEmployees[department] = [...employeesList[department]];
	}

	// Return the report object
	return {
		allEmployees,
		getNumberOfDepartments,
	};
}
