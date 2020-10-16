import React, {useState} from 'react';
import s from "../CardPage/CardPage.module.scss";
import Card from "../Card";
import BottomText from "./BottomText";

const CardItem = (props) => {
    const [textState, setTextState] = useState(true)
    return (
        <div className={s.cardItem}>
            <Card filling={props.filling}
                  size={props.size}
                  extra={props.extra}
                  changeBottomText={() => setTextState(!textState)}/>
            {textState
                ? <BottomText />
                : <BottomText description={props.description}/>}
        </div>
    )
}

export default CardItem;