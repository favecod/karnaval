import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    header: {
        padding: '2rem 0 0',
        display: 'flex'
    },
    headerTitle: {
        display: 'inline-flex',
        background: 'white',
        margin: '-1rem 0 0',
        color: '#000000de',
        padding: '0 1rem',
        fontSize: '1.25rem'
    },
    headerLine: {
        display: 'flex',
        width: '40%',
        border: 'none',
        height: '2px',
        background: 'lightgray',
        margin: '0 3rem'
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
