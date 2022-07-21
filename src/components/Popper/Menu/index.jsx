import Tippy from '@tippyjs/react'
import React from 'react'
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import { PopperWrapper } from '../'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

export default function Menu({data,children}) {

  const renderItem = () => {
    return data.map(item=>{
      return <MenuItem data={item}/>
    })
  };

  return (
    <Tippy 
      interactive
      delay={[0, 500]}
      placement='bottom-end'
      animation={false}
      render={attrs => (
      <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
        <PopperWrapper className={cx('popper')}>
          {renderItem()}
        </PopperWrapper>
      </div>)}>
        {children}
    </Tippy>
  )
}
