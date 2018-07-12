import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSignIn } from './actions';


import Messages from './components/signInMessages';
import MessageForm from './components/messageForm'


class App extends Component{

    componentDidMount(){
        this.props.getSignIn();
    }

    render(){
        return(
            <div className='container' style={{margin:'30px auto'}}>  
               <MessageForm function={this.props.getSignIn}/>
               <br/><br/>
                <Messages  signInMessages={this.props.signIn} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        signIn:state.signIn
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getSignIn}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
