import { fireEvent, render,screen } from "@testing-library/react"
import HeaderPart from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("should render the header component and get the login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderPart/>
        </Provider>
        </BrowserRouter>
        
    )
    const btn=screen.getByRole("button");
    const cart=screen.getByText(/Cart/);
    expect(btn).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
})
test("should render the header component and check the cart",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderPart/>
        </Provider>
        </BrowserRouter>   
    )
    const cart=screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})
test("should change login to logout upon click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderPart/>
        </Provider>
        </BrowserRouter>
        
    )
    const loginbtn=screen.getByRole('button',{name:"Login"})
    fireEvent.click(loginbtn)
    const logoutbtn=screen.getByRole("button",{name:"Logout"})
    expect(logoutbtn).toBeInTheDocument();
})

test("should change login to logout upon click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderPart/>
        </Provider>
        </BrowserRouter>
        
    )
    const Onlinestatus=screen.getByText("Online :Yes")

    expect(Onlinestatus).toBeInTheDocument();
})

