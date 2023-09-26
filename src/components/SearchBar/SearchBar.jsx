import { Formik } from 'formik';
import { LuSearch } from 'react-icons/lu';
import {
  FormWrapper,
  ButtonStyled,
  SearchForm,
  InputStyled,
} from './SearchBarStyled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onSubmit(values.query.trim());
        }}
      >
        <SearchForm>
          <InputStyled
            name="query"
            type="text"
            // autocomplete="off"
            placeholder="Search images and photos"
          />
          <ButtonStyled type="submit">
            <LuSearch size={19} />
          </ButtonStyled>
        </SearchForm>
      </Formik>
    </FormWrapper>
  );
};
