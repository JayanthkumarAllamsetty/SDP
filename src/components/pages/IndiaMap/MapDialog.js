import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ReactTooltip from 'react-tooltip';
import StateChart from './StateChart';

const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#509609',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MapDialog = props => {
    const classes = useStyles();
    const [contentD, setContentD] = useState("");
    const [DTName, setDTName] = useState("");
    return (
        <Dialog fullScreen TransitionComponent={Transition} open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.closeModal} aria-label="close">
                <CloseIcon />
                </IconButton>
                {/* {!DTName && (
                    <Typography variant="h6" className={classes.title}>
                        No district selected
                    </Typography>
                )}   
                {DTName && (
                    <Typography variant="h6" className={classes.title}>
                        Selected District: {DTName}
                    </Typography>
                )}    */}
            </Toolbar>
            </AppBar>
            <CssBaseline />
          
            <div style={{ height: '2000px', backgroundColor: 'white' }}>
                <h1>
                    History of Agriculture in India
                </h1>
            <h4 style={{fontFamily:'cursive'}}>
            Before the mid-1960s, India relied on imports and food aid to meet domestic requirements. However, two years of severe drought in 1965 and 1966 convinced India to reform its agricultural policy and that it could not rely on foreign aid and imports for food security. India adopted significant policy reforms focused on the goal of food grain self-sufficiency. This ushered in India's Green Revolution. It began with the decision to adopt superior yielding, disease resistant wheat varieties in combination with better farming knowledge to improve productivity. The state of Punjab led India's green revolution and earned the distinction of being the country's breadbasket.

The initial increase in production was centred on the irrigated areas of the states of Punjab, Haryana and western Uttar Pradesh. With the farmers and the government officials focusing on farm productivity and knowledge transfer, India's total food grain production soared. A hectare of Indian wheat farm that produced an average of 0.8 tonnes in 1948, produced 4.7 tonnes of wheat in 1975 from the same land. Such rapid growth in farm productivity enabled India to become self-sufficient by the 1970s. It also empowered the smallholder farmers to seek further means to increase food staples produced per hectare. By 2000, Indian farms were adopting wheat varieties capable of yielding 6 tonnes of wheat per hectare.</h4>
                  <div style={{position:'absoulte',top:'80px', right:'0px',width:'200px',height:'100px' }}>
                      
                    </div>
                <Container maxWidth="md" style={{ border: '1px solid black', backgroundColor: 'White' }}>
                  
                    <StateChart setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} />
                    <ReactTooltip>{contentD}</ReactTooltip>
                </Container>
            </div>
        </Dialog>
    )
};

export default MapDialog;
