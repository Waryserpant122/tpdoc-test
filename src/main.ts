export class MyClass {
	/** This is a private variable which keeps count  */
	private count: number;

	/** This is a string parameter A */
	public parameterA: string;
	public parameterB: number;
	public parameterC: boolean;

	constructor(
		count: number = 10,
		parameterA: string = "Hello"
	) {
		this.count = count;
		this.parameterA = parameterA;
	}

	/**
	 * This funciton is used to get the count of the Class that we have
	 * @category Getter
	 * @returns The count of the class
	 */
	getCount(): number {
		return this.count;
	}

	/**
	 * This function sets the Parameter A of the class
	 * @category Setter
	 * @param inputParam The value we need to set for parameter A
	 */
	setParameterA(inputParam: string): void {
		this.parameterA = inputParam;
	}

	/**
	 * This function is used to get the Parameter A value
	 * @returns The value of Parameter A
	 */
	getParameterA(): string {
		return this.parameterA;
	}

	/**
	 * This function sets the Parameter B of the class
	 * @category Setter
	 * @param inputParam The value we need to set for parameter B
	 */
	setParameterB(inputParam: number): void {
		this.parameterB = inputParam;
	}

	/**
	 * This function is used to get the Parameter B value
	 * @returns The value of Parameter B
	 */
	getParameterB(): number {
		return this.parameterB;
	}

	/**
	 * This function sets the Parameter C of the class
	 * @category Setter
	 * @param inputParam The value we need to set for parameter C
	 */
	setParameterC(inputParam: boolean): void {
		this.parameterC = inputParam;
	}

	/**
	 * This function is used to get the Parameter B value
	 * @returns The value of Parameter B
	 */
	getParameterC(): boolean {
		return this.parameterC;
	}
}
