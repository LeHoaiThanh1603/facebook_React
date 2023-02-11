import { useEffect, useRef, useState } from 'react';

import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import { CgSearch } from 'react-icons/cg';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import imagesIcon from '../../../asset/image/image';
import { Wrapper as PopperWrapper } from '../../../components/Popper/';
import styles from './Header.module.scss';
import Option from './Option/Option';
import SuggestedSearch from './SuggestedSearch/SuggestedSearch';
import AccountItem from '../../../components/AccountItem/AccountItem';
const cx = classNames.bind(styles)

function Header() {

    const [visible, setVisible] = useState(false)
    const TippyRef = useRef()

    useEffect(() => {
        const handleShowTippy = (e) => {
            if (!TippyRef.current.contains(e.target)) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        }

        document.addEventListener('click', handleShowTippy)

        return () => document.removeEventListener('click', handleShowTippy)
    }, [])

    return (
        <div className={cx('navBar')}>
            <div className={cx('navBar__logo')}>
                <img src={imagesIcon.logo} alt='fb' />
            </div>
            <div ref={TippyRef}>
                <Tippy
                    interactive
                    visible={visible}
                    render={attrs => (

                        <div className={cx('navBar__search--result')} tabIndex='-1' {...attrs} >
                            {visible &&
                                <PopperWrapper>
                                    <SuggestedSearch description='Tìm kiếm gần đây' change='Chỉnh sửa'>
                                        <AccountItem name='Lê Hoài Thanh1' />
                                        <AccountItem name='Lê Hoài Thanh2' />
                                        <AccountItem name='Lê Hoài Thanh3' />
                                        <AccountItem name='Lê Hoài Thanh4' />
                                    </SuggestedSearch>
                                </PopperWrapper>}
                        </div>
                    )}

                >
                    <div className={cx('navBar__search')} onClick={() => setVisible(true)}>
                        <div className={cx('navBar__search--wrapper')}>
                            <span className={cx('navBar__search--icon')}>
                                <CgSearch />
                            </span>
                            <input className={cx('navBar__search--input')} placeholder='Tìm kiếm trên Facebook' />
                        </div>
                    </div>
                </Tippy>
            </div>

            <Option />

        </div>
    );
}

export default Header;