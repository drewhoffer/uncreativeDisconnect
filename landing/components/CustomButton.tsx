import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../assets/jss/uncreativeDisconnect/components/buttonStyles";



// prop type definitions
interface Props {
    color?: "black" | "primary"
    round?: boolean
}

// use styles from imported file
const useStyles = makeStyles(styles);

const CustomButton = ({ color = "primary", round = false, ...rest }: Props) => {
    const classes = useStyles();

    // destructure properties from props
    // const {
    //     color,
    //     round,
    //     ...rest
    // } = props;

    // conditionally apply classnames based on given props
    const btnClasses = classNames({
        [classes.button]: true,
        [classes[color]]: color,
        [classes.round]: round
    });

    return (
        <Button variant="contained" {...rest} classes={{ root: btnClasses }} >
            test
        </Button>
    );
}

export default CustomButton;
