/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 */

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import StrapiClient from './StrapiClient';
import { ProCard, ProForm } from '@ant-design/pro-components';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const config = {
//   oc: {
//     api: 'http://api.srvio.pro/api',
//   },
//   wg: {
//     api: 'http://api.srvio.pro/api',
//   },
//   clients: {
//     tpa: {},
//   },
// };

interface Server {
  id: number;
  name: string;
  site: number;
  ip: string;
  port: Date;
  status: 'up' | 'down';
}

let api = StrapiClient({
  url: '',
  token: '',
});
root.render(
  <ProCard
    bordered
    headerBordered
    title={'View'}
    actions={['Add', 'Edit', 'Remove']}
    extra={['Create']}
  ></ProCard>
);
