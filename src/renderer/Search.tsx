import { Props, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ search, selectOptionMap, setSelected }: Props) => {
  const loadOptions = async (searchKeywords, loadedOptions) => {
    const response = await search(searchKeywords);

    return { options: selectOptionMap(response) };
  };

  const [value, setValue] = useState('');

  const resetValue = () => {
    setValue('');
  };

  const handleSelectChange = (selected) => {
    setSelected(selected);
    resetValue();
  };

  return (
    <AsyncPaginate
      placeholder="Search Stock Symbol..."
      value={value}
      loadOptions={loadOptions}
      onChange={handleSelectChange}
      debounceTimeout={1000}
      classNamePrefix="stock-search"
    />
  );
};

export default Search;
