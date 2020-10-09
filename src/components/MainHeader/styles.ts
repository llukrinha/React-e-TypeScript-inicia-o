import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  
  background-color: ${props => props.theme.colors.secondary};
 
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px;
  
  border-bottom: 2px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
color: ${props=> props.theme.colors.warning};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;