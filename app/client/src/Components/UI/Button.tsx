import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 0.72rem 1.7rem;
  border: 1px solid var(--color-purple);
  background-color: #fff;
  color: var(--color-purple);
  font-weight: bold;
  font-size: 1rem;
  width: 193px;
  margin: 16px 0 0 auto;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
  return (
    <>
      <StyledButton
        type="button"
        onClick={props.onClick}>
        {props.buttonText}
      </StyledButton>
    </>
  );
};

export default Button;
