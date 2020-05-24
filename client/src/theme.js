import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: pink,
  },
  status: {
    danger: 'orange',
  },
  typography: {
      fontSize: 16,
  }
});

export default theme;