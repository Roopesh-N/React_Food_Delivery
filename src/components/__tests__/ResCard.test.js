import { render,screen } from "@testing-library/react"
import Rescard, { PromotedResCard } from "../ResCard";
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"

test("should render the rescard component and props data",()=>{
    render(<Rescard resData={MOCK_DATA}/>)
    const name=screen.getByText("Temperature");
    expect(name).toBeInTheDocument();
})

test('renders "Promoted" text and Rescard correctly', () => {
      const PromotedRescardComponent = PromotedResCard(Rescard);
      render(<PromotedRescardComponent resData={MOCK_DATA} />)
      const isPromoted=screen.getByText('Promoted')
      expect(isPromoted).toBeInTheDocument();
});
