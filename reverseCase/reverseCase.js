/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverseCase = (data) => {
<<<<<<< HEAD
    data.map((element) => {
          if (element !== element.toUpperCase()) {
            element.toUpperCase();
        } else {
            element.toLowerCase();
        }
    }); 
    return data;
=======
 const workingArr =[];
    data.forEach((element) => {
          if (element !== element.toUpperCase()) {
            workingArr.push(element.toUpperCase());
        } else {
        workingArr.push(element.toLowerCase());
        }

    }); 
    return workingArr;

>>>>>>> 41f3304937f57850a6dacbd8a39fe09d56444667
};

const test = reverseCase(['a','B','c','D']);
console.log(test);