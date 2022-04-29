import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Grid } from "@mui/material";
import "./style.scss";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <AppBar position="fixed" className="theme">
        <Grid container alignItems="center">
          <Grid item xs={3} md={3}>
            <h2 className="back" onClick={() => navigate(-1)}>
              Movies
            </h2>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Header;
