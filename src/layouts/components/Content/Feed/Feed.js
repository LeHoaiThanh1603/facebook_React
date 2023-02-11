import classNames from "classnames/bind";
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { RiEarthFill } from 'react-icons/ri';
import BoderBottom from '../../../../components/BoderBottom/BoderBottom';
import Images from '../../../../components/Image/Image';
import { RenderIconAction } from "../../Icon/RenderIcon";
import Menu from '../../Menu/Menu';
import MenuItem from '../../Menu/MenuItem';
import Comment from "./Comment/Comment";
import styles from './Feed.module.scss';

const cx = classNames.bind(styles)

function Feed() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__heading')}>
                <div className={cx('wrapper__user')}>
                    <Images width='40' heigh='40'
                        src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX_JfRm7&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfD9MCj7D_JaqnVMM3Dx6LqVeugWI5_8acJp3znjoo5xxg&oe=63BE85E3'
                    />
                    <span className={cx('wrapper__info')} >
                        <span>Lê Hoài Thanh</span>
                        <span>Vừa đăng <RiEarthFill /> </span>
                    </span>

                </div>
                <div>
                    <FiMoreHorizontal />
                    <MdOutlineClose />
                </div>
            </div>
            <div className={cx('wrapper__content')}> status ở đây này</div>
            <div className={cx('wrapper__post')}>
                <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX_JfRm7&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfD9MCj7D_JaqnVMM3Dx6LqVeugWI5_8acJp3znjoo5xxg&oe=63BE85E3" alt="post" />
            </div>
            <div className={cx('wrapper__interactive')}>
                <div>22 người đã thích</div>
                <div className={cx('wrapper__comment')}>
                    <span >22 bình luận</span>
                    <span className={cx('ml')}>9.2k chia sẽ</span>
                </div>
            </div>
            <BoderBottom />
            <div className={cx('wrapper__action')} >

                <Menu>
                    <MenuItem center icon={<RenderIconAction />} title='Thích' />
                </Menu>

                <Menu>
                    <MenuItem center icon={<RenderIconAction position={'0 -170px'} />} title='Bình luận' />
                </Menu>

                <Menu>
                    <MenuItem icon={<RenderIconAction position={'0 -230px'} />} title='Chia sẽ' />
                </Menu>
            </div>

            <Comment />
        </div>
    );
}

export default Feed;