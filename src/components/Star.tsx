import React from 'react';

type StarType = {
   selected: boolean
}

const Star = (props: StarType) => {
   return (
      <span>{props.selected ? <b>star </b> : 'star '}</span>
   );
};

export default Star;