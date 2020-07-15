import { getRandomId } from '../libs/getRandomId'

export const Data = [
  {
    task: 'Назначить сотрудника для проведения внеплановой проверки',
    taskId: 'b8a6a',
    taskDescription: 'Не корректные показания',
    taskTime: 876,
    taskCreated:'10.07.2020 10:38',
    userId: 'b8a6b',
    currentStep: 1,
    info: [
    {
      key: getRandomId(),
      property: 'Причина задачи',
      desctiption: 'Малое потребление холодной воды'
    },
    {
      key: getRandomId(),
      property: 'Номер задачи',
      desctiption: '123'
    },
    {
      key: getRandomId(),
      property: 'Дата создания',
      desctiption: '10.07.2020 10:38'
    },
    {
      key: getRandomId(),
      property: 'Адрес',
      desctiption: 'Набережные Челны, Машиностроительная, 75, кв.35',
      bold: true
    },
    {
      key: getRandomId(),
      property: 'Комментарий к квартире',
      desctiption: 'ПЛАН ЖКХ-9 ОТ 10,09,17 СЧ.ИСПР!!!! план ИЦ 10.04.18 сч.испр'
    },
    {
      key: getRandomId(),
      property: 'Теги к квартире',
      desctiption: [
        {
          key: getRandomId(),
          tags: 'Бабка',
          negative: false
        },
        {
          key: getRandomId(),
          tags: 'Любит скандалить',
          negative: false
        },
        {
          key: getRandomId(),
          tags: '2 недопуска',
          negative: true
        },
    ]
    },
    {
      key: getRandomId(),
      property: 'Собственник 1',
      desctiption: 'Константинопольский К.К.',
      bold: true
    },
    {
      key: getRandomId(),
      property: 'Статус собственника 1',
      desctiption: 'Передает показания'
    },
    {
      key: getRandomId(),
      property: 'Юридическое состояние',
      desctiption: 'Физическое лицо'
    },
    {
      key: getRandomId(),
      property: 'Номер ЛС собственника 1',
      desctiption: '123456789'
    },
    {
      key: getRandomId(),
      property: 'Контактный номер телефона',
      desctiption: '+7 999 999-99-99'
    },
    {
      key: getRandomId(),
      property: 'Собственник 2',
      desctiption: 'Иванова К.С.',
      bold: true
    },
    {
      key: getRandomId(),
      property: 'Статус собственника 2',
      desctiption: 'Передает показания'
    },
    {
      key: getRandomId(),
      property: 'Юридическое состояние',
      desctiption: 'Физическое лицо'
    },
    {
      key: getRandomId(),
      property: 'Номер ЛС собственника 2',
      desctiption: '123456789'
    },
    {
      key: getRandomId(),
      property: 'Контактный номер телефона ',
      desctiption: '+7 999 999-99-99'
    }
  ],
  comment: []
  }
]