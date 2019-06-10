import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    logo: {
        height: '3.5rem',
        cursor: 'pointer',
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
