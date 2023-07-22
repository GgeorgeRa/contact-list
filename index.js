const contactos = [
    { nombre: "Carlos", apellido: "Pineda" },
    { nombre: "Susana", apellido: "Rodriguez" },
    { nombre: "Mariana", apellido: "Ospino" }
];

function addContact(nombre, apellido) {
    contactos.push({ nombre, apellido });
}

function deleteContact(nombre) {
    const index = contactos.findIndex(contacto => contacto.nombre === nombre);
    contactos.splice(index, 1);
}

function printContacts() {
    for (const contacto of contactos) {
        console.log(contacto.nombre + " " + contacto.apellido);
    }
}


printContacts();