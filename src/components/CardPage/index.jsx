import React from 'react';
import Card from "../Card";
import s from './CardPage.module.scss';

const CardPage = () => {
    // Я захардкодил этот объект как имитацию того, что он пришёл с сервера
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

    const handleClick = () => {
        console.log('Click from CardPage');
    }

    return (
        <div className={s.cardPage}>
            <Card filling='c фуа-гра' extra={extraItems.withFuagra} handleClick={handleClick}/>
            {/*<Card filling='c рыбой' extra={extraItems.withFish}/>*/}
            {/*<Card filling='c курицей' extra={extraItems.withChicken}/>*/}
        </div>
    )
}

export default CardPage;