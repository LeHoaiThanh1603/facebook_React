import styles from './SuggestedSearch.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function SuggestedSearch({ children, title, description, change }) {
    return (
        <div className={cx('wrapper')} >
            <h4>{title}</h4>
            <div className={cx('heading')}>
                <h6>{description}</h6>
                <a href='#'>{change}</a>
            </div>
            {children}
        </div>
    );
}

export default SuggestedSearch;