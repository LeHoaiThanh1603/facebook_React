
import classNames from "classnames/bind";
import Images from "../../../../../components/Image/Image";
import styles from './Comment.module.scss';


import { Popover } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { createRef, useEffect, useState } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import CommentReply from "../CommentReply/CommentReply";

const cx = classNames.bind(styles)

function Comment() {

    const inputRef = createRef({})
    const [comment, setComment] = useState('');
    const [cursorPosition, setCursorPosition] = useState();

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
    //     // inputRef.current.selectionEnd = cursorPosition
    // }, [cursorPosition])

    useEffect(() => {
        inputRef.current.style.height = "0";
        inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }, [comment]);

    var configEmoji = {
        showPreview: false
    }


    return (
        <div className={cx('comment')}>
            <div className={cx('comment__container')}>
                <Images width='30' height='30' src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/271762393_616843892907335_4413137944434976615_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qS_1eTEbUkAX_JfRm7&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfD9MCj7D_JaqnVMM3Dx6LqVeugWI5_8acJp3znjoo5xxg&oe=63BE85E3' />
                <div className={cx('comment__action')} >

                    <textarea
                        placeholder="Viết bình luận..."
                        className={cx('comment__action--input')}
                        ref={inputRef}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />

                    <span className={cx('comment__action--emoji')}>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <div variant="contained" {...bindTrigger(popupState)}>
                                        <RiEmotionHappyLine fontSize={'22px'} />
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
                </div>
            </div>

            <CommentReply />

        </div>

    );
}

export default Comment;