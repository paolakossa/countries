type SearchInputProps = {
  onSearchTextChange: (search: string) => void;
  onSortChange?: (order: 'asc' | 'desc') => void;
  onClearFilter?: () => void;
  onFilterClick?: () => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  optionalsButtons?: boolean;
};

export default SearchInputProps;
