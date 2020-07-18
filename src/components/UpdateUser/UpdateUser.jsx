import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { BackButton } from '../BackButton/BackButton'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Button } from '../Button/Button'
import  useShallowEqualSelector  from '../../hooks/useShallowEqualSelector'
import { ListIcon } from '../icons/ListIcon'
import { Row, Col, Input } from 'antd'
import { USER_PROPS, USER_STATUS, USER_PAY } from '../../const/users'
import { setUpdateUser } from '../../store/actions/actionsUsers'
import { EMAIL_REG_EXP, PHONE_REG_EXP } from '../../const/const'
import './UpdateUser.scss'

export const UpdateUser = () => {

  const dispatch = useDispatch()
  const selectedUser = useShallowEqualSelector(state => state.usersState.currentUser)

  const defaultProperty = {
    name: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.NAME).desctiption,
    surname: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.SURNAME).desctiption,
    lastname: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.LAST_NAME).desctiption,
    phone: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.PHONE).desctiption,
    mail: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.MAIL).desctiption,
    status: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.STATUS).desctiption,
    pay: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.PAY).desctiption,
    account: selectedUser.info.find(item => item.property.toLowerCase() === USER_PROPS.ACCOUNT).desctiption
  }

  const [mailError, setMailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [userName, setNameValue] = useState(defaultProperty.name)
  const [userSurname, setSurnameValue] = useState(defaultProperty.surname)
  const [userLastname, setLastnameValue] = useState(defaultProperty.lastname)
  const [userPhone, setPhoneValue] = useState(defaultProperty.phone)
  const [userMail, setMailValue] = useState(defaultProperty.mail)
  const [userStatus, setStatusValue] = useState(defaultProperty.status)
  const [userPay, setPayValue] = useState(defaultProperty.pay)
  const [userAccount, setAccountValue] = useState(defaultProperty.account)


  const changeName = useCallback(({ target: { value } }) => {
    setNameValue(value)
  }, [])

  const changeSurname =  useCallback(({ target: { value } }) => {
    setSurnameValue(value)
  }, [])

  const changeLastname = useCallback(({ target: { value } }) => {
    setLastnameValue(value)
  },[])

  const changePhone = useCallback(({ target: { value } }) => {
    setPhoneValue(value)
  }, [])

  const changeMail = useCallback(({ target: { value } }) => {
    setMailValue(value)
  }, [])

  const changeStatus = useCallback((value) => {
    setStatusValue(value)
  }, [])

  const changePay = useCallback((value) => {
    setPayValue(value)
  }, [])

  const changeAccount = useCallback(({ target: { value } }) => {
    setAccountValue(value)
  }, [])

  const setDefault = useCallback(() => {
    setNameValue(defaultProperty.name)
    setSurnameValue(defaultProperty.surname)
    setLastnameValue(defaultProperty.lastname)
    setPhoneValue(defaultProperty.phone)
    setMailValue(defaultProperty.mail)
    setStatusValue(defaultProperty.status)
    setPayValue(defaultProperty.pay)
    setAccountValue(defaultProperty.account)
    setMailError(false)
    setPhoneError(false)
  }, [defaultProperty])

  const saveChangeUser = useCallback(() => {
    const result = {
      [USER_PROPS.NAME]: defaultProperty.name === userName ? null : userName,
      [USER_PROPS.SURNAME]: defaultProperty.surname === userSurname ? null : userSurname,
      [USER_PROPS.LAST_NAME]: defaultProperty.lastname === userLastname ? null : userLastname,
      [USER_PROPS.PHONE]: defaultProperty.phone === userPhone ? null : userPhone,
      [USER_PROPS.MAIL]: defaultProperty.mail === userMail ? null : userMail,
      [USER_PROPS.STATUS]: defaultProperty.status === userStatus ? null : userStatus,
      [USER_PROPS.PAY]: defaultProperty.pay === userPay ? null : userPay,
      [USER_PROPS.ACCOUNT]: defaultProperty.account === userAccount ? null : userAccount,
    }
    dispatch(setUpdateUser(result))
  },[dispatch, defaultProperty, userName, userSurname, userLastname, userPhone, userMail, userStatus, userPay, userAccount])

  const mailOnBlur = useCallback(({ target: { value } }) => {
    setMailError(!EMAIL_REG_EXP.test(value))
  },[])

  const phoneOnBlur = useCallback(({ target: { value } }) => {
    setPhoneError(!PHONE_REG_EXP.test(value))
  },[])

  return (
    <>
      <BackButton />
      <h2>{selectedUser.name} Редактирование</h2>
      <Row>
        <Col span={14}>
          <div className="edit_block">
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
          <div className="edit_block">
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
          <div className="edit_block">
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
          <div className="edit_block">
            <p className="label">
              Контактный телефон
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Контактный телефон"
                        value={userPhone}
                        onChange={changePhone}
                        type="tel"
                        onBlur={phoneOnBlur}
                        className={phoneError && "error"}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="edit_block">
            <p className="label">
              Электронная почта
            </p>
            <div className="wrapper">
              <div className="select">
                <Input  size="large"
                        placeholder="Электронная почта"
                        value={userMail}
                        onChange={changeMail}
                        type="email"
                        className={mailError && "error"}
                        onBlur={mailOnBlur}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className="edit_block">
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
          <div className="edit_block">
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
          <div className="edit_block">
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

      <Row>
        <Col span={14}>
          <div className="edit_block-buttons">
            <Button type="primary"
                    disabled={mailError || phoneError}
                    onClick={saveChangeUser}
            >
              Сохранить
            </Button>
            <Button type="default"
                    onClick={setDefault}
            >
              Отменить
            </Button>
          </div>
        </Col>
      </Row>
    </>
  )
}