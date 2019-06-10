import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    buttons: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'IRANSans',
        color: '#777',
        margin: '0 1rem 0 0'
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '.6rem',
        margin: '0 .5rem',
        cursor: 'pointer',
        color: CONST.colors.gray,
        '&:hover': {
            color: CONST.colors.green
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
