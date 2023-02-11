import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { IoMdClose } from 'react-icons/io';
const cx = classNames.bind(styles);

function AccountItem({ name }) {
    return (
        <div className={cx('wrapper')} >
            <div className={cx('wrapper__accountItem')}>
                <img
                    className={cx('wrapper__accountItem--avatar')}
                    src='https://upanh123.com/wp-content/uploads/2021/03/hinh-nen-cute4.png'
                    alt=""
                />
                <p className={cx('wrapper__accountItem--content')}>{name}</p>
            </div>
            <div className={cx('wrapper__accountItem--remove')}>
                <IoMdClose />
            </div>
        </div>
    );
}

export default AccountItem;