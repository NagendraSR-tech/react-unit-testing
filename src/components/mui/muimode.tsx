import { Typography, useTheme } from "@mui/material";

export const MuiMode = () => {
  const theme = useTheme();
  return <Typography component="h1">Current theme mode: {theme.palette.mode} mode</Typography>;
};
