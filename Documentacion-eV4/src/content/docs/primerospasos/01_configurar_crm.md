---
title: Primeros Pasos para Configurar el Módulo CRM en eV4
---

El módulo CRM de eV4 ERP es una herramienta potente para gestionar contactos, leads y oportunidades de negocio de manera eficiente. Sin embargo, para aprovechar al máximo sus funcionalidades, es crucial realizar una configuración inicial adecuada. En este post, te guiaremos paso a paso en la configuración básica del CRM para asegurarte de que tu equipo comercial pueda trabajar de forma óptima.

## Paso 1: Configuración de la Creación de Contactos

Cuando se genera un contacto en el CRM, ya sea manualmente o a través de un formulario web, es importante configurar los campos requeridos y las reglas para que el proceso sea coherente. Estos son los campos que deben completarse al crear un contacto:

- **Fecha de contacto**: Fecha en la que se establece el primer contacto con el cliente.
- **Hora de contacto**: Hora exacta del contacto inicial.
- **Nombre comercial**: Nombre de la empresa o comercio del cliente.
- **Documento**: Identificación legal (NIF, CIF, etc.).
- **Razón social**: Nombre legal de la empresa.
- **Persona de contacto**: Nombre de la persona con la que se ha hecho el contacto.
- **Teléfono**: Número de contacto del cliente.
- **Email**: Correo electrónico del contacto.
- **Origen del contacto**: Indica de dónde proviene el lead (web, llamada, evento, etc.).
- **Dirección**: Dirección física del cliente.
- **Código Postal**: Código postal correspondiente a la dirección del cliente.

Esta información básica garantiza que cada nuevo contacto esté bien identificado y listo para futuras gestiones.

## Paso 2: Configuración de Oportunidades

Es esencial configurar correctamente la generación de oportunidades en el sistema para realizar un seguimiento adecuado del proceso comercial. Estas configuraciones aseguran que las oportunidades se creen automáticamente y sean visibles de manera correcta en el CRM.

### Generación automática de oportunidades:
- Configura el sistema para que al crear un presupuesto, se genere automáticamente una oportunidad de seguimiento. Esto permite que el responsable comercial gestione la evolución del presupuesto dentro del CRM.

### Fases de oportunidad:
- **Fase oportunidad aceptada**: Indica la fase en la que se encuentra una oportunidad cuando se ha aceptado un presupuesto. Esta podría ser "Cerrado - Ganado".
- **Fase oportunidad cancelada**: Define la fase para oportunidades que se han perdido o cancelado, como "Cerrado - Perdido".
- **Ocultar oportunidades canceladas**: Configura el sistema para que las oportunidades canceladas se oculten automáticamente del panel de gestión, facilitando una visión más limpia de las oportunidades activas.

### Oportunidades desde contacto web:
- **Fase oportunidad Contacto web**: Define la fase en la que se colocan las oportunidades que provienen de formularios de contacto en la web, como "Nuevo".

### Visualización en la agenda:
- Para controlar el flujo de seguimiento, puedes configurar que las oportunidades, una vez creadas, sean visibles en la agenda del CRM, lo que permite al equipo comercial gestionar sus tiempos y próximos eventos de forma ordenada.

### Estados de alquiler visibles en timeline:
- Si trabajas con vehículos de alquiler, puedes configurar los siguientes estados para su visualización en el timeline:
  - Anuladas
  - En curso
  - Incidencia
  - Pendiente
  - Recepcionado
  - Reservada

## Paso 3: Campos Requeridos para Crear Oportunidades

Para cada oportunidad generada, ya sea manualmente o a través de un presupuesto, es necesario asegurarse de que se recopilen los siguientes campos requeridos:

- **Contacto**: Cliente asociado a la oportunidad.
- **Nombre**: Nombre descriptivo de la oportunidad.
- **Fase**: Estado actual de la oportunidad (por ejemplo: Nuevo, En negociación, Cerrado - Ganado).
- **Fecha próximo evento**: Fecha programada para el próximo contacto o acción relacionada con la oportunidad.
- **Probabilidad**: Porcentaje estimado de que la oportunidad se cierre exitosamente.
- **Proyecto**: Proyecto al que está vinculada la oportunidad, si aplica.
- **Fuente**: Origen del lead o oportunidad.
- **Notas**: Información adicional relevante sobre la oportunidad.

## Paso 4: Configuración de Auto-Oportunidades desde Presupuestos

Una de las funcionalidades más eficientes del CRM en eV4 es la generación automática de oportunidades a partir de presupuestos. Esta configuración permite que el sistema convierta presupuestos en oportunidades de forma automática, con los siguientes parámetros:

- **Fase oportunidad**:
  - Cuando se genera un presupuesto, se asigna automáticamente una fase de oportunidad predeterminada. Esto permite un seguimiento continuo desde la generación del presupuesto hasta el cierre de la venta.

- **Guardar datos del presupuesto en el campo "Nombre"**:
  - Configura el sistema para que el nombre de la oportunidad se complete automáticamente con los datos del presupuesto generado. Esto facilita la identificación rápida de la oportunidad en el sistema.

- **Usar nombre reducido del artículo**:
  - En lugar de utilizar el nombre completo del artículo o vehículo, puedes configurar el CRM para que use un nombre reducido o clave, lo que facilita la visualización de oportunidades en la interfaz del CRM.

## Conclusión

Una configuración adecuada del módulo CRM de eV4 te permite gestionar leads y oportunidades de manera eficiente, automatizando gran parte del proceso de seguimiento y generación de presupuestos. Configurar los campos requeridos y definir cómo se gestionan las oportunidades desde su creación hasta su conversión en ventas optimiza el trabajo del equipo comercial y asegura que ningún lead o presupuesto quede sin seguimiento.

## Lecturas Recomendadas

- [Gestión de Oportunidades en eV4 ERP](../../primerpresupuesto/pagina4)
- [Generación y Seguimiento de Presupuestos en el Módulo CRM de eV4](./03_generacion_crm)