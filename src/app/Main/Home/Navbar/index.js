import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

const items = [
    {title: 'طبیعت گردی', icon: FILES.hill},
    {title: 'تاریخ گردی', icon: FILES.museum},
    {title: 'سازه های شهری', icon: FILES.eiffel},
    {title: 'پارک ها', icon: FILES.tree},
    {title: 'تفریح و هیجان', icon: FILES.windsurf},
    {title: 'لذت خرید', icon: FILES.supermarket},
    {title: 'فعالیت فرهنگی', icon: FILES.eyeMask},
]
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={classnames(styles.items,classes.flexRowAround)}>
                {items.map(item => (
                    <Nav key={item.title} title={item.title} icon={item.icon} />
                ))}
            </ul>
        </nav>
    )
}

const Nav = props => {
    return (
        <li className={classnames(styles.item,classes.flexColCenter)}>
            <img className={styles.image} src={props.icon} />
            <h4>{props.title}</h4>
        </li>
    )
}

export default Navbar