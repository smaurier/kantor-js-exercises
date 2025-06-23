function unique(arr){
    let set = new Set(arr);
    return Array.from(set);
}

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let map = new Map(); 
map.set(" name", "John"); 
let keys = Array.from( map.keys());
keys.push(" more"); 
alert( keys);