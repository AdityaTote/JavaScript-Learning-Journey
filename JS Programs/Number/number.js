const num = new Number(100.987);
console.log(num.toString());  
console.log(num.toFixed()); 
console.log(num.toLocaleString());
console.log(num.toPrecision());
console.log(num.toExponential());


/*Numbers 
     Propertie <=
        toString() => Specifies a radix for converting numeric values to strings. This value is only used for numbers.
        toFixed() =>Argument(Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.)
                    Returns a string representing a number in fixed-point notation.
        toLocalString() => A locale string, array of locale strings, Intl.Locale object, or array of Intl.
                        Locale objects that contain one or more language or locale tags.
                        If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. 
                        If you omit this parameter, the default locale of the JavaScript runtime is used.
                        Converts a number to a string by using the current or specified locale.
        toPrecision() => Argument(Number of significant digits. Must be in the range 1 - 21, inclusive.)
                        Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
        toExponential() => Argument(Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.)
                        Returns a string containing a number represented in exponential notation.
 */