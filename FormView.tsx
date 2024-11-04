import React, { useState } from 'react';
import {
  ProForm,
  ProFormList,
  ProFormText,
  ProCard,
} from '@ant-design/pro-components';

import { Drawer } from 'antd';
import axios from 'axios';

export default () => {
  const [stateValue, setStateValue] = useState({});
  // const [json, setJson] = useState(() => JSON.stringify(initialValue));

  const [opened, setOpened] = useState(false);

  let servers = [
    {
      id: 1,
      server: '1.1.1.1',
    },
  ];
  let customClients = ['client1', 'client2', 'client3'];
  let clients = ['tpa', 'fva', ...customClients];
  let subnetCodes = [77, 78, 88, 38];

  let subnets = [
    {
      id: 2,
      name: 'IT',
    },
    {
      id: 3,
      name: 'PSK1',
      server: 1,
    },
    {
      id: 4,
      name: 'Srvio',
    },
    {
      id: 5,
      name: 'Solid',
    },
    {
      id: 6,
      name: 'Prolog',
    },
    {
      id: 7,
      name: 'Progress',
    },
  ];

  return (
    <>
      <ProForm title={'Config'} coluns={subnets} >
        <ProFormText name="server" />
        {/* <ProFormList
          name="subnets"
          label="S"
          initialValue={subnets}
          rowKey={'id'}
          creatorButtonProps={{
            position: 'bottom',
          }}
          request={(data: any[]) => {
            // axios.get('')
          }}
          {...stateValue}
        >
          <ProForm.Group key="group" size={8} title={'Group '}>
            <ProFormText name="name" label="name" />
          </ProForm.Group>
        </ProFormList> */}
      </ProForm>
    </>
  );
};
