import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './style.module.scss';

import searchIcon from '../../assets/search.svg';
import { serachByParams } from '../../utils/searchByParams';
import { ArtItem } from '../../constants/interfaces';

interface SearchFormProps {
    onClick: (arts: ArtItem[], searchString: string) => void;
}

export default function SearchForm({ onClick }: SearchFormProps) {
    return (
        <Formik
            initialValues={{ search: '' }}
            onSubmit={async (values, { setSubmitting }) => {
                const data = await serachByParams(values.search);
                if (data) {
                    onClick(data, values.search);
                    setSubmitting(false);
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form className={style.form}>
                    <Field
                        placeholer='Search Art, Artist, Work'
                        type='text'
                        name='search'
                    />
                    <ErrorMessage name='search' component='div' />
                    <button type='submit' disabled={isSubmitting}>
                        <img src={searchIcon} alt='' />
                    </button>
                </Form>
            )}
        </Formik>
    );
}
