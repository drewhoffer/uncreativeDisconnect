import { Grid,  Typography } from "@material-ui/core";
import SelectField from "../FormFields/SelectField";
import InputField from "../FormFields/InputField";

import contactFormModel from "./ContactModel/contactFormModel";
const bookStages = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "General Idea/Outline",
  },
  {
    value: "2",
    label: "Completed Work (with Art / Illustrations)",
  },
  {
    value: "3",
    label: "Complete Story (no artwork)",
  },
];

const bookPublishedChoices = [
  {
    value: "1",
    label: "No",
  },
  {
    value: "2",
    label: "Self-Published",
  },
  {
    value: "3",
    label: "Independent Publishing House",
  },
  {
    value: "3",
    label: "National Publishing House",
  },
];

const bookAudienceChoices = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Boys",
  },
  {
    value: "2",
    label: "Girls",
  },
  {
    value: "3",
    label: "Boys & Girls",
  },
];
const bookAgeRangeChoices = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "0-2 years old",
  },
  {
    value: "2",
    label: "3-5 years old",
  },
  {
    value: "3",
    label: "6-8 years old",
  },
  {
    value: "4",
    label: "9 or older",
  },
];

const bookThemeChoices = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Holiday",
  },
  {
    value: "2",
    label: "Educational",
  },
  {
    value: "3",
    label: "Religious",
  },
  {
    value: "4",
    label: "General",
  },
];

interface Props {
  formFields: typeof contactFormModel.formField;
}

const BookDetailsForm: React.FC<Props> = ({
  formFields: {
    bookStage,
    bookPublished,
    bookAudience,
    bookAgeRange,
    bookTheme,
    bookTitle,
    bookSummary,
  },
}: Props) => {
  return (
    <>
      <Typography variant="h6">Book Details</Typography>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
          <SelectField label={bookStage.label} data={bookStages} fullWidth />{" "}
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <SelectField
            name={bookStage.name}
            label={bookStage.label}
            data={bookStages}
            fullWidth
          />
          <SelectField
            name={bookPublished.name}
            label={bookPublished.label}
            data={bookPublishedChoices}
            fullWidth
          />
          <SelectField
            name={bookAudience.name}
            label={bookAudience.label}
            data={bookAudienceChoices}
            fullWidth
          />
          <SelectField
            name={bookAgeRange.name}
            label={bookAgeRange.label}
            data={bookAgeRangeChoices}
            fullWidth
          />
          <SelectField
            name={bookTheme.name}
            label={bookTheme.label}
            data={bookThemeChoices}
            fullWidth
          />
          <InputField name={bookTitle.name} label={bookTitle.label} fullWidth />
          <InputField name={bookSummary.name} label={bookSummary.label} fullWidth />

        </Grid>
      </Grid>
    </>

  );
};

export default BookDetailsForm;
