import React, { useState } from 'react'
import { BackButton } from '../BackButton/BackButton'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import  useShallowEqualSelector  from '../../hooks/useShallowEqualSelector'
import { ListIcon } from '../icons/ListIcon'
import { Row, Col, Input } from 'antd'
import { USER_PROPS, USER_STATUS, USER_PAY } from '../../const/users'
import './UpdateUser.scss'

export const UpdateUser = () => {
  const selectedUser = useShallowEqualSelector(state => state.usersState.currentUser)
  const [userName, setNameValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.NAME).desctiption)
  const [userSurname, setSurnameValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.SURNAME).desctiption)
  const [userLastname, setLastnameValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.LAST_NAME).desctiption)
  const [userPhone, setPhoneValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.PHONE).desctiption)
  const [userMail, setMailValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.MAIL).desctiption)
  const [userStatus, setStatusValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.STATUS).desctiption)
  const [userPay, setPayValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.PAY).desctiption)
  const [userAccount, setAccountValue] = useState(selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.ACCOUNT).desctiption)


  const changeName = ({ target: { value } }) => {
    setNameValue(value)
  }
  const changeSurname = ({ target: { value } }) => {
    setSurnameValue(value)
  }
  const changeLastname = ({ target: { value } }) => {
    setLastnameValue(value)
  }

  const changePhone = ({ target: { value } }) => {
    setPhoneValue(value)
  }

  const changeMail = ({ target: { value } }) => {
    setMailValue(value)
  }

  const changeStatus = (value) => {
    setStatusValue(value)
  }

  const changePay = (value) => {
    setPayValue(value)
  }

  const changeAccount = (value) => {
    setAccountValue(value)
  }

  return (
    <>
      <BackButton prevPage={`/user/${selectedUser.key}`} />
      <h2>{selectedUser.name} Редактирование</h2>
      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Имя
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Имя"
                        value={userName}
                        onChange={changeName}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Фамилия
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Фамилия"
                        value={userSurname}
                        onChange={changeSurname}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Отчество
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Отчество"
                        value={userLastname}
                        onChange={changeLastname}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Контактный телефон
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Контактный телефон"
                        value={userPhone}
                        onChange={changePhone}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Электронная почта
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Электронная почта"
                        value={userMail}
                        onChange={changeMail}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Юридическая форма
            </p>
            <div className="wrapper">
              <div className="select">
              <CustomSelect options={USER_STATUS}
                            placeholder="Юридическая форма"
                            size="large"
                            defaultValue={() => USER_STATUS.find(s => s.name.toLowerCase() === userStatus.toLowerCase())}
                            width="100%"
                            value={userStatus}
                            onChange={changeStatus}
              />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Вид рассчета
            </p>
            <div className="wrapper">
              <div className="select">
              <CustomSelect options={USER_PAY}
                            placeholder="Вид рассчета"
                            size="large"
                            defaultValue={() => USER_PAY.find(s => s.name.toLowerCase() === userPay.toLowerCase())}
                            width="100%"
                            value={userPay}
                            onChange={changePay}
              />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="select_block">
            <p className="label">
              Лицевой счет
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Лицевой счет"
                        value={userAccount}
                        onChange={changeAccount}
                        type="number"
                        suffix={<ListIcon />}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}