import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TypeAnimation from 'react-type-animation';
import { motion } from 'framer-motion';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share'
import LanguageIcon from '@mui/icons-material/Language';
import { isMobile } from 'react-device-detect';


const InfoSites = [
  {
    name: 'Hacker News',
    title: 'Clone Hacker News site',
    description: 'Stack: React, Redux, recursive components, comment tree',
    url: 'https://kulinec05.github.io/avito/',
    urlG: 'https://github.com/kulinec05/avito'
  }
  ,
  {
    name: 'Cafes',
    title: 'Cafes of Mahachkala city',
    description: 'Stack: React, Firebase, Bootstrap, auth realtime',
    url: 'https://kulinec05.github.io/Cafe',
    urlG: 'https://github.com/kulinec05/Cafe'
  }
  ,
  {
    name: 'Google Book`s',
    title: 'Google Book`s Api Search',
    description: 'Stack: React, Redux, Typescript',
    url: 'https://kulinec05.github.io/bookSearch/',
    urlG: 'https://github.com/kulinec05/bookSearch'
  },
  {
    name: 'ToTur',
    title: 'Tours order site',
    description: 'Stack: React',
    url: 'https://kulinec05.github.io/totur',
    urlG: 'https://github.com/kulinec05/totur'
  },
  {
    name: 'TodoList',
    title: 'TodoList',
    description: 'Stack: React',
    urlG: 'https://github.com/kulinec05/test-todolist-dragndrop'
  }

]

const OpenPage = (page) => {
  window.open(page, "_blank")
}

const actions = [
  { icon: <PhoneIcon />, name: 'Phone', IconFunc: OpenPage('tel:+79298786271') },
  { icon: <EmailIcon />, name: 'Email', IconFunc: OpenPage('mailto:kulinec05@gmail.com') },
  { icon: <TelegramIcon />, name: 'Telegram', IconFunc: OpenPage('https://t.me/DalDalDomoiUshel') },
  { icon: <WhatsAppIcon />, name: 'WhatsApp', IconFunc: OpenPage('https://wa.me/79298786271') },
  { icon: <LanguageIcon />, name: 'Langauges', IconFunc: () => console.log('lang') },
];


const langauges = {
  RU: {
    WORKS: 'МОИ РАБОТЫ',
    LINKS: 'ССЫЛКИ',
    CV: 'СКАЧАТЬ CV',
    WELCOME: 'Здраствуйте!',
    NAME: 'Меня зовут Шамиль',
    INTRO: 'Я являюсь FronEnd Разработчиком',
    WELCOMEs: 'Добро пожаловать в портфолио',
    UNEED: 'Представляю вам свои проекты',
    OPEN: 'Нажмите или свайпните'
  },
  EN: {
    WORKS: 'MY OWRKS',
    LINKS: 'LINKS',
    CV: 'CV',
    WELCOME: 'Hello',
    NAME: 'My name is Shamil',
    INTRO: "I'm FrontEnd developer",
    WELCOMEs: 'Welcome to my portfolio',
    UNEED: 'Check out my projects',
    OPEN: 'Tap or swipe'
  }
}
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 10,
      duration: 1,
      delayChildren: 11,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { y: 20 },
  visible: {
    y: 0
  }
};

const App = () => {
  const [lang, setLang] = useState('RU');
  const langCh = langauges[lang]

  const ChangeLang = () => {
    setLang(lang === 'RU' ? 'EN' : 'RU')
  }

  return (
    <div className='main-card'>
      <div>
        <Box sx={{ height: 330, flexGrow: 1, position: 'fixed', top: 16, right: 16 }}>
          <Backdrop />
          <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            sx={{ top: 16, right: 16 }}
            icon={<SpeedDialIcon />}
            direction='down'
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}

                onClick={action.name === 'Langauge' ? action.IconFunc : ChangeLang}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
      <div className='title'>
        <TypeAnimation
          cursor={false}
          sequence={[langCh.WELCOMEs, 100]}
          wrapper="h1" />
        <TypeAnimation
          cursor={false}
          sequence={[2000, langCh.NAME, 100]}
          wrapper="h1" />
        <TypeAnimation
          cursor={false}
          sequence={[3300, langCh.INTRO, 1000]}
          wrapper="h1" />
      </div>
      {isMobile ?
        <div
          className='swipe'>
          {langCh.OPEN}
        </div>
        :
        null}
      <motion.ul className='cards'
        variants={container}
        animate="visible">
        {InfoSites.map((value, index) => {
          return (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={
                <Popover id={`popover-positioned-${index}`}>
                  <Popover.Header as="h3">{value.title}</Popover.Header>
                  <Popover.Body>
                    {value.description}
                  </Popover.Body>
                </Popover>}>
              <motion.li className='card'
                drag={isMobile ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                variants={item}
                initial={{ opacity: 0.5, x: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                whileTap={!isMobile ? {
                  scale: 0.8,
                  opacity: 0.5,
                  rotate: -90,
                  borderRadius: "100%"
                } : {
                  scale: 0.9,
                  x: 20
                }}
                onDragEnd={() => {
                  if (isMobile) {
                    OpenPage(value.urlG, "_blank")
                  }
                  else {
                    console.log('drag')
                  }
                }}
                onClick={() => {
                  if (!isMobile) {
                    OpenPage(value.urlG, "_blank")
                  }
                  else {
                    console.log('ok')
                  }
                }}>{value.name}
              </motion.li>
            </OverlayTrigger>)
        })}
      </motion.ul>
      <TypeAnimation
        className='under-title'
        cursor={false}
        sequence={[' ', 8000, langCh.UNEED]}
        wrapper="h2" />
    </div>
  );
}

export default App;
