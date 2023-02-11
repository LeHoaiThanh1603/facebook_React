import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
function MenuItem({ data, onClick }) {
    return (
        <div>
            <div>
                <div className={cx('item')} onClick={onClick}>
                    <span className={cx('item__icon')}>{data.icon}</span>
                    <span className={cx('item__content')}>{data.title}</span>
                    <span className={cx('item__more')}>{data.more}</span>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;