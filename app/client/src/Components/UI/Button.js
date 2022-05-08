import classes from './Button.module.css'

const Button = (props) => {
  
  const className = classes[props.class];

  return (
    <>
      <button type="button" className={className} onClick={props.onClick}>{props.buttonText}</button>
    </>
  );
};

export default Button;