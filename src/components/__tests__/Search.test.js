import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body.js";
import MOCK_LIST from "../mocks/ResListMock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_LIST);
        },
    });
});


test("should search for restaurants",async ()=>{
    await act(async ()=>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>)

    ); 
    const searchbtn =screen.getByRole("button",{name:"Search"})
    const search=screen.getByTestId("search")

    fireEvent.change(search,{target:{value:"biryani"}});
    fireEvent.click(searchbtn);
    
    const reslist=screen.getAllByTestId("rescard")

    expect(reslist.length).toBe(2);

    expect(searchbtn).toBeInTheDocument();
});

test("should filter the top rated restaurants",async ()=>{
    await act(async ()=>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>)

    ); 

    const beforefilter=screen.getAllByTestId("rescard")
    expect(beforefilter.length).toBe(9);

    const TopRatedBtn=screen.getByText("Top rated restaurants")

    fireEvent.click(TopRatedBtn);
    
    const afterfilter=screen.getAllByTestId("rescard")

    expect(afterfilter.length).toBe(5);
    
});