# 🧙‍♂️ **Documentación: Shopify Simulator | Shuffle Store**

Este es un simulador para probar plantillas de Shopify en un entorno local.

## 🚀 **Instalación**

Sigue estos pasos para instalar y ejecutar el proyecto en tu computadora.

### 1️⃣ Clonar el repositorio:

```bash
git clone <repo-url>
cd shuffle-store
```

### 2️⃣ Instalar dependencias:

```bash
npm install
```

### 3️⃣ Compilar los archivos:

```bash
npm run build
```

### 4️⃣ Ejecutar el servidor:

```bash
npm start
```

---

## 📂 **Estructura del proyecto**

```
/shuffle-store
├── /config
│   ├── settings_data.json        # Almacena datos dinámicos para renderizar secciones
│   ├── settings_schema.json      # Define configuraciones personalizables para secciones
├── /data
│   ├── collections.json          # Datos de colecciones de ejemplo
│   ├── products.json             # Datos de productos de ejemplo
├── /public
│   ├── main.js                   # Archivo JavaScript compilado
├── /sections
│   ├── featured-products.liquid  # Sección principal que muestra listas de productos
│   ├── footer.liquid             # Sección del pie de página de la tienda
│   ├── header.liquid             # Sección del encabezado con el logo y la navegación
│   ├── hero-banner.liquid        # Sección del banner principal destacado
│   ├── latest-collection.liquid  # Sección que muestra la colección más reciente
│   ├── top-bar.liquid            # Barra superior con anuncios o información adicional
├── /snippets
│   ├── product-card.liquid       # Fragmento reutilizable para tarjetas de productos individuales
├── /src
│   ├── app.js                    # Lógica principal del sitio
│   ├── logo_switcher.js          # Script para cambiar el logo dinámicamente
│   ├── scroll_handler.js         # Script para manejar el desplazamiento del menú
│   ├── scroll_to_top.js          # Script para mostrar el botón de "volver arriba"
│   ├── styles.css                # Archivo base de CSS
├── /templates
│   ├── index.liquid              # Archivo principal de la plantilla
├── /assets                       # Imágenes de productos, colecciones, banners y fuentes
├── package.json                  # Archivo de configuración del proyecto y dependencias
├── server.js                     # Servidor local para simular Shopify
├── webpack.config.js             # Configuración de webpack para compilar archivos
```

---

## ⚠️ **Notas importantes**

✅ El directorio `node_modules/` **NO** está en el repositorio para mantenerlo ligero.  
✅ Asegúrate de ejecutar `npm install` antes de iniciar el proyecto.

---

**¡Listo! Ahora puedes ejecutar y probar el simulador en tu máquina local.**  
Si tienes preguntas, contacta con el equipo de desarrollo. 😁

## 📷 **Captura de pantalla**
![](https://github.com/JDavidex/shuffle-store/blob/main/(1).png)
