let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2 ,3, 4]
let arr3 = [1, 2, 3, 4, 100, 200];
let arr4 = []
let arr5 = 'er'

function arr_summ(a, b) {
    if (a.length === 0 ) {
        console.log('Массив 1 не должны быть пустым')
    } else if (b.length === 0 ) {
        console.log('Массив 2 не должены быть пустым')
    } else if ( !Array.isArray(a) || !Array.isArray(b) ) {
        console.log('Принимаются только массивы')
    } else {
        let max_element = 0;
        function sum(a, b) {
            let sum_arr = a.map((value, index) => {
                if (b[index] !== undefined) {
                    value = value + b[index];
                    if (value > max_element) {max_element = value}
                    return value;
            }
                else {
                    if (value > max_element) {max_element = value}
                    return value;
                }
            });
            console.log(`Максимальное число в массиве = ${max_element}, новый массив = ${sum_arr}`);
            return sum_arr;
        }
                
        if (a.length >= b.length) {
            return sum(a, b);
        } else {
            return sum(b, a);
        }
    }
}
let res_arr = arr_summ(arr1, arr2);
let res_arr2 = arr_summ(arr1, arr3);
let res_arr3 = arr_summ(arr1, arr4);
let res_arr4 = arr_summ(arr1, arr5);

