import { Box, Button, Container, makeStyles } from "@material-ui/core";
import Link from "next/link";
import Layout from "../components/Layout";

import styles from "../assets/jss/uncreativeDisconnect/pages/indexStyles";

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout title="Home | UncreativeDisconnect">
      <Container maxWidth="sm">
        <div className={classes.red}>
          <Box display="flex" flexDirection="column">
            <h1>Hello Landing Subsystem👋</h1>
            <Link href="/contact">
              <Button variant="contained" color="primary">
                Get in Contact
              </Button>
            </Link>
          </Box>
        </div>
      </Container>
    </Layout>
  );
};

const useStyles = makeStyles(styles);

export default IndexPage;
