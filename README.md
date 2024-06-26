<div align="center">
	<h1 align="center">🌌 Banco de datos de Star Wars</h1>
</div>
<p>Esta base de datos es tu guía completa para explorar una galaxia muy, muy lejana. También te servirá para empezar a utilizar API's y practicar con ellas teniendo un proyecto de referencia.</p>
<div align="center">
	<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNjbHBxeWhhbXBvaWRnNHFnb2dzb2g1eDV0ejlicjBkamM3aDQ5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/067WrjChzDtxj1wH0F/giphy.webp"></img>
</div>

## 🌐 ¿Qué es una API?
<p>Una API (Interfaz de Programación de Aplicaciones) permite a diferentes aplicaciones comunicarse entre sí. En términos sencillos, es como un mensajero que toma solicitudes, les dice a otras aplicaciones lo que necesitas y luego te devuelve la respuesta. Es como un menú en un restaurante. El menú te dice qué platos puedes pedir y cómo estarán preparados. Cuando haces tu pedido, la cocina (el sistema) lo prepara y te lo sirve. No necesitas saber cómo se cocina la comida, solo haces el pedido y recibes lo que pediste.

Ejemplos de APIs:

- 🗺️ API de Google Maps: Permite a las aplicaciones integrar mapas y funciones de localización. Por ejemplo, una app de delivery puede mostrarte tu ubicación y la ruta del repartidor en tiempo real.

- 🐦 API de Twitter: Permite a las aplicaciones publicar tweets, leer perfiles y obtener datos de trending topics. Por ejemplo, una herramienta de gestión de redes sociales puede programar y publicar tweets automáticamente.

- 💵 API de PayPal: Permite a las aplicaciones procesar pagos. Por ejemplo, una tienda online puede usar esta API para permitir a sus clientes pagar con PayPal.

- 🌩️ API de OpenWeather: Permite a las aplicaciones obtener información meteorológica. Por ejemplo, una app de clima puede mostrar el pronóstico del tiempo usando los datos de esta API.

Las APIs son esenciales porque permiten a los desarrolladores construir aplicaciones más ricas y funcionales sin tener que construir todo desde cero.</p>

## 💫 SWAPI
<p>Gracias a la API de Star Wars, tenemos el primer conjunto de datos del universo Star Wars, perfectamente cuantificados y listos para que los explores. Después de horas y horas de ver películas y sumergirse en contenido en línea, los creadores de esta API nos traen datos sobre personajes, películas, especies, naves espaciales, vehículos y planetas. Estos datos están en formato JSON y se pueden acceder a través de una implementación RESTish. Eso significa que ahora puedes recopilar y medir todos esos datos geniales sobre Star Wars de una manera súper fácil.

<div align="center">
  <a href="https://swapi.tech/">SWAPI</a>
  <br></br>
  <img width="400" src="https://media0.giphy.com/media/3o7abL1nxw0AvOK1pu/100.webp?cid=790b7611sor4vaigzed9r0zsk78i3qx4lgmpdcwmw37vs5rv&ep=v1_gifs_search&rid=100.webp&ct=g">
</div>

## 👾 Otras APIs
Os dejo algunas APIs gratuitas para futuros proyectos:
1. 📍 Mapbox API: Ofrece datos de ubicación precisos
   <div align="center">
	   <a href="https://docs.mapbox.com/api/overview/">Mapbox API</a>
	   <br></br>
   </div>
   
2. 👩🏾‍🚀 NASA API: Tiene una excelente base de datos actualizada de información sobre el espacio.
   <div align="center">
	   <a href="https://api.nasa.gov/">NASA API</a>
	   <br></br>
   </div>
   
3. 🗣️ Favorite Quotes API: Proporciona una gran coleccion de citas.
   <div align="center">
	   <a href="https://favqs.com/api">Favorite Quotes API</a>
	   <br></br>
   </div>
   
4. 🍛 Edamam API: Proporciona acceso a una base de datos de alimentos y recetas con análisis de salud.
   <div align="center">
	   <a href="https://www.edamam.com/">Edamam API</a>
	   <br></br>
   </div>
   
5. 🛍️ Fake Store API: Es una API gratuita que puede utilizar siempre que necesite datos pseudorreales para su sitio página de w-commerce.
   <div align="center">
	   <a href="https://fakestoreapi.com/">Fake Store API</a>
	   <br></br>
   </div>
   
6. 🐦‍🔥 Pokemon API: Toda la base de datos de Pokemon en un mismo sitio.
   <div align="center">
	   <a href="">PokéAPI</a>
	   <br></br>
   </div>
   
7. 🎮 IGDB API: Es una popular base de datos de videojuegos con una API pública para crear excelentes sitios web orientados a videojuegos.
   <div align="center">
	   <a href="https://www.igdb.com/api">IGDB API</a>
	   <br></br>
   </div>

## 🌱 Cómo empezar este proyecto
Clona este repositorio:
```
https://github.com/4GeeksAcademy/react-hello-webapp
```

## 📝 Instrucciones
1. 🖌️ Bootstrap: Si estás empezando yo te recomiendo que utilices componentes de Bootstrap. A medida que hagas la conexión con la API podrás añadir CSS.
2. 🪐 SWAPI: Tómate tu tiempo para entender la SWAPI. Si bien las APIs no tienen por qué ser complicadas, toma su tiempo entender la documentación.
3. 🚀 Fetch: Haremos fetch de personas, vehículos y planetas de la SWAPI para mostrarlos en tu aplicación.
4. ❤️ Favoritos: Haremos una sección de favoritos para que puedas guardar personajes, naves o planetas.

# 🗂️ Adicionales
La SWAPI no proporciona las imágenes, pero puedes usar:
- La visual guide de star wars:
```
https://starwars-visualguide.com/#/
```
- Peakpx para buscar imágenes en general:
```
https://www.peakpx.com/
```

## 📬 Importante
Asegúrate de estar usando la versión 10 de node.

1. Instalar paquetes:
```
$ npm install
```
2. Crear el archivo .env:
```
$ cp .env.example .env
```
3. ¡Empieza con el código! y el servidor de desarrollo webpack con recarga en vivo, para windows, mac, linux o Gitpod:

```
$ npm run start
```

### 🎨Estilos
Puede actualizar `styles/index.css` o crear nuevos archivos `.css` dentro de `styles/` e importarlos a sus archivos scss o js actuales según tus necesidades.

### 📱 Componentes
Agrega más archivos a tu carpeta `./src/js/components` cuando sea necesario.

## 👥 Contribución

Si deseas contribuir al desarrollo de la web o tienes sugerencias para mejorar sus funcionalidades, ¡no dudes en hacer un fork del repositorio y enviar un pull request!

## 📃 Contacto

Puedes contactarme a través de [LinkedIn](https://www.linkedin.com/in/ainhoa-leon-arrieta/) si tienes preguntas o comentarios adicionales sobre el proyecto o simplemente quieres crear red.

<div align="center">
	<h2>Ahora sí...</h2>
	<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZnYmY0NXgxdGIzMWdmNzNlcGs3Ymp5YXhmd2NzdjdueXZ0bnRpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FxzFK4yudFHRFde/giphy.webp"></img>
</div>

