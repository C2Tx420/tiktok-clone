import React from 'react'
import Header from '../components/Header'
import Siderbar from '../components/Sidebar'
import Footer from '../components/Footer'
import styles from './defaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

export default function DefaultLayout({children}) {
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
