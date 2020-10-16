import React from 'react';
import s from "./BottomText.module.scss";
import cl from 'classnames';

const BottomText = (props) => {
    const activeStateHandler = () => {
        props.setActiveState(!props.activeState);
        props.setSelectDone(!props.selectDone);
        props.changeBottomText();
    }

    return (
        <>
            {props.description
                ? <p className={s.bottomText}>{props.description}</p>
                : props.disabled
                    ? <p className={cl(s.bottomText, s.bottomTextDisabled)}>{props.disabledText}</p>
                    : <p className={s.bottomText}>
                    Чего сидишь? Порадуй котэ, <span className={s.buyLink} onClick={activeStateHandler}>купи</span>
                </p>
            }1
        </>
    )
}

export default BottomText;