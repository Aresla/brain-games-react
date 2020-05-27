import React from "react";
import {generateTaskEven} from "../../helpers/generateTaskEven";
import {evenGameDescription} from "../../constants/constants";
import {GameYesNo} from "../../components/GameYesNo/GameYesNo";


export class EvenGame extends React.Component {
    render(){
        return(
            <GameYesNo taskGenerator={generateTaskEven} gameDescription={evenGameDescription} />
        );
    };
}

