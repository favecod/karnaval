import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    cards: {
        width: '80%'
    },
    
    content: {
        overflow: 'scroll'
    },
    '@media (max-width: 768px)': {
        cards: {
            width: '95%'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
