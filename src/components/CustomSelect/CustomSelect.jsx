import React from 'react';
import 'antd/dist/antd.css';
import './CustomSelect.scss';
import { Select } from 'antd';

const { Option } = Select;

export const CustomSelect = ({placeholder}) => {

  const onChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onBlur = () => {
    console.log('blur');
  }

  const onFocus = () => {
    console.log('onFocus');
  }

  const  onSearch = (val) => {
  console.log('search:', val);
}
  return (
    <Select
    showSearch
    style={{ minWidth: '98%' }}
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    placeholder={placeholder}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    size="large"
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
  );
}
