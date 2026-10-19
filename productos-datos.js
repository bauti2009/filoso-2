/* Catalogo de productos: lo usan la pagina de producto, el buscador y las ofertas. */
const CATALOGO = {
    "procesador-amd-ryzen-7-9800x3d-am5-no-incluye-cooler": {
        "nombre": "Procesador AMD Ryzen 7 9800X3D AM5 - No incluye Cooler",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/amd-ryzen-7-9800x3d-8-core-am5-desktop-processor-100-100001084wof-903761.jpg?v=1733274871",
        "precio": 820000,
        "categoria": "Procesadores",
        "pagina": "Procesadores.html",
        "specs": [["Marca", "AMD"], ["Modelo", "Ryzen 7 9800X3D"], ["Socket", "AM5"], ["Arquitectura", "Zen 5"], ["Núcleos", "8"], ["Hilos", "16"], ["Frecuencia base", "4.7 GHz"], ["Frecuencia turbo", "5.2 GHz"], ["Caché L2", "8 MB"], ["Caché L3", "96 MB (3D V-Cache)"], ["TDP", "120 W"], ["Gráficos integrados", "AMD Radeon"], ["Memoria soportada", "DDR5"], ["Cooler incluido", "No"]]
    },
    "procesador-amd-ryzen-7-7800x3d-am5-no-incluye-cooler": {
        "nombre": "Procesador AMD Ryzen 7 7800X3D AM5 - No incluye Cooler",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/amd-100-100000910wof-ryzen-7-7800x3d-8-core-16-thread-42ghz-am5-processor-552947.jpg?v=1733274873",
        "precio": 650000,
        "categoria": "Procesadores",
        "pagina": "Procesadores.html",
        "specs": [["Marca", "AMD"], ["Modelo", "Ryzen 7 7800X3D"], ["Socket", "AM5"], ["Arquitectura", "Zen 4"], ["Núcleos", "8"], ["Hilos", "16"], ["Frecuencia base", "4.2 GHz"], ["Frecuencia turbo", "5.0 GHz"], ["Caché L2", "8 MB"], ["Caché L3", "96 MB (3D V-Cache)"], ["TDP", "120 W"], ["Gráficos integrados", "AMD Radeon"], ["Memoria soportada", "DDR5"], ["Cooler incluido", "No"]],
        "precioAnterior": 760000
    },
    "procesador-amd-ryzen-5-7600x-am5-no-incluye-cooler": {
        "nombre": "Procesador AMD Ryzen 5 7600X AM5 - No incluye Cooler",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/amd-100-100000593wof-ryzen-5-7600x-am5-6-core-desktop-processor-358447.jpg?v=1733274874",
        "precio": 330000,
        "categoria": "Procesadores",
        "pagina": "Procesadores.html",
        "specs": [["Marca", "AMD"], ["Modelo", "Ryzen 5 7600X"], ["Socket", "AM5"], ["Arquitectura", "Zen 4"], ["Núcleos", "6"], ["Hilos", "12"], ["Frecuencia base", "4.7 GHz"], ["Frecuencia turbo", "5.3 GHz"], ["Caché L2", "6 MB"], ["Caché L3", "32 MB"], ["TDP", "105 W"], ["Gráficos integrados", "AMD Radeon"], ["Memoria soportada", "DDR5"], ["Cooler incluido", "No"]]
    },
    "procesador-amd-ryzen-5-5600g-am4-con-graficos-radeon": {
        "nombre": "Procesador AMD Ryzen 5 5600G AM4 con Gráficos Radeon",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/amd-100-100000252box-ryzen-5-5600g-39ghz-6-core-am4-boxed-desktop-processor-with-radeon-graphics-554504.jpg?v=1733274842",
        "precio": 190000,
        "categoria": "Procesadores",
        "pagina": "Procesadores.html",
        "specs": [["Marca", "AMD"], ["Modelo", "Ryzen 5 5600G"], ["Socket", "AM4"], ["Arquitectura", "Zen 3"], ["Núcleos", "6"], ["Hilos", "12"], ["Frecuencia base", "3.9 GHz"], ["Frecuencia turbo", "4.4 GHz"], ["Caché L2", "3 MB"], ["Caché L3", "16 MB"], ["TDP", "65 W"], ["Gráficos integrados", "AMD Radeon Vega 7"], ["Memoria soportada", "DDR4"], ["Cooler incluido", "Sí (Wraith Stealth)"]]
    },
    "procesador-intel-core-i5-14600k-socket-1700": {
        "nombre": "Procesador Intel Core i5 14600K Socket 1700",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/intel-core-i5-14600k-35ghz-14-core-20-thread-14th-gen-processor-805040.jpg?v=1733277065",
        "precio": 380000,
        "categoria": "Procesadores",
        "pagina": "Procesadores.html",
        "specs": [["Marca", "Intel"], ["Modelo", "Core i5-14600K"], ["Socket", "LGA 1700"], ["Generación", "14° gen (Raptor Lake Refresh)"], ["Núcleos", "14 (6 P-cores + 8 E-cores)"], ["Hilos", "20"], ["Frecuencia base (P-core)", "3.5 GHz"], ["Frecuencia turbo", "5.3 GHz"], ["Caché", "24 MB Intel Smart Cache"], ["Potencia base", "125 W"], ["Potencia turbo máxima", "181 W"], ["Gráficos integrados", "Intel UHD 770"], ["Memoria soportada", "DDR4 y DDR5"], ["Cooler incluido", "No"]]
    },
    "procesador-intel-core-i7-14700k-socket-1700": {
        "nombre": "Procesador Intel Core i7 14700K Socket 1700",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/intel-core-i7-14700k-34ghz-20-core-28-thread-14th-gen-processor-875165.jpg?v=1733277065",
        "precio": 560000,
        "categoria": "Procesadores",
        "pagina": "Procesadores.html",
        "specs": [["Marca", "Intel"], ["Modelo", "Core i7-14700K"], ["Socket", "LGA 1700"], ["Generación", "14° gen (Raptor Lake Refresh)"], ["Núcleos", "20 (8 P-cores + 12 E-cores)"], ["Hilos", "28"], ["Frecuencia base (P-core)", "3.4 GHz"], ["Frecuencia turbo", "5.6 GHz"], ["Caché", "33 MB Intel Smart Cache"], ["Potencia base", "125 W"], ["Potencia turbo máxima", "253 W"], ["Gráficos integrados", "Intel UHD 770"], ["Memoria soportada", "DDR4 y DDR5"], ["Cooler incluido", "No"]]
    },
    "placa-de-video-msi-geforce-rtx-5060-8gb-shadow-2x-oc": {
        "nombre": "Placa de Video MSI GeForce RTX 5060 8GB Shadow 2X OC",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-geforce-rtx-5060-8g-shadow-2x-oc-g5060-8s2c-7669101.jpg?v=1752659211",
        "precio": 560000,
        "categoria": "Placas de Video",
        "pagina": "Placasdevideo.html",
        "specs": [["Marca", "MSI"], ["GPU", "NVIDIA GeForce RTX 5060"], ["Memoria", "8 GB GDDR7"], ["Bus de memoria", "128 bits"], ["Núcleos CUDA", "3840"], ["Interfaz", "PCI Express 5.0"], ["Salidas de video", "DisplayPort 2.1b x3, HDMI 2.1b x1"], ["Consumo aproximado", "145 W"], ["Fuente recomendada", "550 W"], ["Ventiladores", "2"], ["Tecnologías", "DLSS 4, Ray Tracing, NVIDIA Reflex"]]
    },
    "placa-de-video-msi-geforce-rtx-5060-ti-16gb-shadow-2x-oc-plus": {
        "nombre": "Placa de Video MSI GeForce RTX 5060 Ti 16GB Shadow 2X OC Plus",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-geforce-rtx-5060-ti-16g-shadow-2x-oc-plus-graphics-card-g506t-16s2cp-8212258.jpg?v=1760685810",
        "precio": 780000,
        "categoria": "Placas de Video",
        "pagina": "Placasdevideo.html",
        "specs": [["Marca", "MSI"], ["GPU", "NVIDIA GeForce RTX 5060 Ti"], ["Memoria", "16 GB GDDR7"], ["Bus de memoria", "128 bits"], ["Núcleos CUDA", "4608"], ["Interfaz", "PCI Express 5.0"], ["Salidas de video", "DisplayPort 2.1b x3, HDMI 2.1b x1"], ["Consumo aproximado", "180 W"], ["Fuente recomendada", "600 W"], ["Ventiladores", "2"], ["Tecnologías", "DLSS 4, Ray Tracing, NVIDIA Reflex"]]
    },
    "placa-de-video-msi-geforce-rtx-5070-12gb-shadow-3x-oc": {
        "nombre": "Placa de Video MSI GeForce RTX 5070 12GB Shadow 3X OC",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-nvidia-geforce-rtx-5070-12g-shadow-3x-oc-g5070-12s3c-905625.jpg?v=1744785311",
        "precio": 1150000,
        "categoria": "Placas de Video",
        "pagina": "Placasdevideo.html",
        "specs": [["Marca", "MSI"], ["GPU", "NVIDIA GeForce RTX 5070"], ["Memoria", "12 GB GDDR7"], ["Bus de memoria", "192 bits"], ["Núcleos CUDA", "6144"], ["Interfaz", "PCI Express 5.0"], ["Salidas de video", "DisplayPort 2.1b x3, HDMI 2.1b x1"], ["Consumo aproximado", "250 W"], ["Fuente recomendada", "650 W"], ["Ventiladores", "3"], ["Tecnologías", "DLSS 4, Ray Tracing, NVIDIA Reflex"]]
    },
    "placa-de-video-msi-geforce-rtx-5070-ti-16gb-shadow-3x-oc": {
        "nombre": "Placa de Video MSI GeForce RTX 5070 Ti 16GB Shadow 3X OC",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-geforce-rtx-5070-ti-16g-shadow-3x-oc-graphics-card-g507t-16s3c-3476508.jpg?v=1760685810",
        "precio": 1650000,
        "categoria": "Placas de Video",
        "pagina": "Placasdevideo.html",
        "specs": [["Marca", "MSI"], ["GPU", "NVIDIA GeForce RTX 5070 Ti"], ["Memoria", "16 GB GDDR7"], ["Bus de memoria", "256 bits"], ["Núcleos CUDA", "8960"], ["Interfaz", "PCI Express 5.0"], ["Salidas de video", "DisplayPort 2.1b x3, HDMI 2.1b x1"], ["Consumo aproximado", "300 W"], ["Fuente recomendada", "750 W"], ["Ventiladores", "3"], ["Tecnologías", "DLSS 4, Ray Tracing, NVIDIA Reflex"]]
    },
    "placa-de-video-asrock-radeon-rx-9060-xt-16gb-challenger-oc": {
        "nombre": "Placa de Video ASRock Radeon RX 9060 XT 16GB Challenger OC",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asrock-amd-radeon-rx-9060-xt-challenger-16gb-oc-rdna-4-gaming-gpu-vg-9060xt-cl16g-3445890.jpg?v=1765368192",
        "precio": 720000,
        "categoria": "Placas de Video",
        "pagina": "Placasdevideo.html",
        "specs": [["Marca", "ASRock"], ["GPU", "AMD Radeon RX 9060 XT"], ["Memoria", "16 GB GDDR6"], ["Bus de memoria", "128 bits"], ["Unidades de cómputo", "32"], ["Interfaz", "PCI Express 5.0"], ["Salidas de video", "DisplayPort 2.1a x2, HDMI 2.1b x1"], ["Consumo aproximado", "160 W"], ["Fuente recomendada", "500 W"], ["Ventiladores", "2"], ["Tecnologías", "FSR 4, Ray Tracing, arquitectura RDNA 4"]]
    },
    "placa-de-video-sapphire-pulse-radeon-rx-9070-xt-16gb": {
        "nombre": "Placa de Video Sapphire Pulse Radeon RX 9070 XT 16GB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/sapphire-pulse-amd-radeon-rx-9070-xt-gaming-graphics-card-11348-03-20g-227511.jpg?v=1743015049",
        "precio": 1400000,
        "categoria": "Placas de Video",
        "pagina": "Placasdevideo.html",
        "specs": [["Marca", "Sapphire"], ["GPU", "AMD Radeon RX 9070 XT"], ["Memoria", "16 GB GDDR6"], ["Bus de memoria", "256 bits"], ["Unidades de cómputo", "64"], ["Interfaz", "PCI Express 5.0"], ["Salidas de video", "DisplayPort 2.1a x2, HDMI 2.1b x1"], ["Consumo aproximado", "304 W"], ["Fuente recomendada", "750 W"], ["Ventiladores", "3"], ["Tecnologías", "FSR 4, Ray Tracing, arquitectura RDNA 4"]],
        "precioAnterior": 1690000
    },
    "disco-ssd-m-2-nvme-kingston-nv3-500gb": {
        "nombre": "Disco SSD M.2 NVMe Kingston NV3 500GB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/kingston-snv3s500g-500gb-m2-pcie-nvme-solid-state-drive-581374.jpg?v=1733980533",
        "precio": 55000,
        "categoria": "Almacenamiento",
        "pagina": "almacenamiento.html",
        "specs": [["Marca", "Kingston"], ["Modelo", "NV3"], ["Capacidad", "500 GB"], ["Tipo", "SSD NVMe"], ["Formato", "M.2 2280"], ["Interfaz", "PCIe 4.0 x4"], ["Lectura secuencial", "Hasta 5000 MB/s"], ["Escritura secuencial", "Hasta 3000 MB/s"], ["Garantía", "3 años"]]
    },
    "disco-ssd-m-2-nvme-kingston-nv3-1tb": {
        "nombre": "Disco SSD M.2 NVMe Kingston NV3 1TB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/kingston-snv3s1000g-1tb-m2-pcie-nvme-solid-state-drive-192967.jpg?v=1733980533",
        "precio": 90000,
        "categoria": "Almacenamiento",
        "pagina": "almacenamiento.html",
        "specs": [["Marca", "Kingston"], ["Modelo", "NV3"], ["Capacidad", "1 TB"], ["Tipo", "SSD NVMe"], ["Formato", "M.2 2280"], ["Interfaz", "PCIe 4.0 x4"], ["Lectura secuencial", "Hasta 6000 MB/s"], ["Escritura secuencial", "Hasta 4000 MB/s"], ["Garantía", "3 años"]]
    },
    "disco-ssd-m-2-nvme-crucial-p310-1tb": {
        "nombre": "Disco SSD M.2 NVMe Crucial P310 1TB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/crucial-p310-1tb-pcie-gen4-nvme-2280-m2-ssd-ct1000p310ssd8-4585491.jpg?v=1773314833",
        "precio": 105000,
        "categoria": "Almacenamiento",
        "pagina": "almacenamiento.html",
        "specs": [["Marca", "Crucial"], ["Modelo", "P310"], ["Capacidad", "1 TB"], ["Tipo", "SSD NVMe"], ["Formato", "M.2 2280"], ["Interfaz", "PCIe 4.0 x4"], ["Lectura secuencial", "Hasta 7100 MB/s"], ["Escritura secuencial", "Hasta 6000 MB/s"], ["Garantía", "5 años"]]
    },
    "disco-ssd-m-2-nvme-samsung-990-pro-2tb": {
        "nombre": "Disco SSD M.2 NVMe Samsung 990 PRO 2TB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/samsung-mz-v9p2t0bam-2tb-990-pro-m2-pcie-40-nvme-ssd-920349.jpg?v=1733280096",
        "precio": 260000,
        "categoria": "Almacenamiento",
        "pagina": "almacenamiento.html",
        "specs": [["Marca", "Samsung"], ["Modelo", "990 PRO"], ["Capacidad", "2 TB"], ["Tipo", "SSD NVMe"], ["Formato", "M.2 2280"], ["Interfaz", "PCIe 4.0 x4"], ["Lectura secuencial", "Hasta 7450 MB/s"], ["Escritura secuencial", "Hasta 6900 MB/s"], ["Caché", "DRAM LPDDR4"], ["Garantía", "5 años"]],
        "precioAnterior": 320000
    },
    "disco-ssd-kingston-a400-480gb-sata-2-5": {
        "nombre": "Disco SSD Kingston A400 480GB SATA 2.5\"",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/kingston-480gb-25-a400-3d-nand-sata-ssd-sa400s37480g-5369773.jpg?v=1760177973",
        "precio": 45000,
        "categoria": "Almacenamiento",
        "pagina": "almacenamiento.html",
        "specs": [["Marca", "Kingston"], ["Modelo", "A400"], ["Capacidad", "480 GB"], ["Tipo", "SSD SATA"], ["Formato", "2.5 pulgadas"], ["Interfaz", "SATA III 6 Gb/s"], ["Lectura secuencial", "Hasta 500 MB/s"], ["Escritura secuencial", "Hasta 450 MB/s"], ["Garantía", "3 años"]]
    },
    "disco-rigido-seagate-barracuda-2tb-3-5": {
        "nombre": "Disco Rígido Seagate BarraCuda 2TB 3.5\"",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/seagate-2tb-barracuda-sata-6-gbs-35-hard-drive-267883.jpg?v=1733280097",
        "precio": 95000,
        "categoria": "Almacenamiento",
        "pagina": "almacenamiento.html",
        "specs": [["Marca", "Seagate"], ["Modelo", "BarraCuda"], ["Capacidad", "2 TB"], ["Tipo", "Disco rígido (HDD)"], ["Formato", "3.5 pulgadas"], ["Interfaz", "SATA III 6 Gb/s"], ["Velocidad de giro", "7200 RPM"], ["Caché", "256 MB"], ["Uso recomendado", "Guardar archivos, fotos y juegos"]]
    },
    "gabinete-nzxt-h5-flow-black-vidrio-templado": {
        "nombre": "Gabinete NZXT H5 Flow Black Vidrio Templado",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-h5-flow-atx-mid-tower-case-black-cc-h52fb-01-102997.jpg?v=1736407222",
        "precio": 140000,
        "categoria": "Gabinetes",
        "pagina": "Gabinetes.html",
        "specs": [["Marca", "NZXT"], ["Modelo", "H5 Flow"], ["Tipo", "Mid Tower"], ["Placas madre", "ATX, Micro-ATX, Mini-ITX"], ["Color", "Negro"], ["Panel lateral", "Vidrio templado"], ["Frente", "Mesh perforado"], ["Ventiladores incluidos", "2 x 120 mm"], ["Largo máx. placa de video", "365 mm"], ["Altura máx. cooler", "165 mm"], ["Radiador frontal", "Hasta 280 mm"], ["Puertos frontales", "USB-A 3.2 y USB-C"]]
    },
    "gabinete-nzxt-h6-flow-rgb-white-doble-camara": {
        "nombre": "Gabinete NZXT H6 Flow RGB White Doble Cámara",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-cc-h61fw-r1-h6-flow-rgb-mid-tower-dual-chamber-airflow-atx-case-white-270466.jpg?v=1733279044",
        "precio": 210000,
        "categoria": "Gabinetes",
        "pagina": "Gabinetes.html",
        "specs": [["Marca", "NZXT"], ["Modelo", "H6 Flow RGB"], ["Tipo", "Mid Tower doble cámara"], ["Placas madre", "ATX, Micro-ATX, Mini-ITX"], ["Color", "Blanco"], ["Panel lateral", "Vidrio panorámico"], ["Ventiladores incluidos", "3 x 120 mm RGB"], ["Largo máx. placa de video", "365 mm"], ["Altura máx. cooler", "163 mm"], ["Radiadores", "Hasta 360 mm"], ["Puertos frontales", "USB-A 3.2 y USB-C"]]
    },
    "gabinete-lian-li-o11-dynamic-evo-rgb-black": {
        "nombre": "Gabinete Lian Li O11 Dynamic EVO RGB Black",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/lian-li-o11dergbx-o11-dynamic-evo-rgb-case-black-247019.jpg?v=1734071131",
        "precio": 260000,
        "categoria": "Gabinetes",
        "pagina": "Gabinetes.html",
        "specs": [["Marca", "Lian Li"], ["Modelo", "O11 Dynamic EVO RGB"], ["Tipo", "Mid Tower doble cámara"], ["Placas madre", "E-ATX, ATX, Micro-ATX, Mini-ITX"], ["Color", "Negro"], ["Paneles", "Vidrio templado frontal y lateral"], ["Ventiladores incluidos", "No"], ["Iluminación", "Tira ARGB"], ["Largo máx. placa de video", "426 mm"], ["Altura máx. cooler", "167 mm"], ["Radiadores", "Hasta 3 de 360 mm"]]
    },
    "gabinete-corsair-icue-5000x-rgb-white": {
        "nombre": "Gabinete Corsair iCUE 5000X RGB White",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/corsair-cc-9011213-ww-icue-5000x-rgb-tempered-glass-white-mid-tower-atx-pc-smart-case-946925.jpg?v=1733275770",
        "precio": 300000,
        "categoria": "Gabinetes",
        "pagina": "Gabinetes.html",
        "specs": [["Marca", "Corsair"], ["Modelo", "iCUE 5000X RGB"], ["Tipo", "Mid Tower"], ["Placas madre", "E-ATX, ATX, Micro-ATX, Mini-ITX"], ["Color", "Blanco"], ["Paneles", "4 paneles de vidrio templado"], ["Ventiladores incluidos", "3 x 120 mm RGB"], ["Largo máx. placa de video", "400 mm"], ["Altura máx. cooler", "170 mm"], ["Radiadores", "Hasta 360 mm"], ["Puertos frontales", "USB-A 3.0 y USB-C"]]
    },
    "gabinete-hyte-y70-black-white-doble-camara": {
        "nombre": "Gabinete HYTE Y70 Black/White Doble Cámara",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/hyte-dual-chamber-mid-tower-atx-computer-case-black-white-cs-hyte-y70-bw-765220.jpg?v=1749169467",
        "precio": 330000,
        "categoria": "Gabinetes",
        "pagina": "Gabinetes.html",
        "specs": [["Marca", "HYTE"], ["Modelo", "Y70"], ["Tipo", "Mid Tower doble cámara"], ["Placas madre", "E-ATX, ATX, Micro-ATX, Mini-ITX"], ["Color", "Negro y blanco"], ["Paneles", "Vidrio panorámico sin pilar"], ["Placa de video", "Montaje vertical"], ["Riser incluido", "PCIe 4.0"], ["Largo máx. placa de video", "422 mm"], ["Radiadores", "Hasta 360 mm"]],
        "precioAnterior": 410000
    },
    "gabinete-fractal-design-meshify-c-black": {
        "nombre": "Gabinete Fractal Design Meshify C Black",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/fractal-design-fd-ca-mesh-c-bko-meshify-c-atx-mid-tower-computer-case-138249.jpg?v=1733276666",
        "precio": 150000,
        "categoria": "Gabinetes",
        "pagina": "Gabinetes.html",
        "specs": [["Marca", "Fractal Design"], ["Modelo", "Meshify C"], ["Tipo", "Mid Tower compacto"], ["Placas madre", "ATX, Micro-ATX, Mini-ITX"], ["Color", "Negro"], ["Panel lateral", "Vidrio templado"], ["Frente", "Mesh"], ["Ventiladores incluidos", "2 x 120 mm"], ["Largo máx. placa de video", "315 mm"], ["Altura máx. cooler", "170 mm"], ["Radiador frontal", "Hasta 360 mm"]]
    },
    "cooler-cpu-cooler-master-hyper-212-spectrum-v3-argb": {
        "nombre": "Cooler CPU Cooler Master Hyper 212 Spectrum V3 ARGB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/cooler-master-hyper-212-spectrum-v3-argb-cpu-air-cooler-rr-s4na-17pa-r1-561488.jpg?v=1748974140",
        "precio": 40000,
        "categoria": "Refrigeración",
        "pagina": "refrigeracion.html",
        "specs": [["Marca", "Cooler Master"], ["Modelo", "Hyper 212 Spectrum V3"], ["Tipo", "Refrigeración por aire (torre)"], ["Heatpipes", "4 de cobre"], ["Ventiladores", "1 x 120 mm ARGB PWM"], ["Iluminación", "ARGB"], ["Sockets compatibles", "AM5, AM4, LGA 1700"]]
    },
    "cooler-cpu-thermalright-peerless-assassin-120-se": {
        "nombre": "Cooler CPU Thermalright Peerless Assassin 120 SE",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/thermalright-peerless-assassin-120-se-cpu-cooler-pa120-se-173597.jpg?v=1739968676",
        "precio": 55000,
        "categoria": "Refrigeración",
        "pagina": "refrigeracion.html",
        "specs": [["Marca", "Thermalright"], ["Modelo", "Peerless Assassin 120 SE"], ["Tipo", "Refrigeración por aire (doble torre)"], ["Heatpipes", "6 de cobre"], ["Ventiladores", "2 x 120 mm PWM"], ["Iluminación", "No"], ["Sockets compatibles", "AM5, AM4, LGA 1700"]]
    },
    "cooler-cpu-nzxt-t120-rgb-black": {
        "nombre": "Cooler CPU NZXT T120 RGB Black",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-t120-rgb-cpu-air-cooler-black-rc-tr120-b1-781541.jpg?v=1749827513",
        "precio": 55000,
        "categoria": "Refrigeración",
        "pagina": "refrigeracion.html",
        "specs": [["Marca", "NZXT"], ["Modelo", "T120 RGB"], ["Tipo", "Refrigeración por aire (torre)"], ["Heatpipes", "4 de cobre"], ["Ventiladores", "1 x 120 mm RGB"], ["Iluminación", "RGB"], ["Color", "Negro"], ["Sockets compatibles", "AM5, AM4, LGA 1700"]]
    },
    "watercooler-thermaltake-th240-v2-argb-sync": {
        "nombre": "Watercooler Thermaltake TH240 V2 ARGB Sync",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/thermaltake-cl-w361-pl12sw-a-th240-v2-argb-sync-all-in-one-liquid-cooler-intelamd-471007.jpg?v=1733280688",
        "precio": 110000,
        "categoria": "Refrigeración",
        "pagina": "refrigeracion.html",
        "specs": [["Marca", "Thermaltake"], ["Modelo", "TH240 V2 ARGB Sync"], ["Tipo", "Refrigeración líquida AIO"], ["Radiador", "240 mm"], ["Ventiladores", "2 x 120 mm ARGB"], ["Iluminación", "ARGB en bomba y ventiladores"], ["Sockets compatibles", "AM5, AM4, LGA 1700"]]
    },
    "watercooler-nzxt-kraken-plus-360-rgb-black-con-pantalla": {
        "nombre": "Watercooler NZXT Kraken Plus 360 RGB Black con Pantalla",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-kraken-plus-360-rgb-aio-liquid-cooler-black-rl-kr360-b2-2729846.jpg?v=1759332932",
        "precio": 280000,
        "categoria": "Refrigeración",
        "pagina": "refrigeracion.html",
        "specs": [["Marca", "NZXT"], ["Modelo", "Kraken Plus 360 RGB"], ["Tipo", "Refrigeración líquida AIO"], ["Radiador", "360 mm"], ["Ventiladores", "3 x 120 mm RGB"], ["Pantalla", "LCD personalizable en la bomba"], ["Color", "Negro"], ["Sockets compatibles", "AM5, AM4, LGA 1700"]],
        "precioAnterior": 340000
    },
    "watercooler-nzxt-kraken-elite-360-rgb-white-con-pantalla": {
        "nombre": "Watercooler NZXT Kraken Elite 360 RGB White con Pantalla",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-kraken-elite-360-rgb-aio-liquid-cooler-white-rl-kr36e-w2-488624.jpg?v=1737719812",
        "precio": 380000,
        "categoria": "Refrigeración",
        "pagina": "refrigeracion.html",
        "specs": [["Marca", "NZXT"], ["Modelo", "Kraken Elite 360 RGB"], ["Tipo", "Refrigeración líquida AIO"], ["Radiador", "360 mm"], ["Ventiladores", "3 x 120 mm RGB"], ["Pantalla", "LCD grande personalizable en la bomba"], ["Color", "Blanco"], ["Sockets compatibles", "AM5, AM4, LGA 1700"]]
    },
    "fuente-asus-tuf-gaming-550w-80-plus-bronze": {
        "nombre": "Fuente ASUS TUF Gaming 550W 80 Plus Bronze",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asus-tuf-gaming-550b-550w-80-plus-bronze-power-supply-918035.jpg?v=1733275006",
        "precio": 75000,
        "categoria": "Fuentes",
        "pagina": "Fuentes.html",
        "specs": [["Marca", "ASUS"], ["Modelo", "TUF Gaming 550B"], ["Potencia", "550 W"], ["Certificación", "80 Plus Bronze"], ["Modular", "No"], ["Formato", "ATX"], ["Ideal para", "PC de oficina o gaming básica"], ["Protecciones", "Sobretensión, sobrecorriente y cortocircuito"]]
    },
    "fuente-msi-mag-a650bn-650w-80-plus-bronze": {
        "nombre": "Fuente MSI MAG A650BN 650W 80 Plus Bronze",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-mag-a650bn-650-watt-80-plus-bronze-atx-non-modular-power-supply-9698613.jpg?v=1756290343",
        "precio": 80000,
        "categoria": "Fuentes",
        "pagina": "Fuentes.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MAG A650BN"], ["Potencia", "650 W"], ["Certificación", "80 Plus Bronze"], ["Modular", "No"], ["Formato", "ATX"], ["Ideal para", "PC gamer de gama media"], ["Protecciones", "Sobretensión, sobrecorriente y cortocircuito"]]
    },
    "fuente-cougar-gex650-650w-80-plus-gold-full-modular": {
        "nombre": "Fuente Cougar GEX650 650W 80 Plus Gold Full Modular",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/cougar-31ge065002p01-650w-gex650-80plus-gold-fully-modular-atx-power-supply-598658.jpg?v=1733275840",
        "precio": 110000,
        "categoria": "Fuentes",
        "pagina": "Fuentes.html",
        "specs": [["Marca", "Cougar"], ["Modelo", "GEX650"], ["Potencia", "650 W"], ["Certificación", "80 Plus Gold"], ["Modular", "Full modular"], ["Formato", "ATX"], ["Ideal para", "PC gamer de gama media"], ["Protecciones", "Sobretensión, sobrecorriente y cortocircuito"]]
    },
    "fuente-msi-mag-a750gl-pcie5-750w-80-plus-gold": {
        "nombre": "Fuente MSI MAG A750GL PCIE5 750W 80 Plus Gold",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-750w-fully-modular-gaming-power-supply-atx-31-pcie-51-80-plus-gold-mag-a750gl-spcie5-8380205.jpg?v=1777337353",
        "precio": 140000,
        "categoria": "Fuentes",
        "pagina": "Fuentes.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MAG A750GL PCIE5"], ["Potencia", "750 W"], ["Certificación", "80 Plus Gold"], ["Modular", "Full modular"], ["Formato", "ATX"], ["Norma", "ATX 3.1"], ["Conector PCIe 5", "Sí (12V-2x6)"], ["Protecciones", "Sobretensión, sobrecorriente y cortocircuito"]],
        "precioAnterior": 165000
    },
    "fuente-cooler-master-mwe-gold-850-v2-full-modular": {
        "nombre": "Fuente Cooler Master MWE Gold 850 V2 Full Modular",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/cooler-master-mwe-gold-850-v2-full-modular-80-plus-gold-atx-power-supply-mpe-8501-afaag-us-150184.jpg?v=1744982029",
        "precio": 160000,
        "categoria": "Fuentes",
        "pagina": "Fuentes.html",
        "specs": [["Marca", "Cooler Master"], ["Modelo", "MWE Gold 850 V2"], ["Potencia", "850 W"], ["Certificación", "80 Plus Gold"], ["Modular", "Full modular"], ["Formato", "ATX"], ["Ideal para", "PC gamer de gama alta"], ["Protecciones", "Sobretensión, sobrecorriente y cortocircuito"]]
    },
    "fuente-nzxt-c1000-gold-1000w-full-modular-black": {
        "nombre": "Fuente NZXT C1000 Gold 1000W Full Modular Black",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-pa-0g2bb-us-1000-watt-80-plus-gold-fully-modular-c1000-atx-31-psu-black-627986.jpg?v=1733279156",
        "precio": 230000,
        "categoria": "Fuentes",
        "pagina": "Fuentes.html",
        "specs": [["Marca", "NZXT"], ["Modelo", "C1000 Gold"], ["Potencia", "1000 W"], ["Certificación", "80 Plus Gold"], ["Modular", "Full modular"], ["Formato", "ATX"], ["Norma", "ATX 3.1"], ["Conector PCIe 5", "Sí (12V-2x6)"], ["Color", "Negro"], ["Protecciones", "Sobretensión, sobrecorriente y cortocircuito"]]
    },
    "monitor-asus-va249qg-24-full-hd-ips-120hz": {
        "nombre": "Monitor ASUS VA249QG 24\" Full HD IPS 120Hz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asus-va249qg-24-169-full-hd-120hz-ips-led-gaming-monitor-8384921.jpg?v=1759232400",
        "precio": 170000,
        "categoria": "Monitores",
        "pagina": "Monitores.html",
        "specs": [["Marca", "ASUS"], ["Modelo", "VA249QG"], ["Tamaño", "23.8 pulgadas"], ["Resolución", "1920 x 1080 (Full HD)"], ["Panel", "IPS"], ["Tasa de refresco", "120 Hz"], ["Tiempo de respuesta", "1 ms (MPRT)"], ["Sincronización", "Adaptive-Sync"], ["Conexiones", "HDMI y DisplayPort"]]
    },
    "monitor-gamer-asus-tuf-vg247q1a-24-full-hd-165hz": {
        "nombre": "Monitor Gamer ASUS TUF VG247Q1A 24\" Full HD 165Hz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asus-vg247q1a-tuf-24-class-full-hd-gaming-lcd-monitor-169-black-862997.jpg?v=1733275009",
        "precio": 230000,
        "categoria": "Monitores",
        "pagina": "Monitores.html",
        "specs": [["Marca", "ASUS"], ["Modelo", "TUF Gaming VG247Q1A"], ["Tamaño", "23.8 pulgadas"], ["Resolución", "1920 x 1080 (Full HD)"], ["Panel", "VA"], ["Tasa de refresco", "165 Hz"], ["Tiempo de respuesta", "1 ms (MPRT)"], ["Sincronización", "FreeSync Premium"], ["Conexiones", "HDMI y DisplayPort"]]
    },
    "monitor-gamer-msi-mag-275upd-e14-27-4k-144hz": {
        "nombre": "Monitor Gamer MSI MAG 275UPD E14 27\" 4K 144Hz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-27-4k-uhd-144hz-ips-gaming-lcd-monitor-mag-275upd-e14-6682678.jpg?v=1762830909",
        "precio": 560000,
        "categoria": "Monitores",
        "pagina": "Monitores.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MAG 275UPD E14"], ["Tamaño", "27 pulgadas"], ["Resolución", "3840 x 2160 (4K UHD)"], ["Panel", "IPS"], ["Tasa de refresco", "144 Hz"], ["Tiempo de respuesta", "1 ms (GtG)"], ["Sincronización", "Adaptive-Sync"], ["Conexiones", "HDMI y DisplayPort"]]
    },
    "monitor-gamer-msi-mag-401qr-40-uwqhd-ultrawide": {
        "nombre": "Monitor Gamer MSI MAG 401QR 40\" UWQHD Ultrawide",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-mag401qr-40-uwqhd-219-widescreen-gaming-lcd-monitor-722869.jpg?v=1733278659",
        "precio": 650000,
        "categoria": "Monitores",
        "pagina": "Monitores.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MAG 401QR"], ["Tamaño", "40 pulgadas"], ["Resolución", "3440 x 1440 (UWQHD)"], ["Formato", "21:9 ultrawide"], ["Panel", "Rapid IPS"], ["Tasa de refresco", "155 Hz"], ["Tiempo de respuesta", "0.5 ms (GtG)"], ["Conexiones", "HDMI, DisplayPort y USB-C"]],
        "precioAnterior": 820000
    },
    "monitor-gamer-msi-mag-322urdf-e16-32-4k-160hz": {
        "nombre": "Monitor Gamer MSI MAG 322URDF E16 32\" 4K 160Hz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-mag-322urdf-e16-32-4k-160hz-dual-mode-rapid-ips-lcd-gaming-monitor-1369863.jpg?v=1760685811",
        "precio": 750000,
        "categoria": "Monitores",
        "pagina": "Monitores.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MAG 322URDF E16"], ["Tamaño", "31.5 pulgadas"], ["Resolución", "3840 x 2160 (4K UHD)"], ["Panel", "Rapid IPS"], ["Tasa de refresco", "160 Hz en 4K / 320 Hz en Full HD"], ["Modo dual", "Sí"], ["Tiempo de respuesta", "1 ms (GtG)"], ["Conexiones", "HDMI, DisplayPort y USB-C"]]
    },
    "monitor-gamer-msi-mpg-491cqp-49-qd-oled-curvo": {
        "nombre": "Monitor Gamer MSI MPG 491CQP 49\" QD-OLED Curvo",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-mpg-491cqp-49-qd-oled-curved-widescreen-gaming-oled-monitor-329-metallic-black-830324.jpg?v=1733278659",
        "precio": 1600000,
        "categoria": "Monitores",
        "pagina": "Monitores.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MPG 491CQP"], ["Tamaño", "49 pulgadas"], ["Resolución", "5120 x 1440 (DQHD)"], ["Formato", "32:9 super ultrawide"], ["Panel", "QD-OLED curvo"], ["Tasa de refresco", "144 Hz"], ["Tiempo de respuesta", "0.03 ms (GtG)"], ["Conexiones", "HDMI, DisplayPort y USB-C"]]
    },
    "mother-msi-a520m-a-pro-am4": {
        "nombre": "Mother MSI A520M-A PRO AM4",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-a520m-a-pro-amd-a520-am4-micro-atx-motherboard-2981237.jpg?v=1755673055",
        "precio": 90000,
        "categoria": "Placas Madre",
        "pagina": "Placas_madre.html",
        "specs": [["Marca", "MSI"], ["Modelo", "A520M-A PRO"], ["Socket", "AM4"], ["Chipset", "AMD A520"], ["Formato", "Micro-ATX"], ["Memoria", "DDR4 - 2 slots"], ["Almacenamiento", "M.2 NVMe y SATA"], ["Red", "LAN Gigabit"], ["WiFi", "No"], ["Procesadores compatibles", "Ryzen 3000 / 5000"]]
    },
    "mother-msi-b550m-pro-vdh-wifi-am4": {
        "nombre": "Mother MSI B550M PRO-VDH WIFI AM4",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-b550m-pro-vdh-wifi-am4-micro-atx-desktop-motherboard-945745.jpg?v=1733278605",
        "precio": 140000,
        "categoria": "Placas Madre",
        "pagina": "Placas_madre.html",
        "specs": [["Marca", "MSI"], ["Modelo", "B550M PRO-VDH WIFI"], ["Socket", "AM4"], ["Chipset", "AMD B550"], ["Formato", "Micro-ATX"], ["Memoria", "DDR4 - 4 slots"], ["Almacenamiento", "2 x M.2 NVMe y SATA"], ["Red", "LAN Gigabit"], ["WiFi", "Sí + Bluetooth"], ["Procesadores compatibles", "Ryzen 3000 / 5000"]]
    },
    "mother-asus-prime-b760m-a-ax-socket-1700": {
        "nombre": "Mother ASUS PRIME B760M-A AX Socket 1700",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asus-prime-b760m-a-ax-intel-lga-1700-micro-atx-motherboard-9394914.jpg?v=1760485352",
        "precio": 190000,
        "categoria": "Placas Madre",
        "pagina": "Placas_madre.html",
        "specs": [["Marca", "ASUS"], ["Modelo", "PRIME B760M-A AX"], ["Socket", "LGA 1700"], ["Chipset", "Intel B760"], ["Formato", "Micro-ATX"], ["Memoria", "DDR5 - 4 slots"], ["Almacenamiento", "2 x M.2 PCIe 4.0 y SATA"], ["WiFi", "WiFi 6 + Bluetooth"], ["Procesadores compatibles", "Intel Core 12° a 14° gen"]]
    },
    "mother-msi-b760-gaming-plus-wifi-socket-1700": {
        "nombre": "Mother MSI B760 GAMING PLUS WIFI Socket 1700",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-b760-gaming-plus-wifi-gaming-desktop-lga1700-atx-motherboard-127053.jpg?v=1733278606",
        "precio": 210000,
        "categoria": "Placas Madre",
        "pagina": "Placas_madre.html",
        "specs": [["Marca", "MSI"], ["Modelo", "B760 GAMING PLUS WIFI"], ["Socket", "LGA 1700"], ["Chipset", "Intel B760"], ["Formato", "ATX"], ["Memoria", "DDR5 - 4 slots"], ["Almacenamiento", "M.2 PCIe 4.0 y SATA"], ["Red", "LAN 2.5G"], ["WiFi", "Sí + Bluetooth"], ["Procesadores compatibles", "Intel Core 12° a 14° gen"]]
    },
    "mother-msi-mag-b850-tomahawk-max-wifi-am5": {
        "nombre": "Mother MSI MAG B850 TOMAHAWK MAX WIFI AM5",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/msi-mag-b850-tomahawk-max-wifi-7-amd-am5-atx-gaming-desktop-motherboard-895130.jpg?v=1746847802",
        "precio": 330000,
        "categoria": "Placas Madre",
        "pagina": "Placas_madre.html",
        "specs": [["Marca", "MSI"], ["Modelo", "MAG B850 TOMAHAWK MAX WIFI"], ["Socket", "AM5"], ["Chipset", "AMD B850"], ["Formato", "ATX"], ["Memoria", "DDR5 - 4 slots"], ["Almacenamiento", "M.2 PCIe 5.0 y PCIe 4.0"], ["Red", "LAN 5G"], ["WiFi", "WiFi 7 + Bluetooth"], ["Procesadores compatibles", "Ryzen 7000 / 8000 / 9000"]]
    },
    "mother-asus-tuf-gaming-x870-plus-wifi-am5": {
        "nombre": "Mother ASUS TUF GAMING X870-PLUS WIFI AM5",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asus-tuf-gaming-x870-plus-wifi-gaming-desktop-atx-motherboard-543649.jpg?v=1739317042",
        "precio": 380000,
        "categoria": "Placas Madre",
        "pagina": "Placas_madre.html",
        "specs": [["Marca", "ASUS"], ["Modelo", "TUF GAMING X870-PLUS WIFI"], ["Socket", "AM5"], ["Chipset", "AMD X870"], ["Formato", "ATX"], ["Memoria", "DDR5 - 4 slots"], ["Almacenamiento", "M.2 PCIe 5.0 y PCIe 4.0"], ["Puertos", "USB4"], ["WiFi", "WiFi 7 + Bluetooth"], ["Procesadores compatibles", "Ryzen 7000 / 8000 / 9000"]]
    },
    "memoria-ram-crucial-8gb-ddr4-3200mhz": {
        "nombre": "Memoria RAM Crucial 8GB DDR4 3200MHz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/8gddr4-3200-8gb-ddr4-3200mhz-udimm-desktop-memory-469461.jpg?v=1733274477",
        "precio": 25000,
        "categoria": "Memorias RAM",
        "pagina": "Memorias.html",
        "specs": [["Marca", "Crucial"], ["Modelo", "Basics"], ["Capacidad", "8 GB (1 x 8 GB)"], ["Tipo", "DDR4"], ["Velocidad", "3200 MHz"], ["Latencia", "CL22"], ["Iluminación", "No"], ["Perfil de overclock", "No"], ["Formato", "DIMM (PC de escritorio)"]]
    },
    "memoria-ram-corsair-vengeance-rgb-pro-32gb-2x16gb-ddr4-3200mhz": {
        "nombre": "Memoria RAM Corsair Vengeance RGB PRO 32GB (2x16GB) DDR4 3200MHz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/corsair-vengeance-rgb-pro-32gb-2x-16gb-ddr4-dram-memory-kit-up-to-3200mhz-c16-black-cmw32gx4m2e3200c16-4293101.jpg?v=1788498248",
        "precio": 110000,
        "categoria": "Memorias RAM",
        "pagina": "Memorias.html",
        "specs": [["Marca", "Corsair"], ["Modelo", "Vengeance RGB PRO"], ["Capacidad", "32 GB (2 x 16 GB)"], ["Tipo", "DDR4"], ["Velocidad", "3200 MHz"], ["Latencia", "CL16"], ["Iluminación", "RGB"], ["Perfil de overclock", "Intel XMP 2.0"], ["Formato", "DIMM (PC de escritorio)"]]
    },
    "memoria-ram-kingston-fury-beast-16gb-2x8gb-ddr5-5600mhz": {
        "nombre": "Memoria RAM Kingston Fury Beast 16GB (2x8GB) DDR5 5600MHz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/kingston-fury-beast-16gb-ddr5-sdram-memory-kit-kf556c40bbk2-16-702092.jpg?v=1737718017",
        "precio": 75000,
        "categoria": "Memorias RAM",
        "pagina": "Memorias.html",
        "specs": [["Marca", "Kingston"], ["Modelo", "Fury Beast"], ["Capacidad", "16 GB (2 x 8 GB)"], ["Tipo", "DDR5"], ["Velocidad", "5600 MHz"], ["Latencia", "CL40"], ["Iluminación", "No"], ["Perfil de overclock", "Intel XMP 3.0"], ["Formato", "DIMM (PC de escritorio)"]]
    },
    "memoria-ram-kingston-fury-beast-rgb-32gb-2x16gb-ddr5-6000mhz": {
        "nombre": "Memoria RAM Kingston Fury Beast RGB 32GB (2x16GB) DDR5 6000MHz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/kingston-fury-beast-rgb-32gb-2x16gb-ddr5-6000mts-cl36-desktop-memory-kit-kf560c36bbe2ak2-32-8028146.jpg?v=1768540088",
        "precio": 140000,
        "categoria": "Memorias RAM",
        "pagina": "Memorias.html",
        "specs": [["Marca", "Kingston"], ["Modelo", "Fury Beast RGB"], ["Capacidad", "32 GB (2 x 16 GB)"], ["Tipo", "DDR5"], ["Velocidad", "6000 MHz"], ["Latencia", "CL36"], ["Iluminación", "RGB"], ["Perfil de overclock", "Intel XMP 3.0 y AMD EXPO"], ["Formato", "DIMM (PC de escritorio)"]],
        "precioAnterior": 175000
    },
    "memoria-ram-corsair-vengeance-rgb-32gb-2x16gb-ddr5-6000mhz": {
        "nombre": "Memoria RAM Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/corsair-vengeance-rgb-32gb-2x16gb-ddr5-dram-up-to-6000mts-cl36-memory-kit-black-cmh32gx5m2e6000c36-4217037.jpg?v=1786637227",
        "precio": 150000,
        "categoria": "Memorias RAM",
        "pagina": "Memorias.html",
        "specs": [["Marca", "Corsair"], ["Modelo", "Vengeance RGB"], ["Capacidad", "32 GB (2 x 16 GB)"], ["Tipo", "DDR5"], ["Velocidad", "6000 MHz"], ["Latencia", "CL36"], ["Iluminación", "RGB"], ["Perfil de overclock", "Intel XMP 3.0"], ["Formato", "DIMM (PC de escritorio)"]]
    },
    "memoria-ram-g-skill-trident-z5-neo-rgb-64gb-2x32gb-ddr5-6000mhz": {
        "nombre": "Memoria RAM G.Skill Trident Z5 Neo RGB 64GB (2x32GB) DDR5 6000MHz",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/gskill-trident-z5-neo-rgb-64gb-2x32gb-ddr5-6000mhz-ram-kit-intel-xmp-amd-expo-f5-6000j3636f32gx2-tz5nr-8562300.jpg?v=1791962647",
        "precio": 330000,
        "categoria": "Memorias RAM",
        "pagina": "Memorias.html",
        "specs": [["Marca", "G.Skill"], ["Modelo", "Trident Z5 Neo RGB"], ["Capacidad", "64 GB (2 x 32 GB)"], ["Tipo", "DDR5"], ["Velocidad", "6000 MHz"], ["Latencia", "CL36"], ["Iluminación", "RGB"], ["Perfil de overclock", "AMD EXPO"], ["Formato", "DIMM (PC de escritorio)"]]
    },
    "mouse-gamer-logitech-g203-lightsync-rgb": {
        "nombre": "Mouse Gamer Logitech G203 Lightsync RGB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/logitech-910-005790-g203-lightsync-rgb-6-button-gaming-mouse-282752.jpg?v=1733277796",
        "precio": 30000,
        "categoria": "Periféricos",
        "pagina": "perifericos.html",
        "specs": [["Marca", "Logitech"], ["Tipo", "Mouse gamer"], ["Modelo", "G203 Lightsync"], ["Sensor", "Hasta 8000 DPI"], ["Botones", "6 programables"], ["Iluminación", "RGB Lightsync"], ["Conexión", "Cable USB"]]
    },
    "mouse-gamer-logitech-g502-hero": {
        "nombre": "Mouse Gamer Logitech G502 HERO",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/logitech-910-005469-g502-hero-wired-optical-high-performance-gaming-mouse-with-rgb-lighting-899565.jpg?v=1733277793",
        "precio": 65000,
        "categoria": "Periféricos",
        "pagina": "perifericos.html",
        "specs": [["Marca", "Logitech"], ["Tipo", "Mouse gamer"], ["Modelo", "G502 HERO"], ["Sensor", "HERO, hasta 25600 DPI"], ["Botones", "11 programables"], ["Pesas ajustables", "Sí"], ["Iluminación", "RGB Lightsync"], ["Conexión", "Cable USB"]],
        "precioAnterior": 89000
    },
    "teclado-gamer-logitech-g213-prodigy-rgb": {
        "nombre": "Teclado Gamer Logitech G213 Prodigy RGB",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/logitech-920-008083-g213-prodigy-keyboard-with-rgb-lighting-313960.jpg?v=1733277794",
        "precio": 55000,
        "categoria": "Periféricos",
        "pagina": "perifericos.html",
        "specs": [["Marca", "Logitech"], ["Tipo", "Teclado gamer"], ["Modelo", "G213 Prodigy"], ["Switches", "Membrana Mech-Dome"], ["Formato", "Completo (con numérico)"], ["Iluminación", "RGB por zonas"], ["Extras", "Teclas multimedia y resistente a salpicaduras"], ["Conexión", "Cable USB"]]
    },
    "teclado-mecanico-logitech-g-pro-tkl": {
        "nombre": "Teclado Mecánico Logitech G Pro TKL",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/logitech-g-pro-mechanical-gaming-keyboard-wired-black-920-009388-6042831.jpg?v=1771945509",
        "precio": 140000,
        "categoria": "Periféricos",
        "pagina": "perifericos.html",
        "specs": [["Marca", "Logitech"], ["Tipo", "Teclado mecánico"], ["Modelo", "G Pro"], ["Switches", "GX Blue (clicky)"], ["Formato", "TKL (sin numérico)"], ["Iluminación", "RGB Lightsync"], ["Cable", "Desmontable"], ["Conexión", "USB"]]
    },
    "auriculares-gamer-logitech-g432-7-1": {
        "nombre": "Auriculares Gamer Logitech G432 7.1",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/logitech-981-000769-g432-wired-virtual-71-surround-sound-gaming-headset-865049.jpg?v=1733277859",
        "precio": 70000,
        "categoria": "Periféricos",
        "pagina": "perifericos.html",
        "specs": [["Marca", "Logitech"], ["Tipo", "Auriculares gamer"], ["Modelo", "G432"], ["Sonido", "Envolvente 7.1"], ["Drivers", "50 mm"], ["Micrófono", "Abatible (se silencia al levantarlo)"], ["Conexión", "USB y 3.5 mm"]]
    },
    "auriculares-gamer-asus-rog-delta-usb-c": {
        "nombre": "Auriculares Gamer ASUS ROG Delta USB-C",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/asus-rog-delta-usb-c-cross-platform-rgb-ess-71-stereo-gaming-headset-with-removable-boom-mic-635025.jpg?v=1733275004",
        "precio": 150000,
        "categoria": "Periféricos",
        "pagina": "perifericos.html",
        "specs": [["Marca", "ASUS"], ["Tipo", "Auriculares gamer"], ["Modelo", "ROG Delta"], ["DAC", "ESS Hi-Fi"], ["Drivers", "50 mm"], ["Micrófono", "Desmontable"], ["Iluminación", "RGB Aura Sync"], ["Conexión", "USB-C (con adaptador USB-A)"]],
        "precioAnterior": 199000
    },
    "pc-gamer-inicial-amd-ryzen-5-5600g": {
        "nombre": "PC Gamer Inicial AMD Ryzen 5 5600G",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/fractal-design-fd-ca-mesh-c-bko-meshify-c-atx-mid-tower-computer-case-138249.jpg?v=1733276666",
        "precio": 750000,
        "categoria": "PC Armadas",
        "pagina": "pcarmada.html",
        "specs": [["Procesador", "AMD Ryzen 5 5600G"], ["Placa madre", "MSI A520M-A PRO"], ["Memoria RAM", "16 GB DDR4 3200 MHz"], ["Placa de video", "Integrada Radeon Vega 7"], ["Almacenamiento", "SSD Kingston NV3 500 GB"], ["Refrigeración", "Cooler Wraith Stealth (incluido)"], ["Fuente", "ASUS TUF Gaming 550W Bronze"], ["Gabinete", "Fractal Design Meshify C"], ["Ideal para", "Estudio, oficina y juegos livianos"]]
    },
    "pc-gamer-amd-ryzen-5-7600x-rtx-5060": {
        "nombre": "PC Gamer AMD Ryzen 5 7600X + RTX 5060",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-h5-flow-atx-mid-tower-case-black-cc-h52fb-01-102997.jpg?v=1736407222",
        "precio": 1650000,
        "categoria": "PC Armadas",
        "pagina": "pcarmada.html",
        "specs": [["Procesador", "AMD Ryzen 5 7600X"], ["Placa madre", "AM5 B650 Micro-ATX"], ["Memoria RAM", "32 GB DDR5 6000 MHz"], ["Placa de video", "MSI GeForce RTX 5060 8 GB"], ["Almacenamiento", "SSD Kingston NV3 1 TB"], ["Refrigeración", "Thermalright Peerless Assassin 120 SE"], ["Fuente", "MSI MAG A650BN 650W Bronze"], ["Gabinete", "NZXT H5 Flow Black"], ["Ideal para", "Juegos en Full HD"]],
        "precioAnterior": 1950000
    },
    "pc-gamer-intel-core-i5-14600k-rtx-5060-ti": {
        "nombre": "PC Gamer Intel Core i5 14600K + RTX 5060 Ti",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/nzxt-h5-flow-atx-mid-tower-case-white-cc-h52fw-01-994935.jpg?v=1736407222",
        "precio": 2250000,
        "categoria": "PC Armadas",
        "pagina": "pcarmada.html",
        "specs": [["Procesador", "Intel Core i5-14600K"], ["Placa madre", "MSI B760 GAMING PLUS WIFI"], ["Memoria RAM", "32 GB DDR5 6000 MHz"], ["Placa de video", "MSI GeForce RTX 5060 Ti 16 GB"], ["Almacenamiento", "SSD Crucial P310 1 TB"], ["Refrigeración", "Thermaltake TH240 V2 ARGB"], ["Fuente", "MSI MAG A750GL 750W Gold"], ["Gabinete", "NZXT H5 Flow White"], ["Ideal para", "Juegos en Full HD y 2K, streaming"]],
        "precioAnterior": 2590000
    },
    "pc-gamer-amd-ryzen-7-7800x3d-rtx-5070": {
        "nombre": "PC Gamer AMD Ryzen 7 7800X3D + RTX 5070",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/corsair-cc-9011213-ww-icue-5000x-rgb-tempered-glass-white-mid-tower-atx-pc-smart-case-946925.jpg?v=1733275770",
        "precio": 2900000,
        "categoria": "PC Armadas",
        "pagina": "pcarmada.html",
        "specs": [["Procesador", "AMD Ryzen 7 7800X3D"], ["Placa madre", "MSI MAG B850 TOMAHAWK MAX WIFI"], ["Memoria RAM", "32 GB DDR5 6000 MHz"], ["Placa de video", "MSI GeForce RTX 5070 12 GB"], ["Almacenamiento", "SSD Crucial P310 1 TB"], ["Refrigeración", "Watercooler 240 mm ARGB"], ["Fuente", "MSI MAG A750GL 750W Gold"], ["Gabinete", "Corsair iCUE 5000X RGB White"], ["Ideal para", "Juegos en 2K con altos FPS"]]
    },
    "pc-gamer-amd-ryzen-7-9800x3d-rtx-5070-ti": {
        "nombre": "PC Gamer AMD Ryzen 7 9800X3D + RTX 5070 Ti",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/lian-li-o11dergbx-o11-dynamic-evo-rgb-case-black-247019.jpg?v=1734071131",
        "precio": 4200000,
        "categoria": "PC Armadas",
        "pagina": "pcarmada.html",
        "specs": [["Procesador", "AMD Ryzen 7 9800X3D"], ["Placa madre", "ASUS TUF GAMING X870-PLUS WIFI"], ["Memoria RAM", "32 GB DDR5 6000 MHz"], ["Placa de video", "MSI GeForce RTX 5070 Ti 16 GB"], ["Almacenamiento", "SSD Samsung 990 PRO 2 TB"], ["Refrigeración", "NZXT Kraken Plus 360 RGB"], ["Fuente", "Cooler Master MWE Gold 850 V2"], ["Gabinete", "Lian Li O11 Dynamic EVO RGB"], ["Ideal para", "Juegos en 2K y 4K"]]
    },
    "pc-gamer-intel-core-i7-14700k-rx-9070-xt": {
        "nombre": "PC Gamer Intel Core i7 14700K + RX 9070 XT",
        "img": "https://cdn.shopify.com/s/files/1/0587/1563/5868/files/hyte-dual-chamber-mid-tower-atx-computer-case-black-white-cs-hyte-y70-bw-765220.jpg?v=1749169467",
        "precio": 4600000,
        "categoria": "PC Armadas",
        "pagina": "pcarmada.html",
        "specs": [["Procesador", "Intel Core i7-14700K"], ["Placa madre", "Intel Z790 ATX WiFi"], ["Memoria RAM", "64 GB DDR5 6000 MHz"], ["Placa de video", "Sapphire Pulse Radeon RX 9070 XT 16 GB"], ["Almacenamiento", "SSD Samsung 990 PRO 2 TB"], ["Refrigeración", "NZXT Kraken Elite 360 RGB"], ["Fuente", "NZXT C1000 Gold 1000W"], ["Gabinete", "HYTE Y70"], ["Ideal para", "Juegos en 4K, edición y streaming"]]
    }
};
