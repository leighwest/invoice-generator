export type InputProps = {
  handleChange: (name: string, e: string) => void;
  messages: { [key: string]: any };
  cn: (fieldName: string) => string;
};
