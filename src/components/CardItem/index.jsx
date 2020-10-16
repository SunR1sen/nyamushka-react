import React, {useState} from 'react';
import s from "../CardPage/CardPage.module.scss";
import Card from "../Card";
import BottomText from "./BottomText";

const CardItem = (props) => {
    const [textState, setTextState] = useState(true);
    const [activeState, setActiveState] = useState(false);
    const [selectDone, setSelectDone] = useState(false);

    return (
        <div className={s.cardItem}>
            <Card filling={props.filling}
                  size={props.size}
                  extra={props.extra}
                  changeBottomText={setTextState}
                  activeState={activeState}
                  setActiveState={setActiveState}
                  selectDone={selectDone}
                  setSelectDone={setSelectDone}
                  disabled={props.disabled}
            />
            {textState
                ? <BottomText changeBottomText={() => setTextState(!textState)}
                              activeState={activeState}
                              setActiveState={setActiveState}
                              selectDone={selectDone}
                              setSelectDone={setSelectDone}
                              disabled={props.disabled}
                              disabledText={props.disabledText}
                />
                : <BottomText description={props.description}/>}
        </div>
    )
}

export default CardItem;