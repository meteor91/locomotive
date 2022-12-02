import React from 'react';
import { Result } from 'antd';

export const ErrorResult: React.FC = () => (
    <Result
        status="500"
        title="500"
        subTitle="Что то пошло не так, попробуйте еще раз"
    />
);
