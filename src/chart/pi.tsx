import React, { memo, useState } from 'react';
import {  Pie } from '@ant-design/plots';
import { Column } from '@ant-design/charts';  // charts and plots both same library ned to check is any diff with existing
import { Button } from 'antd';
import { isEqual } from 'lodash-es';

const DemoPie = memo(
  ({ data, onReady }:any) => {
    const config = {
      data,
      angleField: 'value',
      colorField: 'type',
      label: {
        text: 'value',
        position: 'outside',
      },
      onReady,
    };
    return <Pie {...config} />;
  },
  (pre, next) => {
    return isEqual(pre?.data, next?.data);
  },
);

export const DemoPI = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
       ADD
      </Button>
      <Button
        style={{ margin: '0 10px' }}
        type="primary"
        onClick={() => {
          setData(data.map((d) => ({ ...d, value: Math.floor(Math.random() * 100) })));
        }}
      >
       Click
      </Button>
      <span>{count}</span>
      <DemoPie data={data} onReady={({ chart }:any) => {console.log(chart)}} />
    </div>
  );
};

export const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json',
    },
    xField: 'letter',
    yField: 'frequency',
    label: {
      text: (d:any) => `${(d.frequency * 100).toFixed(1)}%`,
      textBaseline: 'bottom',
    },
    axis: {
      y: {
        labelFormatter: '.0%',
      },
    },
    style: {
      // 圆角样式
      radiusTopLeft: 10,
      radiusTopRight: 10,
    },
  };
  return <Column {...config} />;
};

