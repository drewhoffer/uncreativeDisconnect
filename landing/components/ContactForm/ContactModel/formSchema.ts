import * as Yup from "yup";
export default [
  //First is the book details
  Yup.object().shape({
    bookAgeRange: Yup.string().required("An age range is required"),
    bookStage: Yup.string().required("A current stage is required"),
    bookAudience: Yup.string().required("An audience type is required"),
    bookPublished: Yup.string().required("A published status is required"),
    bookSummary: Yup.string().required("A summary is required"),
    bookTitle: Yup.string().required("A title is required"),
    bookTheme: Yup.string().required("A theme is required"),

  }),

  Yup.object().shape({
    name: Yup.string()
      .required("Name is required.")
      .trim()
      .min(2, "Must be at least 2 characters.")
      .max(50, "Cannot be longer than 50 characters."),
    phone: Yup.string().matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      "Phone number must be 123 123-1234 format."
    ).required("Phone is required."),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
];
