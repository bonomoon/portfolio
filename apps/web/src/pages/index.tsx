import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bong-oh Moon</title>
      </Head>
      <MainHeader title={`Hello, I'm\nBong-oh Moon.`} />
    </div>
  );
}
