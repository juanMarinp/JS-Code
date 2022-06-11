class Vehiculo {
    constructor (
        marca, 
        modelo, 
        valor_base,
        km, 
        estado, 
        color, 
        anio, 
        patente, 
        vendido
        ) {
            this.marca = marca;
            this.modelo = modelo;
            this.valor_base = valor_base;
            this.valor_final = 0;
            this.km = km;
            this.estado = estado;
            this.color = color;
            this.anio = anio;
            this.patente = patente;
            this.vendido = vendido;
            this.titular = [];
            
    };
    // setters

    set setMarca(marca) {
        this.marca = marca
    };
    set setModelo(modelo) {
        this.modelo = modelo
    };
    set setValor_base(valor_base) {
        this.valor_base = valor_base
    };
    set setKm(km) {
        this.km = km
    };
    set setEstado(estado) {
        this.estado = estado
    };
    set setColor(color) {
        this.color = color
    };
    set setAnio(anio) {
        this.anio = anio
    };
    set setPatente(patente) {
        this.patente = patente
    };
    set setVendido(vendido) {
        this.vendido = vendido
    };
    set setTitular(titular) {
        this.titular = titular
    };

    // getters

    get getMarca() {
        return this.marca
    };
    get getModelo() {
        return this.modelo
    };
    get getValor_base() {
        return this.valor_base
    };
    get getValor_final() {
        return this.valor_final
    };
    get getKm() {
        return this.km
    };
    get getEstado() {
        return this.estado
    };
    get getColor() {
        return this.color
    };
    get getAnio() {
        return this.anio
    };
    get getPatente() {
        return this.patente
    };
    get getVendido() {
        return this.vendido
    };
    get getTitular() {
        return this.titular
    };

    CalcularIva() {
        this.valor_final = this.valor_base * 1.19;
    };
};

class Persona {
    constructor (rut, nombre, apellido, edad){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };

    // setters 

    set setRut(rut) {
        this.rut = rut;
    };
    set setNombre(nombre) {
        this.nombre = nombre;
    };
    set setApellido(apellido) {
        this.apellido = apellido;
    };
    set setEdad(edad) {
        this.edad = edad;
    };

    // getters

    get getRut() {
        return this.rut;
    };
    get getNombre() {
        return this.nombre;
    };
    get getApellido() {
        return this.apellido;
    };
    get getEdad() {
        return this.edad;
    };


};


// Datos pre-cargados

var vehiculoPrueba = new Vehiculo ("Mitsubishi", "Eclipse", 1000000, 25000, "Usado", "Negro", 2008, "2526TT", true);
var vehiculoPrueba2 = new Vehiculo ("Toyota", "Yaris", 1000000, 25000, "Usado", "Rojo", 2012, "1212AB", false); 
var vehiculoPrueba3 = new Vehiculo ("Toyota", "Supra", 27000000, 0, "Nuevo", "Naranjo", 2022, "1234AB", true) 
var vehiculoPrueba4 = new Vehiculo ("Hyundai", "i20", 1000000, 25000, "Usado", "Blanco", 2012, "2525AB", true)

vehiculoPrueba.CalcularIva();
vehiculoPrueba2.CalcularIva();
vehiculoPrueba3.CalcularIva();
vehiculoPrueba4.CalcularIva();

var vehiculos = [vehiculoPrueba,vehiculoPrueba2,vehiculoPrueba3,vehiculoPrueba4];

var personas = [
    new Persona ("20.590.676-2","Juan", "Marin", 21 ),
    new Persona ("9.300.029-9","Carlos", "Gonzales", 55 ),
    new Persona ("7.546.609.3","Aurelio", "Martinez", 38 )
];

vehiculoPrueba = vehiculoPrueba.setTitular = personas[0];
vehiculoPrueba2 = vehiculoPrueba2.setTitular = personas[1];
vehiculoPrueba3 = vehiculoPrueba3.setTitular = personas[2];
vehiculoPrueba4 = vehiculoPrueba4.setTitular = personas[0];

// Fin datos Pre-cargados

var limpiarRegistrar = function () {
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("valor_base").value = "";
    document.getElementById("km").value = "";
    document.querySelector('.estado').checked;
    document.getElementById("color").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("patente").value = "";
    document.querySelector('.vendido').checked = "";
};

var limpiarBusquedaDom = function () {
    
        document.getElementById("PatenteTablaBuscar").innerHTML = "";
        document.getElementById("marcaTablaBuscar").innerHTML = "";
        document.getElementById("modeloTablaBuscar").innerHTML = "";
        document.getElementById("valorBaseTablaBuscar").innerHTML = "";
        document.getElementById("valorFinalTablaBuscar").innerHTML = "";
        document.getElementById("kmTablaBuscar").innerHTML = "";
        document.getElementById("estadoTablaBuscar").innerHTML = "";
        document.getElementById("colorTablaBuscar").innerHTML = "";
        document.getElementById("anioTablaBuscar").innerHTML = "";
        document.getElementById("vendidoTablaBuscar").innerHTML = "";
    
};

var tableRefresh = function () {

    removeElementsByClass("filaTabla");
        
    let nodes = vehiculos.map(vehiculo => {
        let tr = document.createElement("tr");
        tr.className = "filaTabla"
        let th = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        let th5 = document.createElement('th');
        th.textContent = vehiculo.getPatente;
        th2.textContent = vehiculo.getMarca;
        th3.textContent = vehiculo.getModelo;
        th4.textContent = vehiculo.getTitular.getNombre + " " + vehiculo.getTitular.getApellido;
        th5.textContent = vehiculo.getTitular.getRut;
        tr.appendChild(th);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        return tr;
    });
    
    tableBody.append(...nodes);  
};

var addVehiculo = function () {
    
    var estado;
    
    if (document.querySelector('.estado').checked == true) {
        estado = "Nuevo"
    } else {
        estado = "Usado"
    };
    
    // Validar que no se ingresen datos en blanco
    if (
        document.getElementById("marca").value == "" ||
        document.getElementById("modelo").value == "" ||
        document.getElementById("valor_base").value == "" ||
        document.getElementById("km").value == "" ||
        document.getElementById("color").value == "" ||
        document.getElementById("anio").value == "" ||
        document.getElementById("patente").value == ""
        ) {alert("Ingrese todos los datos")} else {
            
            var vehiculo = new Vehiculo (
                document.getElementById("marca").value,
                document.getElementById("modelo").value,
                parseInt(document.getElementById("valor_base").value),
                parseInt(document.getElementById("km").value),
                estado,
                document.getElementById("color").value,
                parseInt(document.getElementById("anio").value),
                document.getElementById("patente").value,
                document.querySelector('.vendido').checked
                );
                
                vehiculo.CalcularIva();
                
                vehiculos.push(vehiculo);
                
                console.log(vehiculos);
                
                tableRefresh();
            };

            limpiarRegistrar();
            
};
        
var patenteBus = function () {

    limpiarBusquedaDom();
    
    var patenteBus = document.getElementById("patenteBuscar").value;
    
    var patenteEnc = vehiculos.find(vehiculo => vehiculo.getPatente == patenteBus);
    
    if (patenteEnc != undefined) {
        
        document.getElementById("PatenteTablaBuscar").innerHTML = patenteEnc.getPatente;
        document.getElementById("marcaTablaBuscar").innerHTML = patenteEnc.getMarca;
        document.getElementById("modeloTablaBuscar").innerHTML = patenteEnc.getModelo;
        document.getElementById("valorBaseTablaBuscar").innerHTML = patenteEnc.getValor_base;
        document.getElementById("valorFinalTablaBuscar").innerHTML = patenteEnc.getValor_final;
        document.getElementById("kmTablaBuscar").innerHTML = patenteEnc.getKm;
        document.getElementById("estadoTablaBuscar").innerHTML = patenteEnc.getEstado;
        document.getElementById("colorTablaBuscar").innerHTML = patenteEnc.getColor;
        document.getElementById("anioTablaBuscar").innerHTML = patenteEnc.getAnio;
        document.getElementById("vendidoTablaBuscar").innerHTML = patenteEnc.getVendido;
        
    } else {
        alert("Vehículo no encontrado")
    };
    
    document.getElementById("patenteBuscar").value = "";
            

};
        
var editar = function () {
    
    var nuevoValor = document.querySelector('.editar').checked;
    
    var patenteBus = document.getElementById("patenteBuscar2").value;
    
    var patenteEnc = vehiculos.find(vehiculo => vehiculo.getPatente == patenteBus);
    
    console.log(patenteEnc);
    
    console.log(nuevoValor);

    if (patenteEnc != undefined) {
        
        patenteEnc.setVendido = nuevoValor;

    } else {
        alert("Vehículo no encontrado")
    };

    document.getElementById("patenteBuscar2").value = "";

};

var IngresarCliente = function () {
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = parseInt(document.getElementById("edad").value);

    var p = new Persona (rut, nombre, apellido, edad);

    personas.push(p);

};

// Funcion para remover elementos de html segun la clase
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};