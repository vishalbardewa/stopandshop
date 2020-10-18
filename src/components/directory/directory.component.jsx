import React, { useState } from 'react'

import { MenuItem } from '../menu-item'

import { DIRECTORY_LIST } from '../../constants/mockData';

import './directory.styles.scss'

const Directory = () => {
  const [section] = useState([...DIRECTORY_LIST])
  return (
    <div className='directory-menu'>
      {section.map(({ id, ...otherSectionProps }) =>
        (<MenuItem key={id} {...otherSectionProps}  />))}
    </div>
  )
}

export default Directory
