import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  background-color: white;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Card: React.FC<{ children: JSX.Element | JSX.Element[] }> = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
