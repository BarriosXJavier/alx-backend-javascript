export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = typeof name === 'string' ? name : '';
		this._length = typeof length === 'number' ? length : 0;
		this._students = Array.isArray(students) ? students : [];

		// Define getters and setters
		Object.defineProperty(this, 'name', {
			get: function() {
				return this._name;
			},
			set: function(value) {
				if (typeof value === 'string') {
					this._name = value;
			} else {
				console.error('Error: Name must be a string.');
			}
		}
		});

		Object.defineProperty(this, 'length', {
			get: function() {
				return this._length;
			},
			set: function(value) {
				if (typeof value === 'number') {
					this._length = value;
				} else {
					console.error('Error: Length must be a number.');
				}
			}
		});

		Object.defineProperty(this, 'students', {
			get: function() {
				return this._students;
			},
			set: function(value) {
				if (Array.isArray(value)) {
					this._students = value;
				} else {
					console.error('Error: Students must be an array.');
				}
			}
		});
	}
}
