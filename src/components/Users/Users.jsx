import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { TableUsers } from './TableUsers'
import { SearchBtnIcon } from '../icons/SearchBtnIcon'
import { SearchIcon } from '../icons/SearchIcon'
import { SortIcon } from '../icons/SortIcon'
import { Row, Col, Input } from 'antd'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { SORT_BY } from '../../const/sortBy'
import './Users.scss'
import { setAllUsers } from '../../store/actions/actionsUsers'

export const Users = () => {

  const dispatch = useDispatch()
  const { response } = useFetch('./users.json', null, 'users')
  const users = useShallowEqualSelector(state => state.usersState.users)

  useEffect(() => {
      dispatch(setAllUsers(response))
  },[dispatch, response])


  return (
    <>
      <h2>Собственники</h2>
      <Row className="search">
        <Col span={16}>
          <div className="search_block">
            <div className="search_icon">
              <SearchBtnIcon />
            </div>
            <Input  prefix={<SearchIcon />}
                    placeholder="Введите ФИО собственника, адрес квартиры или лицевой счет"
                    style={{ width: 580 }}
                    size="middle"
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="sort">
            <p className="sort_text"> Сортировать по: </p>
              <CustomSelect size={"middle"}
                            options={SORT_BY}
                            defaultValue={SORT_BY[0].name}
                            icon={<SortIcon />}
                            width="60%"
              />
          </div>
        </Col>
      </Row>
      <TableUsers users={users} />
    </>
  )
}