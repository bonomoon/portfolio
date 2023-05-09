import {
  ActivityType,
  EducationType,
  ExperienceType,
} from "@components/organisms/resume/types";

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

export const activityList: ActivityType[] = [
  {
    name: "I am Root",
    description: "20th Linux Kernel Academic Group",
    duration: {
      startedAt: new Date(2023, 4),
      isCompleted: false,
    },
    details: [
      {
        value: `Currently studying about Linux kernel internal structure as a member.`,
      },
    ],
  },
  {
    name: "No Name Open Source",
    description: "Side Project Team",
    duration: {
      startedAt: new Date(2022, 8),
      isCompleted: false,
    },
    details: [
      {
        value: "Desk: Web Front-end Application Container Framework.",
      },
      {
        value:
          "Currently contributing to legacy code refactoring and the development of new features.",
      },
    ],
  },
  {
    name: "GeNovation",
    description: "Side Project Team",
    duration: {
      startedAt: new Date(2022, 7),
      isCompleted: false,
    },
    details: [
      {
        value:
          "RIO: Blockchain Powered Platform for Personal Record Counterfeit Proof.",
      },
      {
        value:
          "5 Members (1 planner, 1 designer, 3 developers) - Back-end Developer responsible for developing blockchain smart contracts and server-side application.",
      },
      {
        value: "Currently filing for a patent in the United States.",
      },
      {
        value: "Awarded Chainapsis Track 3rd Winner, Junction Asia 2022",
      },
    ],
  },
  {
    name: "AM:PM",
    description: "Software Engineering Academic Club",
    organization: "JBNU",
    duration: {
      startedAt: new Date(2018, 2),
      isCompleted: false,
    },
    details: [
      {
        value: "Currently serving as a student guru in the club.",
      },
      {
        value: "One of the founders and served as the leader in 2019.",
      },
      {
        value:
          "Conducted study group mentoring(algorithm, web, OOP...) and organized hackathon.",
      },
    ],
  },
  {
    name: "AWS Educate Student Ambassador",
    organization: "AWS",
    duration: {
      startedAt: new Date(2020, 3),
      endedAt: new Date(2021, 6),
      isCompleted: true,
    },
    details: [
      {
        value:
          "As an AWS Student Ambassador, introduced AWS products to local startups and conducted lectures on campus.",
      },
    ],
  },
  {
    name: "J-DevOps",
    description: "Operating System Lab",
    organization: "JBNU",
    duration: {
      startedAt: new Date(2017, 3),
      endedAt: new Date(2019, 10),
      isCompleted: true,
    },
    details: [
      {
        value: "J-Cloud: Openstack based IaaS in JBNU.",
      },
      {
        value:
          "Undergraduate researcher, Openstack-based cloud infrastructure service team.",
      },
      {
        value:
          "Researched building an OpenStack-based platform and creating GPU instances in J-Cloud.",
      },
    ],
  },
  {
    name: "Wayseekers",
    description: "Student Startup Team",
    organization: "JBNU",
    duration: {
      startedAt: new Date(2017, 1),
      endedAt: new Date(2018, 1),
      isCompleted: true,
    },
    details: [
      {
        value:
          "Wayfit: IoT home fitness gamification platform for people who work out with short-lived motivation.",
      },
      {
        value:
          "As CTO, successfully led the development of Wayfit, which involved designing and building a watch-type motion measurement device prototype and managing the outsourcing process for the Wayfit mobile application.",
      },
      {
        value:
          "Secured a $20,000 investment from JBNU and multiple supporting investors.",
      },
      {
        value:
          "Awarded as “The Best University Start-up Club Team” by the Ministry of Education in Republic of Korea.",
      },
      {
        value:
          "Awarded 3rd place in the K-Global Startup competition, organized by the Ministry of Science, ICT, and Future Planning in Republic of Korea.Currently contributing to legacy code refactoring and the development of new features.",
      },
    ],
  },
  {
    name: "WHO",
    description: "OS and Cloud Computing Academic Club",
    organization: "JBNU",
    duration: {
      startedAt: new Date(2016, 2),
      endedAt: new Date(2017, 11),
      isCompleted: true,
    },
    details: [
      {
        value: "Studied OS and cloud computing.",
      },
      {
        value:
          "Conducted study group mentoring(C programming language) and organized hackathon.",
      },
    ],
  },
];
