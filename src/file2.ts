export interface CustomObject {
	/** The String Parameter */
	param1: string;
	/** The Number Parameter */
	param2: number;
}

export interface ObjectArray {
	/** Id of the Object Array */
	id: string;
	/** Name of the object Array */
	name: string;
	/** This is an array of all the different CustomObjects */
	arrayProp: CustomObject[];
}

/**
 * This function return a newly created Object Array to be used
 * as and when required
 *
 * @remarks This is a remark added wrt the function
 *
 * @param name The name to bet set to objectArray
 * @param id The id to be set to objectArray
 * @returns The object array with custom object data;
 */

export function createObjectArray(
	name: string,
	id: string = "1"
): ObjectArray {
	const customObject1: CustomObject = {
		param1: "object 1",
		param2: 1,
	};

	const customObject2: CustomObject = {
		param1: "object 2",
		param2: 2,
	};

	const objectArray: ObjectArray = {
		id,
		name,
		arrayProp: [customObject1, customObject2],
	};

	return objectArray;
}
