import React from 'react';
import './style.css';

import Button from '../../celling/Button';
import { MdMenu as Hamburger, MdClose as Close } from 'react-icons/md';
import { Icon } from './TopBarElements';

const TopBar = ({ drawerOpen, toggleDrawer, children }) => {
  return (
    <header className="TopBar">
      <div className="TopBar__Row">
        <section className="TopBar__Section">
          <Button
            icon={drawerOpen ? Close : Hamburger}
            className="TopBar__MenuButton"
            iconClass="TopBar__Icon"
            onClick={toggleDrawer}
          />
          <Icon to="/">Algorithm Visualization</Icon>
         
        </section>
        <section className="TopBar__Section TopBar__Section_align_end">
          {children}
        </section>
      </div>
    </header>
  );
};

export default TopBar;