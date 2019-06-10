import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    quickView: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        width: '70%'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        background: CONST.colors.lightCream
    },
    frame: {
        display: 'flex',
        background: CONST.colors.white
    },
    content: {
        border: '1px solid lightGray',
        borderRadius: '.75rem'
    },
    contentHeader: {
        color: CONST.colors.green,
        padding: '1rem'
    },
    features: {
        display: 'flex'
    },
    side: {
        display: 'flex',
        justifyContent: 'center'
    },
    '@media (max-width: 768px)': {
        container: {
            width: '95%'
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        features: {
            display: 'flex',
            flexDirection: 'column'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
