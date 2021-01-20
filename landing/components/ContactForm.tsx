import { Box, Button, Grid, Paper } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { MyField } from "./MyField";
import * as Yup from "yup";

interface Values {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required.")
      .trim()
      .min(2, "Must be at least 2 characters.")
      .max(50, "Cannot be longer than 50 characters."),
    phone: Yup.string().matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      "Phone number must be 123 123-1234 format."
    ),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors }) => (
        <Form>
          <Paper>
            <Box p={4}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12}>
                  <Field
                    error={errors.name}
                    name="name"
                    label="Name"
                    placeholder="e.g. John Doe"
                    component={MyField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    error={errors.email}
                    name="email"
                    placeholder="e.g. johndoe@email.com"
                    label="Email"
                    component={MyField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    error={errors.phone}
                    name="phone"
                    placeholder="e.g. 666-666-6666"
                    label="Phone"
                    component={MyField}
                  />
                </Grid>

                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Box>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
