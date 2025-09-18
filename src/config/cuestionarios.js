export default {
  tema2: {
    tema: '2. Creación de ramas y fusiones',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre control de versiones, Git, SVN, ramas y fusiones.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál de las siguientes afirmaciones describe correctamente una ventaja principal del uso de herramientas como Git o SVN?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Permiten programar sin necesidad de documentar el código',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Aumentan la velocidad de ejecución del software en producción',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Facilitan el seguimiento de los cambios realizados en el proyecto',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto:
              'Reemplazan totalmente los entornos de desarrollo integrados (IDE)',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las herramientas de control de versiones facilitan el seguimiento de los cambios.',
        mensaje_incorrecto:
          'Incorrecto. Las herramientas de control de versiones facilitan el seguimiento de los cambios realizados en el proyecto.',
      },
      {
        id: 2,
        texto: '¿Cuál es la principal diferencia entre Git y SVN?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto:
              'SVN guarda los cambios localmente, mientras que Git los almacena en un servidor central',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Git es una herramienta de diseño gráfico y SVN es un editor de texto',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Git es un sistema de control de versiones distribuido, mientras que SVN es centralizado',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Ambos funcionan exactamente igual, solo cambia el nombre',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Git es distribuido y SVN es centralizado.',
        mensaje_incorrecto:
          'Incorrecto. Git es un sistema de control de versiones distribuido, mientras que SVN es centralizado.',
      },
      {
        id: 3,
        texto:
          '¿Para qué se utiliza la creación de ramas (branches) en un sistema de control de versiones como Git?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Para eliminar versiones antiguas del código',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Para dividir el proyecto en múltiples archivos',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Para desarrollar funcionalidades de forma paralela sin afectar la rama principal',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Para traducir el código a otros lenguajes',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las ramas permiten el desarrollo paralelo sin afectar la rama principal.',
        mensaje_incorrecto:
          'Incorrecto. Las ramas se utilizan para desarrollar funcionalidades de forma paralela sin afectar la rama principal.',
      },
      {
        id: 4,
        texto:
          '¿Qué comando de Git se utiliza para combinar los cambios de una rama con otra?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'git branch',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'git push',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'git merge',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'git clone',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! git merge se utiliza para combinar cambios de una rama con otra.',
        mensaje_incorrecto:
          'Incorrecto. git merge es el comando para combinar cambios de una rama con otra.',
      },
      {
        id: 5,
        texto:
          '¿Qué ocurre cuando dos personas modifican la misma línea de código en diferentes ramas y luego intentan fusionarlas?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'El sistema elimina automáticamente ambas líneas',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Git ignora los cambios y guarda la versión más reciente',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Se produce un conflicto que debe resolverse manualmente',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Git bloquea permanentemente el repositorio',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Se produce un conflicto que debe resolverse manualmente.',
        mensaje_incorrecto:
          'Incorrecto. Se produce un conflicto que debe resolverse manualmente.',
      },
    ],
  },
  tema3: {
    tema: '3. Riesgos de seguridad en IoT',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre protocolos IoT y seguridad.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Qué protocolo ligero es muy utilizado en IoT para la comunicación máquina a máquina?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'FTP',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'MQTT',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'SMTP',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'HTTP',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! MQTT es el protocolo ligero más utilizado en IoT para comunicación máquina a máquina.',
        mensaje_incorrecto:
          'Incorrecto. MQTT es el protocolo ligero más utilizado en IoT para comunicación máquina a máquina.',
      },
      {
        id: 2,
        texto: '¿Cuál es una ventaja del protocolo CoAP en redes IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Consume mucho ancho de banda',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Se basa en HTTP',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Opera sobre UDP, ideal para dispositivos con pocos recursos',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Requiere conexión continua',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! CoAP opera sobre UDP y es ideal para dispositivos con recursos limitados.',
        mensaje_incorrecto:
          'Incorrecto. CoAP opera sobre UDP y es ideal para dispositivos con recursos limitados.',
      },
      {
        id: 3,
        texto: 'Una amenaza común a la seguridad en IoT es:',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'El uso de software educativo',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Actualizaciones frecuentes',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'El acceso no autorizado a dispositivos',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'El bajo voltaje',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El acceso no autorizado a dispositivos es una amenaza común en IoT.',
        mensaje_incorrecto:
          'Incorrecto. El acceso no autorizado a dispositivos es una amenaza común en IoT.',
      },
      {
        id: 4,
        texto:
          '¿Qué técnica se usa para proteger los datos transmitidos en IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Fragmentación IP',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Encriptación de extremo a extremo',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Compresión ZIP',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Streaming',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La encriptación de extremo a extremo protege los datos transmitidos en IoT.',
        mensaje_incorrecto:
          'Incorrecto. La encriptación de extremo a extremo protege los datos transmitidos en IoT.',
      },
      {
        id: 5,
        texto: '¿Por qué los dispositivos IoT suelen ser vulnerables?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Porque no tienen sensores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Porque son difíciles de usar',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Porque a menudo carecen de medidas de seguridad robustas',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Porque son caros',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Los dispositivos IoT suelen carecer de medidas de seguridad robustas.',
        mensaje_incorrecto:
          'Incorrecto. Los dispositivos IoT suelen carecer de medidas de seguridad robustas.',
      },
    ],
  },
  tema4: {
    tema: '4. Integración de pruebas automatizadas en pipelines CI/CD',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre automatización de pruebas e integración en pipelines CI/CD.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal beneficio de automatizar pruebas de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducir la cantidad de desarrolladores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Eliminar la necesidad de pruebas manuales',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejorar la eficiencia y detectar errores de forma temprana',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumentar el tiempo de desarrollo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La automatización mejora la eficiencia y permite detectar errores tempranamente.',
        mensaje_incorrecto:
          'Incorrecto. La automatización mejora la eficiencia y detecta errores de forma temprana.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para pruebas unitarias en aplicaciones Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'TestNG',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas permite la automatización de pruebas en la interfaz gráfica de una aplicación web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Git',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Selenium',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Maven',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Selenium es la herramienta principal para automatizar pruebas de interfaz web.',
        mensaje_incorrecto:
          'Incorrecto. Selenium es la herramienta para automatizar pruebas de interfaz web.',
      },
      {
        id: 4,
        texto:
          'En un pipeline CI/CD, ¿qué etapa permite validar automáticamente que los cambios en el código no introducen errores?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Ejecución de pruebas automatizadas',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Revisión de código manual',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Publicación de documentación',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registro del commit',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas automatizadas validan que los cambios no introduzcan errores.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas automatizadas son las que validan automáticamente los cambios.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es la función principal del archivo Jenkinsfile en un proyecto de automatización?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Configurar las reglas de negocio del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Definir el flujo de trabajo del pipeline CI/CD',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Gestionar los permisos de los usuarios',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Ejecutar manualmente los scripts de prueba',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
        mensaje_incorrecto:
          'Incorrecto. Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
      },
    ],
  },
  tema5: {
    tema: '5. Automatización de pruebas de software',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre automatización de pruebas de software y herramientas CI/CD.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal beneficio de automatizar pruebas de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducir la cantidad de desarrolladores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Eliminar la necesidad de pruebas manuales',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejorar la eficiencia y detectar errores de forma temprana',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumentar el tiempo de desarrollo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La automatización mejora la eficiencia y permite detectar errores tempranamente.',
        mensaje_incorrecto:
          'Incorrecto. La automatización mejora la eficiencia y detecta errores de forma temprana.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para pruebas unitarias en aplicaciones Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'TestNG',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas permite la automatización de pruebas en la interfaz gráfica de una aplicación web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Git',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Selenium',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Maven',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Selenium es la herramienta principal para automatizar pruebas de interfaz web.',
        mensaje_incorrecto:
          'Incorrecto. Selenium es la herramienta para automatizar pruebas de interfaz web.',
      },
      {
        id: 4,
        texto:
          'En un pipeline CI/CD, ¿qué etapa permite validar automáticamente que los cambios en el código no introducen errores?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Ejecución de pruebas automatizadas',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Revisión de código manual',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Publicación de documentación',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registro del commit',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas automatizadas validan que los cambios no introduzcan errores.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas automatizadas son las que validan automáticamente los cambios.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es la función principal del archivo Jenkinsfile en un proyecto de automatización?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Configurar las reglas de negocio del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Definir el flujo de trabajo del pipeline CI/CD',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Gestionar los permisos de los usuarios',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Ejecutar manualmente los scripts de prueba',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
        mensaje_incorrecto:
          'Incorrecto. Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
      },
    ],
  },
}
