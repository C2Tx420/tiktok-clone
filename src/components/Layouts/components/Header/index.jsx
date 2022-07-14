import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

export default function Header() {
  const cx = classNames.bind(styles)
  return (
    <header className={cx('wrapper')}>
      <div className={`container ${cx('container')}`}>
          <h1>header</h1>
      </div>
    </header>
  )
}
