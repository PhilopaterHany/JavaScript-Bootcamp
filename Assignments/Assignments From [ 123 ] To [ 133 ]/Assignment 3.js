let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMapInfo = new Map(Object.entries(myInfo));
console.log(myMapInfo);
console.log(myMapInfo.size);
console.log(myMapInfo.has("role"));
/*
    Needed Output:
    Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    3
    true
*/
