import { HistoryType } from "../interfaces/history"
export const getHistoryData = ():HistoryType[]=>{
    let data = localStorage.getItem("historyData",);
    if(data){
            return JSON.parse(data);
    }else{
        return []
    }
}

export const setHistoryData = (newData: HistoryType) =>{
    console.log(newData)
    let data = getHistoryData();
    console.log(data)
    let newDatas = [newData, ...data]
    localStorage.setItem("historyData",JSON.stringify(newDatas))
}
