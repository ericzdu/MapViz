/*
const VERTICES = [
    [64.700000, 10.536199],
    [2.300882, -5.245390],
    [10.447378, 58.157706],
    [39.100000, 122.300000],
    [50.103201, -143.478490],
    [23.717925, -67.132330],
    [-50.103200, 36.521510],
    [-23.717930, 112.867673],
    [-2.300882, 174.754610],
    [-10.447350, -121.842290],
    [-39.100000, -57.700000],
    [-64.700000, -169.463800],
];
*/

const VERTICES = [
    [0.4415683007545653, 0.18389136319533403],
    [1.5306383601950244, -0.09154932605118538],
    [1.3884551824944764, 1.0150434551068612],
    [0.8883725892651138, 2.134537675189065],
    [0.6963305035563812, -2.5041720562897587],
    [1.1568404438038205, -1.1716801930353649],
    [2.44526213258012, 0.6374205973000342],
    [1.9847522970524352, 1.9699125129143058],
    [1.6109542933947687, 3.050043327538608],
    [1.7531369824031262, -2.1265491286697618],
    [2.253220064324679, -1.007054978400728],
    [2.7000243528352277, -2.9577012729411667],
];

const VERTICES_CARTESIAN = [
    [0.4201524287963156, 0.07814524921851057, 0.9040825496607784],
    [0.995009439987289, -0.09134779012968701, 0.04014717393048303],
    [0.5188366732006228, 0.8354202936131274, 0.1813324007491937],
    [-0.4146822208515423, 0.6559624087023035, 0.6306758074312863],
    [-0.5154559650332432, -0.3817169022652032, 0.7672009871192198],
    [0.35578134977500225, -0.84358002678342, 0.4022342222690181],
    [0.5154559757940429, 0.3817169102340293, -0.7672009759245598],
    [-0.3557813803041364, 0.843579975812004, -0.40223430216467426],
    [-0.995009439987289, 0.09134779012968702, -0.040147173930482914],
    [-0.5188366616293684, -0.8354204051140312, -0.18133192015858757],
    [0.4146822208515425, -0.6559624087023036, -0.6306758074312859],
    [-0.42015242743242387, -0.07814525655155384, -0.9040825496607783],
];

const ISO = [
    [2, 1, 6],
    [1, 0, 2],
    [0, 1, 5],
    [1, 5, 10],
    [1, 6, 10],
    [7, 2, 6],
    [2, 3, 7],
    [3, 0, 2],
    [0, 3, 4],
    [4, 0, 5],     
    [5, 4, 9],
    [9, 5, 10],
    [10, 9, 11],
    [11, 6, 10],
    [6, 7, 11],
    [8, 3, 7],
    [8, 3, 4],
    [8, 4, 9],
    [9, 8, 11],
    [7, 8, 11],
    [11, 6, 7],  
    [3, 7, 8],     
];

for(let i = 0;i < 22;i++){
    let vec1 = VERTICES_CARTESIAN[ISO[i][0]];
    let vec2 = VERTICES_CARTESIAN[ISO[i][1]];
    let vec3 = VERTICES_CARTESIAN[ISO[i][2]];

    let xsum = vec1[0] + vec2[0] + vec3[0];
    let ysum = vec1[1] + vec2[1] + vec3[1];
    let zsum = vec1[2] + vec2[2] + vec3[2];

    let mag = Math.sqrt(xsum * xsum + ysum * ysum + zsum * zsum);
    console.log((xsum / mag), (ysum / mag), (zsum / mag)); 
    console.log(CartesiantoGeo(xsum / mag, ysum / mag, zsum / mag)[0], CartesiantoGeo(xsum / mag, ysum / mag, zsum / mag)[1]);
}


function fromGeoDimaxion(lat, lon) {
    //first check if input is in range 
    if(Math.abs(lat) > 90 || Math.abs(lon) > 180) {
        throw new Error("Latitude must be between -90 and 90, and longitude must be between -180 and 180.");
    }

    //convert geo to spherical coordinates
    let phi = toRadians(90 - lat); //latitude [1]
    let lambda = toRadians(lon); //longitude [0]

    //convert spherical coordinates to cartesian coordinates
    let sinphi = Math.sin(phi);
    let x = sinphi * Math.cos(lambda);
    let y = sinphi * Math.sin(lambda);
    let z = Math.cos(phi); 

    //let face = 

}

function GeoToCartesian(lat, lon){
    let phi = toRadians(90 - lat); //latitude [1]
    let lambda = toRadians(lon); //longitude [0]

    //let sinphi = Math.sin(phi);
    //let x = sinphi * Math.cos(lambda);
    //let y = sinphi * Math.sin(lambda);
    //let z = Math.cos(phi); 

    return [phi, lambda]; 
}

function CartesiantoGeo(x, y, z) {
    let lambda = Math.atan2(y, x);
    let phi = Math.atan2(Math.sqrt(x * x + y * y), z);

    //convert spherical coordinates to geo coordinates
    let lat = 90 - toDegrees(phi); //latitude [1]
    let lon = toDegrees(lambda); //longitude [0]

    return [lat, lon]; 
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function populateCentroids() {
}

function findTriangle(x, y, z) {
    let min = Infinity; 
    let face = 0; 

    for(let i = 0; i < 20; i++){
        //let xd - x;
        //let yd - y;
        //let zd - z;

    }
}

//46.72416120030138, -117.18839638247752