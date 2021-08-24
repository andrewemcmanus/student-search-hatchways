
export default function Grades(inputArray) {
    let i = 0;
    let sum = 0;
    while (i < inputArray.length) {
        let intGrade = parseFloat(inputArray[i]);
        sum = sum + intGrade;
        i++;
    }
    let average = sum / inputArray.length;
    return average;
}