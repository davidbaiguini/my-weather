import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
//import Highlight from 'react-highlight';

export default class NextDaysForecast extends Component {

    componentDidMount() {
        const {fetchForecast} = this.props;
        fetchForecast();
    }

    render() {
        const {forecast, chartData} = this.props;

        let config = {
            xAxis: {},
            series: [],
        };

        if(chartData) {
            config = Object.assign({}, config, {
                xAxis: {
                    categories: chartData.dates
                },
                series: [{
                    data: chartData.temperatures
                }]
            })
        }
        // const config = {
        //     xAxis: {
        //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //     },
        //     series: [{
        //         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        //     }]
        // };

        return (
            <div>
                <h1>Forecast for next 5 days</h1>
                <ReactHighcharts config={config} />
            </div>
        );
    }
}

NextDaysForecast.propTypes = {
    fetchForecast: PropTypes.func.isRequired,
    forecast: PropTypes.object,
    chartData: PropTypes.object,
}
