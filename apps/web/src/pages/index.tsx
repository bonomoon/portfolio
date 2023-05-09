import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";
import Section from "@components/molecules/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bong-oh Moon</title>
      </Head>
      <MainHeader title={`Hello, I'm\nBong-oh Moon.`} />
      <Section title={"Recent Posts"}>
        <></>
      </Section>
    </>
  );
}
