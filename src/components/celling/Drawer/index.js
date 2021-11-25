import React, { Fragment } from 'react';
import './style.css';

const Drawer = ({ open, children}) => {
  let className = 'Drawer';
  className += open ? ` Drawer_open` : ` Drawer_closed`;
  return (
    <Fragment>
      <div className={className}>
        <div className="Drawer__Content">{children}</div>
      </div>
    </Fragment>
  );
};

export default Drawer;