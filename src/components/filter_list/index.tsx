import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { FunctionComponent } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { generateArrayOfYears } from "../../utils/date_utils";
import { TabType } from "../../views/movie_list";
import "./style.scss";

interface FilterListProps {
  onTabChange: (typeList: TabType) => void;
  onYearChange: (year: number | null) => void;
  tab: TabType;
  year: number | null;
}

const FilterList: FunctionComponent<FilterListProps> = ({
  onTabChange,
  onYearChange,
  tab,
  year,
}) => {
  const onChangeYear = (e: SelectChangeEvent) => {
    onYearChange(parseInt(e.target.value));
  };

  return (
    <Grid container alignItems="center" justifyContent="center" mb={5}>
      <Grid item md={2}>
        <Button
          variant={tab === "recent" ? "contained" : "text"}
          onClick={() => {
            onTabChange("recent");
          }}
          startIcon={<MovieIcon />}
        >
          Recent
        </Button>
      </Grid>
      <Grid item md={2}>
        <Button
          variant={tab === "popular" ? "contained" : "text"}
          onClick={() => {
            onTabChange("popular");
          }}
          startIcon={<StarBorderIcon />}
        >
          Popular
        </Button>
      </Grid>
      <Grid item md={2} mr={2}>
        <Button
          variant={tab === "favorites" ? "contained" : "text"}
          onClick={() => {
            onTabChange("favorites");
          }}
          startIcon={<FavoriteBorderIcon />}
        >
          Favorites
        </Button>
      </Grid>
      <Grid item md={1}>
        <FormControl fullWidth>
          <InputLabel>Year</InputLabel>
          <Select
            className="select"
            value={year?.toString()}
            label="Year"
            onChange={onChangeYear}
          >
            <MenuItem key={"null"} value={0}>
              all
            </MenuItem>
            {generateArrayOfYears().map((value, i) => {
              return (
                <MenuItem key={i} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterList;
