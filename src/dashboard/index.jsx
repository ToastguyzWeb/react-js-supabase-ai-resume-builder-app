import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getResumesList();
    }
  }, [user]);

  const getResumesList = () => {
    setLoading(true);
    GlobalApi.getUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        setResumeList(resp.data.data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching resumes:", error);
        setLoading(false);
      }
    );
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI Resume for your next Job Role</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
        <AddResume />

        {loading
          ? // Loading skeleton
            [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="h-[300px] rounded-lg bg-slate-200 animate-pulse"
              ></div>
            ))
          : resumeList.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={getResumesList}
              />
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
