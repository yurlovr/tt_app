import React from 'react'
import 'antd/dist/antd.css'
import './TableUsers.scss'
import { Table } from 'antd'
import { AttentionIcon } from '../icons/AttentionIcon'
import { EllipsisBtnIcon } from '../icons/EllipsisBtnIcon'
import { Link } from 'react-router-dom'

export const TableUsers = ({users}) => {

  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => {
        return record.openTasks.length ? (
        <>
          <strong>{text}</strong>
          <span className="icon">
            <AttentionIcon />
            </span>
        </>) : <strong>{text}</strong>
      },
      className: 'col_user'
    },
    {
      dataIndex: 'adress',
      key: 'adress',
      className: 'col_adress'
    },
    {
      dataIndex: 'account',
      key: 'account',
      className: 'col_account'
    },
    {
      dataIndex: 'hasButton',
      key: 'hasButton',
      className: 'col_button',
      render: (text, record) => {
        if (record.hasButton) {
          return (
            <Link to={`/user/${record.key}`}>
              <EllipsisBtnIcon />
            </Link>
          )
        } else {
          return null
        }
      }
    },
  ];
  return (
    <Table  pagination={false}
            showHeader={false}
            columns={columns}
            dataSource={users}
            rowClassName={() => 'row'}
    />
  )
}