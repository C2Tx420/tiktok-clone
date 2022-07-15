import {React, useEffect, useState} from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faSpinner, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';

import styles from './Search.module.scss'
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

export default function Search() {

  const [visible, setVisible] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setVisible([1])
    },1000)
  })
  return (
    <Tippy
      interactive
      visible={visible.length}
      render={attrs => (
      <div className={cx('search__result')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
          <h4 className={cx('search__result-title')}>
            Accounts
          </h4>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
        </PopperWrapper>
      </div>
    )}>
      <div className={cx('search')}>
              <input className={cx('search__input')} placeholder='Search accounts and videos' />
              <FontAwesomeIcon className={cx('search__xmark')} icon={faCircleXmark}/>
              <FontAwesomeIcon className={cx('search__spinner')} icon={faSpinner}/>
              <button className={cx('search__btn')}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
              <div className={cx('search__border')}></div>
      </div>
    </Tippy>
  )
}
