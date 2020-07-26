/*
  Problem: Convert strings to numbers and numbers to strings. Support negative
  numbers.
*/

export default function solution(
    input: (number | string)[]
): (number | string)[] {
    // Grab each digit, and check its charcode for its value. Add it to a
    // running total, and mutliply by 10 after each digit added.
    const strToNum = (str: string) => {
        return (
            str
                .split("")
                .slice(str[0] === "-" ? 1 : 0)
                .map((s) => s.charCodeAt(0) - 48)
                .reduce((total, d) => {
                    return d + total * 10;
                }, 0) * (str[0] === "-" ? -1 : 1)
        );
    };

    // Grab the lowest order digit by computing the number modulo 10. Div
    // 10 to shift the number right, allowing you to find the next digit.
    // Repeat.
    const numToStr = (num: number) => {
        let result = "";
        const sign = num < 0 ? "-" : "";
        num = Math.abs(num);

        while (num > 0) {
            result = (num % 10) + result;
            num = Math.floor(num / 10);
        }

        return sign + result;
    };

    return input.map((x) =>
        typeof x === "number" ? numToStr(x) : strToNum(x)
    );
}
