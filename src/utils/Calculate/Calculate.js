export function Time(elaspsedTime){
    let min, second, milliSecond;
    if (elaspsedTime < 6000){
        min = "00";
        second = Math.floor(elaspsedTime / 100);
        milliSecond = elaspsedTime - second * 100;
    }else if(elaspsedTime >= 6000){
        min = Math.floor(elaspsedTime / 6000)
        second = Math.floor((elaspsedTime-min*6000) / 100)
        milliSecond = Math.floor(elaspsedTime-(min*6000+second*100));
    }
        return String(min).padStart(2, "0") + ":" + String(second).padStart(2, "0") + ":" + String(milliSecond).padStart(2, "0")    
    }
     
export function Average(elaspsedTime, inCorrect){
    const toSecond = elaspsedTime / 100
    const average = Math.floor((10 + inCorrect) / toSecond * 10) / 10 ;
    return average;
}
    
export function CorrectRate(inCorrect){
    const correctRate = Math.floor(10 / (inCorrect + 10) * 100);
    return correctRate
}
