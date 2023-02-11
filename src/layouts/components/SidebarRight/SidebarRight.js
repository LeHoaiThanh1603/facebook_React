import classNames from "classnames/bind";
import styles from './SidebarRight.module.scss'
import Menu from '../Menu/Menu'
import MenuItem from '../Menu/MenuItem'
import Images from "../../../components/Image/Image";
import BoderBottom from "../../../components/BoderBottom/BoderBottom";
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles)

function SidebarRight() {
    const userData = useSelector(state => state.auth.user)
    const titleBirthDay = 'hôm nay là Sinh Nhật của cô ấy.'
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('viewProfile')}>
                    <div className={cx('viewProfile__wrapper')}>
                        <Images
                            width='40px'
                            height='40px'
                            src={userData.avatar}
                        />
                        <h5 className={cx('viewProfile__name')}>{userData.fullname}</h5>
                    </div>
                </div>
            </div>
            <div className={cx('item')}>
                <Menu>
                    <div>Sinh Nhật</div>
                    <MenuItem
                        icon={<div className={cx('icon')}></div>}
                        title={`Duong Nguyen Thuy Nhu ${titleBirthDay}`}
                    />
                </Menu>
                <BoderBottom />
            </div>
            <div className={cx('item')}>
                <Menu>
                    <MenuItem
                        icon={<Images online story width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Hoài Thanh'

                    />
                    <MenuItem
                        icon={<Images width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Lê Hoài Thanh'
                    />
                    <MenuItem
                        icon={<Images story width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Hoài Thanh'
                    />
                    <MenuItem
                        icon={<Images online width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Thuy Nhu'
                    />
                    <MenuItem
                        icon={<Images width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title=' Hoài Thanh'
                    />
                    <MenuItem
                        icon={<Images width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Hoài Thanh'
                    />
                    <MenuItem
                        icon={<Images online story width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Hoài '
                    />
                    <MenuItem
                        icon={<Images width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong  Hoài Thanh'
                    />
                    <MenuItem
                        icon={<Images online width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Hoài Như'
                    />
                    <MenuItem
                        icon={<Images width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Hoài Thanh'
                    />
                    <MenuItem
                        icon={<Images width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />}
                        title='Duong Nguyen Hoài Thanh'
                    />
                </Menu>
            </div>


        </div>
    );
}

export default SidebarRight;