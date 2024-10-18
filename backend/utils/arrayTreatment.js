export const removeDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i].user === array[j].user){
                if(array[i].wpm === array[j].wpm) {
                    array.splice(j, 1);
                    j--;
                }
                if(array[i].wpm < array[j].wpm) {
                    array.splice(i, 1);
                    i--;
                }
                if(array[i].wpm > array[j].wpm) {
                    array.splice(j, 1);
                    j--;
                }
            }
        }
    }
    return array;
}