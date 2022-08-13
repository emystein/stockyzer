import { Props } from 'react';

const UnorderedList = ({ items }: Props) => {
  return (
    <ul className="list-group">
      {items.map((item) => (<li key={item.value}>{item.label}</li>))}
    </ul>
  );
};

export default UnorderedList;
