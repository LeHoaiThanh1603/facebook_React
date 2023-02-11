import classNames from "classnames/bind";
import styles from './SidebarMenuIcon.module.scss'
import Menu from '../Menu/Menu'
import MenuItem from '../Menu/MenuItem'

import { AiFillHome } from 'react-icons/ai';
import Images from "../../../components/Image/Image";

import { RenderIcon } from "../Icon/RenderIcon";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles)


function SidebarMenuIcon() {

    const userData = useSelector(state => state.auth.user)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Menu>
                    <MenuItem icon={<AiFillHome />} to={'/'} />
                    <MenuItem to={'/profile'} icon={<Images width='24' height='24' src={userData.avatar} />}
                    />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>
        </div>
    );
}

export default SidebarMenuIcon;