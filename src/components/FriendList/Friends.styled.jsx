import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  list-style: none;
  padding: 0;
  width: 350px;
  text-align: center;
  margin: 20px auto;
  background-color: white;
  border: 2px solid light-gray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px rgba(0, 50, 255, 0.5);
`;

export const StyledFriendListItem = styled.li`
  display: flex;
  justify-content: baseline;
  gap: 20px;
  padding: 8px 5px;
  background-color: white;
  border: 2px solid light-gray;
  border-radius: 5px;
`;

export const StyledStatus = styled.span`
  display: block;
  text-align: center;
  margin: 20px 5px 20px 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StyledName = styled.p`
  font-size: 16px;
`;
