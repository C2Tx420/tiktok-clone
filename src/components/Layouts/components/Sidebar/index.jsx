import React from 'react'
import classNames from 'classnames/bind'
import styles from './sideBar.module.scss'

export default function Siderbar() {
  const cx = classNames.bind(styles)
  return (
    <aside className={cx('side-bar')}>
      <div className={cx('side-bar__item')}>Siderbar</div>
    </aside>
  )
}
