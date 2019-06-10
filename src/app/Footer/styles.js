import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    footer: {
        display: 'flex',
        background: CONST.colors.lightCream
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%'
    },
    lists: {
        padding: '0'
    },
    logs: {
        padding: '0',
        display: 'flex'
    },
    header: {
        fontSize: '1.2rem'
    },
    li: {
        margin: '0 2rem 0 0',
        width: '100%',
        color: CONST.colors.gray,
        cursor: 'pointer'
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        padding: '.3rem',
        listStyle: 'none',
        width: '100%',
        color: CONST.colors.gray,
        cursor: 'pointer'
    },
    linkTitle: {
        padding: '0 .5rem 0 0'
    },
    inputContainer: {
        position: 'relative',
        background: CONST.colors.white,
        borderRadius: '3rem',
        fontSize: '.8rem',
        padding: '.75rem 1.25rem',
        margin: '.5rem .5rem 0 0',
        border: `1px solid ${CONST.colors.lightGray}`,
        width: '15rem'
    },
    input: {
        outline: 'none',
        border: 'none',
        width: '100%',
        fontFamily: 'IRANSans',
        color: CONST.colors.gray
    },
    inputButton: {
        top: '-.1rem',
        left: '-.5rem',
        position: 'absolute',
        background: CONST.colors.green,
        border: 'none',
        width: '3.125rem',
        height: '3.125rem',
        borderRadius: '50%',
        color: CONST.colors.white
    },
    detail: {
        borderTop: `1px solid ${CONST.colors.lightGray}`,
        width: '80%',
        textAlign: 'center',
        padding: '1rem'
    },
    '@media (max-width: 768px)': {
        container: {
            width: '100%',
            flexDirection: 'column'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes