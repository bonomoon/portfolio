import styled from "styled-components";
import AchievementSection from "@components/organisms/resume/AchievementSection";
import ActivitySection from "@components/organisms/resume/ActivitySection";
import EducationSection from "@components/organisms/resume/EducationSection";
import ExperienceSection from "@components/organisms/resume/ExperienceSection";
import {
  ActivityType,
  AwardType,
  EducationType,
  ExperienceType,
  SkillType,
} from "@components/organisms/resume/types";

const SectionWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
`;

/**
 * Resume Layout Props
 *
 * @property {ExperienceType[]} experienceList Experience items of Resume
 * @property {EducationType[]} educationList Education items of Resume
 * @property {SkillType[]} skillList Skill items of Resume
 * @property {ActivityType[]} activityList Activity items of Resume
 * @property {AwardType[]} achievementList Achievement items of Resume
 */
type ResumeLayoutProps = {
  experienceList: ExperienceType[];
  educationList: EducationType[];
  skillList: SkillType[];
  activityList: ActivityType[];
  achievementList: AwardType[];
};

/**
 * Resume Layout Template.
 *
 * @param {ResumeLayoutProps}
 * @returns {React.FC}
 */
const ResumeLayout: React.FC<ResumeLayoutProps> = ({
  experienceList,
  educationList,
  skillList,
  activityList,
  achievementList,
}) => {
  return (
    <div>
      <SectionWrapper>
        <ExperienceSection items={experienceList} />
      </SectionWrapper>
      <SectionWrapper>
        <EducationSection items={educationList} />
      </SectionWrapper>
      {/* <SkillSection items={skillList} /> */}
      <SectionWrapper>
        <ActivitySection items={activityList} />
      </SectionWrapper>
      <AchievementSection items={achievementList} />
    </div>
  );
};

export default ResumeLayout;
