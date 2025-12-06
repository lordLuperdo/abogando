import { defineStore } from "pinia";

export const useGeneralStore = defineStore('useGeneralStore',()=>{
    const servicios = [
        {
            name:"Servicio principal",
            description:"Descripción del servicio principal que tendrá la fundación Descripción del servicio principal que tendrá la fundación Descripción del servici odddd dd"
        },
        {
            name:"Servicio Secundario",
            description:"Descripción del servicio principal que tendrá la fundación Descripción del servicio principal que tendrá la fundación Descripción del servici odddd dd"
        },
        {
            name:"Servicio Secundario",
            description:"Descripción del servicio principal que tendrá la fundación Descripción del servicio principal que tendrá la fundación Descripción del servici odddd dd"
        },
    ]

    const exitos =[
        {id:1,name:"",description:""},
        {id:2,name:"",description:""},
        {id:3,name:"",description:""},
        {id:4,name:"",description:""},
        {id:5,name:"",description:""},
        {id:6,name:"",description:""},
        {id:7,name:"",description:""},
        {id:8,name:"",description:""},
        {id:9,name:"",description:""},
        {id:10,name:"",description:""},
    ]

    return {servicios,exitos}
})