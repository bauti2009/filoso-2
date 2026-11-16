/* =========================================================
   PC GAMER STORE - Carrito y Arma tu PC
   Todo se guarda en el navegador (localStorage), asi el
   carrito y el armado se mantienen al cambiar de pagina.
   ========================================================= */

const CLAVE_CARRITO = "pcgamer-carrito";
const CLAVE_ARMADO = "pcgamer-armado";

// Componentes del armado, en el orden en que se muestran
const COMPONENTES = [
    { slot: "procesador", nombre: "Procesador", pagina: "armarpc-procesador.html", obligatorio: true },
    { slot: "placa-madre", nombre: "Placa madre", pagina: "armarpc-placa-madre.html", obligatorio: true },
    { slot: "refrigeracion", nombre: "Refrigeración", pagina: "armarpc-refrigeracion.html", obligatorio: false },
    { slot: "memoria-ram", nombre: "Memoria RAM", pagina: "armarpc-memoria-ram.html", obligatorio: true },
    { slot: "placa-video", nombre: "Placa de video", pagina: "armarpc-placa-video.html", obligatorio: false },
    { slot: "almacenamiento", nombre: "Almacenamiento", pagina: "armarpc-almacenamiento.html", obligatorio: true },
    { slot: "fuente", nombre: "Fuente", pagina: "armarpc-fuente.html", obligatorio: true },
    { slot: "gabinete", nombre: "Gabinete", pagina: "armarpc-gabinete.html", obligatorio: true },
    { slot: "monitor", nombre: "Monitor", pagina: "armarpc-monitor.html", obligatorio: false },
    { slot: "perifericos", nombre: "Periféricos", pagina: "armarpc-perifericos.html", obligatorio: false, multiple: true }
];

/* ---------- Utilidades ---------- */

function leer(clave, porDefecto) {
    try {
        const dato = localStorage.getItem(clave);
        return dato ? JSON.parse(dato) : porDefecto;
    } catch (e) {
        return porDefecto;
    }
}

function guardar(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
    } catch (e) { /* si el navegador no deja guardar, no pasa nada */ }
}

// "$1.360.999" -> 1360999 (si hay dos precios, toma el ultimo, que es el de oferta)
function leerPrecio(texto) {
    const numeros = (texto || "").match(/[\d.]+/g);
    if (!numeros) return 0;
    return parseInt(numeros[numeros.length - 1].replace(/\./g, ""), 10) || 0;
}

// 1360999 -> "$1.360.999"
function formatoPrecio(numero) {
    return "$" + Math.round(numero).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function crear(etiqueta, clase, texto) {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
}

function mostrarAviso(texto) {
    let aviso = document.querySelector(".aviso-flotante");
    if (!aviso) {
        aviso = crear("div", "aviso-flotante");
        document.body.appendChild(aviso);
    }
    aviso.textContent = texto;
    aviso.classList.add("visible");
    clearTimeout(aviso.temporizador);
    aviso.temporizador = setTimeout(() => aviso.classList.remove("visible"), 2200);
}

/* ---------- Carrito ---------- */

function obtenerCarrito() {
    return leer(CLAVE_CARRITO, []);
}

function guardarCarrito(carrito) {
    guardar(CLAVE_CARRITO, carrito);
    actualizarContador();
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push(Object.assign({ cantidad: 1 }, producto));
    }
    guardarCarrito(carrito);
    mostrarAviso("Agregado al carrito: " + producto.nombre);
}

function actualizarContador() {
    const total = obtenerCarrito().reduce((suma, item) => suma + item.cantidad, 0);
    document.querySelectorAll('.iconos-header a[href="carrito.html"]').forEach(enlace => {
        enlace.classList.add("enlace-carrito");
        let globo = enlace.querySelector(".contador-carrito");
        if (!globo) {
            globo = crear("span", "contador-carrito");
            enlace.appendChild(globo);
        }
        globo.textContent = total;
        globo.style.display = total > 0 ? "flex" : "none";
    });
}

// Agrega el boton "Agregar al carrito" a todas las tarjetas de productos
function prepararTarjetas() {
    document.querySelectorAll(".tarjeta-producto").forEach(tarjeta => {
        if (tarjeta.classList.contains("opcion-armado")) return;
        if (tarjeta.querySelector(".boton-agregar")) return;

        const nombre = tarjeta.querySelector("p").textContent.trim();
        const imagen = tarjeta.querySelector("img");
        const precio = leerPrecio(tarjeta.querySelector("strong").textContent);

        const boton = crear("button", "boton-agregar", "Agregar al carrito");
        boton.type = "button";
        boton.addEventListener("click", () => {
            agregarAlCarrito({
                id: tarjeta.dataset.id || nombre,
                nombre: nombre,
                img: imagen ? imagen.getAttribute("src") : "",
                precio: precio
            });
        });
        tarjeta.appendChild(boton);
    });
}

// Pagina carrito.html
function mostrarCarrito() {
    const lista = document.getElementById("carrito-lista");
    if (!lista) return;
    const vacio = document.getElementById("carrito-vacio");
    const carrito = obtenerCarrito();

    lista.innerHTML = "";
    let total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    mostrarPieCarrito(total);
    if (carrito.length === 0) {
        vacio.style.display = "";
        lista.style.display = "none";
        return;
    }
    vacio.style.display = "none";
    lista.style.display = "";

    total = 0;
    carrito.forEach((item, posicion) => {
        total += item.precio * item.cantidad;

        const fila = crear("div", "item-carrito");
        const img = crear("img");
        img.src = item.img || "pclogo.png";
        img.alt = item.nombre;

        const info = crear("div", "info-item");
        info.appendChild(crear("p", "nombre-item", item.nombre));
        if (item.detalle && item.detalle.length) {
            const ul = crear("ul", "detalle-item");
            item.detalle.forEach(linea => ul.appendChild(crear("li", "", linea)));
            info.appendChild(ul);
        }
        info.appendChild(crear("span", "precio-unidad", formatoPrecio(item.precio) + " c/u"));

        const cantidad = crear("div", "cantidad-item");
        const menos = crear("button", "", "−");
        const numero = crear("span", "", item.cantidad);
        const mas = crear("button", "", "+");
        menos.type = mas.type = "button";
        menos.setAttribute("aria-label", "Restar uno");
        mas.setAttribute("aria-label", "Sumar uno");
        menos.addEventListener("click", () => cambiarCantidad(posicion, -1));
        mas.addEventListener("click", () => cambiarCantidad(posicion, 1));
        cantidad.append(menos, numero, mas);

        const subtotal = crear("strong", "subtotal-item", formatoPrecio(item.precio * item.cantidad));
        const quitar = crear("button", "quitar-item", "✕");
        quitar.type = "button";
        quitar.setAttribute("aria-label", "Quitar del carrito");
        quitar.addEventListener("click", () => {
            const nuevo = obtenerCarrito();
            nuevo.splice(posicion, 1);
            guardarCarrito(nuevo);
            mostrarCarrito();
        });

        fila.append(img, info, cantidad, subtotal, quitar);
        lista.appendChild(fila);
    });
}

// Total y botones Comprar / Vaciar (estan escritos en carrito.html, aca solo se les da la funcion)
function mostrarPieCarrito(total) {
    const totalEl = document.getElementById("carrito-total");
    if (totalEl) totalEl.textContent = formatoPrecio(total);
}

function prepararBotonesCarrito() {
    const vaciar = document.getElementById("boton-vaciar");
    const comprar = document.getElementById("boton-comprar");
    if (!vaciar || !comprar) return;

    vaciar.addEventListener("click", () => {
        guardarCarrito([]);
        mostrarCarrito();
    });

    comprar.addEventListener("click", () => {
        const usuario = usuarioActual();
        if (!usuario) {
            // sin sesion: va a iniciar sesion y el carrito queda como esta
            location.href = "iniciar-sesion.html?volver=carrito.html";
            return;
        }
        const items = obtenerCarrito();
        if (items.length === 0) {
            mostrarAviso("Tu carrito está vacío");
            return;
        }
        const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
        guardarPedido(usuario, items, total);
        alert("¡Gracias por tu compra, " + usuario.nombre.split(" ")[0] + "! El total fue de " + formatoPrecio(total) +
            ".\nTe vamos a contactar por WhatsApp para coordinar el pago y el envío.\nPodés ver tu pedido en \"Mi cuenta\".");
        guardarCarrito([]);
        mostrarCarrito();
    });
}

function cambiarCantidad(posicion, cambio) {
    const carrito = obtenerCarrito();
    const item = carrito[posicion];
    if (!item) return;
    item.cantidad += cambio;
    if (item.cantidad <= 0) carrito.splice(posicion, 1);
    guardarCarrito(carrito);
    mostrarCarrito();
}

/* ---------- Arma tu PC ---------- */

function obtenerArmado() {
    return leer(CLAVE_ARMADO, {});
}

function guardarArmado(armado) {
    guardar(CLAVE_ARMADO, armado);
}

// Lista de piezas elegidas (los perifericos pueden ser varios)
function piezasElegidas(armado) {
    const piezas = [];
    COMPONENTES.forEach(c => {
        const valor = armado[c.slot];
        if (!valor) return;
        (Array.isArray(valor) ? valor : [valor]).forEach(p => piezas.push({ componente: c, pieza: p }));
    });
    return piezas;
}

function totalArmado(armado) {
    return piezasElegidas(armado).reduce((suma, x) => suma + x.pieza.precio, 0);
}

// Devuelve el motivo por el que una pieza NO es compatible con lo ya elegido (o "" si esta bien)
function motivoIncompatible(slot, pieza, armado) {
    const cpu = armado["procesador"];
    const mother = armado["placa-madre"];
    const ram = armado["memoria-ram"];

    if (slot === "procesador" && mother && pieza.socket !== mother.socket) {
        return "No entra en tu placa madre (" + mother.socket + ")";
    }
    if (slot === "placa-madre") {
        if (cpu && pieza.socket !== cpu.socket) return "No es compatible con tu procesador (" + cpu.socket + ")";
        if (ram && pieza.ram !== ram.ram) return "Usa memorias " + pieza.ram + " y elegiste " + ram.ram;
    }
    if (slot === "memoria-ram" && mother && pieza.ram !== mother.ram) {
        return "Tu placa madre usa memorias " + mother.ram;
    }
    return "";
}

// Problemas del armado completo (se muestran en el resumen)
function problemasArmado(armado) {
    const problemas = [];
    const cpu = armado["procesador"];
    const mother = armado["placa-madre"];
    const ram = armado["memoria-ram"];

    if (cpu && mother && cpu.socket !== mother.socket) {
        problemas.push("El procesador (" + cpu.socket + ") no es compatible con la placa madre (" + mother.socket + ").");
    }
    if (ram && mother && ram.ram !== mother.ram) {
        problemas.push("La memoria es " + ram.ram + " pero la placa madre usa " + mother.ram + ".");
    }
    if (cpu && cpu.cooler !== "si" && !armado["refrigeracion"]) {
        problemas.push("Tu procesador no trae cooler: elegí una refrigeración.");
    }
    return problemas;
}

function faltantes(armado) {
    return COMPONENTES.filter(c => c.obligatorio && !armado[c.slot]).map(c => c.nombre);
}

function datosDeOpcion(tarjeta) {
    return {
        nombre: tarjeta.dataset.nombre,
        img: tarjeta.dataset.img,
        precio: parseInt(tarjeta.dataset.precio, 10),
        socket: tarjeta.dataset.socket || "",
        ram: tarjeta.dataset.ram || "",
        cooler: tarjeta.dataset.cooler || ""
    };
}

// Paginas armarpc-xxx.html: elegir componentes
function prepararOpcionesArmado() {
    const tarjetas = document.querySelectorAll(".opcion-armado");
    if (!tarjetas.length) return;

    tarjetas.forEach(tarjeta => {
        const boton = crear("button", "boton-agregar boton-elegir");
        boton.type = "button";
        const motivo = crear("span", "motivo-incompatible");
        tarjeta.append(motivo, boton);

        boton.addEventListener("click", () => {
            const slot = tarjeta.dataset.slot;
            const componente = COMPONENTES.find(c => c.slot === slot);
            const armado = obtenerArmado();
            const pieza = datosDeOpcion(tarjeta);

            if (componente.multiple) {
                const lista = armado[slot] || [];
                const indice = lista.findIndex(p => p.nombre === pieza.nombre);
                if (indice >= 0) lista.splice(indice, 1); else lista.push(pieza);
                if (lista.length) armado[slot] = lista; else delete armado[slot];
            } else if (armado[slot] && armado[slot].nombre === pieza.nombre) {
                delete armado[slot];
            } else {
                armado[slot] = pieza;
                mostrarAviso(componente.nombre + " elegido: " + pieza.nombre);
            }
            guardarArmado(armado);
            refrescarArmado();
        });
    });
}

function refrescarArmado() {
    const armado = obtenerArmado();

    // Tarjetas de opciones
    document.querySelectorAll(".opcion-armado").forEach(tarjeta => {
        const slot = tarjeta.dataset.slot;
        const elegido = armado[slot];
        const nombre = tarjeta.dataset.nombre;
        const estaElegido = Array.isArray(elegido)
            ? elegido.some(p => p.nombre === nombre)
            : !!(elegido && elegido.nombre === nombre);
        const motivo = estaElegido ? "" : motivoIncompatible(slot, datosDeOpcion(tarjeta), armado);

        tarjeta.classList.toggle("elegida", estaElegido);
        tarjeta.classList.toggle("incompatible", !!motivo);
        tarjeta.querySelector(".motivo-incompatible").textContent = motivo;

        const boton = tarjeta.querySelector(".boton-elegir");
        boton.disabled = !!motivo;
        boton.textContent = estaElegido ? "✓ Elegido (quitar)" : (motivo ? "No compatible" : "Elegir");
    });

    // Iconos del menu: marcar los que ya tienen algo elegido
    document.querySelectorAll(".icono-componente").forEach(icono => {
        const componente = COMPONENTES.find(c => c.pagina === icono.getAttribute("href"));
        if (componente) icono.classList.toggle("completo", !!armado[componente.slot]);
        icono.classList.toggle("actual", location.pathname.endsWith(icono.getAttribute("href")));
    });

    // Barra de progreso en las paginas de componentes
    const barra = document.getElementById("barra-armado");
    if (barra) {
        barra.innerHTML = "";
        barra.style.display = piezasElegidas(armado).length ? "" : "none";
        const falta = faltantes(armado);
        const problemas = problemasArmado(armado);
        const texto = crear("span", "progreso-armado");
        if (armadoTerminado(armado)) {
            texto.textContent = "¡Tu PC está lista! Total: " + formatoPrecio(totalArmado(armado));
            const ver = crear("a", "", "Ver resumen y comprar →");
            ver.href = "armarpc.html";
            barra.append(texto, ver);
            barra.classList.add("lista");
        } else {
            const pendiente = falta.length ? "Te falta: " + falta.join(", ") : problemas[0];
            texto.textContent = "Total: " + formatoPrecio(totalArmado(armado)) + " · " + pendiente;
            barra.append(texto);
            barra.classList.remove("lista");
        }
    }

    mostrarResumenArmado(armado);
}

function armadoTerminado(armado) {
    return faltantes(armado).length === 0 && problemasArmado(armado).length === 0;
}

// Pagina armarpc.html: el resumen solo aparece cuando la PC esta terminada
function mostrarResumenArmado(armado) {
    const contenedor = document.getElementById("resumen-armado");
    if (!contenedor) return;
    contenedor.innerHTML = "";
    contenedor.style.display = armadoTerminado(armado) ? "" : "none";
    if (!armadoTerminado(armado)) return;

    contenedor.appendChild(crear("h2", "titulo-resumen", "Tu PC está lista"));
    contenedor.appendChild(crear("p", "armado-ok", "✓ Elegiste todos los componentes y son compatibles entre sí."));

    const tabla = crear("div", "tabla-armado");
    piezasElegidas(armado).forEach(({ componente, pieza }) => {
        const fila = crear("div", "fila-armado");
        fila.appendChild(crear("span", "etiqueta-armado", componente.nombre));

        const linea = crear("div", "pieza-armado");
        const img = crear("img");
        img.src = pieza.img;
        img.alt = "";
        const cambiar = crear("a", "cambiar-pieza", "Cambiar");
        cambiar.href = componente.pagina;
        linea.append(img, crear("span", "", pieza.nombre), crear("strong", "", formatoPrecio(pieza.precio)), cambiar);
        fila.appendChild(linea);
        tabla.appendChild(fila);
    });
    contenedor.appendChild(tabla);

    const pie = crear("div", "pie-carrito");
    const total = crear("p", "total-carrito");
    total.append("Total: ", crear("strong", "", formatoPrecio(totalArmado(armado))));

    const botones = crear("div", "botones-carrito");
    const vaciar = crear("button", "boton-secundario", "Empezar de nuevo");
    const agregar = crear("button", "boton-agregar", "Agregar PC al carrito");
    vaciar.type = agregar.type = "button";
    vaciar.addEventListener("click", () => {
        if (confirm("¿Querés borrar todos los componentes elegidos?")) {
            guardarArmado({});
            refrescarArmado();
        }
    });
    agregar.addEventListener("click", () => {
        const gabinete = armado["gabinete"];
        agregarAlCarrito({
            id: "armado-" + Date.now(),
            nombre: "PC armada a medida",
            img: gabinete ? gabinete.img : "pclogo.png",
            precio: totalArmado(armado),
            detalle: piezasElegidas(armado).map(x => x.pieza.nombre)
        });
        guardarArmado({});
        refrescarArmado();
        location.href = "carrito.html";
    });
    botones.append(vaciar, agregar);
    pie.append(total, botones);
    contenedor.appendChild(pie);
}

/* ---------- Pagina de cada producto (producto.html) ---------- */

function mostrarDetalleProducto() {
    const contenedor = document.getElementById("detalle-producto");
    if (!contenedor || typeof CATALOGO === "undefined") return;

    const id = new URLSearchParams(location.search).get("id");
    const producto = CATALOGO[id];
    contenedor.innerHTML = "";

    if (!producto) {
        contenedor.appendChild(crear("h1", "", "Producto no encontrado"));
        const volver = crear("a", "boton-agregar boton-volver", "Ver productos");
        volver.href = "productos.html";
        contenedor.appendChild(volver);
        return;
    }
    document.title = producto.nombre + " - PC Gamer";

    // Camino: Productos > Categoria > Producto
    const camino = crear("div", "camino-producto");
    const aProductos = crear("a", "", "Productos");
    aProductos.href = "productos.html";
    const aCategoria = crear("a", "", producto.categoria);
    aCategoria.href = producto.pagina;
    camino.append(aProductos, " › ", aCategoria, " › ", crear("span", "", producto.nombre));
    contenedor.appendChild(camino);

    const principal = crear("div", "producto-principal");

    const caja = crear("div", "imagen-producto");
    const img = crear("img");
    img.src = producto.img;
    img.alt = producto.nombre;
    caja.appendChild(img);

    const info = crear("div", "info-producto");
    info.appendChild(crear("h1", "", producto.nombre));
    if (producto.precioAnterior) {
        const antes = crear("p", "linea-oferta");
        antes.append(crear("s", "precio-anterior", formatoPrecio(producto.precioAnterior)),
            crear("span", "descuento descuento-detalle", "-" + Math.round(100 - producto.precio * 100 / producto.precioAnterior) + "% OFF"));
        info.appendChild(antes);
    }
    info.appendChild(crear("p", "precio-producto", formatoPrecio(producto.precio)));
    info.appendChild(crear("p", "precio-transferencia", "Precio especial pagando por transferencia o efectivo"));

    const destacados = crear("ul", "destacados-producto");
    producto.specs.slice(0, 5).forEach(([clave, valor]) => {
        const li = crear("li");
        li.append(crear("span", "", clave + ": "), crear("strong", "", valor));
        destacados.appendChild(li);
    });
    info.appendChild(destacados);

    const boton = crear("button", "boton-agregar", "Agregar al carrito");
    boton.type = "button";
    boton.addEventListener("click", () => agregarAlCarrito({
        id: id, nombre: producto.nombre, img: producto.img, precio: producto.precio
    }));
    info.appendChild(boton);

    const volver = crear("a", "volver-categoria", "← Volver a " + producto.categoria);
    volver.href = producto.pagina;
    info.appendChild(volver);

    principal.append(caja, info);
    contenedor.appendChild(principal);

    // Tabla con todas las especificaciones
    const bloque = crear("div", "especificaciones");
    bloque.appendChild(crear("h2", "", "Especificaciones"));
    const tabla = crear("table", "tabla-specs");
    producto.specs.forEach(([clave, valor]) => {
        const fila = crear("tr");
        fila.append(crear("th", "", clave), crear("td", "", valor));
        tabla.appendChild(fila);
    });
    bloque.appendChild(tabla);
    contenedor.appendChild(bloque);
}

/* ---------- Ayuda: preguntas y consultas ---------- */

function prepararAyuda() {
    // Al abrir una pregunta se cierran las demas
    const preguntas = document.querySelectorAll(".lista-preguntas details");
    preguntas.forEach(p => p.addEventListener("toggle", () => {
        if (p.open) preguntas.forEach(otra => { if (otra !== p) otra.open = false; });
    }));

    const formulario = document.getElementById("form-consulta");
    if (!formulario) return;
    const aviso = document.getElementById("aviso-consulta");

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        const datos = new FormData(formulario);
        const nombre = (datos.get("nombre") || "").trim();
        const email = (datos.get("email") || "").trim();
        const motivo = datos.get("motivo");
        const mensaje = (datos.get("mensaje") || "").trim();
        const via = evento.submitter ? evento.submitter.value : "whatsapp";

        if (!nombre || !motivo || mensaje.length < 10) {
            aviso.className = "aviso-consulta error";
            aviso.textContent = "Completá tu nombre, el motivo y un mensaje (mínimo 10 letras).";
            return;
        }
        if (via === "mail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            aviso.className = "aviso-consulta error";
            aviso.textContent = "Para mandarla por mail necesitamos un email válido.";
            return;
        }

        const texto = "Hola! Soy " + nombre + (email ? " (" + email + ")" : "") +
            ".\nMotivo: " + motivo + "\n\n" + mensaje;

        // Guardamos la consulta en el navegador como registro
        const consultas = leer("pcgamer-consultas", []);
        consultas.push({ nombre, email, motivo, mensaje, via, fecha: new Date().toLocaleString("es-AR") });
        guardar("pcgamer-consultas", consultas);

        if (via === "mail") {
            location.href = "mailto:pcgamingstore@gmail.com?subject=" + encodeURIComponent("Consulta: " + motivo) +
                "&body=" + encodeURIComponent(texto);
        } else {
            window.open("https://wa.me/5491123433465?text=" + encodeURIComponent(texto), "_blank");
        }

        aviso.className = "aviso-consulta ok";
        aviso.textContent = "¡Gracias " + nombre + "! Tu consulta está lista para enviar. Te respondemos en menos de 24 hs hábiles.";
        formulario.reset();
    });
}

/* ---------- Buscador ---------- */

// Saca tildes y pasa a minuscula, asi "Refrigeración" y "refrigeracion" son iguales
function normalizar(texto) {
    return (texto || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function buscarProductos(consulta) {
    if (typeof CATALOGO === "undefined") return [];
    const palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
    if (!palabras.length) return [];

    return Object.entries(CATALOGO)
        .map(([id, producto]) => {
            const nombre = normalizar(producto.nombre);
            const todo = nombre + " " + normalizar(producto.categoria) + " " +
                producto.specs.map(([clave, valor]) => normalizar(valor)).join(" ");
            if (!palabras.every(palabra => todo.includes(palabra))) return null;
            // Primero los que tienen las palabras en el nombre
            const puntaje = palabras.filter(palabra => nombre.includes(palabra)).length;
            return { id, producto, puntaje };
        })
        .filter(Boolean)
        .sort((a, b) => b.puntaje - a.puntaje);
}

function irABuscar(texto) {
    const consulta = texto.trim();
    if (consulta) location.href = "buscar.html?q=" + encodeURIComponent(consulta);
}

function prepararBuscador() {
    document.querySelectorAll(".buscador").forEach(buscador => {
        const input = buscador.querySelector("input");
        if (!input) return;
        input.placeholder = "Buscar productos, marcas...";
        input.setAttribute("autocomplete", "off");

        const lupa = buscador.querySelector("span");
        if (lupa) {
            lupa.classList.add("lupa-buscador");
            lupa.addEventListener("click", () => irABuscar(input.value));
        }

        const sugerencias = crear("div", "sugerencias-busqueda");
        buscador.appendChild(sugerencias);

        const consultaActual = new URLSearchParams(location.search).get("q");
        if (consultaActual && document.getElementById("resultados-busqueda")) input.value = consultaActual;

        input.addEventListener("input", () => {
            sugerencias.innerHTML = "";
            const resultados = buscarProductos(input.value);
            if (input.value.trim().length < 2) {
                sugerencias.classList.remove("visible");
                return;
            }
            if (!resultados.length) {
                sugerencias.appendChild(crear("p", "sin-sugerencias", "No encontramos productos con \"" + input.value.trim() + "\""));
            }
            resultados.slice(0, 6).forEach(({ id, producto }) => {
                const enlace = crear("a", "sugerencia");
                enlace.href = "producto.html?id=" + id;
                const img = crear("img");
                img.src = producto.img;
                img.alt = "";
                const texto = crear("span", "", producto.nombre);
                enlace.append(img, texto, crear("strong", "", formatoPrecio(producto.precio)));
                sugerencias.appendChild(enlace);
            });
            if (resultados.length > 6) {
                const todos = crear("a", "ver-todos", "Ver los " + resultados.length + " resultados →");
                todos.href = "buscar.html?q=" + encodeURIComponent(input.value.trim());
                sugerencias.appendChild(todos);
            }
            sugerencias.classList.add("visible");
        });

        input.addEventListener("keydown", evento => {
            if (evento.key === "Enter") irABuscar(input.value);
            if (evento.key === "Escape") sugerencias.classList.remove("visible");
        });

        document.addEventListener("click", evento => {
            if (!buscador.contains(evento.target)) sugerencias.classList.remove("visible");
        });
    });
}

// Pagina buscar.html
function mostrarResultadosBusqueda() {
    const grilla = document.getElementById("resultados-busqueda");
    if (!grilla) return;
    const consulta = (new URLSearchParams(location.search).get("q") || "").trim();
    const titulo = document.getElementById("titulo-busqueda");
    const texto = document.getElementById("texto-busqueda");

    if (!consulta) {
        titulo.textContent = "Buscar productos";
        texto.textContent = "Escribí en la barra de arriba lo que estás buscando.";
        return;
    }
    const resultados = buscarProductos(consulta);
    titulo.textContent = "Resultados para \"" + consulta + "\"";
    document.title = consulta + " - PC Gamer";
    texto.textContent = resultados.length
        ? resultados.length + (resultados.length === 1 ? " producto encontrado" : " productos encontrados")
        : "No encontramos productos. Probá con otra palabra, por ejemplo \"ryzen\", \"rtx\" o \"ssd\".";

    resultados.forEach(({ id, producto }) => {
        const tarjeta = crear("article", "tarjeta-producto");
        tarjeta.dataset.id = id;
        const enlace = crear("a", "enlace-producto");
        enlace.href = "producto.html?id=" + id;
        const img = crear("img");
        img.src = producto.img;
        img.alt = producto.nombre;
        enlace.append(img, crear("p", "", producto.nombre));
        const precio = crear("strong");
        if (producto.precioAnterior) {
            precio.append(crear("s", "precio-anterior", formatoPrecio(producto.precioAnterior)), " ");
            const badge = crear("span", "descuento", "-" + Math.round(100 - producto.precio * 100 / producto.precioAnterior) + "%");
            tarjeta.appendChild(badge);
        }
        precio.append(formatoPrecio(producto.precio));
        tarjeta.append(enlace, precio);
        grilla.appendChild(tarjeta);
    });
}

/* ---------- Cuentas (simuladas: se guardan solo en este navegador) ---------- */

const CLAVE_USUARIOS = "pcgamer-usuarios";
const CLAVE_SESION = "pcgamer-sesion";

function usuarioActual() {
    const email = leer(CLAVE_SESION, null);
    if (!email) return null;
    return leer(CLAVE_USUARIOS, {})[email] || null;
}

function guardarUsuario(usuario) {
    const usuarios = leer(CLAVE_USUARIOS, {});
    usuarios[usuario.email] = usuario;
    guardar(CLAVE_USUARIOS, usuarios);
}

function guardarPedido(usuario, items, total) {
    usuario.pedidos = usuario.pedidos || [];
    usuario.pedidos.unshift({
        numero: Math.floor(100000 + Math.random() * 900000),
        fecha: new Date().toLocaleDateString("es-AR"),
        items: items.map(i => ({ nombre: i.nombre, cantidad: i.cantidad, precio: i.precio })),
        total: total,
        estado: "Pendiente de pago"
    });
    guardarUsuario(usuario);
}

function mostrarMensaje(id, texto, tipo) {
    const aviso = document.getElementById(id);
    if (!aviso) return;
    aviso.className = "aviso-consulta " + tipo;
    aviso.textContent = texto;
}

const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function prepararCuentas() {
    const usuario = usuarioActual();

    // Icono de usuario del header: si hay sesion lleva a "Mi cuenta"
    document.querySelectorAll('.iconos-header a[href="iniciar-sesion.html"]').forEach(enlace => {
        if (!usuario) return;
        enlace.href = "mi-cuenta.html";
        enlace.title = "Mi cuenta (" + usuario.nombre + ")";
        enlace.classList.add("enlace-usuario");
        const inicial = crear("span", "inicial-usuario", usuario.nombre.trim().charAt(0).toUpperCase());
        enlace.appendChild(inicial);
    });

    const volverParam = new URLSearchParams(location.search).get("volver");
    const volver = volverParam || "mi-cuenta.html";
    if (volverParam) {
        // Si venia del carrito, al crear cuenta tambien vuelve al carrito
        document.querySelectorAll('a[href="crear-cuenta.html"], a[href="iniciar-sesion.html"]').forEach(a => {
            if (!a.closest(".iconos-header")) a.href += "?volver=" + encodeURIComponent(volverParam);
        });
    }

    // Iniciar sesion
    const login = document.getElementById("form-login");
    if (login) {
        if (usuario) {
            location.href = "mi-cuenta.html";
            return;
        }
        login.addEventListener("submit", evento => {
            evento.preventDefault();
            const email = document.getElementById("email").value.trim().toLowerCase();
            const clave = document.getElementById("password").value;
            const cuenta = leer(CLAVE_USUARIOS, {})[email];

            if (!EMAIL_VALIDO.test(email) || !clave) {
                mostrarMensaje("aviso-login", "Ingresá tu email y tu contraseña.", "error");
            } else if (!cuenta) {
                mostrarMensaje("aviso-login", "No hay ninguna cuenta con ese email. Creá una abajo.", "error");
            } else if (cuenta.clave !== clave) {
                mostrarMensaje("aviso-login", "La contraseña es incorrecta.", "error");
            } else {
                guardar(CLAVE_SESION, email);
                mostrarMensaje("aviso-login", "¡Hola de nuevo, " + cuenta.nombre.split(" ")[0] + "! Entrando...", "ok");
                setTimeout(() => location.href = volver, 700);
            }
        });
    }

    // Crear cuenta
    const registro = document.getElementById("form-registro");
    if (registro) {
        registro.addEventListener("submit", evento => {
            evento.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("registro-email").value.trim().toLowerCase();
            const clave = document.getElementById("registro-password").value;
            const repetir = document.getElementById("registro-repetir").value;
            const telefono = document.getElementById("telefono").value.trim();

            let error = "";
            if (nombre.length < 3) error = "Escribí tu nombre y apellido.";
            else if (!EMAIL_VALIDO.test(email)) error = "El email no es válido.";
            else if (leer(CLAVE_USUARIOS, {})[email]) error = "Ya existe una cuenta con ese email. Iniciá sesión.";
            else if (clave.length < 6) error = "La contraseña tiene que tener al menos 6 caracteres.";
            else if (clave !== repetir) error = "Las contraseñas no coinciden.";

            if (error) {
                mostrarMensaje("aviso-registro", error, "error");
                return;
            }
            guardarUsuario({ nombre, email, clave, telefono, pedidos: [] });
            guardar(CLAVE_SESION, email);
            mostrarMensaje("aviso-registro", "¡Cuenta creada! Bienvenido/a, " + nombre.split(" ")[0] + ".", "ok");
            setTimeout(() => location.href = volver, 900);
        });
    }

    mostrarMiCuenta(usuario);
}

// Pagina mi-cuenta.html
function mostrarMiCuenta(usuario) {
    const contenedor = document.getElementById("mi-cuenta");
    if (!contenedor) return;
    if (!usuario) {
        location.href = "iniciar-sesion.html";
        return;
    }
    contenedor.innerHTML = "";

    const caja = crear("div", "caja-cuenta");
    caja.appendChild(crear("h1", "", "Hola, " + usuario.nombre.split(" ")[0] + "!"));
    caja.appendChild(crear("div", "linea-separadora"));

    const datos = crear("div", "datos-cuenta");
    [["Nombre", usuario.nombre], ["Email", usuario.email], ["Teléfono", usuario.telefono || "No cargado"]].forEach(([clave, valor]) => {
        const fila = crear("p");
        fila.append(crear("span", "", clave), crear("strong", "", valor));
        datos.appendChild(fila);
    });
    caja.appendChild(datos);

    caja.appendChild(crear("h2", "", "Mis pedidos"));
    const pedidos = usuario.pedidos || [];
    if (!pedidos.length) {
        const vacio = crear("p", "sin-pedidos", "Todavía no hiciste ningún pedido. ");
        const ir = crear("a", "", "Ver productos");
        ir.href = "productos.html";
        vacio.appendChild(ir);
        caja.appendChild(vacio);
    }
    pedidos.forEach(pedido => {
        const tarjeta = crear("div", "pedido");
        const cabecera = crear("div", "cabecera-pedido");
        cabecera.append(crear("strong", "", "Pedido #" + pedido.numero), crear("span", "", pedido.fecha),
            crear("span", "estado-pedido", pedido.estado));
        const lista = crear("ul");
        pedido.items.forEach(item => lista.appendChild(crear("li", "", item.cantidad + " x " + item.nombre)));
        tarjeta.append(cabecera, lista, crear("p", "total-pedido", "Total: " + formatoPrecio(pedido.total)));
        caja.appendChild(tarjeta);
    });

    const salir = crear("button", "boton-secundario boton-salir", "Cerrar sesión");
    salir.type = "button";
    salir.addEventListener("click", () => {
        try { localStorage.removeItem(CLAVE_SESION); } catch (e) { }
        location.href = "index.html";
    });
    caja.appendChild(salir);
    contenedor.appendChild(caja);
}

/* ---------- Inicio ---------- */

document.addEventListener("DOMContentLoaded", () => {
    mostrarDetalleProducto();
    mostrarResultadosBusqueda();
    prepararTarjetas();
    prepararBuscador();
    prepararCuentas();
    prepararOpcionesArmado();
    prepararAyuda();
    refrescarArmado();
    prepararBotonesCarrito();
    mostrarCarrito();
    actualizarContador();
});