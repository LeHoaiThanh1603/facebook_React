import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import * as React from 'react';
import { MdEdit } from 'react-icons/md';
import BoderBottom from '../../../components/BoderBottom/BoderBottom';
import Images from '../../../components/Image/Image';
import DialogEditProfile from './Dialog/DialogEditProfile';
import styles from './ContentProfile.module.scss';
const cx = classNames.bind(styles);


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



function ContentProfile() {
    const [openEdit, setOpenEdit] = useState(false)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')} >

            </div>
            <div>
                <div className={cx('info')}>
                    <div className={cx('info__img')}>
                        <Images width='200px' height='200px' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c6rT9Q4fhgUAX8lbTmi&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAsTcqG8p2cfm-JPVKZuKvorl0EM8qiZ386ZdeOuIS84Q&oe=63BE85E3' />
                    </div>
                    <div className={cx('flexbw')}>
                        <div className={cx('info__content')}>
                            <h4>Lê Hoài Thanh</h4>
                            <div className={cx('info__title')} >
                                <span>2 người theo dỏi</span>
                                <span> •  2 đang theo dỏi</span>
                            </div>
                            <div className={cx('flex')}>
                                <Images width='30px' height='30px' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c6rT9Q4fhgUAX8lbTmi&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAsTcqG8p2cfm-JPVKZuKvorl0EM8qiZ386ZdeOuIS84Q&oe=63BE85E3' />
                                <Images width='30px' height='30px' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c6rT9Q4fhgUAX8lbTmi&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAsTcqG8p2cfm-JPVKZuKvorl0EM8qiZ386ZdeOuIS84Q&oe=63BE85E3' />
                            </div>
                        </div>
                        <Button className={cx('btn_edit')} sx={{ height: '40px', textTransform: 'none' }}
                            variant="contained"
                            onClick={() => setOpenEdit(true)}
                        >

                            <span className={cx('iconEdit')}> <MdEdit /></span>
                            Chỉnh sửa
                        </Button>
                        <DialogEditProfile openEdit={openEdit} closeEdit={setOpenEdit} />
                    </div>
                </div>
                <BoderBottom />
            </div>
            <div className={cx('action')}>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab sx={{ color: 'var(--white)', textTransform: 'none' }} label="Bài Viết" {...a11yProps(0)} />
                            <Tab sx={{ color: 'var(--white)', textTransform: 'none' }} label="Giới Thiệu" {...a11yProps(1)} />
                            <Tab sx={{ color: 'var(--white)', textTransform: 'none' }} label="Ảnh" {...a11yProps(2)} />
                            <Tab sx={{ color: 'var(--white)', textTransform: 'none' }} label="Video" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Three
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
}

export default ContentProfile;