import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';

const notify = () => toast('Please enter a text!!!');

export default function SearchBar({ onSearch }) {
    return(
    <>
        <header className={css.header}>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values, actions) =>{
                    if (values.query.trim() === "") {
                    notify();
                } else {
                    onSearch(values.query);
                    actions.resetForm();
                }
                }}>
                <Form className={css.form}>
                    <Field className={css.field}type="text"
                        name="query"
                        autoComplete="off"
                        autofocus
                        placeholder="Search images and photos"/>
                    <button type="submit" className={css.button}>Search</button>
                    <Toaster/>
                 </Form>
             </Formik>
        </header>  
    </>
    )
}

