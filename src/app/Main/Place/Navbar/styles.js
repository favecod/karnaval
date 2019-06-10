import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '0 0 .75rem'
    },
    items: {
        padding: '1rem 0',
        margin: '-3.5rem 0 0',
        width: '70%'
    },
    item: {
        boxShadow: CONST.styles.boxShadow,
        borderRadius: '.75rem',
        background: CONST.colors.white,
        width: '20%',
        padding: '2rem 1rem',
        display: 'flex',
        fontSize: '.75rem',
        listStyle: 'none',
        cursor: 'pointer',
        color: CONST.colors.green,
        transition: 'all ease .1s',
        '&:hover': {
            margin: '-1rem 0 0',
            transition: 'all ease .1s',
            icon: {
                color: CONST.colors.blue
            },
            color: CONST.colors.blue
        }
    },
    '@media (max-width: 768px)': {
        items: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem 0',
            background: 'white',
            boxShadow: 'unset',
            borderRadius: '0',
            margin: '0',
            width: '99%'
        },
        item: {
            boxShadow: 'unset !important',
            borderRadius: '.75rem',
            background: 'unset',
            padding: 'unset',
            width: '20%',
            display: 'flex',
            fontSize: '.5rem',
            listStyle: 'none',
            cursor: 'pointer'
        },
        icon: {
            boxShadow: CONST.styles.boxShadow,
            fontSize: '.75rem',
            padding: '1rem',
            margin: '0 0 .5rem',
            borderRadius: '50%',
            background: CONST.colors.white,
            color: CONST.colors.green
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
