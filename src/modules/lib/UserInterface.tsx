export interface IUser extends Document {
    UserId: Int16Array;
    name: string;
    pseudo: string;
    password: string;
    Role: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
    position: string,
    department: string,
<<<<<<< HEAD
    token:string,
=======
    accessToken:string,
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
    isActive: boolean,
  }
  
