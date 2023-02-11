import { useRef, useEffect, useState } from 'react'
import { Wrapper as PopperWrapper } from '../../components/Popper';
import Images from "../Image/Image";


import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import Header from './Header';
import { LoginApi } from '../../requestApi/LoginApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../layouts/Auth/AuthSlice';
const cx = classNames.bind(styles)

function Menu({ children, onProfile = false, items = [] }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } if (item.title === 'Đăng xuất') {
                    try {
                        LoginApi.logout('/logout')
                        dispatch(logout([]))
                        localStorage.clear('token')
                        navigate('/login')
                    } catch (error) {

                    }
                }
            }} />
        })
    }

    const handlePopoverClose = () => {
        console.log('111111111')
    };

    return (
        <PopupState variant="popover" popupId="demo-popup-popover" sx={{ backgroundColor: 'red' }}>
            {(popupState) => (
                <div >
                    <Button variant="contained" className={cx('btn-action')} {...bindTrigger(popupState)}>
                        {children}
                    </Button>
                    <Popover
                        onClose={handlePopoverClose}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography sx={{}} className={cx('popup')}>
                            <PopperWrapper  >
                                {history.length > 1 && <Header title={history.title} onBack={() => {
                                    setHistory(prev => prev.slice('0', prev.length - 1))
                                }} />}
                                {renderItems()}
                            </PopperWrapper>
                        </Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default Menu;