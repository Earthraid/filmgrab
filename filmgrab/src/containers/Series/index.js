import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';

class Series extends Component{
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true})
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({series: json, isFetching: false}))
  }
  render(){
    const {series, seriesName, isFetching} = this.state;
    return (
      <div>
        <Intro message='Find the series you are looking for, here.'/>
        <div>
          <input value={seriesName}
                 type='text'
                 onChange={this.onSeriesInputChange} />
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === ''
          &&
          <p>Search for a series</p>
        }
        {
          !isFetching && series.length === 0 && seriesName !== ''
          &&
          <p>{this.state.series.length} Series found that match your query.</p>
        }
        {
          series.length !== 0 && seriesName !== ''
          &&
          <p>{this.state.series.length} Series found that match your query.</p>
          &&
          <SeriesList list={this.state.series} />
        }
        {
          isFetching && <Loader />
        }
      </div>
    )
  }
}

export default Series;
