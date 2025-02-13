---
title: Importación de datos en eV4 - Concesionario
description: Importación de datos
---

# Manual de Importación de Datos en EV4

Este manual describe el proceso de importación de datos en EV4 utilizando ficheros Excel.

## Tipos de datos importables

- **Artículos**: Puede importar artículos nuevos o actualizar información de artículos existentes.
- **Opcionales**: Puede importar nuevos opcionales o asociar opcionales existentes a artículos.

## Proceso general de importación

### 1. Selección del modelo de datos
Elija el tipo de dato que desea importar (**artículos** o **opcionales**).

### 2. Configuración de la importación

#### - **Fichero Excel**
Suba el fichero Excel que contiene los datos a importar.

#### - **Columna de referencia**
Seleccione la columna del fichero que contiene el identificador único de cada elemento (por defecto, se utiliza la columna `Referencia`).

#### - **Opción de importación**
- **Añadir nuevos elementos y actualizar existentes**: Permite crear nuevos elementos y actualizar la información de los elementos existentes que coincidan con la columna de referencia.
- **Solo actualizar elementos existentes**: Solo actualiza la información de los elementos existentes que coincidan con la columna de referencia. No se crean nuevos elementos.

#### - **Asignación de columnas**
Asigne cada columna del fichero Excel a un campo del modelo de datos de EV4.

### 3. Inicio de la importación
Haga clic en el botón **"Importar"** para iniciar el proceso de importación.

## Notificaciones

### - **Correo electrónico**
Una vez finalizada la importación, EV4 enviará un correo electrónico al usuario que inició la importación con un resumen del proceso.

### - **Panel de eventos**
La importación también se registrará en el **panel de eventos** de EV4 para que el usuario pueda realizar un seguimiento de las importaciones realizadas.

## Consideraciones adicionales

- **Familias**: Si el fichero Excel contiene información sobre familias, las familias nuevas se añadirán al grupo de familias general. El usuario deberá posteriormente asignarlas a las familias principales correspondientes.
- **Opcionales**: Las referencias de opcionales deben existir previamente en EV4. La importación asocia las referencias de opcionales con los artículos correspondientes.
- **Precios y descuentos**: EV4 asignará a los opcionales importados el precio que figura en su ficha. Si el opcional tiene descuentos o requerimientos especiales, estos deberán configurarse manualmente en la ficha del artículo correspondiente.

## Recursos adicionales

- Consulte la documentación del sistema para obtener información detallada sobre la importación de cada tipo de dato.
- Revise la sección **"Catálogo: Base de Datos de EV4"** para obtener más información sobre la gestión de elementos en el sistema.

## Mejoras realizadas

- Se ha reestructurado el texto para mejorar la claridad y la concisión.
- Se ha corregido la ortografía y la gramática.
- Se ha añadido información sobre las notificaciones de importación.
- Se han aclarado las consideraciones sobre familias, opcionales, precios y descuentos.
- Se han incluido enlaces a recursos adicionales para facilitar la consulta de información complementaria.

