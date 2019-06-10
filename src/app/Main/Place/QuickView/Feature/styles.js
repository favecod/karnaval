import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        margin: '.2rem .3rem'
    },
    title: {
        margin: '.5rem',
        color: CONST.colors.gray
    },
    '@media (max-width: 768px)': {}
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
