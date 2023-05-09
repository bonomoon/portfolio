import MainHeader from "@components/organisms/MainHeader";
import ResumeLayout from "@components/templates/ResumeLayout";
import Head from "next/head";
import { activityList, awardList, educationList, experienceList } from "./data";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Bong-oh Moon</title>
      </Head>
      <MainHeader title="Bong-oh Moon" />
      <ResumeLayout
        experienceList={experienceList}
        educationList={educationList}
        skillList={[]}
        activityList={activityList}
        achievementList={awardList}
      />
    </>
  );
}
