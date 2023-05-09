import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";
import Section from "@components/molecules/Section";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Bong-oh Moon</title>
      </Head>
      <MainHeader title="Bong-oh Moon" />
      <div>
        <Section title={"Experience"}>
          <></>
        </Section>
        <Section title={"Education"}>
          <></>
        </Section>
        <Section title={"Skill"}>
          <></>
        </Section>
        <Section title={"Activity"}>
          <></>
        </Section>
        <Section title={"Achievement"}>
          <></>
        </Section>
      </div>
    </>
  );
}
