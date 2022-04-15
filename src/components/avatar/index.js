import './style.scss';
import logo  from './../../globals/images/naka.png';

export const AvatarComponent = ({imageConfig}) => {
    return(
        <span className="avatar flex justify-center">
            <img className='avatar--image' src={logo} />
        </span>
    )
}