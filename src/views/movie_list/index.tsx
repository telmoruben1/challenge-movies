import { Grid } from "@mui/material";
import { FunctionComponent, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { getMoviesList } from "../../api/movie";
import FilterList from "../../components/filter_list";
import MovieList, { MovieListItem } from "../../components/movie_list";
import { RootState } from "../../store";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getYearFromDate } from "../../utils/date_utils";
import { errorToast } from "../../utils/toast";

interface ListProps {
  tab: TabType;
}
export type TabType = "recent" | "popular" | "favorites";

const List: FunctionComponent<ListProps> = ({ tab }) => {
  const navigate = useNavigate();
  const [list, setList] = useState<Array<MovieListItem>>([]);
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const favorites = useSelector<RootState, Array<MovieListItem> | []>(
    (state) => state.favorites.favorites
  );

  useEffect(() => {
    if (tab === "favorites") {
      if (year) {
        setList(
          favorites.filter((e) => getYearFromDate(e.releaseDate) === year)
        );
      } else {
        setList(favorites);
      }
    } else {
      getMoviesList({ page, sort_by: tab, year })
        .then((data) => {
          const listResult: Array<MovieListItem> = data.results.map((val) => ({
            id: val.id,
            image: val.poster_path,
            title: val.original_title,
            releaseDate: val.release_date,
          }));
          setIsLoading(true);
          setList([...list, ...listResult]);
        })
        .catch(() => {
          setIsLoading(false);
          errorToast("Oops,something wasn't right");
        });
    }
  }, [page, tab, year]);

  function handleChangeTypeList(type: TabType) {
    setList([]);
    setPage(1);
    if (type === "recent") {
      navigate("/");
    } else {
      navigate(`/${type}`);
    }
  }
  function handleChangeYear(year: number | null) {
    setList([]);
    setPage(1);
    setYear(year);
  }

  function checkMoreList(): boolean {
    if (tab === "favorites") {
      return false;
    }
    return true;
  }

  return (
    <InfiniteScroll
      dataLength={list.length}
      next={() => setPage(page + 1)}
      hasMore={checkMoreList()}
      loader={<ClipLoader color={"#0d6efd"} loading={isLoading} />}
    >
      <Grid container justifyContent="center" mt={10}>
        <Grid item md={8}>
          <FilterList
            onTabChange={(tab) => handleChangeTypeList(tab)}
            onYearChange={(year) => handleChangeYear(year)}
            tab={tab}
            year={year}
          />
          <MovieList items={list} />
        </Grid>
      </Grid>
    </InfiniteScroll>
  );
};

export default List;
