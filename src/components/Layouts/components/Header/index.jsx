import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import image from 'src/assets/image'
import Search from '../Search'
import Button from '~/components/Button'
import { faCircleQuestion, faEarthAsia, faKeyboard, faPlus } from '@fortawesome/free-solid-svg-icons'
import { PopperMenu } from '~/components/Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: faEarthAsia,
    title: 'English'
  },
  {
    icon: faCircleQuestion,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: faKeyboard,
    title: 'Keyboard Shorcut'
  }
]

export default function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={`container ${cx('container')}`}>
          <div className={cx('logo')}>
              <img src={image.logo} alt='logo'/>
          </div>
          <Search/>
          <div className={cx('action')}>
            <Button outline iconLeft={faPlus}>Upload</Button>
            <Button primary>Log in</Button>
            <PopperMenu data={MENU_ITEMS}>
            <button className={cx('menu__btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical}/>
            </button>
        </PopperMenu>
          </div>
      </div>
    </header>
  )
}
