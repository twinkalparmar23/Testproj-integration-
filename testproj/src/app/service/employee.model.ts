export interface IEmployee{
    
        id:number;
        firstName:string;
        lastName: string;
        adress: string;
        contact: string;
        gender: string;
        qual: string;
        exp: string;
}


export class Employee implements IEmployee{
    constructor(    
    ) { }
   
     public id:number;
     public firstName:string;
     public lastName:string;
     public adress: string;
     public contact: string;
     public gender: string;
     public qual: string;
     public exp: string;
    
}
