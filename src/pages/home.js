import React, {Component} from 'react'
import axios from 'axios'
import ListStudent from './listStudents'
import Form from './formStudent'
//lifecycle
class HomePage extends React.Component{
    componentWillMount(){
        const url = 'http://jsonplaceholder.typicode.com/users'
        axios.get(url)
            .then( data =>{
                console.log(data)
            })
    }
    render(){
        return(
            <div>
                <Form />
            </div>
        )
    }
}

export default HomePage;