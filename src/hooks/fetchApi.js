

export const fetchApi =async (ciudad,pais) => {

    const Api_kEY = '3fe6374765a2ad1752062ce74269719f';


    
    const url =await fetch(`api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${Api_kEY}`);
    const resp = await url.json();
    console.log(resp);
}