import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface IErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Typography>{message ?? "An error occured..."}</Typography>
    </Box>
  )
};

export default ErrorMessage;
