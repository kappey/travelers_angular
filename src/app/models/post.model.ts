export class Post {

    public constructor(
        
        public _id?: string,  
        public postContent?: string,  
        public currentUser = false,          
        public longitude = 0,
        public latitude = 0,
        public location?: {city?:{},state?:{}},
        public fullName?: any,
        public traveler_id?: string,
        public date_created?: Date,
        public likes?: any, 
        public path?: string, 
        public images?: [],                                            
        ){}   
}

export class PostDB {

    public constructor(
        
        public postContent?: string,           
        public longitude = 0,
        public latitude = 0,
        public location?: {city?:{},state?:{}},
        public traveler_id?: string,
        public date_created?: Date,
        public likes?: string, 
        public path?: string, 
        public images?: [],                                            
        ){}   
}