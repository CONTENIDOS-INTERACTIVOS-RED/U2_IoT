<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Esta unidad temática se enfoca en la implementación segura de protocolos de comunicación en el Internet de las Cosas (IoT), competencia clave en el desarrollo de soluciones tecnológicas modernas. Ante la creciente interconexión de dispositivos que intercambian datos sensibles, se vuelve indispensable para los ingenieros de software dominar protocolos especializados y técnicas de seguridad ajustadas a entornos con recursos limitados.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left").mb-5 El contenido permite al estudiante seleccionar protocolos adecuados, aplicar medidas de protección y diseñar arquitecturas criptográficas que aseguren la integridad, confidencialidad y autenticación de los datos. Este conocimiento es esencial para enfrentar los riesgos y desafíos de seguridad en entornos industriales y empresariales IoT.

    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La unidad se divide en tres partes: protocolos de comunicación (como MQTT y CoAP), riesgos de seguridad (amenazas, vulnerabilidades y mitigaciones), y técnicas de cifrado y autenticación. Se recomienda combinar el estudio teórico con ejercicios prácticos y análisis crítico de casos reales, apoyándose en conocimientos previos de redes, programación y criptografía.

</template>
