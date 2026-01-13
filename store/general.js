import { defineStore } from "pinia";
import logogato from "~/assets/imgs/exitos/gatolatte.png"
import logocriollo from "~/assets/imgs/exitos/criollo.png"
import logocatsa from "~/assets/imgs/exitos/catsa.png"
import fs1 from "~/assets/imgs/asesoriasjuridicas.png"
import fs2 from "~/assets/imgs/acompañamientojuridico.png"
import fs4 from "~/assets/imgs/Redaccióndecontratos.png"
import fs3 from "~/assets/imgs/redacciondocumentos.png"
import fs5 from "~/assets/imgs/capacitacionesycharlas.png"
import fs6 from "~/assets/imgs/Contenidolegal.png"
import fs7 from "~/assets/imgs/leyylegislativos.png"

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
            name:"Asesorías jurídicas",
            photo:fs1,
            description:"En la Fundación Abogando por los Animales brindamos asesorías jurídicas orientadas a fundaciones, rescatistas y personas que trabajan en la protección animal. Atendemos las problemáticas y dudas de nuestros clientes con un lenguaje claro y accesible, acompañado de una fundamentación jurídica sólida que garantiza respuestas responsables y de calidad."
            ,open:true
        },
        {
            name:"Acompañamiento jurídico",
            photo:fs2,
            description:"En la Fundación Abogando por los Animales brindamos acompañamiento jurídico permanente a fundaciones, rescatistas y personas dedicadas a la protección animal, guiándolos en cada etapa de sus procesos legales. Nuestro servicio incluye orientación estratégica, revisión de actuaciones, seguimiento de trámites y apoyo en la toma de decisiones, con el propósito de ofrecer seguridad jurídica y fortalecer el trabajo que realizan en favor del bienestar animal."
            ,open:false
        },
        {
            name:"Redacción de contratos",
            photo:fs4,
            description:"Prestamos el servicio de redacción de contratos, acompañando a nuestros clientes de manera integral en sus procesos de constitución, organización interna o asuntos de carácter tributario, asegurando claridad, legalidad y seguridad jurídica."
            ,open:false
        },
        {
            name:"Pedagogías, capacitaciones y charlas",
            photo:fs5,
            description:"Desarrollamos espacios de formación dirigidos a fundaciones, rescatistas y comunidades interesadas en la protección animal, con el fin de fortalecer sus conocimientos jurídicos y promover una gestión responsable y transparente."
            ,open:false
        },
        {
            name:"Redacción de documentos",
            photo:fs3,
            description:"Ofrecemos el servicio de redacción de documentos jurídicos con el propósito de brindar soluciones efectivas a nuestros clientes. Cada documento cuenta con la debida estructura y fundamentación legal para ser presentado ante entidades públicas, privadas o personas con las que exista algún desacuerdo o conflicto."
            ,open:false
        },
        {
            name:"Contenido legal y colaboraciones en redes sociales",
            photo:fs6,
            description:"Creamos contenido jurídico enfocado en la defensa y protección de los animales, así como colaboraciones con organizaciones y creadores de contenido, con el objetivo deinformar, educar y generar conciencia en la comunidad."
            ,open:false
        },
        {
            name:"Intervenciones en proyectos de ley y opinión en marcos legislativos",
            photo:fs7,
            description:"En la Fundación Abogando por los Animales participamos activamente en el análisis, elaboración y revisión de proyectos de ley, así como en la emisión de conceptos jurídicos y opiniones técnicas sobre marcos legislativos relacionados con la protección animal. Nuestro trabajo busca aportar insumos claros y fundamentados que contribuyan a la construcción de normas más justas, eficaces y acordes con la realidad de las fundaciones, rescatistas y organizaciones que trabajan por el bienestar de los animales.."
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