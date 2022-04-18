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
    const initExperiences = {
        image: 'https://via.placeholder.com/150',
        title: 'Front end engineer - take',
        subtitle: 'may. de 2020 (Currently)',
        text: 'Front-End developer, creating Inteligent Contacts using AI to help companies to achieve their goals and fill gaps between clients.<br><br>Technologies: HTML, CSS, Sass, Less, NPM, Git, Javascript, Typescript, Angular, AngularJS, Stencil, ReactJS, Vue, Jasmine.'
    }

    const initFormation = {
        image: 'https://via.placeholder.com/150',
        title: 'Experiência 01',
        subtitle: 'Subtítulo 01'
    }

    const initCourses = {
        image: 'https://via.placeholder.com/150',
        title: 'Experiência 01',
        subtitle: 'Subtítulo 01'
    }

    const [language, setLanguage] = useState('PT');
    const [experiences, setExperiences] = useState([
        initExperiences, initExperiences, initExperiences, initExperiences
    ]);
    const [about, setAbout] = useState('');
    const [formations, setFormation] = useState([
        initFormation
    ]);
    const [courses, setCourses] = useState([
        initCourses, initCourses, initCourses
    ]);

    useEffect(() => {
        setAbout('Olá, sou Michael Nakashima, Front-End Developer, Maranhese no sangue e Mineiro de coração, comecei minha carreira desenvolvendo aplicações no já distante Delphi 6 e naquela época já sabia que não era minha vibe.<br><br>Desenvolvendo aplicacões utilizando Flash / ActionScript para uma empresa pioneira no ramo de Ensino a Distância, foi a porta de entrada para a área de Front End, onde atuei à partir de 2012 convertendo cursos em Flash para HTML / CSS / Javascript, desde então em uma eterna lua de mel com essas tecnologias.<br><br>Trabalhei em uma gigante do ramo de Tecnologia, incialmente como Front End, desenvolvendo aplicativos, sistemas e interfaces para o maior portal de empreendedorismo do Brasil, fui Scrum Master de duas Squads, usando o Scrum para desenvolver soluções e aplicar o ágil, disseminando a cultura e premissas do mesmo.<br><br>Atualmente como Front End, sou responsável por desenvolver uma plataforma intuitiva e poderosa para o desenvolvimento de contatos inteligentes (chatbots), onde grandes empresas de vários ramos automatizam e facilitam a conexão entre marca e usuário.');
    })

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