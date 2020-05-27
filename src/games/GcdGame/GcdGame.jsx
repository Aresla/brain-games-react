import React from "react";
import {generateTaskGcd} from "../../helpers/generateTaskGcd";
import {gcdGameDescription} from "../../constants/constants";
import {GameWithInput} from "../../components/GameWithInput/GameWithInput";

export class GcdGame extends React.Component {
    render(){
        return(
            <GameWithInput taskGenerator={generateTaskGcd} gameDescription={gcdGameDescription} />
        );
    };
}
