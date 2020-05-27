import React from 'react';
import { Typography } from 'antd';

export const WelcomeMessage = ({message}) => {
    const { Title } = Typography;
    return <Title level={2}>{message}</Title>;
};
