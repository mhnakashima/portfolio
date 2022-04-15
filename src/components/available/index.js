import './style.scss';

export const AvailableComponent = ({status}) => {
    return(
        <span className="available flex items-center">
            <span className='ttu f6 b'>Avaiable for freelas :D</span><span className={"ml3 bullet " + (status)}></span>
        </span>
    )
}