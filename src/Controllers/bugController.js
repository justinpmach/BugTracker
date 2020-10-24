import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 123456789,
        name: "Crash on Land",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        assigned: "Justin Mach",
        creator: "Joe Bloggs",
        priority: 1,
        time: "16:06",
    }))

    data.push(new bugModel({
        _id: 123456789,
        name: "Won't Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        assigned: "Justin Mach",
        creator: "Joe Bloggs",
        priority: 3,
        time: "16:06",
    }))

    let sorted = data.sort((a, b)=>{return a.priority - b.priority})
    return sorted;
}