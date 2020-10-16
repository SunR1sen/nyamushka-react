import React from 'react';
import s from "./BottomText.module.scss";

const BottomText = (props) => {
    return (
        <>
            {props.description
                ? <p className={s.bottomText}>{props.description}</p>
                : <p className={s.bottomText}>Чего сидишь? Порадуй котэ, <span className={s.buyLink}>купи</span></p>
            }
        </>
    )
}

export default BottomText;