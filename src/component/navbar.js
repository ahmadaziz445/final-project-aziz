import React, {Component} from 'react'
class Navbar extends Component{
    constructor(){
        super()
        this.state={
            menus:[
                {label:'Home',path: "/"},
                {label:'About',path: "/about"},
                {label:'Contact',path: "/contact"}
            ]
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.menus.map(menu=>(
                        <li style={styles.menuLi}>
                            <a href={`${menu.path}`}>{menu.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const styles={
    menuLi:{
        display:'inline-block',
        padding:'10px'
    }
}
export default Navbar;