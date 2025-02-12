---
title: INTEGRACIÓN DE MAILCHIP
description: Tutorial paso a paso para activar Mailchimp y obtener tu API Key.
---

#### Integración de Mailchimp con eV4

##### Paso 1: Crear una cuenta en Mailchimp

- **Visita el sitio web de Mailchimp**: Ve a [Mailchimp](https://mailchimp.com) y haz clic en "Sign Up Free" para crear una cuenta.
- **Completa el formulario de registro**: Ingresa tu correo electrónico, nombre de usuario y contraseña. Luego, haz clic en "Get Started".

##### Paso 2: Configurar tu cuenta

- **Verifica tu correo electrónico**: Mailchimp enviará un correo de verificación. Haz clic en el enlace del correo para verificar tu cuenta.
- **Completa la configuración**: Ingresa los detalles solicitados, como tu nombre, dirección, nombre de tu empresa, etc.

##### Paso 3: Obtener tu API Key

1. **Inicia sesión en tu cuenta de Mailchimp**.
2. **Accede a tu perfil**:
    - Haz clic en tu nombre en la esquina inferior izquierda de la pantalla.
    - En el menú desplegable, selecciona "Account" (Cuenta).
3. **Ir a la sección de API Keys**:
    - En la página de tu cuenta, selecciona **"Extras"** y luego **"API keys"**.
4. **Generar una nueva API Key**:
    - Si no tienes una clave API, haz clic en el botón **"Create A Key"** (Crear una clave).
    - Mailchimp generará una nueva clave API para ti. Copia esta clave ya que la necesitarás para tu integración.
   
##### Paso 4: Integrar Mailchimp con eV4

1. **Acceder al módulo de Mailchimp en eV4**:
    - Ingresa al módulo de Mailchimp en eV4.
2. **Asignar la API Key**:
    - Asigna la API Key que generaste anteriormente. Si es necesario, también deberás asignar el servidor correspondiente.
3. **Guardar los cambios**:
    - Haz clic en "Guardar" para asegurarte de que los cambios se apliquen correctamente.
4. **Verificar la integración**:
    - Si todo está bien, se debería recuperar la lista de envío de Mailchimp automáticamente.
    - Solo deberás añadir los clientes a esta lista y se actualizará de forma automática.

##### Paso 5: Generar campañas en Mailchimp

Una vez configurada la integración, podrás generar campañas directamente desde Mailchimp, usando las listas de clientes que se han actualizado automáticamente desde eV4.