import './style.scss';
export const CardComponent = ({information}) => {
    return(
        <>
            <div className='card-avatar'>
                <img alt='Card description' src='{information.image}' />
            </div>
            <div className='card-description'>
                <h2 className='card-description-name'>
                    {information?.title}
                </h2>
                <p className='card-description-text'>
                    {information?.text}
                </p>
            </div>
        </>
    );
}