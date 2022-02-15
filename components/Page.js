import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
export default function Page({ children }) {
  return (
    <StyledPage>
      <Head>
        <title>Above & Beyond Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        {children}
      </>
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
