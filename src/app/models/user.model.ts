export class SignUp {

    public constructor(
        public userId?: string,        
        public travelerId?: string,        
        public firstName?: string,         
        public lastName?: string,          
        public email?: string,          
        public address?: string,         
        public city?: string,         
        public country?: string,         
        public state?: string,         
        public language?: string,         
        public phoneNumber?: string,               
        public dob?: Date,          
        public gender?: string,  
        // public currentPosition?:{
        //      longitude: number,
        //     latitude: number
        //     },  
        public longitude?: number,
        public latitude?: number,              
        public password?: string,                     
        ){    
    }   
}

export class SignIn {

    public constructor(
        public email?: string,                           
        public password?: string,              
        ){    
    }   
}

export class Data {

    public constructor(
        public travelerId?: string,                                                   
        ){    
    }   
}