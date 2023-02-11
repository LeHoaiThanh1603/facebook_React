import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BsChevronRight, BsMoonFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { IoIosHelpCircle, IoMdSettings } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { MdLanguage, MdFeed } from 'react-icons/md'
import { CgMail } from 'react-icons/cg'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import imagesIcon from '../../../../asset/image/image';
import Image from '../../../../components/Image/Image';
import Menu from '../../../../components/Menu';
import styles from './Option.module.scss';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles)


const MENU = [
    {
        icon: <IoMdSettings />,
        title: 'Cài đặt & quyền riêng tư',
        more: <BsChevronRight />,
        children: {
            title: 'Cài đặt & quyền riêng tư',
            data: [
                {
                    icon: <IoMdSettings />,
                    title: 'Cài đặt',
                },
                {
                    icon: <FaLock />,
                    title: 'Cài đặt & quyền riêng tư',
                },
                {
                    icon: <FaLock />,
                    title: 'Trung tâm quyền riêng tư',
                },
                {
                    icon: <AiOutlineUnorderedList />,
                    title: 'Nhật kí hoạt động',
                },
                {
                    icon: <MdFeed />,
                    title: 'Tùy chỉnh Bảng Feed',
                },
                {
                    icon: <MdLanguage />,
                    title: 'Ngôn ngữ',
                },
            ],
        },
    },
    {
        icon: <IoIosHelpCircle />,
        title: 'Trợ Giúp & Hổ trợ',
        more: <BsChevronRight />,
        children: {
            title: 'Cài đặt & quyền riêng tư',
            data: [
                {
                    icon: <IoIosHelpCircle />,
                    title: 'Trung tâm Hỗ trợ',
                },
                {
                    icon: <CgMail />,
                    title: 'Hộp thư hỗ trợ',
                },
                {
                    icon: <RiErrorWarningFill />,
                    title: 'Báo cáo sự cố',
                },

            ],
        },
    },
    {
        icon: <BsMoonFill />,
        title: 'Màn hình & Trợ năng',
        more: <BsChevronRight />,
        children: {
            title: 'Cài đặt & quyền riêng tư',
            data: [
                {
                    icon: <IoIosHelpCircle />,
                    title: 'chế độ tối',
                },

            ],
        },
    },
    {
        icon: <RiErrorWarningFill />,
        title: 'Đóng góp ý kiến',
    },
    {
        icon: <FiLogOut />,
        title: 'Đăng xuất'
    },
]

function Option() {

    const userData = useSelector(state => state.auth.user)
    console.log(userData)

    const [onMessage, setOnMessage] = useState(false)
    const [onbell, setOnbell] = useState(false)
    const [onProfile, setOnProfile] = useState(false)

    const TippyMessRef = useRef()
    const TippyBellRef = useRef()
    const TippyProfileRef = useRef()

    useEffect(() => {


        const handleShowTippy = (e) => {
            if (!TippyMessRef.current.contains(e.target)) {
                setOnMessage(false)
            } if (!TippyBellRef.current.contains(e.target)) {
                setOnbell(false)

            } if (!TippyProfileRef.current.contains(e.target)) {
                setOnProfile(false)

            }
        }

        document.addEventListener('click', handleShowTippy)

        return () => document.removeEventListener('click', handleShowTippy)
    }, [])

    return (
        <div className={cx('option')}>
            <div className={cx('option--wrapper')} ref={TippyMessRef}>
                <Menu>
                    <span className={cx('option--icon')} onClick={() => setOnMessage(true)}>
                        <Image
                            badge='1'
                            src={imagesIcon.messIcon} alt=''
                        />
                    </span>
                </Menu>
            </div>

            <div className={cx('option--wrapper')} ref={TippyBellRef}>
                <Menu
                >
                    <span className={cx('option--icon')} onClick={() => setOnbell(true)}>
                        <Image
                            badge='9'
                            src={imagesIcon.bellIcon} alt=''
                        />
                    </span>
                </Menu>
            </div>

            <div className={cx('option--wrapper')} ref={TippyProfileRef}>
                <Menu
                    onProfile={onProfile}
                    items={MENU}
                >
                    <span className={cx('option--user')} onClick={() => setOnProfile(true)}>
                        <Image
                            width={'40'}
                            height={'40'}
                            src={userData.avatar}
                        />
                        <div className={cx('option--icon--down')}>
                            <BiChevronDown display={'block'} />
                        </div>
                    </span>
                </Menu>
            </div>
        </div>
    );
}

export default Option;