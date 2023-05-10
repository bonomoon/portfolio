import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";
import Section from "@components/molecules/Section";
import MainFooter from "@components/organisms/MainFooter";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Bong-oh Moon</title>
      </Head>
      <MainHeader title="Blog" description="Experience and Knowledge in my journey." />
      <Section title={"All Posts"}>
        <></>
      </Section>
      <MainFooter />
    </>
  );
}
