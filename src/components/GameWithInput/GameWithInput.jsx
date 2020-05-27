import React from "react";
import {Typography, Input, Button} from 'antd';
import { UndoOutlined, ArrowRightOutlined } from '@ant-design/icons';

export class GameWithInput extends React.Component {
    state = {
        isAnswered: false,
        isCorrect: null,
        question: '',
        rightAnswer: null,
        isWrongFormat: false,
    };

    componentDidMount() {
        const task = this.props.taskGenerator();
        this.setState({
            rightAnswer: task.rightAnswer,
            question: task.question,
        })
    }

    handlePressEnter = (e) => {
        e.preventDefault();
        const inputValue = e.target.value;
        const parsed = parseInt(inputValue, 10);
        const isNumber = !isNaN(parsed);
        if (isNumber) {
            this.setState({
                isAnswered: true,
                isCorrect: inputValue === this.state.rightAnswer,
                isWrongFormat: false,
            });
        } else {
            this.setState({
                isWrongFormat: true,
            })
        }
    };

    handleGameRepeat = (e) => {
        e.preventDefault();
        this.setState({
            isAnswered: false,
            isCorrect: null,
        });
    };

    handleGameRestart = (e) => {
        e.preventDefault();
        const task = this.props.taskGenerator();
        this.setState({
            isAnswered: false,
            isCorrect: null,
            rightAnswer: task.rightAnswer,
            question: task.question,
        });
    };

    render(){
        const { isAnswered, isCorrect, question, isWrongFormat } = this.state;
        const { gameDescription } = this.props;
        return (
            <>
                <br />
                <br />
                <Typography.Title level={3}>{gameDescription}</Typography.Title>
                {!isAnswered && (
                    <>
                        <br />
                        <Typography.Title level={2}>{question}</Typography.Title>
                        <div>
                            <br />
                            <Input onPressEnter={(e) => this.handlePressEnter(e)} size="large" placeholder="Input here" />
                            {isWrongFormat && <Typography.Title>wrong format</Typography.Title>}
                        </div>
                    </>

                )}
                {isAnswered && (
                    <>
                        <br />
                        <Typography.Title level={2}>{`Your answer is ${isCorrect ? 'RIGHT' : 'WRONG' }`}</Typography.Title>
                        <br />
                        <br />
                        <div>
                            <Button type="primary" size='large' shape="round" icon={<UndoOutlined />} onClick={(e) => this.handleGameRepeat(e)}>ONCE AGAIN</Button>
                            <br />
                            <Button type="primary" size='large' shape="round" icon={<ArrowRightOutlined />} onClick={(e) => this.handleGameRestart(e)}>NEW ROUND</Button>
                        </div>
                    </>
                )}
            </>
        );
    };
}
