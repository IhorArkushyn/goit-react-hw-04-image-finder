import { useState } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from 'react-icons/ai';

import * as S from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [queryName, setQueryName] = useState('');
  const handleQueryNameChange = event => {
    setQueryName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (queryName.trim() === '') {
      toast.error('Enter a search query, please...');
      return;
    }

    onSubmit(queryName);
    setQueryName('');
  };

  return (
    <S.Searchbar onSubmit={handleSubmit}>
      <S.SearchForm>
        <S.FormButton type="submit">
          <AiOutlineSearch size={24} />
        </S.FormButton>

        <S.SearchFormInput
          name="queryName"
          type="text"
          value={queryName}
          onChange={handleQueryNameChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </S.SearchForm>
    </S.Searchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
