import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 40px 20px;

  h3 {
    margin: auto;
    width: 350px;
    margin-top: 30vh;
  }
`;

export const RepositoryDetails = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      flex: 1;

      strong,
      p {
        display: block;
      }

      strong {
        font-size: 36px;
        color: ${({ theme }) => theme.colors['gray-dark']};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors['gray-medium']};
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;

    li {
      position: relative;
      cursor: pointer;

      &.active {
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 4px;
          margin-top: 10px;
          border-radius: 2px;
          background: ${({ theme }) => theme.colors.dark};
        }
      }

      &:hover {
        strong {
          color: ${({ theme }) => lighten(0.15, theme.colors.dark)};
        }

        span {
          color: ${({ theme }) => lighten(0.15, theme.colors.gray)};
        }
      }

      @media screen and (min-width: 800px) {
        & + li {
          margin-left: 80px;
        }
      }

      @media screen and (max-width: 800px) {
        & + li {
          margin-left: 30px;
        }
      }

      button {
        width: 100%;
        height: 100%;
        border: none;
        background: none;
      }

      strong,
      span {
        display: block;
        transition: color 0.2s;
      }

      strong {
        font-size: 36px;
        color: ${({ theme }) => theme.colors['gray-dark']};
      }

      span {
        margin-top: 4px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const Issues = styled.ul`
  margin-top: 80px;
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
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 7.5px;
    border-left: 5px solid #f1f1f1;
    border-right: 5px solid #f1f1f1;
    width: 24px;
  }

  li {
    background: #fff;
    width: 100%;
    border-radius: 5px;
    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(5px);
    }

    a {
      padding: 24px;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${({ theme }) => theme.colors['gray-dark']};
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }

    svg {
      margin-left: auto;
      color: ${({ theme }) => theme.colors['gray-light']};
    }
  }
`;

export const Error = styled.h3`
  font-size: 24px;
  margin-right: auto;
  margin-top: 80px;
  color: ${({ theme }) => theme.colors['grey-dark']};
`;
