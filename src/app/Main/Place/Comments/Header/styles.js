import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 0 .75rem',
        borderBottom: `1px solid ${CONST.colors.lightGray}`
    },
    image: {
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        border: '3px solid white',
        boxShadow: CONST.styles.boxShadow
    },
    names: {
        margin: '0 .4rem 0 0'
    },
    title: {
        margin: '0 0 0 .3rem '
    },
    details: {
        margin: '0 .5rem 0 0',
        fontSize: '.825rem'
    },
    '@media (max-width: 768px)': {
        title: {
            display: 'none'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
