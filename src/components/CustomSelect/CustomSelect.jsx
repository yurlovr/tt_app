import React from 'react'
import 'antd/dist/antd.css'
import './CustomSelect.scss'
import { Select } from 'antd'
import { DownArrowIcon } from '../icons/DownArrowIcon'

const { Option } = Select;

export const CustomSelect = ({placeholder, options, size, defaultValue, icon, width, showSearch, onChange, value, disabled}) => {

const renderExpert = () => {
  return  options.map(e => {
    if (icon) {
      return (
        <Option value={e.name} key={e.id}>
          <span className="icon_select">
            {icon}
          </span>
          {e.name}
        </Option>
      )
    } else {
      return (
        <Option value={e.name} key={e.id}>{e.name}</Option>
      )
    }
  }

  )
}
  return (
    <Select
      showSearch={showSearch}
      style={{ minWidth: width }}
      optionFilterProp="children"
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      value={value}
      defaultValue={defaultValue && defaultValue}
      disabled={disabled}
      suffixIcon={<DownArrowIcon />}
    >
      {renderExpert()}
    </Select>
  );
}
