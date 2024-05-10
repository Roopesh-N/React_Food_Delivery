import { act, fireEvent } from "@testing-library/react";
import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/ResMenuMock.json"
import { BrowserRouter } from "react-router-dom";
import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import HeaderPart from "../Header";
import Cart from "../Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("should render restaurant menu and add items to card",async ()=>{
    await act( async ()=>
        render(
        <BrowserRouter> 
        <Provider store={appStore}>
        <HeaderPart/>
        <Cart/>
        <Restaurant />
        </Provider>
        </BrowserRouter> )
    )

    const cartcount=screen.getByText("Cart-(0 items)")
    expect(cartcount).toBeInTheDocument();

    const categorybtn=screen.getByText(/Ice Cream/);
    fireEvent.click(categorybtn);

    const itemslist=screen.getAllByTestId("item")
    expect(itemslist.length).toBe(4);

    const Addbtns=screen.getAllByText(/Add/);
    fireEvent.click(Addbtns[0])
    fireEvent.click(Addbtns[1])

    const newcartcount=screen.getByText("Cart-(2 items)")
    expect(newcartcount).toBeInTheDocument();

    expect(screen.getAllByTestId("item").length).toBe(6);

    expect(screen.getByRole("button",{name:"Clear Cart"})).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getAllByTestId("item").length).toBe(4);


})