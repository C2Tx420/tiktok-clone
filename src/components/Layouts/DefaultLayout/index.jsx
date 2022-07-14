import React from 'react'
import Header from '../components/Header'
import Siderbar from '../components/Sidebar'
import Footer from '../components/Footer'
import styles from './defaultLayout.module.scss'
import classNames from 'classnames/bind'

export default function DefaultLayout({children}) {
  const cx = classNames.bind(styles)
  return (
    <>
        <Header/>
        <div className={`container ${cx('container')}`}>
            <Siderbar/>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
        <Footer/>
    </>
  )
}
