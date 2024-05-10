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
    phone: "",
}  
    const handleSubmit = (values, actions) => {
      onAdd({ ...values,  id: nanoid() })
		actions.resetForm();
	};
    

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        phone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      });
    return(
        <Formik initialValues={initialValues }
                onSubmit={handleSubmit}  
                validationSchema={FeedbackSchema}  >
        <Form className={css.form}>
         <label htmlFor={`${nameFieldId}-name`}>Name</label>
            <Field type="text" name="name" id={`${nameFieldId}-name`}/>
            <ErrorMessage name="name" component="span" />
         <label htmlFor={`${numberFieldId}-phone`}>Number</label>
   <Field type="tel" name="phone" id={`${numberFieldId}-phone`}/>
            <ErrorMessage name="phone" component="span" />
            <button type="submit">Add contact</button>
        </Form>
        </Formik>
    )
}

export default ContactForm;