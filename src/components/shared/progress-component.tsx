import { Box, CircularProgress } from "@mui/material";

const ProgressComponent: React.FC = () => {
  return (
    <Box sx={{ display: "flex", paddingTop: 20 }} justifyContent="center">
      <CircularProgress size={60} />
    </Box>
  );
};

export default ProgressComponent;
