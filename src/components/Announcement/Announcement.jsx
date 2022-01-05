import styled from 'styled-components';
import { ANNOUNCEMENT_HEIGHT } from '../../constants';

const Container = styled.h3`
  height: ${ANNOUNCEMENT_HEIGHT}px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
