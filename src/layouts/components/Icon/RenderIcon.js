import classNames from "classnames/bind";
import styles from './RenderIcon.module.scss'
const cx = classNames.bind(styles)


const RenderIcon = ({ position }) => {
    return <div className={cx('testIcon')} style={{ backgroundPosition: `${position}` }}>
    </div>
}

const RenderIconFeed = ({ position }) => {
    return <div className={cx('RenderIconFeed')} style={{ backgroundPosition: `${position}` }}></div>
}

const RenderIconUpload = ({ position }) => {
    return <div className={cx('RenderIconUpload')} style={{ backgroundPosition: `${position}` }}></div>
}

const RenderIconAction = ({ position }) => {
    return <div className={cx('RenderIconAction')} style={{ backgroundPosition: `${position}` }}></div>
}

export { RenderIcon, RenderIconFeed, RenderIconUpload, RenderIconAction }