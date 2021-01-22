import contactFormModel from './contactFormModel';
const {
  formField: {
    name,
    email,
    phone,
    bookAgeRange,
    bookStage,
    bookAudience,
    bookPublished,
    bookSummary,
    bookTitle,
    bookTheme
  }
} = contactFormModel;

export default {
  [name.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [bookAgeRange.name]: '',
  [bookStage.name]: '',
  [bookAudience.name]: '',
  [bookPublished.name]: '',
  [bookSummary.name]: '',
  [bookTitle.name]: '',
  [bookTheme.name]: ''
};
