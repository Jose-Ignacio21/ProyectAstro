---
title: Gestión de Stock y Artículos con Dependencia en eV4
---

En EV4, la funcionalidad de "Dependencias de Stock" permite gestionar inventarios de manera eficiente, especialmente cuando se tiene un producto genérico que se vende bajo diferentes referencias o nombres. Al generar una venta de alguno de estos artículos, el sistema descontará automáticamente la misma cantidad del producto genérico, ayudando a mantener un control preciso del inventario.
## ¿Cómo funciona la gestión de dependencias de stock?

1.    **Configuración del Artículo Principal**: El artículo principal es el producto genérico que se descontará cuando se venda cualquiera de sus variantes. Por ejemplo, en la imagen adjunta, se tiene un producto genérico de "Camisetas".

2.    **Definición de Artículos Dependientes**: Estos son los productos específicos que se venden bajo distintas referencias. Cada uno de estos artículos está configurado para descontar stock del artículo principal al momento de la venta. En el ejemplo proporcionado, las "Camisetas" vienen en diferentes colores (Azul, Rosa, Verde, Naranja, Amarillo, etc.).

3.    **Configuración en EV4**:
        - **Crear el Artículo Principal**: Registrar el producto genérico en el sistema.
        - **Configurar las Dependencias**: En la sección de "Dependencias de Stock", especificar las variantes del producto que descontarán del stock del artículo principal. Esto se muestra en la imagen donde diferentes referencias de camisetas de colores están configuradas para descontar stock de sus respectivas variantes genéricas.

## Ejemplo Práctico:

Supongamos que tenemos las siguientes referencias configuradas:

   - **PL001-1AM** - Comprar Camisetas (Amarillo)
        - Dependencias: PL001-3AM, PL001-4AM, PL001-5AM, PL001-6AM (Diferentes tipos de camisetas de fiesta en color amarillo)

   - **PL001-1AZ** - Comprar Camisetas (Azul)
        - Dependencias: PL001-3AZ, PL001-4AZ, PL001-5AZ, PL001-6AZ (Diferentes tipos de camisetas de fiesta en color azul)

Cuando se realiza una venta de "PL001-1AM", el sistema descontará automáticamente las cantidades correspondientes de "PL001-3AM", "PL001-4AM", "PL001-5AM" y "PL001-6AM", asegurando que el inventario refleje con precisión las existencias.
## Pasos para Configurar Dependencias de Stock en EV4:

1.    **Acceder al Módulo de Inventario:**
       - Navegar a la sección de gestión de inventarios en EV4.

2.    **Registrar el Artículo Principal:**
       - Crear y guardar el artículo genérico principal en el sistema.

3.    **Definir las Dependencias:**
       - En la opción "Dependencias de Stock", añadir las referencias específicas que dependerán del artículo principal.
       - Guardar los cambios y verificar que todas las dependencias estén correctamente configuradas.

## Beneficios de las Dependencias de Stock:

   - **Precisión en el Inventario**: Asegura que el stock de los productos genéricos se actualice correctamente al vender cualquier variante.
   - **Facilidad de Gestión**: Simplifica la gestión de múltiples referencias de un mismo producto.
   - **Optimización de Ventas**: Permite tener un control más preciso de las existencias, evitando ventas de productos agotados.

## Conclusión

La funcionalidad de "Dependencias de Stock" en EV4 es una herramienta poderosa para gestionar inventarios con precisión. Configurar correctamente las dependencias asegura que siempre se mantenga un control exacto del stock, optimizando tanto la gestión interna como la experiencia del cliente.

Para más detalles sobre cómo implementar esta funcionalidad en EV4, consulta la documentación del sistema o ponte en contacto con el soporte técnico de EV4.