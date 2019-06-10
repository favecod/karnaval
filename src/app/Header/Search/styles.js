import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    container: {
        borderRadius: '3rem',
        background: CONST.colors.lightGray,
        padding: '.5rem 1rem .5rem .6rem',
        width: '18rem',
    },
    input: {
        fontFamily: 'IRANSans',
        fontWeight: '100',
        color: 'darkblue',
        fontSize: '1rem',
        outline: 'none',
        border: 'none',
        width: '100%',
        background: 'none'
    },
    icon: {
        width: '1.25rem'
    },
    '@media (max-width: 768px)': {
        icon: {
            width: '2rem'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
