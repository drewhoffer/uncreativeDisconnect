import { makeStyles, Typography, CircularProgress } from "@material-ui/core";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { baseUrl } from "../utils/url";
import axios from "axios";
import { useState } from "react";

interface Props {
  onSubmit: () => void;
}

const Contact: React.FC<Props> = () => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  return (
    <Layout title="Contact">
      <div className={classes.root}>
        {success ? (
          <Typography variant="h5">We will be in contact shortly</Typography>
        ) : (
            <>
              <ContactForm
                onSubmit={async ({ email, phone, name }) => {
                  try {
                    setError("");
                    const url = `${baseUrl}/api/contact`;

                    const payload = { email, phone, name };
                    const response = await axios.post(url, payload);
                    console.log(response.data.success);

                    if (response.data) {
                      console.log(response);
                      setSuccess(true);
                    }
                  } catch (error) {
                    console.log(error.response.data.message);
                    setError(error.response.data.message);
                  }
                }}
              />
              <Typography color="error">{error}</Typography>
            </>
          )}
      </div>
    </Layout>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default Contact;
