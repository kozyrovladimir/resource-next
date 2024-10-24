import React, {ForwardedRef, forwardRef} from 'react';
import {Input, InputProps} from "@/shared";
import {VscClose} from "react-icons/vsc";

interface SearchInputProps extends Omit<InputProps, "ref"> {
  handleClear?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({handleClear, ...rest}, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <Input
          placeholder="Search…"
          {...rest}
          ref={ref}
          autoFocus={true}
          style={{padding: '0.2rem 0.5rem', marginLeft: '0.5rem'}}
          {...rest}
          iconEnd={
            <VscClose
              style={{cursor: 'pointer', position: "relative", top: '0.1rem'}}
              onClick={handleClear}
            />
          }
        />
    );
  }
);

export default SearchInput;
