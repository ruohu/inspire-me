import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface IErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
  return (
    <Box>
      <Typography>{message ?? "An error occured..."}</Typography>
    </Box>
  )
};

export default ErrorMessage;
