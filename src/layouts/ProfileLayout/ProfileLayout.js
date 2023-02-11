
import Header from '../components/Header/Header'
import SidebarMenuIcon from '../components/SidebarMenuIcon/SidebarMenuIcon';

import classNames from 'classnames/bind';
import styles from './ProfileLayout.module.scss';
import ContentProfile from './ContentProfile/ContentProfile';
const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')} >
                <div className="sidebar">
                    <SidebarMenuIcon />
                </div>
                <div className={cx('content')}>
                    <ContentProfile />
                </div>
            </div>
        </div>

    );
}

export default ProfileLayout;