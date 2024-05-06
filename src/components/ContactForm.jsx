import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import { useId } from "react";
import { ErrorMessage } from "formik";



const initialValues ={
    name: "",
    phone: ""
}

const ContactForm = ({onAdd}) =>{
    const nameFieldId = useId();
    const numberFieldId = useId();
       
    /*const handleSubmit = (onAdd, actions) => {
        onAdd({
          id: nanoid(),
          name: "",
          number: ""
        });
		actions.resetForm();
	};*/
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
          id: nanoid(),
          name: e.target.elements.name.value,
          phone: e.target.elements.phone.value
        });
        e.target.reset();
      };

    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        phone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      });
      
    return(
        <Formik initialValues={initialValues }
                onSubmit={handleSubmit}  
                validationSchema={FeedbackSchema}  >
        <Form>
         <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nanoid()}/>
            <ErrorMessage name="name" component="span" />
         <label htmlFor={numberFieldId}>Number</label>
   <Field type="tel" name="phone" id={nanoid()}/>
            <ErrorMessage name="phone" component="span" />
            <button type="submit">Add contact</button>
        </Form>
        </Formik>
    )
}

export default ContactForm;