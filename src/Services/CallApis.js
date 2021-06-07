const UrlBase='https://gist.githubusercontent.com/yi-jiayu/ea4f0a6c5b9734dd82920cf739b1f707/raw/79dabce87503050d4d64d0332e2076e4d5485171/pokemon.min.json'

export const GetPokes=async()=>{
    const GetPokes = await fetch(`${UrlBase}`,{
        method:'GET'
    })
    const GetAll=await GetPokes.json()
    return GetAll
}

export default{
    GetPokes
}