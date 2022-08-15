import React from 'react';
import StoriesContainer from './StoriesContainer'
import Sidebar from './Sidebar'

const  StoriesPage = () => {
  return (
    <div className='stories-page w-full'>
      <Sidebar></Sidebar>
      <StoriesContainer />
      <Sidebar></Sidebar>
    </div>
  );
}
  
export default StoriesPage;
  