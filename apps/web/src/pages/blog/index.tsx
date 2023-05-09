import Head from "next/head";
import MainHeader from "@components/organisms/MainHeader";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Bong-oh Moon</title>
      </Head>
      <MainHeader title="Blog" description="Experience and Knowledge in my journey." />
    </div>
  );
}
