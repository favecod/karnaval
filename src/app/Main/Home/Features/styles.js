import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    features: {
        background: CONST.colors.lightCream,
        padding: '1rem'
    },
    items: {
        width: '80%'
    },
    '@media (max-width: 768px)': {
        features: {
            display: 'none'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
