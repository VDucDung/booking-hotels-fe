/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useEffect,
  useRef,
  useId,
  memo,
  ChangeEvent,
  RefObject,
} from "react";
import { useFormikContext } from "formik";
import clsx from "clsx";
import useResponsiveStyle from "@/hooks/useResponsiveStyle";
import SelectedTags from "./selectedTags/SelectedTags";
import Input from "./input/Input";
import OptionsList from "./optionsList/OptionsList";
import useDebounce from "@/hooks/useDebouce";

export interface OptionType {
  id: string | number;
  label: string;
  subLabel?: string;
  [key: string]: any; 
}

interface AutocompleteProps<T extends OptionType = OptionType> {
  options?: T[];
  asyncRequest?: (input: string) => Promise<any>;
  getOptionsLabel?: (option: T) => string;
  getOptionSubLabel?: (option: T) => string | null;
  isEqualValue?: (val: T | null, opt: T) => boolean;
  isCloseAfterSelect?: boolean;
  asyncRequestHelper?: (res: any) => T[];
  multiple?: boolean;
  width?: string;
  heightPerOption?: string;
  row?: number;
  className?: string;
  autoFetch?: boolean;
  height?: string;
  onChange?: (value: T | T[] | null) => void;
  onBlur?: () => void;
  error?: string;
  label?: string;
  labelWidth?: string;
  labelClassName?: string;
  optionsListClassName?: string;
  optionsClassName?: string;
  orientation?: "vertical" | "horizontal";
  asyncRequestDeps?: string;
  errorClass?: string;
  filterActive?: boolean;
  value?: T | T[] | string | null;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

const Autocomplete = <T extends OptionType = OptionType>({
  options = [],
  asyncRequest = undefined,
  getOptionsLabel = (option: T) => option.label,
  getOptionSubLabel = () => null,
  isEqualValue = (val: T | null, opt: T) => val?.id === opt.id,
  isCloseAfterSelect = true,
  asyncRequestHelper = (res: any) => res as T[],
  multiple = false,
  width = "100%",
  heightPerOption = "50px",
  row = 5,
  className = "",
  autoFetch = true,
  height = "50px",
  onChange = () => {},
  onBlur = () => {},
  error = "",
  label = "",
  labelWidth = "70px",
  labelClassName = "",
  optionsListClassName = "",
  optionsClassName = "",
  orientation = "vertical",
  asyncRequestDeps = "",
  errorClass = "",
  filterActive = false,
  value = multiple ? [] : null,
  name = "",
  disabled = false,
  required = false,
}: AutocompleteProps<T>) => {
  const { values } = useFormikContext<any>();

  const [optionsState, setOptions] = useState<T[]>(options);
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedInputValue = useDebounce(inputValue, 500);
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<T[]>(
    multiple ? (value as T[]) : value ? [value as T] : []
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isUserInput, setIsUserInput] = useState<boolean>(false);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const generatedId = useId();

  const heightStyle = useResponsiveStyle(height, "h");
  const widthStyle = useResponsiveStyle(width, "w");

  useEffect(() => {
    if (options?.length > 0) {
      setOptions(options);
    }
  }, [options]);

  const fetchData = async () => {
    if (!asyncRequest) return;

    setLoading(true);
    try {
      const result = await asyncRequest(inputValue);
      const transformedData = asyncRequestHelper(result);
      setOptions(transformedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      if (asyncRequestDeps && values[asyncRequestDeps]) {
        fetchData();
      } else if (!asyncRequestDeps) {
        fetchData();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFetch, asyncRequestDeps ? values[asyncRequestDeps] : null]);

  useEffect(() => {
    if (filterActive) return;
    if (debouncedInputValue?.trim() && isUserInput) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInputValue]);

  const handleFocus = () => {
    setShowOptions(true);
    if (!autoFetch && !showOptions && !isUserInput) {
      fetchData();
    }
  };

  useEffect(() => {
    const filterOptions = () => {
      if (inputValue && (!asyncRequest || optionsState?.length > 0)) {
        setFilteredOptions(
          optionsState.filter((option) =>
            getOptionsLabel(option)
              ?.toLowerCase()
              ?.trim()
              ?.includes(inputValue.toLowerCase())
          )
        );
      } else {
        setFilteredOptions(optionsState);
      }
    };

    filterOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, optionsState]);

  useEffect(() => {
    if (multiple) {
      setSelectedValues(value as T[]);
      setInputValue("");
    } else {
      setSelectedValues(value ? [value as T] : []);
      setInputValue(value ? getOptionsLabel(value as T) : "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setShowOptions(true);
    setIsUserInput(true);
  };

  const handleOptionSelect = (option: T) => {
    let newSelectedValues: T[] | T | null;

    if (multiple) {
      if (selectedValues.some((selected) => isEqualValue(selected, option))) {
        newSelectedValues = selectedValues.filter(
          (item) => !isEqualValue(item, option)
        );
      } else {
        newSelectedValues = [...selectedValues, option];
        setShowOptions(!isCloseAfterSelect);
      }
    } else {
      newSelectedValues = option;
      setInputValue(getOptionsLabel(option));
      setShowOptions(!isCloseAfterSelect);
      setIsUserInput(false);
    }

    setSelectedValues(
      multiple
        ? (newSelectedValues as T[])
        : (newSelectedValues ? [newSelectedValues as T] : [])
    );
    onChange(newSelectedValues as T | T[] | null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputContainerRef.current &&
      !inputContainerRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearInput = () => {
    setSelectedValues(multiple ? [] : []);
    setInputValue("");
    setIsUserInput(true);
    onChange(multiple ? [] : null);
  };

  const clearAllSelected = () => {
    setSelectedValues([]);
    setInputValue("");
    onChange(multiple ? [] : null);
  };

  const removeSelectedOption = (option: T) => {
    const newSelectedValues = multiple
      ? selectedValues.filter((selected) => !isEqualValue(selected, option))
      : [];
    setSelectedValues(newSelectedValues);
    setInputValue("");
    onChange(multiple ? newSelectedValues : null);
    setIsUserInput(true);
  };

  const isSelected = (option: T) => {
    return multiple
      ? selectedValues.some((selected) => isEqualValue(selected, option))
      : selectedValues.length > 0 && isEqualValue(selectedValues[0], option);
  };

  const visibleTags = multiple ? selectedValues.slice(0, 2) : [];
  const hiddenTagCount =
    multiple && selectedValues.length > 2 ? selectedValues.length - 2 : 0;

  const verticalAutocomplete = () => {
    return (
      <div
        className={clsx(
          "relative h-full text-lg",
          { "pointer-events-none": disabled },
          className
        )}
        ref={inputContainerRef}
        style={{ ...widthStyle, ...heightStyle }}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        <label
          htmlFor={generatedId}
          className={clsx(
            "absolute left-2 transition-all duration-300 ease-in-out z-[100]",
            labelClassName,
            {
              "text-dark top-0 -translate-y-full":
                showOptions || inputValue,
              "top-1/2 -translate-y-1/2 text-gray-500":
                !showOptions && !inputValue,
              "text-gray-300": disabled,
            }
          )}
        >
          {required && <span className="text-red-500">*</span>}
          <span> {label}</span>
        </label>
        <div
          className={clsx(
            "relative transition-all duration-300 border-b-2 w-full",
            {
              "border-gray-300": !showOptions && !error && !disabled,
              "border-red-500": error && !disabled,
            }
          )}
        >
          {multiple && (
            <SelectedTags
              visibleTags={visibleTags}
              getOptionsLabel={getOptionsLabel}
              hiddenTagCount={hiddenTagCount}
              clearAllSelected={clearAllSelected}
              selectedValues={selectedValues}
              removeSelectedOption={removeSelectedOption}
            />
          )}

          <Input
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            clearInput={clearInput}
            loading={loading}
            showOptions={showOptions}
            height={height}
            onClick={handleFocus}
            onBlur={onBlur}
            disabled={disabled}
            ref={inputRef as RefObject<HTMLInputElement>}
            id={generatedId}
          />

          <OptionsList
            isSelected={isSelected}
            heightPerOption={heightPerOption}
            loading={loading}
            showOptions={showOptions}
            optionsState={filterActive ? filteredOptions : optionsState}
            row={row}
            handleOptionSelect={handleOptionSelect}
            getOptionSubLabel={getOptionSubLabel}
            getOptionsLabel={getOptionsLabel}
            removeSelectedOption={removeSelectedOption}
            optionsListClassName={optionsListClassName}
            optionsClassName={optionsClassName}
          />
        </div>

        <div
          className={clsx(
            "w-full absolute bottom-[2px] left-0 h-[2px] bg-emerald-700 transition-transform duration-300 ease-in-out",
            {
              "scale-x-0": !showOptions && !inputValue,
              "scale-x-100": showOptions || inputValue,
            }
          )}
        />

        {error && (
          <div
            className={clsx(
              "text-red-500 text-sm mt-1 ml-2",
              errorClass
            )}
          >
            {error}
          </div>
        )}
      </div>
    );
  };

  return verticalAutocomplete();
};

export default memo(Autocomplete);
