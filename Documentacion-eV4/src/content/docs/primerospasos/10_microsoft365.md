---
title: Guía para Conectar Cuentas Microsoft 365, a la Bandeja de Documentos de eV4
---

Para que ev4 pueda acceder a su bandeja de entrada de correos de Microsoft 365 y procesar los correos automáticamente, es necesario realizar un sencillo proceso de autorización. Este proceso garantiza que nuestro sistema pueda acceder a los correos necesarios mientras mantiene la seguridad de su cuenta de Microsoft 365.
## Pasos para autorizar el acceso de nuestro ERP a su cuenta de Microsoft 365:

1.    **Iniciar el proceso de autorización**:
       - Cuando intente conectar su cuenta de Microsoft 365 por primera vez en nuestro ERP, será redirigido a la página de inicio de sesión de Microsoft.
       - Ingrese sus credenciales de **Microsoft 365** (correo electrónico y contraseña) para iniciar sesión.

2.    **Consentimiento del Administrador Global**:
       - Si usted es el administrador de su organización en Microsoft 365, Microsoft le pedirá que otorgue acceso a la aplicación de nuestro ERP para leer correos en su cuenta.
       - **Si no es el administrador** de la organización, deberá contactar al administrador para que realice este paso. El administrador recibirá una solicitud para aprobar el acceso a nuestra aplicación.

3.    **Aceptar los permisos solicitados**:
       - Al iniciar sesión, verá una pantalla donde se le solicitará que autorice los permisos necesarios para que nuestra aplicación pueda acceder a su bandeja de entrada.
       - Los permisos solicitados incluyen:
           - **Leer correos**: Para que podamos leer los correos no leídos en su bandeja de entrada y procesarlos en nuestro CRM.
           - **Acceso IMAP**: Permite que nuestra aplicación use IMAP para acceder al contenido de su bandeja de entrada.
       - Haga clic en el botón **"Aceptar"** para otorgar estos permisos.

4.    **Conexión exitosa**:
       - Una vez que haya otorgado el consentimiento, su cuenta de Microsoft 365 quedará conectada a nuestro ERP.
       - Nuestro sistema comenzará a leer los correos y procesarlos según lo configurado.

## Importante:

   - **Seguridad**: Este proceso de autorización utiliza **OAuth2**, un estándar de seguridad de la industria que garantiza que sus credenciales no sean compartidas directamente con nuestra aplicación. En su lugar, nuestro sistema recibe un token de acceso que nos permite leer los correos, y usted puede revocar este acceso en cualquier momento desde su panel de administración de Microsoft.
   - **Reautenticación**: En algunos casos, es posible que deba volver a autorizar el acceso si el token de acceso expira o es revocado.

## Preguntas Frecuentes (FAQ):

**1. ¿Qué ocurre si no soy el administrador de mi cuenta Microsoft 365?** Si no es el administrador global, deberá contactar a la persona encargada de la administración de Microsoft 365 en su organización para que pueda autorizar la aplicación en su nombre.

**2. ¿Puedo revocar el acceso en cualquier momento?** Sí, puede revocar el acceso en cualquier momento desde el Centro de Administración de Microsoft 365. Esto se puede hacer accediendo a las aplicaciones autorizadas y eliminando el acceso de nuestra aplicación.

**3. ¿Qué datos de mi correo se compartirán con el ERP?** Nuestro ERP solo accederá a los correos necesarios que usted ha autorizado (normalmente los no leídos) y solo para los fines específicos de su CRM. No accedemos a ninguna otra información sin su consentimiento.

**4. ¿Es seguro este proceso?** Sí, el proceso utiliza el estándar de seguridad OAuth2, que es el método más seguro disponible para la autenticación y autorización de aplicaciones externas.

Si tiene alguna duda o necesita asistencia adicional para completar el proceso, no dude en ponerse en contacto con nuestro equipo de soporte.