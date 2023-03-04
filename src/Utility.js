

export const searchUrl=(cityName)=>{

    const lowerCaseCityName=cityName.toLowerCase();

    const newSearchLocation=lowerCaseCityName.split("").join("+");

    return newSearchLocation;
}