import './style.scss';

export const LanguageComponent = ({status, onChooseLanguage}) => {
    return(
        <span className="language flex items-center pl2">
            <button className="language--button mr2" value='PT' onClick={onChooseLanguage}>PT</button>
            <span className="mr2">|</span>
            <button className="language--button" value='EN' onClick={onChooseLanguage}>EN</button>            
        </span>
    )
}