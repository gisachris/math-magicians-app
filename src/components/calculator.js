import React from 'react';
import TopSection from './topSection';
import SideBar from './sideActions';
import MainActions from './mainActions';

const AppHolder = () => (
  <section className="holder">
    <TopSection initial={0} />
    <MainActions />
    <SideBar />
  </section>
);
export default AppHolder;
