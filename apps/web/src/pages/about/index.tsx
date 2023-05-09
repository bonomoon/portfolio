import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Bong-oh Moon</title>
      </Head>
      <MainHeader title={`Hello, I'm\nBong-oh Moon,\nSoftware Engineer.`}>

      </MainHeader>
    </>
  );
}
