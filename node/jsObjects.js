let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print(students){
    for(let i = 0 ; i < students.length; i++){
    console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort)
    }
}

print(students)

function printUsers(users){
    for(key in users){
    console.log(key.toUpperCase())
    for(let i = 0; i < users[key].length; i++){
        combine = users[key][i].first_name.concat(users[key][i].last_name)
        console.log([i+ 1]+ " - " + users[key][i].last_name.toUpperCase() + ", " + users[key][i].first_name.toUpperCase() + " - " + combine.length)
    }
    }
}

printUsers(users);