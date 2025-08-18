import GlobalApi from "../../service/GlobalApi";
import { v4 as uuidv4 } from "uuid";

export const seedDummyResume = async (userEmail, userName) => {
  const dummyData = {
    data: {
      title: "Sample Resume",
      resumeId: uuidv4(),
      userEmail: userEmail,
      userName: userName,
      themeColor: "#ff6666",
      firstName: "James",
      lastName: "Carter",
      jobTitle: "Full Stack Web Developer",
      address: "525 N tryon Street, NC 28117",
      phone: "(123)-456-7890",
      email: "example@gmail.com",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      experience: [
        {
          id: 1,
          title: "Full Stack Developer",
          companyName: "Amazon",
          city: "New York",
          state: "NY",
          startDate: "2021-01-01",
          endDate: "",
          currentlyWorking: true,
          workSummary:
            "Designed, developed, and maintained full-stack applications using React and Node.js.",
        },
      ],
      education: [
        {
          id: 1,
          universityName: "Western Illinois University",
          startDate: "2018-08-01",
          endDate: "2019-12-01",
          degree: "Master",
          major: "Computer Science",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      skills: [
        {
          id: 1,
          name: "React",
          rating: 100,
        },
        {
          id: 2,
          name: "Node.js",
          rating: 80,
        },
      ],
    },
  };

  try {
    const result = await GlobalApi.createNewResume(dummyData);
    console.log("Dummy resume created:", result);
    return result;
  } catch (error) {
    console.error("Error creating dummy resume:", error);
    throw error;
  }
};
