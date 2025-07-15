//Integration Testing

import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the Body component with Search", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))


    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput")
    // console.log(searchInput);

    fireEvent.change(searchInput, { target: { value: "burger" } })
    fireEvent.click(searchBtn)


    //screen shoud load 1 res cards
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
})