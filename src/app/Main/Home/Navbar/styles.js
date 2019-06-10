import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        background: CONST.colors.lightCream
    },
    items: {
        padding: '1rem 0',
        background: 'white',
        boxShadow: CONST.styles.boxShadow,
        borderRadius: '.75rem',
        margin: '-4.25rem 0 0',
        width: '80%'
    },
    item: {
        padding: '1rem',
        display: 'flex',
        fontSize: '.75rem',
        listStyle: 'none',
        cursor: 'pointer',
        '&:hover': {
            color: CONST.colors.green
        }
    },
    image: {
        padding: '0 0 .4rem',
        width: '50px'
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
            width: '100%'
        },
        image: {
            boxShadow: CONST.styles.boxShadow,
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            padding: '1rem',
            margin: '1rem 0'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes
