import { ReactNode } from 'react';
import './Card.scss'

interface CardProps {
    title?: string;
    subtitle?: string;
    width?: string;
    children?: ReactNode
}

function Card(cardProps: CardProps) {
    return (
        <div className='card' style={{ width: cardProps.width}}>
            <div className='cardHeader'>
                <h1>{cardProps.title}</h1>
                {cardProps.subtitle && (
                    <span>{cardProps.subtitle}</span>
                )}
            </div>
            <div className='cardSection'>
                {cardProps.children}
            </div>
        </div>
    )
}

export default Card;