import React,{useState} from 'react';
import Task from './Task';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Grid,Paper,Dialog} from '@material-ui/core';
import NewTask from './NewTask.js';

const Tasks = (props) => {
    
    const paperStyle = {padding:20, width:720, margin:"50px auto"};
    
    
    let taskList = props.items;
    
    const [open,setOpen] = useState(false);
    
    
    
    const handleAddition=(task)=>{
        taskList = [...taskList,task];
        setOpen(!open);    
    };
    
    const handleClickAdditon=()=>{
        setOpen(!open); 
    };
    
    
    
    
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle} >
        <div>
            {taskList.map((item,i) => {
                return (<Task key={i}
                              responsible={item.responsible}
                              description={item.description}
                              status={item.status}
                              dueDate={item.dueDate}/>
                );
            })}
            <Fab color="primary" aria-label="add" align="right" onClick={handleClickAdditon}><AddIcon /></Fab> 
        </div>         
        </Paper>
        <Dialog open={open}>
            <NewTask addition={handleAddition} addition={handleAddition}/>
        </Dialog>
        </Grid>
        
        
    );
};

export default Tasks;