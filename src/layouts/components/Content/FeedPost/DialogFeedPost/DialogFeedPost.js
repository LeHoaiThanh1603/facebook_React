import { useEffect, createRef, useRef, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import classNames from 'classnames/bind';
import EmojiPicker from 'emoji-picker-react';
import * as React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { HiLockClosed } from 'react-icons/hi';
import { RiEmotionHappyLine } from 'react-icons/ri';
import BoderBottom from '../../../../../components/BoderBottom/BoderBottom';
import Images from '../../../../../components/Image/Image';
import styles from './DialogFeedPost.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { RenderIconUpload } from '../../../Icon/RenderIcon';
import Stack from '@mui/material/Stack';
const cx = classNames.bind(styles)


function DialogFeedPost({ openDialog, closeDialog }) {

    const [selectedImage, setSelectedImage] = useState();
    const inputRef = createRef({})
    console.log(inputRef)
    const [message, setMessage] = useState('');
    const [cursorPosition, setCursorPosition] = useState();

    const pickEmoji = ({ emoji }, e) => {
        const ref = inputRef.current;
        ref.focus();
        const start = message.substring(e, ref.selectionStart);
        const end = message.substring(ref.selectionStart);
        const text = start + emoji + end;
        setMessage(text);
        setCursorPosition(start.length + emoji.length);
    }


    // useEffect(() => {

    //     inputRef.current.selectionEnd = cursorPosition
    // }, [cursorPosition])


    const handleClose = () => {
        closeDialog(false);
    };
    var configEmoji = {
        showPreview: false
    }

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (

        <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className={cx('wrapper')}>
                <h2>Tạo bài viết</h2>
                <BoderBottom />
                <div className={cx('post-wrap')}>
                    <div className={cx('user')}>
                        <Images width='40' height='40' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX9iCzhk&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCvBdEP2Oq5Ib_xnvxHppIZXA3H2_XEuHmo_rg3q9wQqg&oe=63BE85E3' />
                        <div className={cx('user__info')} >
                            <div className={cx('user__title')}>Lê Hoài Thanh</div>
                            <div className={cx('user__public')}>
                                <HiLockClosed />
                                Chỉ mình tôi
                                <AiOutlineCaretDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <textarea ref={inputRef} value={message} onChange={e => setMessage(e.target.value)} placeholder={`Thanh ơi, bạn đang nghĩ gì thế?`} className={cx('content__input')} />

                    <span >
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div className={cx('content__emojiIcon')} >
                                    <div variant="contained" {...bindTrigger(popupState)}>
                                        <RiEmotionHappyLine />
                                    </div>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <EmojiPicker
                                            previewConfig={configEmoji}
                                            skinTonesDisabled={true}
                                            onEmojiClick={pickEmoji}
                                            height={320}
                                            width={310}
                                            size="20"
                                        />
                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                    </span>
                    <div className={cx('content__upload')}>
                        <input className={cx('custom-file-input')} type="file" onChange={imageChange} />
                        {/* <span className={cx('content__uploadIcon')}><RenderIconUpload /></span> */}
                        {selectedImage && (
                            <div style={styles.preview}>
                                <div onClick={removeSelectedImage} className={cx('test')} style={styles.delete}>
                                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </div>
                                <img
                                    className={cx('imagePreview')}
                                    src={URL.createObjectURL(selectedImage)}
                                    style={styles.image}
                                    alt="Thumb"
                                />

                            </div>

                        )}
                    </div>
                </div>
                <div className={cx('footer')}>
                    <Stack spacing={2} direction="row">
                        <Button sx={{ width: '100%', marginTop: '20px' }} variant="contained">Đăng</Button>
                    </Stack>
                </div>

            </div>
        </Dialog>
    );
}

export default DialogFeedPost;