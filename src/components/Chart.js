import React from "react";
import { Loader } from "semantic-ui-react";
import { Doughnut, Polar } from 'react-chartjs-2';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    static defaultProps = {
        type: '0',
        displayTile: true,
        text: "",
        legendPosition: 'top'
    }
    render() {
        switch (this.props.type) {
            case '0':
                return (
                    <div>
                        <Doughnut
                            data={this.state.chartData}
                            options={{
                                title: {
                                    text: this.props.text,
                                    display: this.props.displayTile,
                                    fontSize: 25
                                },
                                legend: {
                                    position: this.props.legendPosition
                                },
                                responsiveAnimationDuration: 2000,

                            }}
                        />
                    </div>
                )
            case '1':
                return (
                    <div>
                        <Polar
                            data={this.state.chartData}
                            options={{
                                title: {
                                    text: this.props.text,
                                    fontSize: 25
                                },
                                responsiveAnimationDuration: 2000,

                            }}
                        />
                    </div>
                )
            default:
                return (
                    <div>
                        <Loader active inline='centered' />
                    </div>
                )
        }

    }
}
export default Chart;