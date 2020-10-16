import React from 'react';
import s from "./CardHeader.module.scss";

const CardHeader = ({children}) => {
    return (
        <h3 className={s.cardHeader}>{children}</h3>
    )
}

export default CardHeader;