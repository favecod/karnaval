import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    banner: {
        height: '40rem',
        width: '100vw',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: CONST.colors.white,
        fontSize: '3rem'
    },
    addressItem:{
        padding: '0 .2rem',
    },
    arrowIcon: {
        color: CONST.colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
