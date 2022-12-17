import React from "react";
// import { useParams } from "react-router-dom";

export interface IAboutProps {}
const About: React.FunctionComponent<IAboutProps> = (props) => {
//   const [msg, setMsg] = useState("");
//   const { number } = useParams();

//   useEffect(() => {
//     number
//       ? setMsg("Params is present " + number)
//       : setMsg("No Number provided");
//   }, []);
  return (
    <div>
      <p>This is a About page</p>
      {/* <p>{msg}</p> */}
    </div>
  );
};

export default About;
