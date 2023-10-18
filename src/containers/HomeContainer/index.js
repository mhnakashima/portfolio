import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AvailableComponent } from "../../components/available";
import { LanguageComponent } from "../../components/language";
import { AboutContainer } from "../AboutContainer";
import { CoursesContainer } from "../CoursesContainer";
import { ExperienceContainer } from "../ExperienceContainer";
import { FormationContainer } from "../FormationContainer";
import { MenuContainer } from "../MenuContainer";

export const HomeContainer = () => {
    const initExperiences = [
        {
            image: './images/ciandt.jpg',
            title: 'Software Engineer - CIANDT',
            subtitle: 'may. de 2020 (Currently)',
            text: 'Front-End developer, creating Inteligent Contacts using AI to help companies to achieve their goals and fill gaps between clients.<br><br>Technologies: HTML, CSS, Sass, Less, NPM, Git, Javascript, Typescript, Angular, AngularJS, Stencil, ReactJS, Vue, Jasmine.'
        },
        {
            image: './images/take-blip.svg',
            title: 'Frontend Engineer - BLIP',
            subtitle: 'may. de 2020 (Currently)',
            text: 'Front-End developer, creating Inteligent Contacts using AI to help companies to achieve their goals and fill gaps between clients.<br><br>Technologies: HTML, CSS, Sass, Less, NPM, Git, Javascript, Typescript, Angular, AngularJS, Stencil, ReactJS, Vue, Jasmine.'
        },
        {
            image: './images/totvs.jpg',
            title: 'System Analyst - TOTVS',
            subtitle: 'may. de 2020 (Currently)',
            text: 'Front-End developer, creating Inteligent Contacts using AI to help companies to achieve their goals and fill gaps between clients.<br><br>Technologies: HTML, CSS, Sass, Less, NPM, Git, Javascript, Typescript, Angular, AngularJS, Stencil, ReactJS, Vue, Jasmine.'
        },
        {
            image: './images/webaula.jpg',
            title: 'Front-End Developer - WEBAULA',
            subtitle: 'may. de 2020 (Currently)',
            text: 'Front-End developer, creating Inteligent Contacts using AI to help companies to achieve their goals and fill gaps between clients.<br><br>Technologies: HTML, CSS, Sass, Less, NPM, Git, Javascript, Typescript, Angular, AngularJS, Stencil, ReactJS, Vue, Jasmine.'
        }
    ]

    const initFormation = {
        image: './globals/images/',
        title: 'Experiência 01',
        subtitle: 'Subtítulo 01'
    }

    const initCourses = {
        image: './globals/images/',
        title: 'Experiência 01',
        subtitle: 'Subtítulo 01'
    }

    const [language, setLanguage] = useState('PT');
    const [experiences, setExperiences] = useState(initExperiences);
    const [about, setAbout] = useState('');
    const [formations, setFormation] = useState([
        initFormation
    ]);
    const [courses, setCourses] = useState([
        initCourses, initCourses, initCourses
    ]);

    useEffect(() => {
        setAbout(`I am a career Front End Developer who has participated in projects for online education at a leading company in the field, working with companies such as Sebrae, Oi, Avon, Sky, to develop educational solutions, provide user interfaces, and improve user experience.
        I have also worked for a technology giant, initially as a Front End Developer, creating applications, systems, and interfaces for Brazil's largest entrepreneurship portal. I have served as a Scrum Master for two squads, utilizing agile methodologies to optimize the development process.
        Later on, I was responsible for developing and maintaining an intuitive and powerful platform for building intelligent contacts (chatbots), enabling companies to automate and streamline brand-user interactions.
        Currently, I work in teams where I train new Front End developers, while also developing Mobile and Web applications for industries, including international clients.`);
    }, [])

    function onChooseLanguage(e) {
        if (!e.target.value) {
            return;
        }
        setLanguage(e.target.value);
    }

    return (
        <main className="site">
            <aside className="sidebar">
                <MenuContainer />
            </aside>
            <section className="container-site">
                <div className="flex container-available items-center">
                    <AvailableComponent status="noDisponible"></AvailableComponent>
                    <LanguageComponent language={language} onChooseLanguage={onChooseLanguage}></LanguageComponent>
                </div>
                <div className="container">
                    <AboutContainer about={about}></AboutContainer>
                </div>
                <div className="container">
                    <ExperienceContainer experiences={experiences}></ExperienceContainer>
                </div>
                <div className="container">
                    <FormationContainer formations={formations}></FormationContainer>
                </div>
                <div className="container">
                    <CoursesContainer courses={courses}></CoursesContainer>
                </div>
            </section>
        </main>
    )
}