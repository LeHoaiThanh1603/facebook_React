import classNames from "classnames/bind";
import styles from './FeedHeader.module.scss'
import Images from '../../../../components/Image/Image'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const cx = classNames.bind(styles)

// ========
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
//   =======

function FeedHeader() {



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const slides = [];

    for (let i = 0; i < 12; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
                <div className={cx("slide")}>
                    <div className={cx('story')} style={{ backgroundImage: `url('https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/2-1653445668-926-width740height481.jpg')` }}>

                    </div>
                    <div className={cx('avatar')}>
                        <Images story width='35' height='35' src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/237374990_1099635107439818_9063668913534847660_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sTB2kNktKEsAX9cets4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4ZASrVm4vFyhGPzyPtBXidqPotrvtsQMp1oXevGz7uw&oe=63BC7CA8' />
                    </div>
                    <span className={cx('name')}>Lê Hoài Thanh</span>
                    <div className={cx('bg')} ></div>
                </div>
            </SwiperSlide>
        );
    }
    return (

        <Box sx={{ width: '100%' }} className={cx('feedHeader')}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{ textTransform: 'none', color: 'var(--caret-input)', flexDirection: 'unset', alignItems: 'center' }}
                        icon={<svg className={cx('icon')} fill="var(--caret-input)" viewBox="0 0 20 20" width="20px" height="20px" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj x1qx5ct2 xw4jnvo"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path></g></svg>}
                        className={cx('tabs')} label="Tin" {...a11yProps(0)}

                    />

                    <Tab
                        sx={{ textTransform: 'none', color: 'var(--caret-input)', flexDirection: 'unset', alignItems: 'center' }}
                        icon={<svg className={cx('icon')} fill="var(--caret-input)" viewBox="0 0 20 20" width="20px" height="20px" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M454.59 355h4.18l-2.4-4h-3.28c-.22 0-.423.008-.624.017L454.59 355zm6.514 0h3.695c-.226-1.031-.65-1.79-1.326-2.489-1.061-1.025-2.248-1.488-4.392-1.511h-.379l2.401 4zm-8.78 0-1.942-3.64c-.73.247-1.315.63-1.868 1.165-.668.69-1.09 1.445-1.315 2.475h5.125zm7.043 7.989a.711.711 0 0 1-.22.202l-4.573 2.671-.05.027a.713.713 0 0 1-1.024-.643v-5.343l.002-.056a.714.714 0 0 1 1.072-.56l4.572 2.67.054.036a.714.714 0 0 1 .167.996zm-12.366-5.99V363.083l.001.03v.112l.005.048h.001c.05 2.02.513 3.176 1.506 4.203 1.102 1.066 2.324 1.525 4.577 1.525h5.99c2.144-.023 3.331-.486 4.392-1.511 1.005-1.04 1.467-2.198 1.517-4.217h.003c.003-.1.005-.1.006-.204l.001-.156V357h-18z"></path></g></svg>}
                        className={cx('tabs')} label="Reels" {...a11yProps(1)}

                    />

                    <Tab
                        sx={{ textTransform: 'none', color: 'var(--caret-input)', flexDirection: 'unset', alignItems: 'center' }}
                        icon={<svg className={cx('icon')} fill="var(--caret-input)" viewBox="0 0 20 20" width="20px" height="20px" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M457.25 361H455v2.25a1 1 0 0 1-2 0V361h-2.25a1 1 0 0 1 0-2H453v-2.25a1 1 0 0 1 2 0V359h2.25a1 1 0 0 1 0 2m8.241-5.889a.962.962 0 0 0-.998.063L462 356.938v-1.188a2.754 2.754 0 0 0-2.75-2.75h-10.5a2.754 2.754 0 0 0-2.75 2.75v8.5a2.754 2.754 0 0 0 2.75 2.75h10.5a2.754 2.754 0 0 0 2.75-2.75v-1.188l2.503 1.77a.953.953 0 0 0 .988.057.95.95 0 0 0 .509-.841v-8.096a.95.95 0 0 0-.509-.841"></path></g></svg>}
                        className={cx('tabs')} label="Phòng hợp mặt" {...a11yProps(2)}

                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>

                <div className={cx('wrapper')}>
                    <Swiper
                        onClick={handleClickOpen}
                        id="swiper"
                        virtual
                        slidesPerView={5}
                        // slidesPerColumn={2}
                        // slidesPerColumnFill="row"
                        spaceBetween={60}
                        // slidesPerGroup={2}
                        // autoplay
                        // loop
                        onReachEnd={() => {
                            const tmp = slides.unshift();
                            slides.push(tmp);
                        }}
                        navigation
                    // pagination
                    >
                        {slides}
                    </Swiper>
                </div>

                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>


            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>

    );
}

export default FeedHeader;