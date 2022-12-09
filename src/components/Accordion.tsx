import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionType = {
   title: string
}

const Accordion = (props: AccordionType) => {
   return (
      <div>
         <AccordionTitle text={props.title}/>
         <AccordionBody/>
      </div>
   );
};

export default Accordion;