import React, { useState, useEffect } from 'react';
import './style.scss';
import {
    faHouse,
    faUser,
    faEnvelope,
    faTableCells,
    faServer,
    faWandMagicSparkles,
    IconDefinition,
    faComments,
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuSections: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    const handleButtonClick = (value: string) => {
        const section = document.getElementById(value);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('section');
            sections.forEach((section: HTMLElement) => {
                const top = section.offsetTop - 300;
                const height = section.offsetHeight - 300;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const icons: { [key: string]: IconDefinition } = {
        home: faHouse,
        about: faUser,
        resume:faBriefcase,
        services: faServer,
        skills: faWandMagicSparkles,
        portfolio: faTableCells,
        feedback:faComments,
        contact: faEnvelope
    };

    return (
        <div className="menuSections wow animate__fadeIn" data-wow-duration="3s">
            <ul>
                {Object.keys(icons).map((key) => (
                    <li key={key} className={activeSection === key ? 'active' : ''} onClick={() => handleButtonClick(key)}>
                        <FontAwesomeIcon icon={icons[key]} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuSections;
