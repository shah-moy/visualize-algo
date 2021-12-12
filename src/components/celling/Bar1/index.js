import React from 'react';
import './style.css';
var trk=false;

export const Bar1 = ({
  width,
  height,
  val,
  stateA,
  stateB,
  stateC,
  stateD,
  sorted,
  style,
  repeat,
  
}) => {
 
  let classNames = 'Bar1';
  if (sorted) classNames += ' Bar_sorted';
  if (stateD) classNames += ' Bar_stateD';
  else if (stateC) classNames += ' Bar_stateC';
  else if (stateB) classNames += ' Bar_stateB';
  else if (stateA) {classNames += ' Bar_stateA';
trk=!trk}

  let classNames1 = 'Bar1';
  if (sorted) classNames1 += ' Bar_sorted';
  if (stateD) classNames1 += ' Bar_stateA';
  else if (stateC) classNames1 += ' Bar_stateB';
  else if (stateB) classNames1 += ' Bar_stateC';
  else if (stateA) {classNames1 += ' Bar_stateD';
trk=!trk}
 
 
  /*let BarStyle = { ...style, width: `${width}%`, height: `${height}%` };
  if (stateA || stateB || stateC || stateD) {
    BarStyle['marginRight'] = `${0.3 * width}%`;
    BarStyle['marginLeft'] = `${0.3 * width}% `;
  }
*/
  return (
    <div> <div  className={classNames}>
     <table Style="border:1px solid black; padding-left:6px; padding-right:6px; padding-top:3px; padding-bottom:3px;">
      <tr><span>{val}
      </span></tr></table> 
    </div>
    </div>
  );
};
export const psudo={trk1:trk};
export default Bar1;
