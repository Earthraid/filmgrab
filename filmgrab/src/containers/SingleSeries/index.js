import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {

  state = {
    show: null
  }//state
  componentDidMount(){
    const {id} = this.props.match.params;
    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${id}&embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({show: json}))
  }//didMount
  render() {
    const {show} = this.state
    return(
      <div>
        { show === null && <Loader />}
        { show !== null &&
        <div>
          <p><b>{show.name}</b></p>
          <p>
            <img alt="Series Cover" src={show.image.medium}/>
          </p>
          <p>Premiered: {show.premiered}</p>
          <p>Rated: {show.rating.average}</p>
          <p>Number of Episodes: {show._embedded.episodes.length}</p>
        </div>
      }
    </div>
  )//return
 }//render
}//class

export default SingleSeries;
