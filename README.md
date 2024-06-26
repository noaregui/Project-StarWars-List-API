<div align="center">
	<h1 align="center">🌌 Banco de datos de Star Wars</h1>
</div>
<p>Esta base de datos es tu guía completa para explorar una galaxia muy, muy lejana. También te servirá para empezar a utilizar API's y practicar con ellas teniendo un proyecto de referencia.</p>
<div align="center">
	<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNjbHBxeWhhbXBvaWRnNHFnb2dzb2g1eDV0ejlicjBkamM3aDQ5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/067WrjChzDtxj1wH0F/giphy.webp"></img>
</div>

# 🌐 ¿Qué es una API?
<p>Una API (Interfaz de Programación de Aplicaciones) permite a diferentes aplicaciones comunicarse entre sí. En términos sencillos, es como un mensajero que toma solicitudes, les dice a otras aplicaciones lo que necesitas y luego te devuelve la respuesta. Es como un menú en un restaurante. El menú te dice qué platos puedes pedir y cómo estarán preparados. Cuando haces tu pedido, la cocina (el sistema) lo prepara y te lo sirve. No necesitas saber cómo se cocina la comida, solo haces el pedido y recibes lo que pediste.

Ejemplos de APIs:

- 🗺️ API de Google Maps: Permite a las aplicaciones integrar mapas y funciones de localización. Por ejemplo, una app de delivery puede mostrarte tu ubicación y la ruta del repartidor en tiempo real.

- 🐦 API de Twitter: Permite a las aplicaciones publicar tweets, leer perfiles y obtener datos de trending topics. Por ejemplo, una herramienta de gestión de redes sociales puede programar y publicar tweets automáticamente.

- 💵 API de PayPal: Permite a las aplicaciones procesar pagos. Por ejemplo, una tienda online puede usar esta API para permitir a sus clientes pagar con PayPal.

- 🌩️ API de OpenWeather: Permite a las aplicaciones obtener información meteorológica. Por ejemplo, una app de clima puede mostrar el pronóstico del tiempo usando los datos de esta API.

Las APIs son esenciales porque permiten a los desarrolladores construir aplicaciones más ricas y funcionales sin tener que construir todo desde cero.</p>

# 💫 SWAPI
<p>Gracias a la API de Star Wars, tenemos el primer conjunto de datos del universo Star Wars, perfectamente cuantificados y listos para que los explores. Después de horas y horas de ver películas y sumergirse en contenido en línea, los creadores de esta API nos traen datos sobre personajes, películas, especies, naves espaciales, vehículos y planetas. Estos datos están en formato JSON y se pueden acceder a través de una implementación RESTish. Eso significa que ahora puedes recopilar y medir todos esos datos geniales sobre Star Wars de una manera súper fácil.

<div align="center">
  <a href="https://swapi.dev/">SWAPI</a>
  <br></br>
  <img width="400" src="https://media0.giphy.com/media/3o7abL1nxw0AvOK1pu/100.webp?cid=790b7611sor4vaigzed9r0zsk78i3qx4lgmpdcwmw37vs5rv&ep=v1_gifs_search&rid=100.webp&ct=g">
</div>

# WebApp boilerplate with React JS
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/img/how-to.png?raw=true" /></a>
</p>


### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles
You can update the `styles/index.css` or create new `.css` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **Vercel:** The FREE recomended hosting provider is [vercel.com](https://vercel.com/), you can deploy in 1 minutes by typing the following 2 commands:

Login (you need to have an account):
```sh
$ npm i vercel -g && vercel login
```
Deploy:
```sh
$ vercel --prod
```
✎ Note: If you don't have an account just go to vercel.com, create a account and come back here.

![Vercel example procedure to deploy](https://github.com/4GeeksAcademy/react-hello-webapp/blob/4b530ba091a981d3916cc6e960e370decaf2e234/docs/deploy.png?raw=true)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)

## Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
