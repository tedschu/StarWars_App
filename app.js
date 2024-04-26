// an app that displays data from a star wars api

// global variables
const wrapper = document.getElementById("listingWrapper");
const viewAll = document.getElementById("viewAll");

//---GETS ALL API ELEMENTS------
    // get all sw characters
    async function getAllPeople() {
        // converts response from api to real usable json
        const response = await fetch("https://swapi.py4e.com/api/people");
        return await response.json();
    }
        // get a single character

    //get all planets
    async function getAllPlanets() {
        // converts response from api to real usable json
        const response = await fetch("https://swapi.py4e.com/api/planets");
        return await response.json();
    }

        // get a single planet

    //get all vehicles
    async function getAllVehicles() {
        // converts response from api to real usable json
        const response = await fetch("https://swapi.py4e.com/api/vehicles");
        return await response.json();
    }
        // get a single vehicle

    //get all species
    async function getAllSpecies() {
        // converts response from api to real usable json
        const response = await fetch("https://swapi.py4e.com/api/species");
        return await response.json();
    }
        // get a single Vehicles

    //get all films
    async function getAllFilms() {
        // converts response from api to real usable json
        const response = await fetch("https://swapi.py4e.com/api/films");
        return await response.json();
    }
        // get a single film    

    //get all starships
    async function getAllStarships() {
        // converts response from api to real usable json
        const response = await fetch("https://swapi.py4e.com/api/starships");
        return await response.json();
    }
        // get a single starship  

        

//----RENDERS THE DIFFERENT ELEMENTS OF THE API INTO HTML-------

    // render planets
    function renderPlanets() {
        wrapper.innerHTML = "";
        getAllPlanets().then((response) => {
            response.results.forEach((i) => {
                renderSinglePlanet(i)
            })
        })
    }

                // render single planet
                function renderSinglePlanet(info) {
                    const ele = document.createElement("div");
                    const nameEle = document.createElement("h1");
                    nameEle.innerHTML = info.name;
                    ele.appendChild(nameEle)
                    wrapper.appendChild(ele);
            
                //     click to grab single planet info
                    ele.addEventListener("click", () => {
                        wrapper.innerHTML = "";
                        renderSinglePlanet(info)
                    })
                }

                // click on a button to render all the planets
                    document.getElementById("planets").addEventListener("click", ()=>{
                        renderPlanets()
                    })


        function renderPeople() {
            wrapper.innerHTML = "";
            getAllPeople().then((response) => {
                response.results.forEach((i) => {
                    renderSinglePerson(i)
                })
            })
        }
    
                    // render single people
                    function renderSinglePerson(info) {
                        const ele = document.createElement("div");
                        const nameEle = document.createElement("h1");
                        nameEle.innerHTML = info.name;
                        ele.appendChild(nameEle)
                        wrapper.appendChild(ele);
                
                    //     click to grab single person info
                        ele.addEventListener("click", () => {
                            wrapper.innerHTML = "";
                            renderSinglePerson(info)
                        })
                    }    

                    // click on a button to render all the people
                    document.getElementById("people").addEventListener("click", ()=>{
                        renderPeople()
                    })


        function renderFilms() {
            wrapper.innerHTML = "";
            getAllFilms().then((response) => {
                response.results.forEach((i) => {
                    renderSingleFilm(i)
                })
            })
        }
    
                    // render single film
                    function renderSingleFilm(info) {
                        const ele = document.createElement("div");
                        const nameEle = document.createElement("h1");
                        nameEle.innerHTML = info.title;
                        ele.appendChild(nameEle)
                        wrapper.appendChild(ele);
                
                    //     click to grab single film
                        ele.addEventListener("click", () => {
                            wrapper.innerHTML = "";
                            renderSingleFilm(info)
                        })
                    }    

                    // click on a button to render all the films
                    document.getElementById("films").addEventListener("click", ()=>{
                        renderFilms()
                    })


        function renderSpecies() {
            wrapper.innerHTML = "";
            getAllSpecies().then((response) => {
                response.results.forEach((i) => {
                    renderSingleSpecies(i)
                })
            })
        }
    
                    // render single species
                    function renderSingleSpecies(info) {
                        const ele = document.createElement("div");
                        const nameEle = document.createElement("h1");
                        nameEle.innerHTML = info.name;
                        ele.appendChild(nameEle)
                        wrapper.appendChild(ele);
                
                    //     click to grab single species
                        ele.addEventListener("click", () => {
                            wrapper.innerHTML = "";
                            renderSingleSpecies(info)
                        })
                    }    

                    // click on a button to render all the  species
                    document.getElementById("species").addEventListener("click", ()=>{
                        renderSpecies()
                    })
            


        function renderVehicles() {
            wrapper.innerHTML = "";
            getAllVehicles().then((response) => {
                response.results.forEach((i) => {
                    renderSingleVehicles(i)
                })
            })
        }
    
                    // render single vehicles
                    function renderSingleVehicles(info) {
                        const ele = document.createElement("div");
                        const nameEle = document.createElement("h1");
                        nameEle.innerHTML = info.name;
                        ele.appendChild(nameEle)
                        wrapper.appendChild(ele);
                
                    //     click to grab single vehicles
                        ele.addEventListener("click", () => {
                            wrapper.innerHTML = "";
                            renderSingleVehicles(info)
                        })
                    }    

                    // click on a button to render all the vehicles
                    document.getElementById("vehicles").addEventListener("click", ()=>{
                        renderVehicles()
                    })
            



        function renderStarships() {
            wrapper.innerHTML = "";
            getAllStarships().then((response) => {
                response.results.forEach((i) => {
                    renderSingleStarships(i)
                })
            })
        }
    
                    // render single starships
                    function renderSingleStarships(info) {
                        const ele = document.createElement("div");
                        const nameEle = document.createElement("h1");
                        nameEle.innerHTML = info.name;
                        ele.appendChild(nameEle)
                        wrapper.appendChild(ele);
                
                    //     click to grab single starships
                        ele.addEventListener("click", () => {
                            wrapper.innerHTML = "";
                            renderSingleStarships(info)
                        })
                    }    

                    // click on a button to render all the starhsips
                    document.getElementById("starships").addEventListener("click", ()=>{
                        renderStarships()
                    })




        function renderAll() {
            renderPlanets();
            renderPeople();
            renderFilms();
            renderSpecies();
            renderVehicles();
            renderStarships();
        }

                    // click on a button to render ALL items
                    document.getElementById("viewAll").addEventListener("click", ()=>{
                        renderAll()
                    })
        










// have a menu that allows a user to navigate between the different lists of data



// allow a user to return to the "all X" listing from a single item page where x is the data set the single item belongs to

// initialize application
renderAll();


// BONUS: Figure out how to page between the different listings of data

// BASE API https://swapi.py4e.com/api/

// API Documentation https://swapi.py4e.com/documentation#intro