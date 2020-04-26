import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <img
      src={logo}
      alt="GitHub Explorer"
      aria-label="GitHub Explorer"
      title="GitHub Explorer | Explore amazing repositories"
    />

    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input
        type="text"
        name="repository"
        id="repository"
        placeholder="Digite o nome do repositório"
      />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <li>
        <Link to="/repositories">
          <img
            src="https://avatars0.githubusercontent.com/u/48022589?s=400&u=591721fa24cdd683f41a15c4973d61a2ed52fe17&v=4"
            alt="Laura Beatris"
            aria-label="Laura Beatris"
            title="Laura Beatris"
          />

          <div>
            <strong>goeat-api</strong>

            <p>
              api for a food delivery application made with express framework -
              using postgresql, redis, mongodb and mailgun with nodemailer
            </p>
          </div>

          <FiChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/repositories">
          <img
            src="https://avatars0.githubusercontent.com/u/48022589?s=400&u=591721fa24cdd683f41a15c4973d61a2ed52fe17&v=4"
            alt="Laura Beatris"
            aria-label="Laura Beatris"
            title="Laura Beatris"
          />

          <div>
            <strong>goeat-api</strong>

            <p>
              api for a food delivery application made with express framework -
              using postgresql, redis, mongodb and mailgun with nodemailer
            </p>
          </div>

          <FiChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/repositories">
          <img
            src="https://avatars0.githubusercontent.com/u/48022589?s=400&u=591721fa24cdd683f41a15c4973d61a2ed52fe17&v=4"
            alt="Laura Beatris"
            aria-label="Laura Beatris"
            title="Laura Beatris"
          />

          <div>
            <strong>goeat-api</strong>

            <p>
              api for a food delivery application made with express framework -
              using postgresql, redis, mongodb and mailgun with nodemailer
            </p>
          </div>

          <FiChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/repositories">
          <img
            src="https://avatars0.githubusercontent.com/u/48022589?s=400&u=591721fa24cdd683f41a15c4973d61a2ed52fe17&v=4"
            alt="Laura Beatris"
            aria-label="Laura Beatris"
            title="Laura Beatris"
          />

          <div>
            <strong>goeat-api</strong>

            <p>
              api for a food delivery application made with express framework -
              using postgresql, redis, mongodb and mailgun with nodemailer
            </p>
          </div>

          <FiChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/repositories">
          <img
            src="https://avatars0.githubusercontent.com/u/48022589?s=400&u=591721fa24cdd683f41a15c4973d61a2ed52fe17&v=4"
            alt="Laura Beatris"
            aria-label="Laura Beatris"
            title="Laura Beatris"
          />

          <div>
            <strong>goeat-api</strong>

            <p>
              api for a food delivery application made with express framework -
              using postgresql, redis, mongodb and mailgun with nodemailer
            </p>
          </div>

          <FiChevronRight />
        </Link>
      </li>
    </Repositories>
  </Container>
);

export default Dashboard;
