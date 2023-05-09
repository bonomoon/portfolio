import { EducationType, ExperienceType } from "@components/organisms/resume/types";

export const experienceList: ExperienceType[] = [
  {
    company: "Republic of Korea Air Force(ROKAF)",
    job: "Software Engineering",
    duration: {
      startedAt: new Date(2020, 11),
      endedAt: new Date(2022, 8),
      isCompleted: true,
    },
    details: [
      {
        value:
          "Served and discharged ROKAF as software engineer role, sergeant.",
      },
      {
        value: "Resource Management System Development Team",
        children: [
          {
            value:
              "Developed, maintained, and supported full-stack, web-based systems for education and welfare.",
            children: [
              {
                value:
                  "Increased system efficiency and reduced maintenance costs through unit testing and refactoring.",
              },
            ],
          },
          {
            value:
              "Conducted SSO-based web authentication and authorization library development for spring web projects.",
            children: [
              {
                value:
                  "Reduced development time by 60% and decreased the time needed to resolve authentication errors by 80% through the separation of common concerns, the implementation of Spring security architecture, and TDD.",
              },
            ],
          },
          {
            value:
              "Improved development process and productivity by updating technological standards such as Spring boot and Vue 3 for projects, managing dependencies using Nexus, and introducing agile processes using Gitlab.",
          },
        ],
      },
    ],
  },
  {
    company: "Bonolab",
    job: "Founder",
    duration: {
      startedAt: new Date(2020, 1),
      endedAt: new Date(2020, 11),
      isCompleted: true,
    },
    details: [
      {
        value:
          "Conducted mobile application outsourcing of Global plastic surgery brokerage service using React-Native.",
        children: [
          {
            value: "Created reusable components and modular code. ",
            children: [
              {
                value:
                  "Promoted efficient development practices and maintainability for future updates and enhancements.",
              },
            ],
          },
          {
            value:
              "Improved performance and user experience utilizing data loading techniques like lazy/scroll fetch and skeleton UI.",
            children: [
              {
                value:
                  "Reduced resource rendering delays and network latency for an image and information-rich application.",
              },
            ],
          },
          {
            value:
              "Successfully implemented complex forms and search features through efficient state management using MobX, MobX-State-Tree, and React Form Hooks.",
          },
          {
            value:
              "Expanded the application's global reach by focusing on global user experience, including multi-language support and UI optimization.",
          },
        ],
      },
      {
        value:
          "Conducted web outsourcing projects for enterprises, developing project management and client communication skills.",
      },
      {
        value:
          "Strengthened inter-organizational teamwork and communication skills through successful collaboration.",
      },
    ],
  },
  {
    company: "UserInsight",
    job: "Mobile App Developer",
    duration: {
      startedAt: new Date(2019, 5),
      endedAt: new Date(2019, 10),
      isCompleted: true,
    },
    details: [
      {
        value:
          "Developed a location-based chat application in beacon areas using React-Native, Firebase Realtime DB/Function.",
        children: [
          {
            value:
              "Designed and created reusable functional components and hooks.",
          },
          {
            value:
              "Enhanced the performance utilizing local data caching, scroll paging, and optimization techniques such as React.memo.",
            children: [
              {
                value:
                  "Reduced loading time, network latency, data fetching speed, and improve overall app responsiveness for chat app.",
              },
            ],
          },
          {
            value:
              "Conducted UX research on real-time networking, focusing on the integration of location-based services and beacon technology within the application.",
          },
        ],
      },
      {
        value:
          "Standardized the React Native-based cross-platform mobile application development process, resulting in reduced development costs and enhanced efficiency and consistency across development platforms.",
      },
    ],
  },
];

export const educationList: EducationType[] = [
  {
    institution: "Jeonbuk National University(JBNU)",
    country: "Republic of Korea",
    isDegreeProgram: true,
    degree: {
      gpa: {
        maxScore: 4.5,
        score: 3.82,
      },
      major: "Software Engineering",
      name: "Bachelor",
    },
    duration: {
      startedAt: new Date(2016, 2),
      endedAt: new Date(2023, 7),
      isCompleted: false,
    },
    details: [
      {
        value:
          "Served as Student President, Dept. of Software Engineering at JBNU in 2020.",
      },
      {
        value:
          "Selected as “The Most Creative Student” in 2019, demonstrating innovation and creativity.",
      },
    ],
  },
  {
    institution:
      "Silicon Valley Innovation & Startup Program, San Jose State University",
    country: "USA",
    isDegreeProgram: false,
    duration: {
      startedAt: new Date(2023, 0),
      endedAt: new Date(2023, 0),
      isCompleted: true,
    },
    details: [
      {
        value:
          "Awarded the Grand Prize, demonstrating entrepreneurship and innovation skills",
      },
    ],
  },
];
