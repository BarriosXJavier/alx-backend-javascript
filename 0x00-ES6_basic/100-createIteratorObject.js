export default function createIteratorObject(report) {
	const departments = Object.keys(report.allEmployees);
	let currentDepartmentIndex = 0;
	let currentEmployeeIndex = 0;

	// Define the iterator object
	const iterator = {
		next: function() {
		// If there are no more departments to iterate
			if (currentDepartmentIndex >= departments.length) {
				return { done: true };
			}	

			const department = departments[currentDepartmentIndex];
			const employees = report.allEmployees[department];

			// If there are no more employees in the current department
			if (currentEmployeeIndex >= employees.length) {
				currentDepartmentIndex++;
				currentEmployeeIndex = 0;
				return this.next(); // Recursive call to move to the next department
			}
			
			// Return the current employee and move to the next one
			return {
				value: employees[currentEmployeeIndex++],
				done: false
			};
		}
	};

	// Make the iterator iterable
	iterator[Symbol.iterator] = function() {
		return this;
	};

	return iterator;
}
