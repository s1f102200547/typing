import { Time, Average, CorrectRate } from "./Calculate"
it('min, second, millisecond  elaspsedTime < 6000', ()=>{
    const elaspsedTime = 1234
    expect(Time(elaspsedTime)).toBe("00:12:34")
})
it('min, second, millisecond  elaspsedTime > 6000', ()=>{
    const elaspsedTime = 7234
    expect(Time(elaspsedTime)).toBe("01:12:34")
})
it('average', ()=>{
    const elaspsedTime = 1234
    const inCorrect = 2
    expect(Average(elaspsedTime, inCorrect)).toBe(0.9)
})
it('correctRate', ()=>{
    const inCorrect = 2
    expect(CorrectRate(inCorrect)).toBe(83)
})