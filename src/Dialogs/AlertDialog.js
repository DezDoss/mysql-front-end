import React, {useState} from 'react';
import {makeStyles} from 'react'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';






export default function AlertDialog(props) {
const temp = {
  name: '',
  price: '',
  change: '',
  pctChange: '',
  lastChange: ''
};

const [values, setValues] = useState(temp);

const [open, setOpen] = useState(false);
  // const classes = useStyles();

function handleChange(event) {
  const {value, name} = event.target
  setValues({...values, [name]: value})
};

function showValue() {
  console.log(values)
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={() => props.deleteCompany(company.id)} variant="contained" color="secondary"className={classes.button}>Delete</Button> */}
      <Button variant="contained" color="primary" style = {{margin: 5}} onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
           To edit fill each textfield
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name" 
            value = {values.name}
            type="name"
            onChange = {handleChange}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="Price"
            label="Email Address"
            value = {values.price}
            type="number"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="Change"
            label="Change"
            value = {values.change}
            onChange = {handleChange}
            type="number"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Percent Change"
            value = {values.pctChange}
            onChange = {handleChange}
            type="number"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Change" 
            value = {values.lastChange}
            onChange = {handleChange}
            type="date"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            handleClose(); 
            showValue()
          }} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}