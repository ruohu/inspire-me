import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box bgcolor="primary.dark" sx={{ textAlign: "center", p: 1 }}>
      <Typography color="common.white">2024</Typography>
    </Box>
  )
};

export default Footer;