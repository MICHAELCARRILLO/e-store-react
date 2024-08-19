
export class HttpContext{
    constructor(basePath){
     this.basePath = basePath || "https://fakestoreapi.com";
    }

    async get(url){
        try{
            const response = await fetch(`${this.basePath}${url}`);

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }catch(error){
            console.error('Error fetching data:', error);
            throw error;
        }
    }

}