import Styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const BasicContainer = Styled.div`
  fontWeight: 'bold'
`;

export const SaveButton = Styled(Button)`
&&
    {
      margin-top : 1em
      margin-bottom : 1em
      width: 40%
    }
`;

export const PaperContainer = Styled(Paper)`
  &&
    {
      padding-left : 1em
      width : 50%
      height: 230px
    }
`;

export const StyledTypography = Styled(Typography)`
&&
    {
      color : blue
      padding-bottom : 0.5em
      font-weight: 'bold' 
    }
`;

export const StyledTextField = Styled(TextField)`
  &&
    {
      input { font-size: 1em }
      color : red
      width: 95%
    }
`;

