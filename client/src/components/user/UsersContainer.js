import React from 'react'
import axios from "axios";
import { UsersPage } from '../../pages/user/User'
export default class UserContainter extends React.Component {
    state = { users: [] };
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        axios.get('/users').then((response)=>{           
            this.setState({users:response.data.users});
        });
    }

    render() {
        return <UsersPage users={this.state.users}></UsersPage>
    }

}