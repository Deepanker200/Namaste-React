import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME)
    })
);

it("should load RestaurantMenu Component", async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>
    )
    );
    const accordionHeader = screen.getByText("Recommended");

    fireEvent.click(accordionHeader);


    const foodItems = screen.getAllByTestId("foodItems")

    expect(foodItems.length).toBe(5)

    const addBtn = screen.getAllByRole("button", { name: "Add +" });

    console.log(addBtn);

})