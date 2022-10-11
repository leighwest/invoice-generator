export type InputProps = {
  name: string;
  label?: string;
  onChange: (name: string, e: string) => void;
  messages: { [key: string]: any };
  value?: string;
  className: string;
  placeholder: string;
  type?: string;
};
