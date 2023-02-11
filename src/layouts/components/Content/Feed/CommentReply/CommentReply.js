
import classNames from "classnames/bind";
import Images from "../../../../../components/Image/Image";
import styles from './CommentReply.module.scss';


import { Button, ClickAwayListener, Dialog, DialogActions, DialogContent, Grid, Tooltip } from "@mui/material";
import { createRef, useEffect, useState } from "react";
import { MdMoreHoriz } from 'react-icons/md';
import BoderBottom from '../../../../../components/BoderBottom/BoderBottom';

const cx = classNames.bind(styles)

function CommentReply() {

    const inputRef = createRef({})
    const [comment, setComment] = useState('');
    const [cursorPosition, setCursorPosition] = useState();
    const [onDialogDel, setOnDialogDel] = useState(false)
    const [openTool, setOpenTool] = useState(false)

    const pickEmoji = ({ emoji }, e) => {
        const ref = inputRef.current;
        ref.focus();
        const start = comment.substring(e, ref.selectionStart);
        const end = comment.substring(ref.selectionStart);
        const text = start + emoji + end;
        setComment(text);
        setCursorPosition(start.length + emoji.length);
    }

    // useEffect(() => {
    //     inputRef.current.style.height = "0";
    //     inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    // }, [comment]);

    const handleTooltipClose = () => {
        setOpenTool(false);
    };

    const handleTooltipOpen = () => {
        setOpenTool(true);
    };

    const handlecloseDialogDel = () => {
        setOnDialogDel(false)
    }

    return (
        <div className={cx('comment__content')}>
            <Images width='30' height='30' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX_JfRm7&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfD9MCj7D_JaqnVMM3Dx6LqVeugWI5_8acJp3znjoo5xxg&oe=63BE85E3' />
            <div className={cx('comment__content__text')}>
                <div>
                    <div className={cx('comment__content__text--title')}>
                        <h6>Lê Hoài Thanh</h6>
                        <div>Sói ca quá đi hahaahahahahahahahah</div>
                    </div>
                    <div className={cx('comment__content__text--more')}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <ClickAwayListener onClickAway={handleTooltipClose}>
                                    <div>
                                        <Tooltip
                                            PopperProps={{
                                                disablePortal: true,
                                            }}
                                            onClose={handleTooltipClose}
                                            open={openTool}
                                            disableFocusListener
                                            disableHoverListener
                                            disableTouchListener
                                            title={
                                                <ul className={cx('action')} onClick={() => console.log(1111)}>
                                                    <li onClick={() => {
                                                        setOnDialogDel(true)
                                                        setOpenTool(false)
                                                    }}>Xóa</li>
                                                    <li>chỉnh sửa</li>
                                                </ul>
                                            }
                                        >
                                            <div className={cx('comment__content__text--more--icon')} onClick={handleTooltipOpen}>
                                                <MdMoreHoriz />
                                            </div>
                                        </Tooltip>
                                    </div>
                                </ClickAwayListener>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={cx('comment__content__text--interactive')}>
                    <span>Thích</span>
                    <span>Phản hồi</span>
                    <span>1 phút</span>
                </div>

                <div className={cx('comment__content__text--reply')}>
                    <Images width='25' height='25' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX_JfRm7&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfD9MCj7D_JaqnVMM3Dx6LqVeugWI5_8acJp3znjoo5xxg&oe=63BE85E3' />

                    <textarea
                        placeholder="Viết bình luận..."
                        className={cx('comment__content__text__input--reply')}
                    // ref={inputRef}
                    // value={comment}
                    // onChange={e => setComment(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <Dialog

                    open={onDialogDel}
                    onClose={handlecloseDialogDel}
                >
                    <DialogContent className={cx('modalDel')}>
                        <h5 className={cx('modalDel__title')}>Xóa Bình luận?</h5>
                        <BoderBottom />
                        <p>Bạn chắc chắn muốn xóa bình luận này không?</p>
                    </DialogContent>
                    <DialogActions className={cx('modalDel__action')}>
                        <Button variant="text" onClick={handlecloseDialogDel}>Hủy</Button>
                        <Button variant="contained" onClick={handlecloseDialogDel} autoFocus>
                            Xóa
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


        </div>

    );
}

export default CommentReply;