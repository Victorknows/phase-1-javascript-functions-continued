// code your solution here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`

}console.log(saturdayFun());

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`

}console.log(mondayWork());

function wrapAdjective(wrapper = "*"){
    return function (adjective = "a hard worker"){
    return `You are ${wrapper}${adjective}${wrapper}!`}

}