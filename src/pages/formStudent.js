//distructuring
import React,{Component} from 'react';
import ListStudent from './listStudents'
export default class formStudent extends Component{
    //STATE
    constructor(){
        super()
        this.state={
            students:['jhon'],
            currentNama:''
        }
    }
    tambah(){
        
        let CurrentStudents= this.state.students
        CurrentStudents.push(this.state.currentNama)
        this.setState({
            students:CurrentStudents
        })
    }
    render(){
        return(
            <div>
                <span>{this.state.currentNama}</span><br />
                <input type="text" name="nama" onChange={(e)=>this.setState({currentNama:e.target.value})}/>
                <br />
                <input type="submit" name="tambah" onClick={()=>this.tambah()}/>
                <h2>Students:</h2>
                
                <ListStudent students={this.state.students} /> 
            </div>
        )
    }
}