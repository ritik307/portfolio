import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
// CSS
import "../../css/master.css";
class Toggler extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isDarkMode:false    
        } 
    }
    
    componentDidMount=()=>{
        const localIsToggle = window.localStorage.getItem('isToggle');
        (localIsToggle) ? this.setState({isDarkMode:(localIsToggle==="true") ? true :false}) : this.setMode(false);

    }
    setMode=(mode)=>{
        window.localStorage.setItem('isToggle',mode.toString());
        this.setState({isDarkMode:mode});
    }
    toggleNow=()=>{
        (this.state.isDarkMode===true) ? this.setMode(false) : this.setMode(true)
        this.props.changeTheme();
    }
    render(){
        return(
            <DarkModeToggle
                onChange={this.toggleNow}
                checked={this.state.isDarkMode}
                size={50}
                className="toggleButton"
            />
        )
    }
}
export default Toggler;