import classNames from "classnames/bind";
import styles from './Content.module.scss'
import React, { useEffect } from "react";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedPost from "./FeedPost/FeedPost";
import Feed from "./Feed/Feed";
import postApi from "../../../requestApi/postApi";

const cx = classNames.bind(styles)

function Content() {


    // useEffect(() => {
    //     const fetchPost = async () => {
    //         try {
    //             const res = await postApi.getPost();
    //             // dispatch(postAction.getPost(res));
    //             console.log(res)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchPost();
    // }, []);

    // const fetchPost = async () => {
    //     try {
    //         const res = await postApi.getPost();
    //         // dispatch(postAction.getPost(res));

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className={cx('Content')}>
            <FeedHeader />
            <FeedPost />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
        </div>
    );
}

export default Content;