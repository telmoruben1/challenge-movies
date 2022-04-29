import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface ContainerSummaryProps {
  summary: string | null;
}

const ContainerSummary: FunctionComponent<ContainerSummaryProps> = ({
  summary,
}) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} md={8} lg={7}>
        <h1 style={{ textAlign: "justify", color: "white" }}>Overview</h1>
        <Typography
          variant="body2"
          align="justify"
          style={{ color: "white", fontSize: "1.3rem" }}
        >
          {summary}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContainerSummary;
