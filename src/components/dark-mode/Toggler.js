import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
class Toggler extends React.Component{
    constructor(){
        super();
        this.state={
            isDarkMode:false    
        } 
    }
    toggleNow=()=>{
        this.setState({isDarkMode: (this.state.isDarkMode===true) ? false : true})
    }
    render(){
        return(
            <DarkModeToggle
                onChange={this.toggleNow}
                checked={this.state.isDarkMode}
                size={50}
            />
        )
    }
}
export default Toggler;