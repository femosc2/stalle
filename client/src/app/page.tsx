"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setPixel } from "./slices/pixel/index";
import { StyledButton } from "./page.styles";

const HomePage = () => {
  const dispatch = useDispatch();
  const pixel = useSelector((state: RootState) => state.pixel);

  const handleChangePixel = () => {
    dispatch(
      setPixel({ color: "#FF5733", user: "user123", position: { x: 1, y: 1 } })
    );
  };

  return (
    <div>
      <h1>Pixel Color: {pixel.color}</h1>
      <StyledButton onClick={handleChangePixel}>Change Pixel</StyledButton>
    </div>
  );
};

export default HomePage;
