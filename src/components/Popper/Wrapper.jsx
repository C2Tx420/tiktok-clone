import React from 'react'
import classNames from 'classnames/bind'
import styles from './Wrapper.module.scss'

const cx = classNames.bind(styles)

export default function Wrapper({className, children}) {
  return (
    <div className={cx('wrapper',{[className]:className})}>
        {children}
    </div>
  )
}
