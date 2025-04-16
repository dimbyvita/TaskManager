export interface IUser extends Document {
    UserId: Int16Array;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'manager' | 'employee';
    comparePassword(candidatePassword: string): Promise<boolean>;
    position: string,
    department: string,
    isActive: boolean,
  }
  
