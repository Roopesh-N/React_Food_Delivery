import { render ,screen} from "@testing-library/react"
import Contact from "../contact"
import "@testing-library/jest-dom"



test("testing contact us component",()=>{
    render(<Contact />)

    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

})

test("testing contact us component",()=>{
    render(<Contact />)

    const btn=screen.getByText("Submit")
    expect(btn).toBeInTheDocument();

})

test("check the element with placeholder",()=>{
    render(<Contact/>)

    const inpElement=screen.getByPlaceholderText("Enter Name")
    expect(inpElement).toBeInTheDocument();
})