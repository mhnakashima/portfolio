import './styles.scss';
import parse from 'html-react-parser';

export const AboutContainer = ({ about }) => {

    return (
        <div className="about">
            <h2 className='text-title ttu normal'>About</h2>
            <div className="text mt4" >
                {parse(about)}
            </div>
        </div>
    )
}