import React from 'react';

function NameListItem(props) {

    return(
<div>
  <h1>{props.name}</h1>
  <h2>{props.gender}</h2>
  <h3>{props.location}</h3>
  <img src="{props.avatar}"/>
</div>
    );
    
}

export default NameListItem;