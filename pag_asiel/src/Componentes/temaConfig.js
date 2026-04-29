import {createTheme}from '@mui/material/styles';
import {purple} from '@mui/material/colors';
import { red } from '@mui/material/colors';

const theme = createTheme({

    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: red[500],
        }
    }


})

export default theme;