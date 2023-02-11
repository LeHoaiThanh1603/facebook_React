import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from './HomeLayout.module.scss'
import classNames from "classnames/bind";
import SidebarRight from "../components/SidebarRight/SidebarRight";

const cx = classNames.bind(styles)
function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx("wrapper")}>
                <Sidebar />
                <div className={cx('content')}>
                    <Content />
                </div>
                <SidebarRight />
            </div>
        </div>
    );
}

export default HomeLayout;