export type InputProps = {
  // name?: string;
  // label?: string;
  handleChange: (name: string, e: string) => void;
  messages: { [key: string]: any };
  // placeholder?: string;
  cn: (fieldName: string) => string;
};
