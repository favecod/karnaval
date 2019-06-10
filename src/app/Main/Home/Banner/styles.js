import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    banner: {
        height: '22rem',
        width: '100vw',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        fontFamily: 'IRANSans',
        fontWeight: '500',
        fontSize: '1rem',
        borderRadius: '3rem',
        padding: '.5rem 1rem .5rem .5rem',
        border: 'none',
        background: 'white',
        display: 'flex',
        
    },
    arrowIcon: {
        color: '#3ab793',
        height: '1rem',
        transition: 'all ease .2s',
        '&:hover': {
            padding: '.2rem 0 0 !important',
            height: '1rem',
            transition: 'all ease .2s'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
