export type InputProps = {
  name: string;
  label: string;
  onChange: (name: string, e: string) => {};
  messages: string[];
  value: string;
  className: string;
  placeholder: string;
  type: string;
};
