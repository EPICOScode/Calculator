import "@fontsource/roboto/300.css";
import Paper from "@mui/material/Paper";
import "./display.css";

const Display = ({ state }) => {
  return (
    <>
      <Paper elevation={14} className="Paper">
        {state}
      </Paper>
    </>
  );
};

export default Display;
