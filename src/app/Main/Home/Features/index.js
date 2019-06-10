import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

const items = [
    {
        title: 'نقد و بررسی تخصصی',
        content: 'راهنمای جامع بازدید از جاذبه‌ها و تفریحات',
        icon: FILES.feature1
    },
    {
        title: 'جستجوی هوشمند سفر',
        content: 'پیشنهاد بهترین مقاصد متناسب با علایق کاربر',
        icon: FILES.feature2
    },
    {
        title: 'تجربه و نظر کاربران',
        content: 'اشتراک گذاری دیدگاه مسافران و بازدیدکنندگان',
        icon: FILES.feature3
    }
]
const Features = () => {
    return (
        <nav className={classnames(styles.features,classes.flexCenter)}>
            <ul className={classnames(styles.items, classes.flexRowAround)}>
                {items.map(item => (
                    <Feature key={item.title} data={item} />
                ))}
            </ul>
        </nav>
    )
}

const Feature = ({data}) => {
    return (
        <li className={classnames(styles.item, classes.flexColCenter)}>
            <img height='100' className={styles.image} src={data.icon} />
            <h4>{data.title}</h4>
            <small>{data.content}</small>
        </li>
    )
}

export default Features