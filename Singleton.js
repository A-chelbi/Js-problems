/**
 * The code you provided is an implementation of the Singleton design pattern in JavaScript. 
 * The Singleton design pattern ensures that a class has only one instance and provides a global point of access to that instance.
 * 
 * In your code:
 * The patternClass is a function that serves as a closure. 
 * It encapsulates the creation of a single instance of an object and provides a way to access that instance.
 * 
 * instance is a private variable within the closure that will hold the single instance of the object.
 * createInstance is a private function that creates the object when needed. 
 * It's only called when the getInstance function is called for the first time.
 * 
 * The getInstance method is exposed and allows access to the single instance of the object. 
 * If the instance doesn't exist yet, it creates it by calling the createInstance function, 
 * and then it returns the existing or newly created instance.
 * 
 * This ensures that no matter how many times you call getInstance, 
 * you will always get the same instance of the object, making it a Singleton. 
 * This pattern is useful when you want to ensure that there's only one instance 
 * of a particular class in your application, which is a common requirement in various scenarios, 
 * such as managing configuration settings, database connections, or shared resources.
 */

let paternClass = (
	function () {
		let instance;

		function createInstance() {
			let object = new Object('I am the instance');
			return object;
		}

		return {
			getInstance: function () {
				if (!instance) {
					instance = createInstance();
				}
				return instance;
			}
		}
	}
)