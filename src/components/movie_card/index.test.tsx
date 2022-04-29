import MovieCard, { MovieCardProps } from "./index";
import { render, screen, fireEvent } from "@testing-library/react";
import { getMessageDate } from "../../utils/date_utils";

describe("MovieCard", () => {
  const handleClick = jest.fn();
  const props: MovieCardProps = {
    image: "",
    title: "Test movie",
    releaseDate: new Date(),
    onClick: handleClick,
  };

  test("renders without crashing given the required props", () => {
    render(<MovieCard {...props} />);
  });

  test("handleClick test call", () => {
    render(<MovieCard {...props} />);

    fireEvent.click(screen.getByTestId("card"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("show details false", () => {
    render(<MovieCard {...props} />);

    expect(screen.queryByTestId("fadeInformation")).not.toBeInTheDocument();
  });

  test("show details when onMouseEnter", () => {
    render(<MovieCard {...props} />);
    fireEvent.mouseEnter(screen.getByTestId("card"));
    expect(screen.getByTestId("fadeInformation")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent(props.title);
    expect(screen.getByTestId("release")).toHaveTextContent(
      `Release date: ${getMessageDate(props.releaseDate)}`
    );
  });

  test("show details when onMouseLeave", () => {
    render(<MovieCard {...props} />);
    fireEvent.mouseLeave(screen.getByTestId("card"));
    expect(screen.queryByTestId("fadeInformation")).not.toBeInTheDocument();
  });
});
