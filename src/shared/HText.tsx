import React from 'react';

type Props = {
    children: React.ReactNode;
}
const HText = ({children}: Props) => {
    return (
        <h1 className="basic-3/5 font-monstserrat text-3xl font-bold">
            {children}
        </h1>
    );
};

export default HText;
