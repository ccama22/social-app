import React from 'react';
import  Header  from "./Header";

const  Layout = ({children}) => {

    return (
      <>
        <Header></Header>
        <div className='mx-auto px-4 mt-6'>
            {children}
        </div>
      </>
    );
}
  
export default Layout;
  