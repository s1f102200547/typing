import RandomChars from "./RandomChars";
import { chars } from "./RandomChars";

it("array size", ()=>{
    expect(chars).toBe(undefined)
    RandomChars()
    expect(chars.length).toBe(10)
})