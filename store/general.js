import { defineStore } from "pinia";
import logogato from "~/assets/imgs/exitos/gatolatte.png"
import logocriollo from "~/assets/imgs/exitos/criollo.png"
import logocatsa from "~/assets/imgs/exitos/catsa.png"
import fs1 from "~/assets/imgs/servicio1.png"
import fs2 from "~/assets/imgs/servici2.png"
import fs3 from "~/assets/imgs/servicio3.png"

export const useGeneralStore = defineStore('useGeneralStore',()=>{
    

    const scrollToS = (arg) => {
  const a = document.getElementById(arg)
  if (a) {
    a.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}



    const servicios = [
        {
            name:"Servicio principal",
            photo:fs1,
            description:"Descripción del servicio principal que tendrá la fundación Descripción del servicio principal que tendrá la fundación Descripción del servici odddd dd"
            ,open:true
        },
        {
            name:"Servicio Secundario",
            photo:fs2,
            description:"Descripción del servicio principal que tendrá la fundación Descripción del servicio principal que tendrá la fundación Descripción del servici odddd dd"
            ,open:false
        },
        {
            name:"Servicio Secundario",
            photo:fs3,
            description:"Descripción del servicio principal que tendrá la fundación Descripción del servicio principal que tendrá la fundación Descripción del servici odddd dd"
            ,open:false
        },
    ]

    const exitos =[
        {
            id:1,
            name:"Gato Latte",
            photo:logogato,
            description:"Ayudamos y cuidamos a gatitos recatados Toda garrita cuenta 🐾 Reserva en nuestro café y transformemos sus GatiVidas juntos 👇"},
        {
            id:2,
            name:"Criollos de la Montaña",
            photo:logocriollo,
            description:"Somos una fundación cuya sede principal está ubicada en Lenguazaque, Cundinamarca, a dos horas y media de Bogotá, constituidos legalmente desde febrero del año 2022. Albergamos actualmente 45 animales entre caninos y felinos, distribuidos entre las instalaciones de nuestro refugio y en diferentes hogares de paso."},
        {
            id:3,
            name:"La Catsa",
            photo:logocatsa,
            description:"¡Una experiencia para conectarse con la naturaleza!!🐔🐓🐱🌄 Productos y servicios 🎁Pauta para empresas con sentido zoocial🏆📢 Haz parte del cambio🙏🏼❤️🐕🐈"}, 
        
    ]

    return {servicios,exitos,scrollToS}
})