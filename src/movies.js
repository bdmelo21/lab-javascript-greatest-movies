// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (movies) => {
    return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {
    if (movies.length===0) {
        return 0;
    }
    let spielbergDramaMovies= movies.filter (movie => {
        return movie.genre.includes ('Drama') && movie.director === 'Steven Spielberg';
    });

    return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (movies) => {
    if (movies.length===0) {
        return 0;
    }
    let totalSum= 0;
    movies.forEach((movie) => {
        if(!movie.rate){
            movie.rate = 0;
        }
        totalSum+= movie.rate;
    });
   let avg= totalSum/movies.length;
    return Number(avg.toFixed(2));

    // let recueSum = movies.reduce ((accumulator, currentValue) yada yada - remember to specify a specific value )
}

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (movies) => {
    let dramaMoviesSelect= movies.filter (movie=> {
        return movie.genre.includes ('Drama');});
    if (dramaMoviesSelect.length===0) {
        return 0;
    }
    return ratesAverage(dramaMoviesSelect);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (movies) => {
    let movieYear = movies.sort((movie1,movie2) => {
        if (movie1.year===movie2.year) {
            if (movie1.title > movie2.title) {
                return 1;
            }
            return -1;
        }
        else {
            if (movie1.year> movie2.year) {
                return 1;
            } else {
                return -1;
            }
            }
        });

        //spread Operator 
    return [...movieYear];
    }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (movies) => {
    let sortedNames=[...movies].sort ((movie1,movie2)=> {
        if (movie1.title>movie2.title) {
            return 1;
        } else {
            return -1;
        }
    }). slice (0,20); //function that slices the array from index [i] to index [y]
    return sortedNames.map (movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (movies) => {
    let durationArray = movies.map ((movie)=>movie.duration);
    for (i=0;i<durationArray.length; i++){
        if(durationArray[i].includes('0h')) {
            let slicedString1= durationArray[i].replace(/0h/g, "");
            let slicedString2 = slicedString1.replace(/min/g, "");
            let cleanStr = slicedString2.replace(/ /g, "");
            let integer = parseInt(cleanStr, 10);
            durationArray[i]=integer;
            return durationArray[i];
        }
        else if (durationArray[i].includes ('h') && durationArray[i].includes ('0h')===false && durationArray[i].includes ('min')===false) {
            cleanStr = durationArray[i].replace(/ /g, "");
            slicedString1 = cleanStr.replace (/h/g, "");
            integer = parseInt(slicedString1, 10);
            durationArray[i] = integer*60;
            return durationArray[i];
        }
        else if (durationArray[i].includes ('min') && [durationArray.includes ('0h')===false && durationArray[i].includes ('h')]) {
            cleanStr = durationArray[i].replace(/ /g, "");
            slicedString1 = cleanStr.replace (/min/g, "");
            integer = parseInt(slicedString1, 10);
            durationArray[i] = integer;
            return durationArray[i];
        }
        else if (durationArray[i].includes ('min') && durationArray.includes ('h')) {
            slicedString=durationArray[i].split (" ");
            splits= slicedString[0].replace(/h/g, "");
            cleanStr=slicedString[1].replace(/min/g, "");
            integersplit1= parseInt(splits, 10);
            integersplit1= integersplit1*60;
            integer = parseInt(cleanStr, 10);
            durationArray[i] = integer+integersplit1;
            return durationArray[i];
        }
    }
    return durationArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
let bestYearAvg = (movies) => {
    let sumRate=0;
    let avg=0;
    let bestavg=0;
    let year=0;
    if (movies.length===0) {
        return null;
    }
    let yearArray=movies.map((movie)=>movie.year);
    yearArray.forEach(element => {
       let yearArray1= movies.filter(element);
       let yearRate= yearArray1.rate;
        yearRate.forEach(element1 => {
            sumRate+=element1;
            if (element1===yearRate[(yearRate.length)-1]) {
                avg= sumRate/yearRate.length;
            }
            if (avg>bestavg) {
                bestavg=avg;
                year=element;
            }  
        });
    });
    return `The best year was ${year} with an average rate of ${bestavg}`;
}
    











