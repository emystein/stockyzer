import {Props, useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ search, selectOptionMap }: Props) => {
  const [selectedStock, setSelectedStock] = useState(null);

  const loadOptions = async (searchKeywords, loadedOptions) => {
    const response = await search(searchKeywords);

    return {options: selectOptionMap(response)};
  };

  return (
    <div className="Main">
      <AsyncPaginate
        autoFocus
        value={selectedStock}
        loadOptions={loadOptions}
        onChange={setSelectedStock}
        debounceTimeout={1000}
        classNamePrefix="search"
        className="search-container"
      />
    </div>
  );
};

export default Search;
