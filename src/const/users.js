export const USER_PROPS = {
  NAME: 'имя',
  SURNAME: 'фамилия',
  LAST_NAME: 'отчество',
  PHONE: 'контактный телефон',
  MAIL: 'электронная почта',
  STATUS: 'юридическая форма',
  PAY: 'вид рассчета',
  ACCOUNT: 'номер лицевого счета'
}

export const USER_STATUS = [
  {
    id: 'entity',
    name: 'Юридическое лицо'
  },
  {
    id: 'person',
    name: 'Физическое лицо'
  },
  {
    id: 'personIP',
    name: 'Индивидуальный предприниматель'
  }
]
export const USER_PAY = [
  {
    id: 'ipy',
    name: 'по ИПУ'
  },
  {
    id: 'tarif',
    name: 'по Тарифу'
  }
]