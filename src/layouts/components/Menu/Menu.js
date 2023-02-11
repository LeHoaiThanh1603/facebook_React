import classNames from 'classnames/bind';
import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);


function Menu({ children }) {
    return <nav className={cx('menu')}>{children}</nav>;
}

export default Menu;