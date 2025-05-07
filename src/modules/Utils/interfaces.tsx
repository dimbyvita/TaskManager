
export class EmployeeId {
    private readonly id: string;

    constructor(id: string) {
        // Suggestion: Ajouter une validation simple
        if (!id || typeof id !== 'string') {
            throw new Error("Invalid Employee ID");
        }
        this.id = id;
    }

    get value(): string {
        return this.id;
    }

    // Suggestion: Comparer deux EmployeeId
    equals(other: EmployeeId): boolean {
        return this.id === other.value;
    }

    toString(): string {
        return this.id;
    }
}

export interface User {
    userId: EmployeeId;
    userInfo?: EmployeeInfo | null;
    Role: string;
    userPassword: string | number;
}

export interface EmployeeInfo {
    employeeId: string | number;
    employeeFirstName: string;
    employeeLastName: string;
    employeeAddress: string;
    employeeRole: string;
    employeeScore?: number;
}

export interface Task {
    idTask: number;
    taskTitle: string;
    designation: {
        dateEnd: Date;
        dateStart: Date;
        priority: string;
    };
    taskOwner: EmployeeInfo;
    status: string;
    quantity: number
}
