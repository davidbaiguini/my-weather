import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';

export default class NextDaysForecast extends Component {

    componentDidMount() {
        const {fetchForecast} = this.props;
        fetchForecast();
    }

    render() {
        const {forecast, chartData} = this.props;

        let config = {
            colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063',
                type: 'spline',
            },
            title: {
                text: 'Next 5 days forecast'
            },
            xAxis: {
                 title: {
                    text: 'Date',
                    style: {
                        color: '#A0A0A3'
                    }
                },
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                style : {
                    color: '#A0A0A3'
                }
            },
            yAxis: {
                labels: {
                    format: '{value} C°',
                    style: {
                        color: '#E0E0E3'
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: '#A0A0A3'
                    }
                },
                min: 5,
            },
            tooltip: {
                headerFormat: '<b>Temperature: </b>',
                pointFormat: '{point.y}C°'
            },
            series: [],
        };

        if (chartData) {
            config = Object.assign({}, config, {
                xAxis: {
                    categories: chartData.dates,
                },
                series: [{
                    name: 'Date',
                    data: chartData.temperatures,
                }]
            })
        }

        return (
            <div>
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
