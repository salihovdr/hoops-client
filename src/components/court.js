
import React from 'react';

import './court.css';

export default function Court(props) {
    return (
        <div className="court">
          {/* <img src={props.photo} /> */}
          <h4>{props.name}</h4>
          {/* <p>{props.description}</p> */}
        </div>
    );
};

Court.defaultProps = {
  "name": ''
};