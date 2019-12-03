import React, {useState}from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import AlertDialog from '../Dialogs/AlertDialog';


const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);


//   const styles = {
//     margin: 10,
//     padding: 10,
//     flex: 1
// }


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));


function UserTable(props) {
  const buffer = {id:'', name:'', change:'', price:'', pctChange:'', lastChange: ''}
  const [buff, setBuff] = useState(buffer)

  const [open, setOpen] = useState(false);


  const handleClickOpen = (value) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    const classes = useStyles();
    return (
<Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table" margin = "dense">
        <TableHead>
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Change</StyledTableCell>
            <StyledTableCell align="right">Percent Change&nbsp;(%)</StyledTableCell>
            <StyledTableCell align="center">LastChange</StyledTableCell>
            <StyledTableCell align="center" colSpan = {2}>Edit</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.companies.length > 0 ? (
          props.companies.map(company => (
            <StyledTableRow key={company.name}>
              <StyledTableCell component="th" scope="row">{company.name}</StyledTableCell>
              <StyledTableCell align="right" style = {{width: 30}}>{company.price}</StyledTableCell>
              <StyledTableCell align="right" style = {{padding: 5}}>{company.change}</StyledTableCell>
              <StyledTableCell align="right" style = {{padding: 5}}>{company.pctChange}</StyledTableCell>
              <StyledTableCell align="right" style = {{padding: 5}}>{company.lastChange}</StyledTableCell>
              <StyledTableCell align="right" style = {{padding: 5}}>
              <AlertDialog company = {company}/>
            <Button onClick={() => props.deleteCompany(company.id)} variant="contained" color="secondary"className={classes.button}>Delete</Button>
            </StyledTableCell>
            </StyledTableRow>
          ))): 
          (
            <StyledTableRow>
              <StyledTableCell colSpan={5}><h3>No companies</h3></StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
    )}

export default UserTable;