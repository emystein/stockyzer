import {Props, useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ search, selectOptionMap }: Props) => {
  const [selected, setSelected] = useState(null);

  const loadOptions = async (searchKeywords, loadedOptions) => {
    const response = await search(searchKeywords);

    return {options: selectOptionMap(response)};
  };

  return (
    <div className="Main">
      <AsyncPaginate
        autoFocus
        value={selected}
        loadOptions={loadOptions}
        onChange={setSelected}
        debounceTimeout={1000}
        classNamePrefix="search"
        className="search-container"
      />
    </div>
  );
};

export default Search;
