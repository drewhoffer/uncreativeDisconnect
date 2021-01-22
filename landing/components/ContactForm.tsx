import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";

import BookDetailsForm from "./ContactForm/BookDetailsForm";
import AuthorDetailsForm from "./ContactForm/AuthorDetailsForm";
import ReviewForm from "./ContactForm/ReviewForm";

import validationSchema from "./ContactForm/ContactModel/formSchema";
import contactFormModel from "./ContactForm/ContactModel/contactFormModel";
import formInitialValues from "./ContactForm/ContactModel/formInitialValues";
import { useState } from "react";
import { ContactSuccess } from "./ContactForm/ContactSuccess";
import { Form, Formik } from "formik";

const steps = ["Book Details", "Author Details", "Review Contents"];
const { formId, formField } = contactFormModel;

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <BookDetailsForm formFields={formField} />;
    case 1:
      return <AuthorDetailsForm formFields={formField} />;

    case 2:
      return <ReviewForm />;

    default:
      return <div>Not Found</div>;
  }
}

const ContactForm: React.FC = () => {
  //Setup handleSubmit
  //Takes the values and actions

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;


  function _handleSubmit(values: any, actions: any) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  async function _submitForm(values: any, actions: any) {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Contact
      </Typography>{" "}
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <ContactSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
            enableReinitialize
            
          >
            {({ isValid, isSubmitting, touched, errors, }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack}>Back</Button>
                  )}
                  <div>
                    <Button
                      disabled={ isSubmitting }
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && <CircularProgress size={24} />}
                    <pre>{JSON.stringify({errors, isValid, isSubmitting, touched}, null, 2)}</pre>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
};

export default ContactForm;

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//   },
//   formContent: {
//     flexGrow: 1,
//     width: "100%",
//   },
//   heading: {
//     alignSelf: "flex-start",
//   },
//   grow: {
//     flexGrow: 1,
//   },
// }));
