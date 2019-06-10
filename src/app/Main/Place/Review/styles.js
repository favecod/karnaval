import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    container: {
        width: '70%'
    },
    containerCard:{ 
        margin: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        background: CONST.colors.white
    },
    '@media (max-width: 768px)': {
        container: {
            width: '95%'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
