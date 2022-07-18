import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

export default function Button({
    Onclick,
    href,
    to,
    disabled,
    primary,
    outline,
    small = false,
    large = false,
    rounded,
    className,
    iconLeft,
    iconRight,
    children,
    passProps
}) {
    let Comp = 'button';

    const props = {
        Onclick,
        ...passProps
    }
    
    if(href){
        Comp = 'a';
        props.href = href;
    }else if(to){
        Comp = Link;
        props.to = to;
    }

    if(disabled){
        Object.keys(props).forEach(key=>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }

    const classes = {
        [className]: className,
        primary,
        disabled,
        outline,
        small,
        large,
        rounded
    };
  return (
    <Comp className={cx('wrapper',{...classes})} {...props}>
        {iconLeft && <span className={cx('icon')}><FontAwesomeIcon icon={iconLeft}/></span>}
        <span>{children}</span>
        {iconRight && <span className={cx('icon')}><FontAwesomeIcon icon={iconRight}/></span>}
    </Comp>
  )
}
