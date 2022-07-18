import React, { useState } from 'react';
import { Button } from 'antd';
import MenuContent from './MenuContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faPager,
  faBriefcase,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';

const menuContent = [
  {
    key: 1,
    title: 'About',
    description: 'To know more about me',
    icon: <FontAwesomeIcon size="lg" color="dodgerblue" icon={faCircleInfo} />,
    href: '#about',
    titleColor: 'dodgerblue'
  },
  {
    key: 2,
    title: 'Projects',
    description: 'To see my projects',
    icon: <FontAwesomeIcon size="lg" color="#8ac926" icon={faPager} />,
    href: '#projects',
    titleColor: '#8ac926'
  },
  {
    key: 3,
    title: 'Work & Experience',
    description: 'Here you can see my work and experience',
    icon: <FontAwesomeIcon size="lg" color="#6a4c93" icon={faBriefcase} />,
    href: '#work',
    titleColor: '#6a4c93'
  },
  {
    key: 4,
    title: 'Skills',
    description: 'Technologies I have worked with',
    icon: <FontAwesomeIcon size="lg" color="#9381ff" icon={faBriefcase} />,
    href: '#work',
    titleColor: '#9381ff'
  },
  {
    key: 5,
    title: 'Contacts',
    description: 'my contact details',
    icon: <FontAwesomeIcon size="lg" color="#fe5d26" icon={faAddressBook} />,
    href: '#contacts',
    titleColor: '#fe5d26'
  }
];

function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navigation-menu" onMouseLeave={() => setOpenMenu(false)}>
      <h2>ASHISH</h2>
      <nav className="menu">
        <Button style={{ color: 'white' }} type="text" onMouseOver={() => setOpenMenu(true)}>
          Menu
        </Button>
        {openMenu && (
          <section>
            <div className="triangle"></div>
            <div className="nav-link">
              {menuContent.map(({ key, title, description, icon, href, titleColor }) => (
                <MenuContent
                  key={key}
                  title={title}
                  description={description}
                  icon={icon}
                  href={href}
                  titleColor={titleColor}
                />
              ))}
            </div>
            <div className="profile">
              {/* <a href="#profile">
                Socials and Developer Profile Links
                <FontAwesomeIcon
                  className="arrow-icon"
                  size="xs"
                  color="black"
                  icon={faArrowRight}
                />
              </a> */}
              <MenuContent
                title="Profile"
                description=" my socials and developer profile links "
                href="#profile"
                titleColor="black"
              />
              <Button className="profile-button" type="dashed">
                Click Here
              </Button>
            </div>
          </section>
        )}
      </nav>
    </div>
  );
}

export default NavigationBar;
