import React from 'react';
import { Radio } from 'antd';

export const GameSelector = ({gameList, onGameSelect}) => (
            <Radio.Group size="large" onChange={onGameSelect} defaultValue={gameList[0]} buttonStyle="solid">
                {gameList.map(game => <Radio.Button key={game} value={game}>{game}</Radio.Button>)}
            </Radio.Group>
        );
