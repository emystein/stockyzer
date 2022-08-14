import { Props } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ search, selectOptionMap, selected, setSelected }: Props) => {
  const loadOptions = async (searchKeywords, loadedOptions) => {
    const response = await search(searchKeywords);

    return { options: selectOptionMap(response) };
  };

  return (
    <AsyncPaginate
      autoFocus
      value={selected}
      loadOptions={loadOptions}
      onChange={setSelected}
      debounceTimeout={1000}
      classNamePrefix="stock-search"
    />
  );
};

export default Search;
