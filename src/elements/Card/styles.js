import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    card: {
        margin: '1rem .5rem',
        borderRadius: '.75rem',
        boxShadow: CONST.styles.boxShadow,
        width: '14rem !important',
        transition: 'all ease .25s',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all ease .25s',
            button: {
                color: CONST.colors.white,
                background: CONST.colors.green,
                border: `1px solid ${CONST.colors.green}`,
            }
        }
    },
    imageCard: {
        borderRadius: '.75rem .75rem 0 0',
        width: '100%',
        height: '10rem',
        alignItems: 'flex-end'
    },
    imageTitle: {
        color: 'white',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,.95))',
        display: 'flex',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%',
    },
    title: {
        padding: '.3rem  .5rem',
        width: '70%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    content: {
        padding: '0 .5rem .5rem'
    },
    button: {
        fontSize: '.625rem',
        border: `1px solid ${CONST.colors.muted}`,
        color: CONST.colors.muted,
        padding: '.2rem .4rem .2rem .1rem !important',
        '&:hover': {
            color: CONST.colors.white,
            background: CONST.colors.green,
            border: `1px solid ${CONST.colors.green}`,
            cursor: 'pointer'
        }
    },
    arrowIcon: {
        fontFamily: 'Inter',
        margin: '0 .2rem 0 0',
        transform: 'rotate(180deg)'
    },
    dollarIcon: {
        width: '1rem'
    },
    clockIcon: {
        width: '1.3rem'
    },
    text: {
        display: 'flex',
        fontSize: '.75rem',
        alignItems: 'center',
        padding: '.2rem 0'
    },
    score: {
        fontFamily: 'Inter',
        padding: '.1rem .5rem',
        background: CONST.colors.green,
        color: CONST.colors.white,
        borderRadius: '.5rem'
    },
    '@media (max-width: 768px)': {
        card: {
            width: '20rem !important'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
