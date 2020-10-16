import React from 'react';
import s from './Card.module.scss';
import Filling from "./Filling";
import CardHeader from "./CardHeader";
import Extra from "./Extra";

const Card = (props) => {


    return (
        <div className={s.cardBody}>
            <div className={s.cardTop}>
                <div className={s.container}>
                    <p className={s.cardTop_title}>Сказочное заморское яство</p>
                </div>
            </div>

            <div className={s.container}>
                <CardHeader>Нямушка</CardHeader>
                <Filling>c фуа-гра</Filling>
                <Extra>{props.extra}</Extra>
            </div>
        </div>
    )
}

export default Card;