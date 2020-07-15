import React from 'react';
import 'antd/dist/antd.css';
import './InfoTask.scss'
import { Table, Tag } from 'antd';
// import { Data } from '../../const/tasks'

export const InfoTask = ({data}) => {

  const columns = [
    {
      dataIndex: 'property',
      key: 'property',
    },
    {
      dataIndex: 'desctiption',
      key: 'desctiption',
      render: (text, record) => {
        if (Array.isArray(record.desctiption)) {
          return record.desctiption.map(r => {
            const color = r.negative ? 'volcano' : 'geekblue'
            return (
              <Tag color={color} key={r.key}>
                {r.tags}
              </Tag>
            )
          })
        } else {
          return record.bold ? <strong>{text}</strong> : text
        }
      }
    },
  ];

  return (
    <Table  pagination={false}
            showHeader={false}
            columns={columns}
            dataSource={data} />
  )
}