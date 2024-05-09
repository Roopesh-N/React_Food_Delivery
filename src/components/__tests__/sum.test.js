import { sum } from "../sum";

test("testing sum function",()=>{
    const result=sum(2,3)
    expect(result).toBe(5);
    expect(result).not.toBe(6);
})
