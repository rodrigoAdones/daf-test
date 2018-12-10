const compare = (a, b) => a - b;

const isConsecutive = (arreglo) => {
    return arreglo.reduce((acc, item, index) => {
        if ((index + 1 >= arreglo.length) || ((arreglo[index + 1] - item) === 1)) {
            return true * acc;
        } else {
            return false;
        }
    }, true);
}

const hastFourteen = arreglo => arreglo.indexOf(14) >= 0;

const isStraight = (arreglo) => {
    const copyArray = [...arreglo];
    if (copyArray.length <= 7 && copyArray.indexOf(1) < 0) {
        copyArray.sort(compare);
        if (hastFourteen(copyArray)) {
            if (isConsecutive(copyArray) || isConsecutive([1].concat(copyArray.slice(0, copyArray.length - 1)))) {
                console.log(arreglo, ' Es escala');
            } else {
                console.log(arreglo, ' No es escala');
            }
        } else {
            if (isConsecutive(copyArray)) {
                console.log(arreglo, ' Es escala');
            } else {
                console.log(arreglo, ' No es escala');
            }
        }
    } else {
        console.log('La lista no cumple con los requisitos para ser una escala');
    }
}


const arreglo = [2, 3, 4 ,5, 6];
const arreglo2 = [14, 5, 4 ,2, 3]
const arreglo3 = [7, 7, 12 ,11, 3, 4, 14];
const arreglo4 = [7, 3, 2];

isStraight(arreglo);
isStraight(arreglo2);
isStraight(arreglo3);
isStraight(arreglo4);