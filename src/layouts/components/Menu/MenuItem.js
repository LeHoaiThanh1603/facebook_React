import classNames from 'classnames/bind';
import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ icon, title, to, activeIcon }) {
    return (
        <NavLink className={cx('menu-item')} style={{ textDecoration: 'none' }} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;