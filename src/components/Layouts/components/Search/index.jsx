import React from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faSpinner, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    const cx = classNames.bind(styles)
  return (
    <div className={cx('search')}>
            <input className={cx('search__input')} placeholder='Search accounts and videos' />
            <FontAwesomeIcon className={cx('search__xmark')} icon={faCircleXmark}/>
            <FontAwesomeIcon className={cx('search__spinner')} icon={faSpinner}/>
            <button className={cx('search__btn')}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            <div className={cx('search__border')}></div>
          </div>
  )
}
