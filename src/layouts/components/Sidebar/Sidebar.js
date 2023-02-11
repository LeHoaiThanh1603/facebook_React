import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import Menu from '../Menu/Menu'
import MenuItem from '../Menu/MenuItem'

import { AiFillHome } from 'react-icons/ai';
import Images from "../../../components/Image/Image";

import { RenderIcon } from "../Icon/RenderIcon";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles)



function Sidebar() {
    const userData = useSelector(state => state.auth.user)


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='Trang chủ' icon={<AiFillHome />} />
                    <MenuItem title={userData.fullname} to={'/profile'} icon={<Images width='24' height='24' src={userData.avatar} />}
                    />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='Watch' icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem title='Marketplace' icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem title='Trò chơi' icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='Watch' icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem title='Marketplace' icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem title='Trò chơi' icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='Watch' icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem title='Marketplace' icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem title='Trò chơi' icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='Watch' icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem title='Marketplace' icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem title='Trò chơi' icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>

            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='Watch' icon={<RenderIcon position={'0 -74px'} />} />
                    <MenuItem title='Marketplace' icon={<RenderIcon position={'0 -49px'} />} />
                    <MenuItem title='Trò chơi' icon={<RenderIcon position={'0 3px'} />} />
                </Menu>
            </div>
        </div>
    );
}

export default Sidebar;