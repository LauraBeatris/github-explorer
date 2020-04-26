import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }): string => theme.colors.dark};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  width: 100%;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }

  button {
    width: 210px;
    height: 70px;
    background: ${({ theme }): string => theme.colors.green};
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme }): string => shade(0.2, theme.colors.green)};
    }
  }
`;

export const Repositories = styled.ul`
  margin-top: 80px;
  max-width: 700px;
  width: 100%;

  max-height: 400px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }): string => theme.colors.dark};
    border-radius: 7.5px;
    border-left: 5px solid #f1f1f1;
    border-right: 5px solid #f1f1f1;
    width: 24px;
  }

  li {
    background: #fff;
    width: 100%;
    border-radius: 5px;
    padding: 24px;
    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(5px);
    }

    img {
      min-width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: ${({ theme }): string => theme.colors['gray-dark']};
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: ${({ theme }): string => theme.colors.gray};
      }
    }

    svg {
      margin-left: auto;
      color: ${({ theme }): string => theme.colors['gray-light']};
      font-size: 32px;
    }
  }
`;
