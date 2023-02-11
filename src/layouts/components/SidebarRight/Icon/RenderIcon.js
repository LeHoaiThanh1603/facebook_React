import classNames from "classnames/bind";
import styles from './RenderIcon.module.scss'
const cx = classNames.bind(styles)

const RenderIcon = ({ position }) => {
    console.log(position)
    return <div className={cx('testIcon')} style={{ backgroundPosition: `${position}` }}>
    </div>
}

export default RenderIcon