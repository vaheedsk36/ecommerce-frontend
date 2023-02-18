import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../header/Header';
import Footer from '../Footer';
import { LayoutProps } from '../../ts/type-defs/body-layout'

const BodyLayout:React.FC<LayoutProps> = ({children}) => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className='layout'>
      {/* <div className="layout--sidebar">
        <Sidebar {...{open, onClose}}/>
      </div> */}
      <div className="layout--header">
        <Header/>
      </div>

      <div className='layout--container'>
        <div className="layout--body">
          {children}
        </div>
        <div className="layout--footer">
          <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}

export default BodyLayout