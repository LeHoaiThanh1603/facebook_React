import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';
import styles from './Dialog.module.scss';
const cx = classNames.bind(styles);

export default function DialogEditProfile({ openEdit, closeEdit }) {

    const [selectedImage, setSelectedImage] = React.useState();


    const handleClose = () => {
        closeEdit(false);
    };

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (
        <div >
            <Dialog

                open={openEdit}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <div className={cx('dialog')}>
                    <div>
                        <h2>Ảnh đại diện</h2>

                        <div className={cx('previewImage')}>
                            <img className={cx('imagePreview')} style={styles.image} src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c6rT9Q4fhgUAX8lbTmi&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAsTcqG8p2cfm-JPVKZuKvorl0EM8qiZ386ZdeOuIS84Q&oe=63BE85E3'}
                                alt='avatar'
                            />
                        </div>
                        <input className={cx('custom-file-input')} type="file" onChange={imageChange} />
                    </div>

                    <div>
                        <h2 className={cx('mg')}>Chỉnh sửa thông tin</h2>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%', },
                                display: 'flex', flexDirection: 'column'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField sx={{}} id="outlined-basic" label="Họ và tên" variant="outlined" value={'Lê hoài thanh'} />
                            <TextField sx={{}} id="outlined-basic" label="story" variant="outlined" />
                            <TextField sx={{}} id="outlined-basic" label="website" variant="outlined" />
                        </Box>

                    </div>
                </div>


                <DialogActions>
                    <Button onClick={handleClose}>Thoát</Button>
                    <Button variant="contained" onClick={handleClose} autoFocus>
                        Lưu thông tin
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}