import React from 'react';
import './style.css';

const Bar2 = ({
  width,
  height,
  val,
  stateA,
  stateB,
  stateC,
  stateD,
  sorted,
  style,
  a

}) => {
  let classNames = 'Bar2';
  if (sorted) classNames += ' Bar_sorted';
  if (stateD) classNames += ' Bar_stateD';
  else if (stateC) classNames += ' Bar_stateC';
  else if (stateB) classNames += ' Bar_stateB';
  else if (stateA) classNames += ' Bar_stateA';
  let classNames1 = 'Bar_sorted';
  if (sorted) classNames1 += ' Bar_sorted';
  if (stateD) classNames1 += ' Bar_stateA';
  else if (stateC) classNames1 += ' Bar_stateB';
  else if (stateB) classNames1 += ' Bar_stateC';
  else if (stateA) classNames1 += ' Bar_stateD';


  function br22()
{
   classNames='Bar_stateA';
  
}

  let BarStyle = { ...style, width: `${width}%`, height: `${height}%` };
  if (stateA || stateB || stateC || stateD) {
    BarStyle['marginRight'] = `${0.3 * width}%`;
    BarStyle['marginLeft'] = `${0.3 * width}% `;
  }

  return (
    <div  className={classNames}>
     <span className="Bar__Text">{""}{'}'}</span><br/>
      <span className={classNames1}>{""}</span><br/>
     
    
     <div className={classNames1}><span className="Bar__Text">{""}</span></div>
    
     </div>
    
 
  );
};

export default Bar2;
