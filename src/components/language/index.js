import './style.scss';

export const LanguageComponent = ({ language, onChooseLanguage }) => {
    return (
        <span className="language flex items-center pl2">
            <button className={`language--button mr2` + (language === 'PT' ? ' active' : '')} value='PT' onClick={onChooseLanguage}>PT</button>
            <span className="mr2">|</span>
            <button className={`language--button` + (language === 'EN' ? ' active' : '')} value='EN' onClick={onChooseLanguage}>EN</button>
        </span >
    )
}