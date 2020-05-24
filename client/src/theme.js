import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import lime from '@material-ui/core/colors/lime';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: lime,
  },
  status: {
    danger: 'orange',
  },
  typography: {
      fontSize: 16,
  }
});

export default theme;