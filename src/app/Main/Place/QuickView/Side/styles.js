import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    container: {
        width: '100%',
        margin: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    temps: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '100%'
    },
    currentTemp: {
        margin: '.5rem'
    },
    score: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        border: `1px solid ${CONST.colors.lightGray}`,
        borderRadius: '.75rem',
        background: CONST.colors.lightGray,
        margin: '.5rem 0'
    },
    '@media (max-width: 768px)': {}
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
