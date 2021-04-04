import React,{useState} from "react";
import AddressForm from "../addressForm/AddressForm";
import PaymentForm from "../paymentForm/PaymentForm";
import ConfirmationForm from "../confirmationForm/ConfirmationForm";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const Form = () => activeStep === 0 ?
    <AddressForm/> :
    <PaymentForm/>

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
          <Paper className={classes.paper}>
              <Typography>Checkout</Typography>
              <Stepper activeStep={activeStep}  className={classes.stepper}>
                {steps.map(step => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? <ConfirmationForm/>: <Form/>}
          </Paper>
      </main>
    </>
  );
};

export default Checkout;
