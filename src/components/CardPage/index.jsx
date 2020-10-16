import React from 'react';
import s from './CardPage.module.scss';
import CardItem from "../CardItem";

const CardPage = () => {
    // Я захардкодил эти объекты как имитацию того, что они пришли с сервера
    const extraItems = {
        withFuagra: {
            portions: {
                count: 10,
                value: 'порций'
            },
            gift: {
                count: 0,
                value: 'мышь в подарок'
            },
            happyClient: null
        },
        withFish: {
            portions: {
                count: 40,
                value: 'порций'
            },
            gift: {
                count: 2,
                value: 'мыши в подарок'
            },
            happyClient: null
        },
        withChicken: {
            portions: {
                count: 100,
                value: 'порций'
            },
            gift: {
                count: 5,
                value: 'мышей в подарок'
            },
            happyClient: {
                text: 'заказчик доволен'
            }
        }
    }
    const descriptions = {
        fuagra: 'Печень утки разварная с артишоками',
        fish: 'Головы щучьи с чесноком да свежайшая сёмгушка',
        chicken: 'Филе из цыплят с трюфелями в бульоне',
    }


    return (
        <div className={s.cardPage}>
            <CardItem filling='с фуа-гра' size='0,5' extra={extraItems.withFuagra} description={descriptions.fuagra} disabled={false}/>
            <CardItem filling='с рыбой' size='2' extra={extraItems.withFish} description={descriptions.fish}/>
            <CardItem filling='с курицей' size='5' extra={extraItems.withChicken} description={descriptions.chicken}/>
        </div>
    )
}

export default CardPage;