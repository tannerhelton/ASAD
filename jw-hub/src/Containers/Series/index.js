import React, { Component } from 'react';
import SeriesList from '../../Components/SeriesList';
import Loader from '../../Components/Loader';
import Intro from '../../Components/Intro';

export default class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [],
          seriesName: "",
          isFetching: false
        }
    }

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(res => res.json())
        .then(json => this.setState({ series: json, isFetching: false }));
        console.log(e);
        console.log(e.target.value);
        console.log('update = ');
        console.log(this.state.series);
    }

    render() {
        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <Intro message="Ayyee Mr. Clank" />
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ""
                    &&
                    <p>Please enter the series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ""
                    &&
                    <p>No TV series have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}