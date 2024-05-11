import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import { ErrorMessage } from "formik";
import css from './ContactForm.module.css'

const ContactForm = ({onAdd}) =>{
    const nameFieldId = nanoid();
    const numberFieldId = nanoid();
     const initialValues ={
    name: "",
    number: "",
}  
    const handleSubmit = (values, actions) => {
      onAdd({ ...values,  id: nanoid() })
		actions.resetForm();
	};
    

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      });
    return(
        <Formik initialValues={initialValues }
                onSubmit={handleSubmit}  
                validationSchema={FeedbackSchema}  >
        <Form className={css.form}>
         <label className={css.label} htmlFor={`${nameFieldId}-name`}>Name</label>
            <Field className={css.input}    type="text" name="name" id={`${nameFieldId}-name`}/>
            <ErrorMessage  className={css.message}  name="name" component="span" />
         <label  className={css.label}  htmlFor={`${numberFieldId}-number`}>Number</label>
   <Field  className={css.input}  type="tel" name="number" id={`${numberFieldId}-number`}/>
            <ErrorMessage  className={css.message} name="number" component="span" />
            <button  className={css.btn} type="submit">Add contact</button>
        </Form>
        </Formik>
    )
}

export default ContactForm;