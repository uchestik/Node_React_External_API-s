
export function getSignIn(){
    const request = fetch('http://localhost:5000/first', {method:'GET'})
    .then(res=>res.json())

    return {
        type:'GET_SIGNIN',
        payload: request
        
    }
}

export function sendMessage(values,cb){
    const request = fetch('http://localhost:5000/second', {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'SEND_MESSAGE',
        payload:'Message Sent'
    }
}