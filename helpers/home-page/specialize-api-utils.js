export async function getAllSpecialize(){
    const response = await fetch("http://localhost:8080/portfolio/specialize");
    const data = await response.json(); 
    
    const specialize = [];
    for(const key in data){
        specialize.push({
            ...data[key],
        });
    }
    return specialize;
}
