import React from 'react';

const Title = props => {
    if(props.isSubtitle){
      return(
        <h2 className="title">
          <span>{props.title}</span>
        </h2>
      );
    } else {
      return(
        <h1 className="title">
          <span>{props.title}</span>
        </h1>
      );
    }
};

export default Title;
