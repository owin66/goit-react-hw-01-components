import styled from 'styled-components';

export const Profile = styled.div`
  margin: 20px auto;
  width: 350px;
  border: 2px solid light-gray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px rgba(50, 50, 122, 0.2);
  background-color: white;
  font-size: 18px;
  color: #1c1c1c;
  text-align: center;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #b1ddf13c;
  gap: 20px;
  border: 1px solid #bed7e28d;
  padding: 10px 10px;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 1px solid lightgray;
`;

export const Description = styled.div`
  padding: 20px;
`;
export const Name = styled.p`
  margin: 0;
  padding: 20px 0;
  color: #202020;
  font-weight: bold;
  font-size: 25px;
`;

export const Label = styled.li`
  padding-bottom: 8px;
  display: block;
  font-size: 16px;
  color: #5f5f5f;
`;
export const Quantity = styled.li`
  font-size: 20px;
  font-weight: bold;
`;
