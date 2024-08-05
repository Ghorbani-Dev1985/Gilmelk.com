
export default function ToLocalStringNumber(data : string | number){
    if(typeof data == "string"){
     return Number(data).toLocaleString();
    }else{
       return data.toLocaleString();
    }
}