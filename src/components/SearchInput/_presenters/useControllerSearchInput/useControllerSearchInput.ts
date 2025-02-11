import React, { useCallback, useEffect } from "react";
import SearchInputProps from "../props/searchInputProps";

const MS_TO_WAIT_TYPING = 1000;

const useControllerSearchInput = ({
  onSearchTextChange,
  onClearFilter,
}: SearchInputProps) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onSearchTextChange(e.target.value);
      }, MS_TO_WAIT_TYPING);
    },
    [onSearchTextChange]
  );

  useEffect(() => {
    const input = ref.current;
    const timeout = timeoutRef.current;

    const handleInput = (e: Event) => {
      handleSearch(e as unknown as React.ChangeEvent<HTMLInputElement>);
    };

    input?.addEventListener("input", handleInput);

    return () => {
      input?.removeEventListener("input", handleInput);
      if (timeout) clearTimeout(timeout);
    };
  }, [handleSearch]);

  const handleClearInput = useCallback(() => {
    if (ref.current) {
      ref.current.value = "";
      onSearchTextChange("");
      onClearFilter?.();
    }
  }, [onSearchTextChange, onClearFilter]);

  return {
    ref,
    handleSearch,
    handleClearInput,
  };
};

export default useControllerSearchInput;
