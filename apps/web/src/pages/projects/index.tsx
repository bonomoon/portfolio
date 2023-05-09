import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";
import Section from "@components/molecules/Section";
import MainFooter from "@components/organisms/MainFooter";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Bong-oh Moon</title>
      </Head>
      <MainHeader title="Projects" description="My projects" />
      <Section title={"Featured Projects"}>
        <></>
      </Section>
      <Section title={"All Projects"}>
        <></>
      </Section>
      <MainFooter />
    </>
  );
}
