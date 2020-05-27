import React from "react";
import {generateTaskPrime} from "../../helpers/generateTaskPrime";
import {GameYesNo} from "../../components/GameYesNo/GameYesNo";
import {primeGameDescription} from "../../constants/constants";

export class PrimeGame extends React.Component {
    render(){
        return(
            <GameYesNo taskGenerator={generateTaskPrime} gameDescription={primeGameDescription} />
        );
    };

}

