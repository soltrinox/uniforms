import React, { HTMLProps, Ref } from 'react';
import classnames from 'classnames';
import { connectField, filterDOMProps } from 'uniforms';

const base64 =
  typeof btoa !== 'undefined'
    ? btoa
    : (x: string) => Buffer.from(x).toString('base64');
const escape = (x: string) => base64(x).replace(/=+$/, '');

const xor = (item, array) => {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

type renderProps = {
  allowedValues?: string[];
  disabled: boolean;
  fieldType?: unknown;
  id: string;
  name: string;
  onChange: (value?: string | string[]) => void;
  transform?: (value?: string) => string;
  value?: string | string[];
} & HTMLProps<HTMLDivElement>;

type renderCheckboxesProps = renderProps;

type renderSelectProps = {
  inputRef?: Ref<HTMLSelectElement>;
  label: string;
  placeholder: string;
  required?: boolean;
} & renderProps;

type SelectFieldProps = {
  checkboxes?: boolean;
  error: unknown;
  errorMessage: string;
  inputRef?: Ref<HTMLSelectElement>;
  label: string;
  placeholder: string;
  required?: boolean;
  showInlineError: boolean;
} & (renderCheckboxesProps | renderSelectProps);

const renderCheckboxes = ({
  allowedValues,
  disabled,
  fieldType,
  id,
  name,
  onChange,
  transform,
  value,
}: renderCheckboxesProps) =>
  allowedValues?.map(item => (
    <div className="field" key={item}>
      <div className="ui checkbox">
        <input
          checked={fieldType === Array ? value?.includes(item) : value === item}
          disabled={disabled}
          id={`${id}-${escape(item)}`}
          name={name}
          onChange={() =>
            onChange(fieldType === Array ? xor(item, value) : item)
          }
          type="checkbox"
        />

        <label htmlFor={`${id}-${escape(item)}`}>
          {transform ? transform(item) : item}
        </label>
      </div>
    </div>
  ));

const renderSelect = ({
  allowedValues,
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  transform,
  value,
}: renderSelectProps) => (
  <select
    className="ui selection dropdown"
    disabled={disabled}
    id={id}
    name={name}
    onChange={event =>
      onChange(event.target.value !== '' ? event.target.value : undefined)
    }
    ref={inputRef}
    value={value ?? ''}
  >
    {(!!placeholder || !required || value === undefined) && (
      <option value="" disabled={required} hidden={required}>
        {placeholder || label}
      </option>
    )}

    {allowedValues?.map(value => (
      <option key={value} value={value}>
        {transform ? transform(value) : value}
      </option>
    ))}
  </select>
);

const Select = ({
  allowedValues,
  checkboxes,
  className,
  disabled,
  error,
  errorMessage,
  fieldType,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  showInlineError,
  transform,
  value,
  ...props
}: SelectFieldProps) => (
  <div
    className={classnames({ disabled, error, required }, className, 'field')}
    {...filterDOMProps(props)}
  >
    {label && <label htmlFor={id}>{label}</label>}

    {/* TODO: Better handling of these props. */}
    {checkboxes || fieldType === Array
      ? renderCheckboxes({
          allowedValues,
          disabled,
          id,
          name,
          onChange,
          transform,
          value,
          fieldType,
        })
      : renderSelect({
          allowedValues,
          disabled,
          id,
          name,
          onChange,
          transform,
          value,
          inputRef,
          label,
          placeholder,
          required,
        })}

    {!!(error && showInlineError) && (
      <div className="ui red basic pointing label">{errorMessage}</div>
    )}
  </div>
);

export default connectField(Select);
