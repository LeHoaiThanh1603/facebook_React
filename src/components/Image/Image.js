import classNames from "classnames";
import { forwardRef } from "react";
import style from './image.module.scss'

const Images = forwardRef(({
    src,
    alt,
    className,
    width,
    height,
    badge,
    online,
    story,
    ...props
}, ref) => {


    return (
        <span className={classNames(style.wrapper)}>
            <div className={classNames(style.avatar)}>
                <div className={classNames(story ? style.story : '')}></div>

                <img
                    ref={ref}
                    width={width}
                    height={height}
                    src={src}
                    alt={alt}
                    className={classNames(style.image, className)}
                    {...props}

                />
            </div>
            {badge ?

                <div className={classNames(style.badge)}>
                    {badge}
                </div> : undefined}


            {online ? <span className={classNames(style.online)}><span></span></span> : undefined}
        </span>

    );
})

export default Images;