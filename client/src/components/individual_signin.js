import React from 'react';
import Moment from 'react-moment';

const posts = (props)=>{
    let item = props.signin_posts;

    return(
        <div className='message_box' key={item._id} style={{borderColor:'black',width:'80%',margin:'10px auto'}}>
            <div className='sender'>
                <div className='sender_name'>{item.firstName} {item.lastName}</div>
                <div className='sender_position'><span className='position'>{item.position}</span> at <span className='company'>{item.companyName}</span></div>
                <div className='post-date'><Moment fromNow>{item.created}</Moment></div>
            </div>
            <div className='sender_message'>{item.message}</div>
        </div>
    )
}






const Individual_Signin = (props)=>{
    return(
        <div>
           {posts(props)}
        </div>
    )
}

export default Individual_Signin;