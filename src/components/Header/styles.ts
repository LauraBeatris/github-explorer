import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['gray-dark']};
    }

    svg {
      margin-right: 4px;
    }
  }
`;
