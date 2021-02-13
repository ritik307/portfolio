import React from "react";
import {Doughnut} from 'react-chartjs-2';

class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chartData:props.chartData
        }
    }
    static defaultProps={
        type:0,
        displayTile:true,
        text:"",
        legendPosition:'top'  
    }
    render(){
        switch(this.props.type){
            case 0:
                return(
                    <div>
                        <Doughnut 
                            data={this.state.chartData}
                            options={{
                                title:{
                                    text:this.props.text,
                                    display:this.props.displayTile,
                                    fontSize:25
                                },
                                legend:{
                                    position:this.props.legendPosition
                                },
                                responsiveAnimationDuration:2000,
                                
                            }}
                        />
                    </div>
                )
            // case 1:

        }
        
    }
}
export default Chart;