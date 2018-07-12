import React from 'react';

import Individual_Signin from './individual_signin';

const showMessages = ({signInMessages})=>{
    if(signInMessages && signInMessages.signin){
        return signInMessages.signin.map((item)=>{
            return(
                <div>
                <Individual_Signin  signin_posts={item} key={item._id} />
                </div>
            )
        })
    }
}


const Messages = (props)=>{
    // console.log(props.signInMessages.signin)
    return(
        <div >
        {showMessages(props)}
        </div>
    )
}


export default Messages;