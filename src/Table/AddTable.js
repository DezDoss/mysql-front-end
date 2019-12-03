import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AlertDialog from '../Dialogs/AlertDialog';


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(0),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));




function AddTable(props) {
    const classes = useStyles();

      const initialFormState = { id: null, 
        name: '',
        price: '',
        change: '',
        pctChange: '',
        lastChange: ''}

	const [ company, setCompany ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
		setCompany({ ...company, [name]: value })
	}

       
return(
    <form align = "left">
       <TextField
          label="Name"
          name="name"
          margin="dense"
          variant="outlined"
          value={company.name} 
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          type="number"
          label="Price"
          name="price"
          margin="dense"
          variant="outlined"
          value={company.price} 
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          type="number"
          label="Change"
          name="change"
          margin="dense"
          variant="outlined"
          value={company.change} 
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          type="number"
          label="% Change"
          name="pctChange"
          margin="dense"
          variant="outlined"
          value={company.pctChange} 
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          type="date"
          label=""
          name="lastChange"
          margin="dense"
          variant="outlined"
          value={company.lastChange}
          onChange={handleInputChange}
        />
       
          
          
                   {(!company.name || !company.price || !company.change || !company.pctChange || !company.lastChange) ? 
                   (console.log()) : (
                    <Button variant="contained" color="primary" className={classes.button} 
        
                    onClick={event => {
                    event.preventDefault()
                    props.addCompany(company)
                    setCompany(initialFormState)
                   }
                  }>Add
                  </Button>)}
            
                       
    
        
        
        </form>
)
}

export default AddTable;
