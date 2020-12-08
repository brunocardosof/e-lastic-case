import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
`;
