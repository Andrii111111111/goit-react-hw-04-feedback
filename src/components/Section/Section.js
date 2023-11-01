import { Title } from './Section.style';

export const Section = ({ children, title }) => {
  return (
    <Title>
      <h1>{title}</h1>
      {children}
    </Title>
  );
};
