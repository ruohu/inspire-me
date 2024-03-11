import { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";


const Loading: FC = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Typography>loading...</Typography>
      <CircularProgress sx={{ m: 2 }} />
    </Box>
  )
};

export default Loading;
