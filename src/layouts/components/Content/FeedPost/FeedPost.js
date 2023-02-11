import classNames from "classnames/bind";
import styles from './FeedPost.module.scss'
import Images from '../../../../components/Image/Image'
import Menu from "../../Menu/Menu";
import MenuItem from "../../Menu/MenuItem";
import { RenderIconFeed } from '../../Icon/RenderIcon'
import BoderBottom from "../../../../components/BoderBottom/BoderBottom";
import DialogFeedPost from "./DialogFeedPost/DialogFeedPost";
import { useState } from 'react';

const cx = classNames.bind(styles)

function FeedPost() {
    const [open, setOpen] = useState(false)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__status')}>
                <Images width='40' height='40' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX9iCzhk&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCvBdEP2Oq5Ib_xnvxHppIZXA3H2_XEuHmo_rg3q9wQqg&oe=63BE85E3' />
                <span
                    className={cx('wrapper--title')}
                    onClick={() => setOpen(true)}
                >
                    {`Thanh ơi, bạn đang nghĩ gì thế?`}</span>
            </div>
            <BoderBottom />
            <div className={cx('wrapper__action')}>

                <div className={cx('actionItem')} onClick={() => setOpen(true)} >
                    <Menu>
                        <MenuItem
                            icon={<RenderIconFeed position={'0px -34px'} />} title=' Video trực Tiếp'
                        />
                    </Menu>

                </div>
                <div className={cx('actionItem')} onClick={() => setOpen(true)}>
                    <Menu>
                        <MenuItem
                            icon={<RenderIconFeed position={'0 -216px'} />} title='Ảnh/Video'
                        />
                    </Menu>
                </div>

                <div className={cx('actionItem')} onClick={() => setOpen(true)}>
                    <Menu>
                        <MenuItem
                            icon={<RenderIconFeed position={'0 -164px'} />} title='Cảm xúc/Hoạt động'
                        />
                    </Menu>
                </div>
            </div>

            <DialogFeedPost openDialog={open} closeDialog={setOpen} />
        </div>);
}

export default FeedPost;