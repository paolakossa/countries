import { Input, InputGroup, InputGroupText } from "reactstrap";
import Icon from "../Icon";
import SearchInputProps from "./_presenters/props/searchInputProps";
import useControllerSearchInput from "./_presenters/useControllerSearchInput/useControllerSearchInput";

const SearchInput = ({
  onSearchTextChange,
  onSortChange,
  onClearFilter,
  placeholder,
  disabled,
}: SearchInputProps) => {
  const { ref } = useControllerSearchInput({
    onSearchTextChange,
    onClearFilter,
    onSortChange,
  });

  return (
    <div className="d-flex align-items-center w-100 ms-0 ms-md-5">
      <div className="ms-4 input-width">
        <InputGroup>
          <InputGroupText className="border-0 bg-white shadow-sm p-3 mb-5 bg-body-tertiary">
            <Icon icon="search" width={14} height={14} />
          </InputGroupText>
          <Input
            className="border-0 bg-white fs-7 shadow p-3 mb-5 bg-body-tertiary"
            id={"search"}
            type="text"
            placeholder={placeholder}
            innerRef={ref}
            defaultValue=""
            disabled={disabled}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchInput;
