export async function getAllSpecialize(){
    const response = await fetch('');
    const data = await response.json();
    
    const specialize = [];
    for(const key in data){
        specialize.push({
            id:key,
            ...data[key],
        });
    }

    return specialize;
}
