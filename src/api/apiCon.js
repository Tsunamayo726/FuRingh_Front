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

    async get_reply(post_id){
        return new Promise((resolve,reject)=>{
            const query = "?post_id="+post_id;
            const path  = "/api/v1/post/get_reply";
            fetch(this.URL + path + query)
            .then(response => response.json())
            .then(data => resolve(data));
        });
    }

    post(user_id,comment) { 
        const path = "/api/v1/post/post";
        const obj = {
            "user_id":user_id,
            "comment":comment
        };
        const method = "POST";
        const headers = {
        'Content-Type': 'application/json',
        };
        fetch(this.URL + path, {
            method:method, 
            headers:headers,
            body:JSON.stringify(obj)
        })
        .catch(console.error);
    }

    reply(user_id,post_id,comment) {
        const path = "/api/v1/post/reply";
        const obj = {
            "user_id":user_id,
            "post_id":post_id,
            "comment":comment,
        };
        const method = "POST";
        const headers = {
            "COntent-Type":"application/json",
        };
        fetch(this.URL + path,{
            method:method,
            headers:headers,
            body:JSON.stringify(obj)
        })
        .catch(console.error);
    }
}

