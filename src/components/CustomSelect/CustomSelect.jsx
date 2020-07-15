import React from 'react';
import 'antd/dist/antd.css';
import './CustomSelect.scss';
import { Select } from 'antd';


const { Option } = Select;

export const CustomSelect = ({placeholder, options, size, defaultValue, icon, width, showSearch}) => {

  const onChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onBlur = () => {
    console.log('blur');
  }

  const onFocus = () => {
    console.log('onFocus');
  }

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
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      size={size}
      defaultValue={defaultValue && defaultValue}
    >
      {renderExpert()}
    </Select>
  );
}
