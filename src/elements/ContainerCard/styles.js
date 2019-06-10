import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    containerCard: {
        padding: '1rem',
        borderRadius: '.75rem',
        boxShadow: CONST.styles.boxShadow,
        display: 'flex',
    },
    '@media (max-width: 768px)': {}
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
