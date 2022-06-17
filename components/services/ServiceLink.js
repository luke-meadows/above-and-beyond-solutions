import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
export default function ServiceLink({ img, title, link }) {
  return (
    <Link href={link}>
      <Container>
        <LinkText>
          <p>{title}</p>
          <i className="icon-down-open-big" />
        </LinkText>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  position: relative;

  border-radius: 3px;
  overflow: hidden;
  img {
    filter: brightness(0.3) grayscale(0.5);
  }
  &:hover {
    img {
      filter: brightness(0.8) grayscale(0);
    }
  }
`;

const LinkText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  cursor: pointer;

  p,
  i {
    color: var(--black);
    font-weight: 500;
  }
  i {
    margin-left: 0.5rem;
    transform: rotate(270deg);
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  &:hover {
    p,
    i {
      color: var(--pink);
    }
  }
`;
