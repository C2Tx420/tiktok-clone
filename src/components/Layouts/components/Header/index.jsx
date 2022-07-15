import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import image from 'src/assets/image'
import Search from '../Search'

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={`container ${cx('container')}`}>
          <div className={cx('logo')}>
              <img src={image.logo} alt='logo'/>
          </div>
          <Search/>
          <div className={cx('action')}></div>
      </div>
    </header>
  )
}
