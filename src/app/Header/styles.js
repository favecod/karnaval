import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    header: {
        padding: '.5rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: CONST.styles.boxShadow
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    '@media (max-width: 768px)': {
        container: {
            width: '100%'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes