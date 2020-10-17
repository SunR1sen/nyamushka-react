import React from 'react';
import s from "./CardHeader.module.scss";

const CardHeader = ({name}) => {
    return (
        <h3 className={s.cardHeader}>{name}</h3>
    )
}

export default CardHeader;