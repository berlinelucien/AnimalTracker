import * as React from 'react';
import map from '../images/map.jpeg'


export default function MediaCard() {

  return (
    <React.Fragment>
      <div className='map'>
      <img src={map} alt=''/>
      </div>
     
    </React.Fragment>
  );
}