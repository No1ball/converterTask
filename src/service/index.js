export default class Service{

    static convertation = (firstValue, firstValuteCourse,secondValuteCourse) =>{
        const value = ((firstValue * firstValuteCourse) / secondValuteCourse)
        if (this.formatValue(value) > 4){
            return value.toFixed(4)
        }

        return value
    }
     static calcValueForInput = function (valueForInput, inputStatus, convertationValue){
        return inputStatus? valueForInput : convertationValue
     }


    static formatValue(value) {
        let text = value.toString();
        let index = text.indexOf(".");
        return text.length - index - 1
    }
}