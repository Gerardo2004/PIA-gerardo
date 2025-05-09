document.addEventListener("DOMContentLoaded", function() {
    // Estilos CSS con colores llamativos y efectos
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        header {
            background:rgb(100, 70, 80);
            color: white;
            text-align: center;
            padding: 20px;
            width: 100%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        nav {
            background:rgb(147, 255, 128);
            padding: 10px;
            width: 100%;
            text-align: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-size: 18px;
            font-weight: bold;
        }
        .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 25px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.45);
            text-align: center;
            animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .productos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .producto {
            background:rgb(255, 255, 255);
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }
        .producto:hover {
            transform: scale(1.05);
        }
        .producto img {
            width: 100%;
            border-radius: 8px;
            transition: opacity 0.3s;
        }
        .producto img:hover {
            opacity: 0.8;
        }
        footer {
            background: #ff4081;
            color: white;
            padding: 15px;
            margin-top: 20px;
            width: 100%;
            text-align: center;
            box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(style);

    // Crear el header
    const header = document.createElement("header");
    header.innerHTML = `
        <h1>combos con mochilas</h1>
        <p>combos con lap top</p>
    `;
    document.body.appendChild(header);

    // Crear la navegación
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
    `;
    document.body.appendChild(nav);

    // Crear el contenedor principal
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `<h2>Nuestros Productos</h2>`;
    document.body.appendChild(container);

    // Crear productos dinámicamente
    const productos = [
        { nombre: "lap top lenovo", precio: "10,000 MXN", imagen: "file:///C:/Users/User%201/OneDrive/Escritorio/django%20tarea/sebastian/templates/PAVILION.png" },
        { nombre: "lap top pavilion", precio: "9,000 MXN", imagen: "file:///C:/Users/User%201/OneDrive/Escritorio/django%20tarea/sebastian/templates/lenobo.png" },
    ];

    const productosDiv = document.createElement("div");
    productosDiv.className = "productos";

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.className = "producto";
        
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = `${producto.nombre} - ${producto.precio}`;

        divProducto.appendChild(img);
        divProducto.appendChild(descripcion);
        productosDiv.appendChild(divProducto);
    });

    container.appendChild(productosDiv);

    // Crear el footer
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>Contacto: +52 8126314083 | Email: GeraSebas@hotmail.com</p>
        <p>Ubicación: Monterrey, NL, México</p>
    `;
    document.body.appendChild(footer);
});
