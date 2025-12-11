/*interface User{
    userId:string;
    fullName: string;
    email: string;
    role: string;
    createdAt: Date; // timestamp in DB
}*/   

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
}