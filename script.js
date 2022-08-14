var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "Jen";
names[3] = "paul";
names[4] = "frank";
names[5] = "jason";
names[6] = "larry";
names[7] = "paula";
names[8] = "jimmy";
names[9] = "laura";
for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("GoodBye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}