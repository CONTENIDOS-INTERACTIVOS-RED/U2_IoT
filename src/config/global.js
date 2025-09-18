export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Protocolos y Seguridad en IoT',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Protocolos y seguridad en IoT',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos clave (MQTT, CoAP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'MQTT: Características y usos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'CoAP: Características y ventajas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'HTTP/HTTPS para IoT',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'BLE (Bluetooth Low Energy) y Zigbee',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Riesgos de seguridad en IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Amenazas comunes: piratería informática, software malicioso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Vulnerabilidades de dispositivos IoT',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Brechas de seguridad en redes IoT',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Impacto de los ataques en sistemas IoT',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Domínguez Mínguez, T. (2020). Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/280029?page=1',
    },
    {
      referencia:
        'Domínguez Mínguez, T. (2021). Alexa. Desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/280039?page=1',
    },
    {
      referencia:
        'Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414',
    },
    {
      referencia:
        'Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1',
    },
    {
      referencia:
        'Domínguez Mínguez, T. (2021). Google Assistant: desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/281469?page=1',
    },
    {
      referencia:
        'Ruiz-Velasco Sánchez, E. & Bárcenas López, J. (2025). Educatrónica tecnología de inteligencia artificial (robótica, programación e internet de las cosas): (1 ed.). Newton Edición y Tecnología Educativa.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/280532?page=1',
    },
    {
      referencia:
        'Domótica DaVinci. (2020, 24 de abril). 20200422 Webinar Introducción a MQTT. [Vídeo] YouTube.',
      link: 'https://youtu.be/ZMnSWYk0aSo',
    },
    {
      referencia:
        'thethings.iO. (2016, 21 de enero). How to learn CoAP in 5 minutes. [Vídeo] YouTube.',
      link: 'https://youtu.be/0llAm_uzR0Q',
    },
    {
      referencia:
        'Internet Society Colombia Chapter. (2019, 4 de junio). Seguridad en IoT: Construyendo Confianza Digital. Internet Society Colombia Chapter y CEA-IoT. [Vídeo] YouTube.',
      link: 'https://www.youtube.com/live/68vVHQllTYA',
    },
    {
      referencia:
        'IoT CS LAC. (2023, 27 de agosto). Protegiendo la privacidad en la era del IoT: La importancia del cifrado de datos. [Vídeo] YouTube.',
      link: 'https://youtu.be/iyvNMTdn_qo',
    },
    {
      referencia:
        'IoT CS LAC. (2023, 27 de agosto). IoT y la ciberseguridad. [Vídeo] YouTube.',
      link: 'https://youtu.be/yvv9APAei8Q',
    },
  ],
  glosario: [
    {
      termino: 'Advanced Encryption Standard (AES)',
      significado:
        'algoritmo de cifrado simétrico ampliamente adoptado que utiliza bloques de datos de 128 bits y claves de 128, 192 o 256 bits, diseñado específicamente para proporcionar alta seguridad con eficiencia computacional optimizada para dispositivos con recursos limitados.',
    },
    {
      termino: 'Agente (Broker)',
      significado:
        'servidor intermediario en arquitecturas de comunicación que recibe, almacena y distribuye mensajes entre dispositivos publicadores y suscriptores, facilitando el desacoplamiento completo entre productores y consumidores de información en redes IoT.',
    },
    {
      termino: 'Algoritmo de cifrado',
      significado:
        'conjunto de reglas matemáticas y procedimientos computacionales utilizados para transformar datos legibles en información cifrada, garantizando confidencialidad mediante técnicas criptográficas que requieren claves específicas para el proceso de descifrado.',
    },
    {
      termino: 'Almacenamiento temporal (Cache)',
      significado:
        'mecanismo de memoria de alta velocidad que conserva temporalmente datos frecuentemente accedidos para reducir latencia de comunicación y mejorar eficiencia energética en dispositivos IoT con limitaciones de ancho de banda.',
    },
    {
      termino: 'API (Application Programming Interface)',
      significado:
        'conjunto de protocolos, herramientas y definiciones que permiten la comunicación entre diferentes componentes de software, facilitando la integración de dispositivos IoT con plataformas de servicios y aplicaciones empresariales.',
    },
    {
      termino: 'Aprendizaje federado (Federated Learning)',
      significado:
        'técnica de aprendizaje automático que permite entrenar modelos estadísticos utilizando datos distribuidos sin centralizar información personal, preservando privacidad mediante computación local en dispositivos individuales.',
    },
    {
      termino: 'Autenticación',
      significado:
        'proceso de verificación de identidad que confirma la legitimidad de usuarios, dispositivos o sistemas antes de otorgar acceso a recursos protegidos, utilizando credenciales, certificados digitales o características biométricas únicas.',
    },
    {
      termino: 'Autoridad certificadora (Certificate Authority)',
      significado:
        'entidad confiable responsable de emitir, gestionar y revocar certificados digitales que verifican la identidad de dispositivos o usuarios en infraestructuras de clave pública, garantizando autenticidad en comunicaciones seguras.',
    },
    {
      termino: 'Baliza (Beacon)',
      significado:
        'dispositivo de baja potencia que transmite periódicamente señales identificadoras de corto alcance, utilizado principalmente en sistemas de localización y proximidad para tracking de activos y navegación interior.',
    },
    {
      termino: 'BLE (Bluetooth Low Energy)',
      significado:
        'tecnología de comunicación inalámbrica diseñada para aplicaciones que requieren ultra bajo consumo energético, operando en topología estrella con alcance de corto a medio rango y optimizada para dispositivos IoT operados por batería.',
    },
    {
      termino: 'Calidad de Servicio (Quality of Service - QoS)',
      significado:
        'mecanismo que garantiza diferentes niveles de confiabilidad en la entrega de mensajes, desde transmisión sin confirmación hasta entrega garantizada con acknowledgment duplicado, permitiendo balancear confiabilidad con eficiencia energética.',
    },
    {
      termino: 'Carga útil (Payload)',
      significado:
        'porción de datos transmitidos que contiene la información efectiva del mensaje, excluyendo cabeceras de protocolo y metadatos de control, representando el contenido real que requiere procesamiento por la aplicación receptora.',
    },
    {
      termino: 'Certificado digital',
      significado:
        'documento electrónico que vincula una clave pública con la identidad de su propietario, emitido por una autoridad certificadora confiable y utilizado para verificar autenticidad e integridad en comunicaciones seguras.',
    },
    {
      termino: 'Cifrado',
      significado:
        'proceso criptográfico que transforma información legible en datos codificados utilizando algoritmos matemáticos y claves secretas, garantizando que solo receptores autorizados puedan acceder al contenido original mediante descifrado apropiado.',
    },
    {
      termino: 'Cifrado homomórfico',
      significado:
        'técnica criptográfica avanzada que permite realizar operaciones matemáticas sobre datos cifrados sin necesidad de descifrarlos previamente, facilitando computación en la nube mientras preserva confidencialidad de información sensible.',
    },
    {
      termino: 'Clave criptográfica',
      significado:
        'secuencia de bits utilizada por algoritmos de cifrado para transformar datos entre estados cifrados y descifrados, cuya longitud y aleatoriedad determinan directamente el nivel de seguridad proporcionado por el sistema criptográfico.',
    },
    {
      termino: 'CoAP (Constrained Application Protocol)',
      significado:
        'protocolo de comunicación diseñado específicamente para dispositivos con severas limitaciones de recursos, implementando un modelo RESTful sobre UDP con características de descubrimiento automático y observación de recursos.',
    },
    {
      termino: 'Computación en el borde (Edge Computing)',
      significado:
        'paradigma de procesamiento distribuido que acerca capacidades computacionales a la fuente de generación de datos, reduciendo latencia y ancho de banda requerido mientras mejora privacidad y disponibilidad de servicios IoT.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio de seguridad que garantiza que información sensible solo sea accesible por entidades autorizadas, implementado mediante técnicas de cifrado y controles de acceso que previenen divulgación no autorizada de datos.',
    },
    {
      termino: 'DTLS (Datagram Transport Layer Security)',
      significado:
        'protocolo de seguridad basado en TLS pero optimizado para comunicaciones UDP, proporcionando cifrado, autenticación e integridad para transmisiones de datagramas sin requerir conexiones confiables subyacentes.',
    },
    {
      termino: 'Filtración de datos (Data Leakage)',
      significado:
        'exposición no autorizada de información confidencial que puede ocurrir durante transmisión, almacenamiento o procesamiento, representando una violación de seguridad que compromete privacidad y puede resultar en consecuencias legales significativas.',
    },
    {
      termino:
        'Función física no clonable (Physical Unclonable Function - PUF)',
      significado:
        'característica única e inmutable derivada de variaciones microscópicas en el proceso de fabricación de circuitos integrados, utilizada para generar identificadores criptográficos únicos imposibles de duplicar o falsificar.',
    },
    {
      termino: 'Gestión de claves',
      significado:
        'proceso integral que abarca generación, distribución, almacenamiento, rotación y revocación de material criptográfico, asegurando que claves sean protegidas adecuadamente durante todo su ciclo de vida operacional.',
    },
    {
      termino: 'HKDF (HMAC-based Key Derivation Function)',
      significado:
        'función criptográfica que deriva múltiples claves secretas a partir de un material inicial compartido, utilizando algoritmos HMAC para generar claves específicas para diferentes propósitos mientras mantiene propiedades de seguridad.',
    },
    {
      termino: 'Hogar inteligente (Smart Home)',
      significado:
        'ecosistema residencial integrado que utiliza dispositivos IoT interconectados para automatizar y optimizar funciones domésticas como iluminación, climatización, seguridad y entretenimiento mediante control centralizado y aprendizaje de patrones de uso.',
    },
    {
      termino: 'HTTP/HTTPS',
      significado:
        'protocolos de transferencia de hipertexto que facilitan comunicación entre clientes y servidores web, donde HTTPS añade una capa de seguridad mediante cifrado TLS para proteger confidencialidad e integridad de datos transmitidos.',
    },
    {
      termino:
        'Infraestructura de clave pública (Public Key Infrastructure - PKI)',
      significado:
        'framework completo que gestiona creación, distribución, uso y revocación de certificados digitales y claves criptográficas asimétricas, proporcionando base para autenticación fuerte y comunicaciones seguras a gran escala.',
    },
    {
      termino: 'Integridad',
      significado:
        'principio de seguridad que garantiza que datos no hayan sido alterados, corruptos o modificados de manera no autorizada durante transmisión o almacenamiento, verificado mediante técnicas como funciones hash criptográficas y firmas digitales.',
    },
    {
      termino: 'Internet de las Cosas (IoT)',
      significado:
        'red global de dispositivos físicos interconectados que incorporan sensores, software y conectividad para recolectar, intercambiar y actuar sobre datos, transformando objetos cotidianos en sistemas inteligentes capaces de comunicación autónoma.',
    },
    {
      termino: 'JSON (JavaScript Object Notation)',
      significado:
        'formato ligero de intercambio de datos basado en texto que utiliza sintaxis legible para representar estructuras de datos complejas, ampliamente adoptado en aplicaciones web y APIs debido a su simplicidad y eficiencia de análisis.',
    },
    {
      termino: 'K-anonimato',
      significado:
        'técnica de protección de privacidad que garantiza que cada registro en un dataset no pueda ser distinguido de al menos k-1 otros registros respecto a atributos identificadores, reduciendo riesgo de re-identificación individual.',
    },
    {
      termino: 'Latencia',
      significado:
        'tiempo de retraso entre el envío de una solicitud y la recepción de respuesta correspondiente, parámetro crítico en sistemas IoT que impacta directamente en responsividad de aplicaciones en tiempo real y experiencia del usuario.',
    },
    {
      termino: 'Microcódigo (Firmware)',
      significado:
        'software de bajo nivel embebido permanentemente en hardware que controla funciones básicas del dispositivo, incluyendo inicialización del sistema, gestión de recursos e interfaces de comunicación con software de aplicación.',
    },
    {
      termino: 'MQTT (Message Queuing Telemetry Transport)',
      significado:
        'protocolo de mensajería ligero basado en arquitectura publicar-suscribir, diseñado para comunicaciones eficientes en redes con limitaciones de ancho de banda y dispositivos con recursos computacionales restringidos.',
    },
    {
      termino: 'Pasarela, puerta o portal (Gateway)',
      significado:
        'dispositivo intermediario que conecta diferentes redes o protocolos de comunicación, facilitando interoperabilidad entre dispositivos IoT heterogéneos, proporcionando funcionalidades de traducción, agregación y filtrado de datos.',
    },
    {
      termino: 'Piratería informática (Hacking)',
      significado:
        'actividad de acceso no autorizado a sistemas computacionales mediante explotación de vulnerabilidades de seguridad, técnicas de ingeniería social o herramientas especializadas para comprometer confidencialidad, integridad o disponibilidad de información.',
    },
    {
      termino: 'Privacidad diferencial (Differential Privacy)',
      significado:
        'técnica matemática que añade ruido estadísticamente calibrado a datasets para prevenir identificación individual mientras preserva utilidad analítica de información agregada, proporcionando garantías cuantificables de protección de privacidad.',
    },
    {
      termino: 'Protocolo',
      significado:
        'conjunto de reglas y estándares que definen cómo dispositivos se comunican entre sí, especificando formatos de mensajes, procedimientos de intercambio de datos y mecanismos de control de errores para garantizar interoperabilidad.',
    },
    {
      termino: 'Protocolo de enlace (Handshake)',
      significado:
        'secuencia de mensajes intercambiados entre dispositivos para establecer parámetros de comunicación segura, incluyendo autenticación mutua, negociación de algoritmos criptográficos y establecimiento de claves de sesión compartidas.',
    },
    {
      termino: 'Publicar-suscribir (Publish-Subscribe)',
      significado:
        'patrón de comunicación asíncrona donde productores de información publican mensajes a temas específicos sin conocimiento directo de consumidores, mientras suscriptores reciben datos relevantes basándose en sus intereses declarados.',
    },
    {
      termino: 'Punto final (Endpoint)',
      significado:
        'dirección específica en una red donde un servicio web o API está disponible para recibir solicitudes, representando la interfaz de comunicación entre aplicaciones cliente y recursos del servidor.',
    },
    {
      termino: 'Red de malla (Mesh Network)',
      significado:
        'topología de red donde cada nodo se conecta directamente con múltiples otros nodos, proporcionando redundancia y auto-reparación mediante enrutamiento dinámico que mantiene conectividad incluso cuando fallan nodos individuales.',
    },
    {
      termino: 'Red de robots (Botnet)',
      significado:
        'colección de dispositivos comprometidos controlados remotamente por atacantes para ejecutar actividades maliciosas coordinadas como ataques de denegación de servicio distribuido, minería de criptomonedas o distribución de software malicioso.',
    },
    {
      termino: 'REST (Representational State Transfer)',
      significado:
        'estilo arquitectónico para servicios web que utiliza métodos HTTP estándar para realizar operaciones sobre recursos identificados por URLs, proporcionando interfaz uniforme y sin estado para comunicación entre sistemas distribuidos.',
    },
    {
      termino: 'RSA (Rivest-Shamir-Adleman)',
      significado:
        'algoritmo de cifrado asimétrico que utiliza factorización de números primos grandes como base de seguridad, empleado principalmente para intercambio seguro de claves, autenticación digital y firma de documentos electrónicos.',
    },
    {
      termino: 'Segmentación de red',
      significado:
        'práctica de dividir una red en subredes separadas para limitar propagación de amenazas, mejorar rendimiento y implementar controles de acceso granulares que restringen comunicación entre diferentes tipos de dispositivos.',
    },
    {
      termino: 'Sensor',
      significado:
        'dispositivo que detecta y mide fenómenos físicos del entorno como temperatura, humedad, presión o movimiento, convirtiendo estas magnitudes en señales eléctricas procesables por sistemas de control y monitoreo automatizados.',
    },
    {
      termino: 'Seudonimización',
      significado:
        'técnica de protección de datos que reemplaza identificadores directos con pseudónimos reversibles, reduciendo riesgo de identificación individual mientras preserva capacidad de vincular registros para análisis estadísticos legítimos.',
    },
    {
      termino: 'Sistema embebido',
      significado:
        'computadora especializada integrada en un dispositivo más grande para controlar funciones específicas, caracterizada por recursos limitados, propósito dedicado y requerimientos estrictos de eficiencia energética y confiabilidad operacional.',
    },
    {
      termino: 'Software malicioso (Malware)',
      significado:
        'programa diseñado intencionalmente para causar daño, robar información o comprometer sistemas computacionales, incluyendo virus, gusanos, troyanos y ransomware especializados para explotar vulnerabilidades de dispositivos IoT.',
    },
    {
      termino: 'Sobrecarga (Overhead)',
      significado:
        'recursos computacionales, de memoria o ancho de banda adicionales requeridos por protocolos de comunicación o técnicas de seguridad más allá del contenido útil transmitido, impactando eficiencia energética en dispositivos con limitaciones de recursos.',
    },
    {
      termino: 'TCP (Transmission Control Protocol)',
      significado:
        'protocolo de transporte confiable que garantiza entrega ordenada y sin errores de datos mediante establecimiento de conexión, control de flujo y retransmisión automática de paquetes perdidos o corrompidos.',
    },
    {
      termino: 'Telemetría',
      significado:
        'proceso automatizado de recolección y transmisión de mediciones desde ubicaciones remotas hacia sistemas centralizados de monitoreo y análisis, permitiendo supervisión en tiempo real de parámetros operacionales críticos.',
    },
    {
      termino: 'Temas (Topics)',
      significado:
        'estructura jerárquica utilizada en protocolos publicar-suscribir para categorizar y enrutar mensajes según contenido o fuente, permitiendo suscripción selectiva y distribución eficiente de información relevante a consumidores específicos.',
    },
    {
      termino: 'TLS (Transport Layer Security)',
      significado:
        'protocolo criptográfico que proporciona comunicaciones seguras sobre redes no confiables mediante cifrado de datos, autenticación de identidades y verificación de integridad de mensajes transmitidos.',
    },
    {
      termino: 'UDP (User Datagram Protocol)',
      significado:
        'protocolo de transporte sin conexión que prioriza velocidad sobre confiabilidad, transmitiendo datagramas sin garantizar entrega, orden o detección de errores, apropiado para aplicaciones que toleran pérdida ocasional de datos.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'debilidad o falla en diseño, implementación o configuración de sistemas que puede ser explotada por atacantes para comprometer seguridad, acceder a información no autorizada o disrumpir operaciones normales.',
    },
    {
      termino: 'WiFi',
      significado:
        'tecnología de comunicación inalámbrica basada en estándares IEEE 802.11 que permite conexión de dispositivos a redes locales sin cables, proporcionando acceso a internet y comunicación entre dispositivos en área de cobertura limitada.',
    },
    {
      termino: 'Zigbee',
      significado:
        'protocolo de comunicación inalámbrica basado en IEEE 802.15.4 diseñado para aplicaciones de bajo consumo energético que requieren redes de malla autoorganizadas con capacidades de enrutamiento multisalto e interoperabilidad entre fabricantes.',
    },
  ],
}
