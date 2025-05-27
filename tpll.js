//vertex coordinates 
/*
const VERTICES = [
    [10.536199, 64.700000],
    [-5.245390, 2.300882],
    [58.157706, 10.447378],
    [122.300000, 39.100000],
    [-143.478490, 50.103201],
    [-67.132330, 23.717925],
    [36.521510, -50.103200],
    [112.867673, -23.717930],
    [174.754610, -2.300882],
    [-121.842290, -10.447350],
    [-57.700000, -39.100000],
    [-169.463800, -64.700000],
];
*/

const VERTICES = [
    [0.18389136319533403, 0.4415683007545653],
    [-0.09154932605118538, 1.5306383601950244],
    [1.0150434551068612, 1.3884551824944764],
    [2.134537675189065, 0.8883725892651138],
    [-2.5041720562897587, 0.6963305035563812],
    [-1.1716801930353649, 1.1568404438038205],
    [0.6374205973000342, 2.44526213258012],
    [1.9699125129143058, 1.9847522970524352],
    [3.050043327538608, 1.6109542933947687],
    [-2.1265491286697618, 1.7531369824031262],
    [-1.007054978400728, 2.253220064324679],
    [-2.9577012729411667, 2.7000243528352277],
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

const CENTROIDS = [
    [0.8512304529213387, 0.4722343892197569, -0.22891351567256987],
    [0.811253382680946, 0.3448952616559021, 0.47213897061779314],
    [0.7428567198424667, -0.35939418112673455, 0.5648005987577692],
    [0.740562131855761, -0.6673299732974176, -0.07898376795341266],
    [0.8075407633708374, -0.15335524286024052, -0.5695261934114375],
    [0.2846148350586324, 0.864408164249209, -0.41447909626887103],
    [-0.10554982865249263, 0.9794456920379218, 0.1718876668635252],
    [0.21993072672932934, 0.6583690495321406, 0.7198476714267087],
    [-0.21392348346505868, 0.14781718301528024, 0.9656017935088986],
    [0.10926250456619847, -0.481195169573391, 0.8697775082601049],
    [-0.28461480189212174, -0.8644081178852926, 0.4144792157369469],
    [0.10554981679265255, -0.9794457239297935, -0.1718874924207119],
    [-0.2199307462637574, -0.6583691740988273, -0.719847551530388],
    [0.2139234892966728, -0.14781718326383675, -0.9656017921788885],
    [-0.10926251056556298, 0.4811951408809471, -0.8697775233802468],
    [-0.7405621501653109, 0.6673299568757429, 0.07898373502658944],
    [-0.8075407592269365, 0.15335524627317076, 0.5695261983681509],
    [-0.8512303926869129, -0.4722344044290924, 0.22891370828236682],
    [-0.811253444093934, -0.3448953399189235, -0.4721388079240474],
    [-0.7428567177935022, 0.3593941497597244, -0.5648006214121493],
    [-0.10926251056556296, 0.4811951408809471, -0.8697775233802466],
    [-0.7405621501653109, 0.6673299568757429, 0.07898373502658945],
];

const CENTROIDS_SPHERICAL = [
    [0.5064955695927782, 1.801757741965819],
    [0.4019881772330841, 1.0790806751463253],
    [-0.45060392942097727, 0.9706047250692446],
    [-0.7334295363593504, 1.6498624486752553],
    [-0.1876693157094395, 2.176725640973267],
    [1.2527164469653886, 1.998166670433534],
    [1.6781469031882286, 1.3980507904064579],
    [1.248397432580321, 0.7672134847003013],
    [2.536945009720032, 0.2630484433874145],
    [-1.347517410484915, 0.5160450811109822],
    [-1.8888761879412208, 1.1434258518811429],
    [-1.463445765839948, 1.7435416861049893],
    [-1.893195190842197, 2.3743789961611093],
    [-0.6046476319069939, 2.8785442050874535],
    [1.794075267836678, 2.6255476031208675],
    [2.4081631417632714, 1.49173023794455],
    [2.9539233328605654, 0.9648670065862643],
    [-2.635097040316686, 1.3398347137602507],
    [-2.739604421909513, 2.0625117938838713],
    [2.6909887573036166, 2.1709879559728362],
    [1.794075267836678, 2.625547603120867],
    [2.4081631417632714, 1.49173023794455],
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

const FLIP_TRIANGLE = [
    true, false, true, false, false,
    true, false, true, false, true, false, true, false, true, false,
    true, true, true, false, false,
    true, false
];

for(let i = 0;i < 22;i++){
    //code used to calculate rotation matrices
    let centroidLambda = CENTROIDS_SPHERICAL[i][0]; //longitude
    let centroidPhi = CENTROIDS_SPHERICAL[i][1];

    let vertex = VERTICES[ISO[i][0]]; 
    let v = [vertex[0] - centroidLambda, vertex[1]];
    v = yRotate(v, -centroidPhi); //rotate the vertex to the centroid


    let a = -centroidLambda; 
    let b = -centroidPhi; 
    let c = (Math.PI / 2) - v[0]; 

    let sina = Math.sin(a);
    let cosa = Math.cos(a);
    let sinb = Math.sin(b);
    let cosb = Math.cos(b);
    let sinc = Math.sin(c);
    let cosc = Math.cos(c);

    let mat = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

    mat[0][0] = cosa * cosb * cosc - sinc * sina;
    mat[0][1] = -sina * cosb * cosc - sinc * cosa;
    mat[0][2] = cosc * sinb;

    mat[1][0] = sinc * cosb * cosa + cosc * sina;
    mat[1][1] = cosc * cosa - sinc * cosb * sina;
    mat[1][2] = sinc * sinb;

    mat[2][0] = -sinb * cosa;
    mat[2][1] = sinb * sina;
    mat[2][2] = cosb;

    //return mat;

    for(let j = 0;j < 3;j++){   
        for(let k = 0;k < 3;k++){
            process.stdout.write(mat[j][k].toString() + ", "); //print the rotation matrix
            //print(mat[j][k] + ","); //print the rotation matrix
        }
        console.log("");
    }
    console.log("");


    //code used to calculate the centroids, longitude and latitude are swapped
    //let vec1 = VERTICES_CARTESIAN[ISO[i][0]];
    //let vec2 = VERTICES_CARTESIAN[ISO[i][1]];
    //let vec3 = VERTICES_CARTESIAN[ISO[i][2]];

    //let xsum = vec1[0] + vec2[0] + vec3[0];
    //let ysum = vec1[1] + vec2[1] + vec3[1];
    //let zsum = vec1[2] + vec2[2] + vec3[2];

    //let mag = Math.sqrt(xsum * xsum + ysum * ysum + zsum * zsum);
    //console.log((xsum / mag), (ysum / mag), (zsum / mag)); 
    //console.log(CartesiantoGeo(xsum / mag, ysum / mag, zsum / mag)[0], CartesiantoGeo(xsum / mag, ysum / mag, zsum / mag)[1]);

    //code used to calculate spherical centroids
    //console.log(CartesianToGeo(CENTROIDS[i][0], CENTROIDS[i][1], CENTROIDS[i][2])[0], CartesianToGeo(CENTROIDS[i][0], CENTROIDS[i][1], CENTROIDS[i][2])[1]);
}

function fromGeoDimaxion(lat, lon) {
    //first check if input is in range 
    if(Math.abs(lon) > 180 || Math.abs(lat) > 90) {
        throw new Error("Latitude must be between -90 and 90, and longitude must be between -180 and 180.");
    }
    let xyz = GeoToCartesian(lon, lat)
    let face = findTriangle(xyz[0], xyz[1], xyz[2]);

    //rotation matrices 
}

function findTriangle(x, y, z) {
    let min = Infinity;
    let face = 0; 

    for(let i = 0; i < 20; i++){
        let xd = CENTROIDS[i][0] - x;
        let yd = CENTROIDS[i][1] - y;
        let zd = CENTROIDS[i][2] - z; 

        let dissq = xd * xd + yd * yd + zd * zd;
        if (dissq < min) {

            if (dissq < 0.1) {
                return i;
            }

            face = i;
            min = dissq;
        }
    }
    return face; 
}

function yRotate(v, angle) {
    let c = sphericalToCartesian(v[0], v[1]);
    let x = c[0];
    c[0] = c[2] * Math.sin(angle) + x * Math.cos(angle);
    c[2] = c[2] * Math.cos(angle) - x * Math.sin(angle);

    let mag = Math.sqrt(c[0] * c[0] + c[1] * c[1] + c[2] * c[2]);
    c[0] /= mag;
    c[1] /= mag;
    c[2] /= mag;

    let lambda = Math.atan2(c[1], c[0]);
    let phi = Math.atan2(Math.sqrt(c[0] * c[0] + c[1] * c[1]), c[2]);
    return [lambda, phi];
}

function sphericalToCartesian(lambda, phi) {
    let sinphi = Math.sin(phi);
    let x = sinphi * Math.cos(lambda);
    let y = sinphi * Math.sin(lambda);
    let z = Math.cos(phi);
    return [x, y, z]; 
}

function GeoToCartesian(lon, lat){
    let lambda = toRadians(lon); //longitude [0]
    let phi = toRadians(90 - lat); //latitude [1]

    let sinphi = Math.sin(phi);
    let x = sinphi * Math.cos(lambda);
    let y = sinphi * Math.sin(lambda);
    let z = Math.cos(phi); 

    return [x, y, z]; 
}

function CartesianToGeo(x, y, z) {
    let phi = Math.atan2(Math.sqrt(x * x + y * y), z);
    let lambda = Math.atan2(y, x);

    //convert spherical coordinates to geo coordinates
    //let lat = 90 - toDegrees(phi); //latitude [1]
    //let lon = toDegrees(lambda); //longitude [0]

    return [lambda, phi]; 
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
