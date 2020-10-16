import React, {useState} from 'react';
import s from './Card.module.scss';
import Filling from "./Filling";
import CardHeader from "./CardHeader";
import cl from 'classnames';
import Extra from "./Extra";
import Size from "./Size";

const Card = (props) => {
    const [state, setState] = useState(false);

    const clickHandler = () => {
        props.changeBottomText();
        setState(!state);
    }

    return (
        <div className={cl(s.cardBody, {[s.active]: state})} onClick={clickHandler}>
            <div className={s.cardTop}>
                <div className={s.container}>
                    <p className={s.cardTop_title}>Сказочное заморское яство</p>
                </div>
            </div>

            <div className={s.container}>
                <CardHeader>Нямушка</CardHeader>
                <Filling>{props.filling}</Filling>
                <Extra>{props.extra}</Extra>
                <Size size={props.size}/>
            </div>
        </div>
    )
}

export default Card;