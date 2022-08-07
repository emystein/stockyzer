import {Props, useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ search, selectOptionMap }: Props) => {
  const [selected, setSelected] = useState(null);
  const [list, setList] = useState([]);

  const loadOptions = async (searchKeywords, loadedOptions) => {
    const response = await search(searchKeywords);

    return {options: selectOptionMap(response)};
  };

  const addSelectedToList = () => {
    setList(list.concat(selected));
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

      <button onClick={addSelectedToList}>Add</button>

      <ul className="list-group">
        {list.map((item) => (
          <li key={item.value}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
