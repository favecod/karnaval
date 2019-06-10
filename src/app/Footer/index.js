import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
// Icon
import { Rss, ImageAlt, LeftArrowAlt, Sun } from 'styled-icons/boxicons-regular'
import { PlayCircleOutline } from 'styled-icons/material'
import { Directions } from 'styled-icons/fa-solid'
import { Instagram, Telegram, Linkedin } from 'styled-icons/boxicons-logos'

import styles from './styles'
import classes from 'Root/styles/main'
import Logo from './Logo'
import Section from './Section'
import API from 'Root/api'

const servicesDefault = [
    {
        icon: <Rss size='25' />,
    },
    {
        icon: <PlayCircleOutline size='25' />,
    },
    {
        icon: <ImageAlt size='25' />,
    },
    {
        icon: <Sun size='25' />,
    },
    {
        icon: <Directions size='25' />,
    },


]

const logos = [
    {
        icon: <Instagram size='30' />,
        link: ''
    },
    {
        icon: <Telegram size='30' />,
        link: ''
    },
    {
        icon: <Linkedin size='30' />,
        link: ''
    },
]
const Footer = () => {
    const [lists, setLists] = React.useState(null)
    const [services, setServices] = React.useState(null)
    React.useEffect(() => {
        if(!lists) {
            let l = []
            for(let i = 0;i <= 6;i++) {
                API.footer.titles(i).then(res => {
                    l[i] = res.data
                    if(l.length > 6) {
                        setLists([...l])
                    }
                })
            }
        }
        if (!services) {
            let s = servicesDefault
            for (let i = 0; i <= 4; i++) {
                API.service.titles(i).then(res => {
                    s[i] = {
                        ...s[i],
                        title: res.data
                    }
                    if (s.length > 4) {
                        setServices([...s])
                    }
                })
            }
        }
    })
    return (
        <footer
            className={classnames(styles.footer, classes.flexColCenter)}
        >
            <div className={styles.container}>
                <Section>
                    <Logo />
                    <ul className={styles.lists}>
                        {lists ? lists.map(list => (
                            <li
                                key={`${Math.random() * 100000000}`}
                                className={styles.li}
                            >
                                {list}
                            </li>
                        )) :
                        <Skeleton count={7}/>}
                    </ul>
                </Section>
                <Section border={true}>
                    <div className={styles.header}>سرویس های کارناوال</div>
                    <ul className={styles.lists}>
                        {services ? services.map(service => (
                            <li
                                key={`${Math.random() * 100000000}`}
                                className={styles.link}
                            >
                                {service.icon}
                                <span className={styles.linkTitle}>
                                    {service.title}
                                </span>
                            </li>
                        )):
                        <Skeleton count={5} />}
                    </ul>
                </Section>
                <Section border={true}>
                    <div className={styles.header}>همراه ما باشید</div>
                    <ul className={styles.logs}>
                        {logos.map(logo => (
                            <li
                                key={`${Math.random() * 100000000}`}
                                className={styles.link}
                            >
                                {logo.icon}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.header}>عضویت در خبرنامه</div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder="آدرس ایمیل"
                            className={styles.input}
                        />
                        <button
                            className={classnames(
                                styles.inputButton,
                                classes.flexCenter
                            )}
                        >
                            <LeftArrowAlt size="40" />
                        </button>
                    </div>
                </Section>
            </div>
            <small className={styles.detail}>
                کلیه حقوق مادی و معنوی برای کارناوال محفوظ است. استفاده از
                مطالب و تصاویر سایت تنها در صورت پذیرش شرایط و ضوابط
                کارناوال امکان پذیر است.
            </small>
        </footer>
    )
}



export default Footer