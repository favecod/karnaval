import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    footer: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '.75rem 0 0',
        borderTop: `1px solid ${CONST.colors.lightGray}`
    },
    image: {
        width: '5rem',
        height: '5rem',
        borderRadius: '50%',
        border: '3px solid white',
        boxShadow: CONST.styles.boxShadow
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0 .3rem 0 0'
    },
    names: {
        display: 'flex',
        margin: '0 .4rem 0 0',
        borderBottom: `1px solid ${CONST.colors.gray}`
    },
    name: {
        color: CONST.colors.green
    },
    title: {
        margin: '0 0 0 .3rem '
    },
    details: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 .5rem 0 0',
        fontSize: '.825rem'
    },
    buttons: {
        display: 'flex',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${CONST.colors.gray}`,
        borderRadius: '.75rem',
        background: CONST.colors.white,
        padding: '.3rem .5rem',
        margin: '.3rem',
        cursor: 'pointer',
        fontSize: '1rem'
    },
    '@media (max-width: 768px)': {
        title: {
            display: 'none'
        },
        image: {
            width: '3rem',
            height: '3rem',
        },
        names: {
            border: 'none !important'
        },
        job: {
            display: 'none'
        },
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
