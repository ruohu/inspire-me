import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box bgcolor="primary.dark" sx={{ textAlign: "center", p: 1 }}>
      <Typography color="common.white">&copy; 2024 Inpire Me - All rights reserved</Typography>
    </Box>
  )
};

export default Footer;