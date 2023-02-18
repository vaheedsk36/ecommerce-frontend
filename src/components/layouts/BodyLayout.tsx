import React, { useState } from 'react';
import Sidebar from '../Sidebar';

const BodyLayout = () => {

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
      <div className="layout--header">

      </div>

      <div className="layout--sidebar">
        <Sidebar {...{open, onClose}}/>
      </div>
      <div className="layout--footer">

      </div>
    </div>


    </>
  )
}

export default BodyLayout