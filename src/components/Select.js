import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled]{
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[100]};
    opacity: 1;
  }
`;
