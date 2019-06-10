import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    logo: {
        height: '3rem',
        cursor: 'pointer'
    },
    section: {
        margin: '3rem 2rem 0',
        padding: '0 1rem'
    },
    border: {
        borderRight: `1px solid ${CONST.colors.lightGray}`
    },
    
    '@media (max-width: 768px)': {
        section: {
            margin: '1rem 2rem 1rem',
            padding: '0 1rem'
        },
        border: {
            border: 'none !important',
            padding: '1rem 0 0',
            borderTop: `1px solid ${CONST.colors.lightGray}`
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
