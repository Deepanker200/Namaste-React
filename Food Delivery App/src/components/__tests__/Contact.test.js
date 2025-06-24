import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})


test("Should load button inside Contact component", () => {
    render(<Contact />)

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
})



test("Should load input name inside Contact component", () => {
    render(<Contact />)

    const button = screen.getByPlaceholderText("name");

    //Assertion
    expect(button).toBeInTheDocument();
})

test("Should load 2 inout boxes on the Contact Component",()=>{
    render(<Contact/>)

    const inputBoxes=screen.getByA
})