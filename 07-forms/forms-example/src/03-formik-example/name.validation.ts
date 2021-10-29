
import * as yup from 'yup';

export const myNameValidationSchema = yup.object().shape({
	yourName: yup.string().required().max(10),
	igal: yup.string().min(2)
});