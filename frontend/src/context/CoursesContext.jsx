import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const CoursesContext = createContext();
export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  async function fetchCourses() {
    try {
      const { data } = await axios.get(`${server}/api/course/all`);
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, fetchCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};
export const CourseData = () => useContext(CoursesContext);
