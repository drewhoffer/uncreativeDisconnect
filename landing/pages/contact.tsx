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
    <Layout title="Contact | Uncreative Disconnect">
      <div className={classes.root}>
        <ContactForm onSubmit={() => console.log("Here")}/>
      </div>

    </Layout>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default Contact;
