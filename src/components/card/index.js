import './style.scss';
export const CardComponent = ({information}) => {
    return(
        <div className='card'>
            <div className='card-avatar'>
                <img alt='Card description' src={information.image} />
            </div>
            <div className='card-description'>
                <h2 className='card-description-name'>
                    {information?.title}
                </h2>
                <h3 className='card-description-subtitle'>
                    {information?.subtitle}
                </h3>
                <div className='card-description-text'>
                    {information?.text}
                </div>
            </div>
        </div>
    );
}