export default class apiCon {
    constructor(URL){
        this.URL = URL;
    }
    async get_timeline(){
        return new Promise((resolve,reject)=>{
            const path = "/api/v1/post/get_timeline";
            fetch(this.URL+ path)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(e=>console.log(e));
        });
    }
}