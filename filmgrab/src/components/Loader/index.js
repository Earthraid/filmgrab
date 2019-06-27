import React from 'react';
import simpsonSrc from '../../assets/simpson.gif';

const Loader = props => (
  <div>
    <img
      style={ {width: 75} }
      src={simpsonSrc}
      alt='Loading Icon'/>
  </div>
);

export default Loader
