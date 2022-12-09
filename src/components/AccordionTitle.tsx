import React from 'react';

type AccordionTitleType = {
   text: string
}

const AccordionTitle = (props: AccordionTitleType) => {
   return (
      <h3>{props.text}</h3>
   );
};

export default AccordionTitle;