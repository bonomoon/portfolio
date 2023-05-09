import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Bong-oh Moon</title>
      </Head>
      <MainHeader title="Projects" description="My projects" />
    </div>
  );
}
