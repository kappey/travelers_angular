export class Image {

    public constructor(
        public _id?: string, 
        public traveler_id?: string, 
        public post_id?: string,         
        public imageString?: string,  
        public likes?: string[], 
        public filePath?: string,        
        public currentPosition?:{
            longitude: number,
            latitude: number
            }                                        
        ){}     
}