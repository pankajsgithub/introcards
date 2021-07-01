
import Card from './Card';
import './card.scss'

const CardContainer = ({ weather }) => {
    return (
        <div className='card-container'>
            {weather.map((card, i) =>
                <Card card={card} />
            )}

        </div>
    )
}

export default CardContainer