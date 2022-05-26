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
a= {

}
let writers = arr[0].variants;

console.log (Object.length(a));
console.log(arr[0].variants.length)
const keys = Object.keys(arr[0].variants)

//const arr = (arr[0].variants[keys[keys.length*Math.random()<<0]])