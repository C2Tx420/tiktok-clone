import React from 'react'
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const cx= classNames.bind(styles)

export default function AccountItem() {
  return (
    <div className={cx('account')}>
        <div className={cx('account__avatar')}>
            <img className={cx('account__avatar-img')}  src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/17fe66b294cd3dde51a709605ac9442c~c5_300x300.webp?x-expires=1658044800&x-signature=nTlo5ArwHtm3fG6Dhy1Ee2tyDss%3D" alt="avatar" />
        </div>
        <div className={cx('account__info')}>
            <h5 className={cx('account__info-name')}>
                dokhanhvan
                <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}/>
                </h5>
            <p className={cx('account__info-desc')}>Đỗ Khánh Vân</p>
        </div>
    </div>
  )
}
