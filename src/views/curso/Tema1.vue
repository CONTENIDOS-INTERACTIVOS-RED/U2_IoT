<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Protocolos y seguridad en IOT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-5 Al adentrarse en el estudio del Internet of Things (IoT), se descubre que los protocolos de comunicación constituyen el fundamento tecnológico que permite la interconexión eficiente entre dispositivos inteligentes. Estos protocolos no solo facilitan el intercambio de información, sino que también determinan aspectos cruciales como el consumo energético, la velocidad de transmisión y la confiabilidad del sistema IoT. La comprensión profunda de protocolos especializados como MQTT, CoAP, HTTP/HTTPS, BLE y Zigbee permite diseñar soluciones IoT robustas y eficientes que respondan a los requerimientos específicos de cada aplicación en el campo de la ingeniería de software.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", alt="")


    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/infografia1.svg', alt='', style="max-width: 886px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7%" y="83%" numero="+")
                h5 MQTT
                p Facilita el intercambio de información en sistemas con bajo consumo energético.

    
              .bg-color-white.box-shadow.p-3(x="7%" y="60%" numero="+")
                h5 CoAP
                p Optimizado para dispositivos con recursos limitados.
    
              .bg-color-white.box-shadow.p-3(x="40%" y="3.5%" numero="+")
                h5 HTTP/HTTPS
                p Utilizado en aplicaciones donde se requiere compatibilidad con servicios web.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="60%" numero="+")
                h5 BLE
                p Permite comunicación eficiente en distancias cortas con bajo consumo.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="83%" numero="+")
                h5 Zigbee
                p Adecuado para redes de dispositivos con comunicación constante y confiable.
    
                
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 La seguridad en el ecosistema IoT representa uno de los desafíos más críticos que enfrentan los profesionales en ingeniería de software. Los dispositivos IoT, por su naturaleza distribuida y su conectividad constante, presentan múltiples vectores de ataque que pueden comprometer tanto la integridad de los datos como la privacidad de los usuarios. Las amenazas van desde ataques de denegación de servicio hasta la interceptación de datos sensibles, lo que requiere una comprensión integral de las vulnerabilidades inherentes a estos sistemas. La capacidad para identificar, evaluar y mitigar estos riesgos resulta fundamental para desarrollar aplicaciones IoT seguras y confiables.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las técnicas de cifrado y autenticación en IoT demandan un enfoque especializado que considere las limitaciones computacionales y energéticas de los dispositivos conectados. El dominio de algoritmos de cifrado eficientes como AES y RSA, adaptados a las restricciones específicas del hardware IoT, proporciona las herramientas necesarias para proteger la comunicación entre dispositivos. La gestión adecuada de claves criptográficas, junto con técnicas avanzadas de autenticación, permite desarrollar sistemas IoT que cumplan con los más altos estándares de seguridad sin comprometer el rendimiento operativo.
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280029?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2020). Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266: (1 ed.). Marcombo. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280039?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2021). Alexa. Desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414" target="_blank" rel="noopener noreferrer") Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata. 
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/ZMnSWYk0aSo" target="_blank" rel="noopener noreferrer") Domótica DaVinci. (2020, 24 de abril). 20200422 Webinar Introducción a MQTT. [Vídeo] YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/0llAm_uzR0Q" target="_blank" rel="noopener noreferrer") thethings.iO. (2016, 21 de enero). How to learn CoAP in 5 minutes. [Vídeo] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
