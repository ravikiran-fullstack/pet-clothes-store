import {makeStyles, ThemeProvider} from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
    },
    title:{
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none'
    },
    brand: {
        marginRight: '10px',
        borderRadius: '50%',
        width: '50px',
        height: '50px'
    },
    grow:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: theme.spacing(2)
    }
}));