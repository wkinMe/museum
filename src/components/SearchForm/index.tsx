import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import style from './style.module.scss';

import searchIcon from '../../assets/search.svg';
import { z } from 'zod';
import { withZodSchema } from 'formik-validator-zod';
import { useDebounce } from '../../hooks/useDebounce';

const SearchFormShema = z.object({
    search: z.string().min(5, 'Search field must have at least 5 chars'),
});

interface SearchFormProps {
    onClick: (search: string) => void;
}

export default function SearchForm({ onClick }: SearchFormProps) {
    return (
        <Formik
            initialValues={{ search: '' }}
            onSubmit={() => {}}
            validate={withZodSchema(SearchFormShema)}
            validateOnBlur={true}
            validateOnChange={true}
        >
            {({ values }) => {
                const debouncedSearch = useDebounce(values.search, 500);

                useEffect(() => {
                    if (debouncedSearch.length >= 5) {
                        onClick(debouncedSearch);
                    }
                }, [debouncedSearch]);

                return (
                    <Form className={style.form}>
                        <Field
                            placeholder='Search Art, Artist, Work'
                            type='text'
                            name='search'
                        />

                        <button type='submit'>
                            <img src={searchIcon} alt='' />
                        </button>
                        <ErrorMessage
                            className={style.error}
                            name='search'
                            component='div'
                        />
                    </Form>
                );
            }}
        </Formik>
    );
}
