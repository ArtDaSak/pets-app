    //📦 Se declara la constante de pets.
const pets = [
    
];

    //📦 Se declara la función del menú principal.
function mainMenu() {
    let option;
    do {
        option = prompt(
            "📋 Menú Veterinaria:\n\n" +
            "1️⃣ Registrar una nueva mascota.\n" +
            "2️⃣ Listar todas las mascotas.\n" +
            "3️⃣ Buscar una mascota por nombre.\n" +
            "4️⃣ Actualizar el estado de salud de una mascota.\n" +
            "5️⃣ Eliminar una mascota por nombre.\n" +
            "6️⃣ Salir.\n\n" +
            "Elige una opción:"
        );

    } while (option !== "6");
}
//🔥 Se inicia el programa.
mainMenu();
