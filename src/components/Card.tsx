import React,{FC, PropsWithChildren} from 'react';

export enum CardVariant{
    outlined = "outlined",
    primary = "primary"
}


interface CardProps extends  PropsWithChildren{
    width?:string;
    height?:string;
    variant:CardVariant
}

const Card:FC<CardProps> = ({width,height,children,variant}) => {
    return (
        <div style={{width,height,border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background:variant === CardVariant.primary ? 'lightgray': ''     
        }}>
            {children}
        </div>
    );
};

export default Card;