
import InputField from "../FormFields/InputField";
import contactFormModel from "./ContactModel/contactFormModel";

interface Props {
	formFields: typeof contactFormModel.formField;
  }

const AuthorDetailsForm: React.FC<Props> = ({
	formFields: {
		name,
		email,
		phone
	}
}: Props) => {
	return (
	  <>
		<h1>AuthorDetails</h1>
		<h2>Please fill out this form to start your journey to stardom!</h2>
		<InputField name={name.name} label={name.label} fullWidth />
		<InputField name={email.name} label={email.label} fullWidth />
		<InputField name={phone.name} label={phone.label} fullWidth />

	  </>
	);
  };
  
  
  export default AuthorDetailsForm;