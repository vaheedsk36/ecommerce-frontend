import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";
import {ISidebar} from '../ts/type-defs/body-layout';

const Sidebar:React.FC<ISidebar> = ({open,onClose}) => {

  return (
    <>

      <Drawer
        title="Hello, Client Name"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Sidebar;
