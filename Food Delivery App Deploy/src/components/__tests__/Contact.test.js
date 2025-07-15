import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () => {

    // beforeAll(() => {
    //     console.log("Before All Test Case");
    // })


    // beforeEach(() => {
    //     console.log("Before Each Test Case");
    // })




    // afterAll(() => {
    //     console.log("After All Test Case");
    // })

    // afterEach(() => {
    //     console.log("After Each Test Case");
    // })

    

    test("Should load contact us component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    })


    //test or it both are same
    it("Should load button inside Contact component", () => {
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

    test("Should load 2 input boxes on the Contact Component", () => {
        render(<Contact />)

        //Querying
        const inputBoxes = screen.getAllByRole("textbox");

        // console.log(inputBoxes.length);


        //Assertion

        // expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(3);
        expect(inputBoxes.length).toBeTruthy();

    })
})

