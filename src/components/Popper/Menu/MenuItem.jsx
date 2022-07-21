import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '~/components/Button';

const cx = classNames.bind(styles);

export default function MenuItem({data,onClick}) {
    const classes = cx('popper-btn')
  return (
    <Button className={classes} iconLeft={data.icon} to={data.to} onClick={onClick}>
        {data.title}
    </Button>
  )
}
