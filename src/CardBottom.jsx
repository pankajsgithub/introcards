
const CardBottom = ({ cardbottom }) => {
    return (
        <div className='btm-text'>
            {cardbottom.map((text, i) =>
                <section className='section-text'>
                    <span style={{ color: `${text.color}` }}>{text.day}</span>
                    <span style={{ color: `${text.color}` }}>{`${text.temprange} C`}</span>
                </section>)
            }
        </div>
    )
}

export default CardBottom