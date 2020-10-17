import React, {useState} from 'react';
import s from './Card.module.scss';
import Filling from "./Filling";
import CardHeader from "./CardHeader";
import cl from 'classnames';
import Extra from "./Extra";
import Size from "./Size";

const Card = (props) => {
    const [catDoesntLike, setCatDoesntLike] = useState(false);

    const clickHandler = () => {
        props.setActiveState(!props.activeState);
    }

    const onMouseLeaveHandler = () => {
        if (props.activeState) {
            props.setSelectDone(true);
            props.changeBottomText(false);
        } else {
            props.setSelectDone(false);
            props.changeBottomText(true);
        }

        if (props.selectDone) {
            setCatDoesntLike(false)
        }
    }

    const onMouseEnterHandler = () => {
        if (props.selectDone) {
            setCatDoesntLike(true);
        }
    }

    return (
        <div className={s.cardInner}>
            <div onMouseLeave={onMouseLeaveHandler} onMouseEnter={onMouseEnterHandler}
                 className={cl(s.cardBody, {[s.active]: props.selectDone}, {[s.disabled]: props.disabled})}
                 onClick={props.disabled ? null : clickHandler}>

                {props.disabled && <div className={cl(s.disabledCover, s.disabledCoverBody)}/>}
                {/*<div className={s.cardTop}>*/}
                {/*    {props.disabled && <div className={cl(s.disabledCover, s.disabledCoverTop)} />}*/}
                {/*    <div className={s.container}>*/}
                {/*        <p className={s.cardTop_title}>*/}
                {/*            {catDoesntLike ? <span className={s.catDontLike}>Котэ недоволен?</span> : 'Сказочное заморское яство'}*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={s.container}>*/}
                {/*    <CardHeader name={props.name}/>*/}
                {/*    <Filling filling={props.filling} />*/}
                {/*    <Extra extra={props.extra} />*/}
                {/*    <Size size={props.size}/>*/}
                {/*</div>*/}
            </div>
            <div className={s.corner}/>
            <div className={s.corner2}/>
        </div>
    )
}

export default Card;