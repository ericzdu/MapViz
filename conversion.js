//let coordinates = prompt("input coordinates here: ", ); 
//console.log("hello");

//43.05538518656072, -89.41800407989629
//42.732148°  -90.200779°
//37.35447/139.16242 osm coordinates 

//42°01'11.68" N  97°15'54.51" W
//43° 27.296' N 102° 4.654' W   

//46° 52.587' N 101° 25.072' W
//46.876446° -101.417872°

inputCoordinates = "43° 27.296' n 102° 4.654' W   ";

console.log("input coordinates: " + inputCoordinates);
console.log(cleanCoordinates(inputCoordinates));

let coordinates = coordinate.trim(",");


function cleanCoordinates(coordinates) {
    let cleanCoordinates = coordinates.trim();

    //check if coordinates are in DMS format
    if(/[NS]/i.test(coordinates)){
        cleanCoordinates = cleanCoordinates.replace(/ /g, "");
        cleanCoordinates = cleanCoordinates.toUpperCase();
        if(cleanCoordinates.includes("N")){
            cleanCoordinates = cleanCoordinates.replace("N", "N,");

        }else{
            //contains south
            cleanCoordinates = cleanCoordinates.replace("S", "S,");
        }
    }else{
        //delete unnesescary characters
        if (cleanCoordinates.includes(",")) {
            cleanCoordinates = cleanCoordinates.replace(",", " ");
        }
        if (cleanCoordinates.includes("/")) {
            cleanCoordinates = cleanCoordinates.replace("/", "  ");
        }
        if (cleanCoordinates.includes("°")) {
            cleanCoordinates = cleanCoordinates.replace(/°/g, "");
        }
        if (cleanCoordinates.includes("  ")) {
            cleanCoordinates = cleanCoordinates.replace("  ", ",");
        }
    }

    return cleanCoordinates
}

function checkCoordinates(coordinates){
    if(isNaN(coordinates.charAt(0))){
        throw new Error("Coordinates must start with a number.");
    }else if(!coordinates.includes(",")){
        throw new Error("Coordinates must contain a comma.");
    }else if (!/[NS]/.test(coordinates) && !/[EW]/.test(coordinates)) {
        throw new Error("Coordinates must contain N/S and E/W.");
    }else if(/^[a-mo-rt-z]$/i.test(coordinates)){
        throw new Error("Coordinates contain invalid letters.");
    }

    if(coordinates.includes("N") || coordinates.includes("S")){
        if(coordinates.includes("\"")){
            return "DMS"
        }else{
            return "DDM"
        }
    }else{
        return "DD"
    }
}

function convertDMS(coordinates){
    //let longitude = coordinates[0];
    //let latitude = coordinates[1];
    let result = ""

    for(let i = 0;i < 2;i++){
        let split = coordinates[i].split([/°'"/]);
        if(coordinates[i].includes("S") || coordinates[i].includes("W")){
            split[0] = -split[0];
        }
        result.concat(split[0].concat(split[1]/60).concat(split[2]/3600).replace(".", "")).concat(",");
    }
    //get rid of extra comma at the end
    result = result.substring(0, result.length - 1);
    return result;
}

function convertDDM(coordinates){
    //let longitude = coordinates[0];
    //let latitude = coordinates[1];
    let result = ""

    for(let i = 0;i < 2;i++){
        let split = coordinates[i].split([/°'/]);
        if(coordinates[i].includes("S") || coordinates[i].includes("W")){
            split[0] = -split[0];
        }
        result.concat(split[0].concat(split[1]/60).replace(".", "")).concat(",");
    }
    //get rid of extra comma at the end
    result = result.substring(0, result.length - 1);
    return result;
}

function convertUTM(){
    //implement later
}

function convertMGRS(){
    //implement later
}


