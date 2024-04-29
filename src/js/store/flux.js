const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            personajeSeleccionado: [],
            planetaSeleccionado: [],
            vehiculoSeleccionado: [],
            favoritos: [],
            imagenesPersonajes: ["https://w0.peakpx.com/wallpaper/468/241/HD-wallpaper-luke-skywalker-luke-skywalker-star-wars.jpg", "https://lumiere-a.akamaihd.net/v1/images/image_6fbde8ae.jpeg?region=0%2C0%2C1560%2C878", "https://w0.peakpx.com/wallpaper/189/520/HD-wallpaper-grogu-r2d2-finale-luke-skywalker-mando-season-2-star-wars-the-mandalorian.jpg", "https://w0.peakpx.com/wallpaper/327/517/HD-wallpaper-darth-vader-star-wars-movies-darth-vader.jpg", "https://w0.peakpx.com/wallpaper/139/925/HD-wallpaper-star-wars-princess-leia-organa-action-film-video-game-game-leia-organa-movie-gaming-star-wars-princess-leia-organa.jpg", "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg", "https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-1_9b5ac94f.jpeg?region=1%2C0%2C1278%2C719", "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg","https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg","https://w0.peakpx.com/wallpaper/113/727/HD-wallpaper-obi-wan-kenobi-star-wars-character-obi-wan-kenobi-star-wars-tv-shows-artstation.jpg"],
            imagenesPlanetas: ["https://media.gq.com.mx/photos/5e2368ce73e13600083c0175/master/pass/nasa-planeta-tatooine-star-wars.jpg","https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg", "https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg", "https://lumiere-a.akamaihd.net/v1/images/image_28314559.jpeg?region=0%2C87%2C500%2C200","https://lumiere-a.akamaihd.net/v1/images/image_5f5e3b8f.jpeg", "https://lumiere-a.akamaihd.net/v1/images/bespin-bio-1-cropped_c494157c.jpeg?region=133%2C0%2C1010%2C568", "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg", "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg", "https://lumiere-a.akamaihd.net/v1/images/Coruscant_0865bece.jpeg", "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=98%2C0%2C1084%2C542"],
            imagenesVehiculos: ["https://lumiere-a.akamaihd.net/v1/images/star-wars-rebels-408-trivia-gallery-1_e2e317a8.jpeg?region=0%2C0%2C1280%2C720","https://lumiere-a.akamaihd.net/v1/images/image_f030dc7f.jpeg", "https://static.wikia.nocookie.net/esstarwars/images/f/f2/T-16_skyhopper_-_SW_20.png/revision/latest?cb=20181201201037", "https://lumiere-a.akamaihd.net/v1/images/y-wing-bio-1-cropped_68da02a6.jpeg?region=29%2C0%2C969%2C546", "https://static.wikia.nocookie.net/starwars/images/0/0d/Snowspeeder.png/revision/latest?cb=20161110010008", "https://lumiere-a.akamaihd.net/v1/images/tlj-db-first-order-at-at-walker-main-image_2cd57eb2.jpeg", "https://lumiere-a.akamaihd.net/v1/images/ep5_key_504_6c3982bb.jpeg", "https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-story-gallery-plan-99-14_6e51153d.jpeg", "https://cdna.artstation.com/p/assets/images/images/070/467/710/large/christina-spicer-untitled3.jpg?1702587513", "https://lumiere-a.akamaihd.net/v1/images/the-khetanna_d1d5b294.jpeg"],
        },

        actions: {
            cargarPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }))
                    .catch(err => console.error(err));
            },
            cargarPersonajeIndividual: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ personajeSeleccionado: data.result.properties }))
                    .catch(err => console.error(err));
            },
            cargarPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(err => console.error(err));
            },

            cargarPlanetaIndividual: (id) => {
                fetch("https://swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ planetaSeleccionado: data.result.properties }))
                    .catch(err => console.error(err));
            },

            cargarVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => setStore({ vehiculos: data.results }))
                    .catch(err => console.error(err));
            },
            cargarVehiculoIndividual: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({ vehiculoSeleccionado: data.result.properties }))
                    .catch(err => console.error(err));
            },            
            añadirFavoritos: (name) => {
                setStore({favoritos: getStore().favoritos.concat(name)})
            },
            eliminarFavoritos: (name) => {
                setStore({favoritos: getStore().favoritos.filter((element)=>element!==name)})
                actions.favoritos();
            }
        }
    };
};

export default getState;