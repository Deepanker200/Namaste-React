import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    //✅ Yes — when you import a .json file in JavaScript (or TypeScript), Node and Jest automatically parse it into a JavaScript object, and you can assign it to a variable.
    // console.log(MOCK_DATA);


    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
    //has to de done ~ Higher Order Components
});