import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './style.module.scss';

import searchIcon from '../../assets/search.svg';
import { serachByParams } from '../../utils/searchByParams';
import { ArtItem } from '../../constants/interfaces';
import { z } from 'zod';
import { withZodSchema } from 'formik-validator-zod';

const SearchFormShema = z.object({
    search: z.string().min(5, 'Search field must have at least 5 chars'),
});

interface SearchFormProps {
    onClick: (artsPromise: Promise<ArtItem[]>, search: string) => void;
    count: number;
}

export default function SearchForm({ onClick, count }: SearchFormProps) {
    return (
        <Formik
            initialValues={{ search: '' }}
            onSubmit={async (values, { setSubmitting }) => {
                const cardPromise = serachByParams(values.search, count);
                if (cardPromise) {
                    onClick(cardPromise, values.search);
                    setSubmitting(false);
                }
            }}
            validate={withZodSchema(SearchFormShema)}
        >
            {({ isSubmitting }) => (
                <Form className={style.form}>
                    <Field
                        placeholer='Search Art, Artist, Work'
                        type='text'
                        name='search'
                    />

                    <button type='submit' disabled={isSubmitting}>
                        <img src={searchIcon} alt='' />
                    </button>
                    <ErrorMessage
                        className={style.error}
                        name='search'
                        component='div'
                    />
                </Form>
            )}
        </Formik>
    );
}
