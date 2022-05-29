arr = [
    {
        id:3,
        level:0,
        variants: {
            1:'Шевченко Т.Г.',
            2:'Українка Л.',
            3:'Франко І.Я.',
            4:'Кобилянська О.Ю'
        },
        text:'Кому належать слова:  \"Кохайтеся чорнобриві, та не з москалями\" ?',
        answer: "Т.Г. Шевченко ",
        citate: "Кохайтеся, чорнобриві,\nТа не з москалями,\nБо москалі — чужі люде,\nРоблять лихо з вами.\nМоскаль любить жартуючи,\nЖартуючи кине;\nПіде в свою Московщину,\nА дівчина гине..." 
    },
    {
        text: 'Кримськы піски,Олешківські піски,Довбушева пустка,Сербська пустеля',
    }
] 

/*
answers = object answers database 
*/
function randomAnswer (answers){ 
    let remapWriters=[];
    let writers = answers;
    let keys = Object.keys(writers);
    while (Object.keys(writers).length>0){
        let randomKey = keys.length*Math.random()<<0;
        const writer = writers[keys[randomKey]]
        delete writers[keys[randomKey]];
        keys.splice(randomKey,1)
        remapWriters.push(writer);
      
}
    return remapWriters
}
console.log(randomAnswer(arr[0].variants))