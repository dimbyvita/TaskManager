export interface IUser extends Document {
    UserId: Int16Array;
    name: string;
    pseudo: string;
    password: string;
    Role: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
    position: string,
    department: string,
    accessToken:string,
    isActive: boolean,
  }
  
