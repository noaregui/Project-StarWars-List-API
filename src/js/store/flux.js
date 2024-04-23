const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [], 
        },
        
        actions: {
            cargarPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(err => console.error(err));
            },
                       
            cargarVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => setStore({ vehiculos: data.results }))
                    .catch(err => console.error(err));
            },            
            cargarPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }))
                    .catch(err => console.error(err));
            },
        }
    };
};

export default getState;