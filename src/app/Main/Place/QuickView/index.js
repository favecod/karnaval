import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

// Icons
import { Dollar, Map, CalendarCheck } from 'styled-icons/boxicons-regular'
import { InfoCircle } from 'styled-icons/boxicons-solid'
import { Clock } from 'styled-icons/fa-regular'
import { Signal, HardHat, GasPump } from 'styled-icons/fa-solid'
import ContainerCard from 'Root/elements/ContainerCard'
import Feature from './Feature'
import Side from './Side'

const QuickView = () => {
    const grayColor = '#999'
    const generalFeatures = [
        {
            content: [
                {
                    title: 'هزینه',
                    text:
                        'ورودی هر ماشین 8,000 تومان'
                }
            ],
            icon: <Dollar size="50" color={grayColor} />
        },
        {
            content: [
                {
                    title: 'ساعت دسترسی',
                    text: 'امروز شنبه 24 ساعته'
                },
                {
                    title: 'مدت زمان پیشنهادی',
                    text: '4 تا 6 ساعت'
                }
            ],
            icon: <Clock size="50" color={grayColor} />
        },
        {
            content:[
                {
                    title: 'آدرس',
                    text:
                        'استان مازندران، جاده چالوس به تهران، 3 کیلومتری مرزن آباد'
                }
            ],
            icon: <Map size="50" color={grayColor} />
        },
    ]
    const otherFeatures = [
        {
            content: [
                {
                    title: 'بهترین فصل سفر',
                    text: 'بهار و تابستان'
                }
            ],
            icon: <CalendarCheck size="20" color={grayColor} />
        },
        {
            content: [
                {
                    title: 'آنتن موبایل',
                    text: 'دارد محدود'
                }
            ],
            icon: <Signal size="20" color={grayColor} />
        },
        {
            content: [
                {
                    title: 'نیاز به راهنمای آشنا با منطقه',
                    text: 'ندارد'
                }
            ],
            icon: <InfoCircle size="20" color={grayColor} />
        },
        {
            content: [
                {
                    title: 'پمپ بنزین',
                    text: '15.6 کیلومتر - مرزن آباد'
                }
            ],
            icon: <HardHat size="20" color={grayColor} />
        },
        {
            content: [
                {
                    title: 'پمپ گاز',
                    text: '44.8 کیلومتر - چالوس'
                }
            ],
            icon: <GasPump size="20" color={grayColor} />
        },
        {
            content: [
                {
                    title: 'سختی مسیر',
                    text: 'متوسط'
                }
            ],
            icon: <GasPump size="20" color={grayColor} />
        },
    ]
    return (
        <div className={styles.quickView}>
            <div className={styles.container}>
                <ContainerCard
                    color="lightCream"
                    className={styles.cardContainer}
                >
                    <div className={styles.frame}>
                        <div className={styles.content}>
                            <h3 className={styles.contentHeader}>
                                نگاه سریع
                            </h3>
                            <div className={styles.features}>
                                <div className={classes.m1}>
                                    {generalFeatures.map(feature => (
                                        <Feature
                                            key={`${Math.random() *
                                                100000000}`}
                                            content={feature.content}
                                            icon={feature.icon}
                                        />
                                    ))}
                                </div>
                                <div className={classes.m1}>
                                    {otherFeatures.map(feature => (
                                        <Feature
                                            key={`${Math.random() *
                                                100000000}`}
                                            content={feature.content}
                                            icon={feature.icon}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <Side />
                    </div>
                </ContainerCard>
            </div>
        </div>
    )
}


export default QuickView