const projects = [
    
    {
        name: "Base de Datos",
        description: "Repositorio relacionado con bases de datos.",
        url: "https://github.com/alejo-lopez09/Base-de-datos"
    },
    {
        name: "Adicion De Facturas HRC",
        description: "Sistema para gestión de facturas.",
        url: "https://github.com/alejo-lopez09/Adicion_De_Facturas_HRC"
    },
    {
        name: "Hotel Rincon Del Carmen",
        description: "Proyecto web para hotel.",
        url: "https://github.com/alejo-lopez09/Hotel_Rincon_DelCarmen"
    },
    {
        name: "API Colombia",
        description: "API desarrollada en JavaScript.",
        url: "https://github.com/alejo-lopez09/Alejandro-Lopez-api-colombia"
    },
    {
        name: "Control de Gastos",
        description: "Aplicación para administrar gastos.",
        url: "https://github.com/alejo-lopez09/Control-de-gastos"
    },
    {
        name: "Taskflow CLI",
        description: "Herramienta de línea de comandos en Python.",
        url: "https://github.com/alejo-lopez09/taskflow-cli"
    },
    {
        name: "Diario de Viaje",
        description: "Proyecto de gestión de viajes.",
        url: "https://github.com/alejo-lopez09/Diario_De_Viaje_Git"
    },
    {
        name: "GitFlow",
        description: "Prácticas y ejercicios con GitFlow.",
        url: "https://github.com/alejo-lopez09/Alejandro_Lopez_gitFlow"
    }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    container.innerHTML += `
        <div class="card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">
                Ver repositorio →
            </a>
        </div>
    `;
});