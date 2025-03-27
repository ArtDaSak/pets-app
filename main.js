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

    //🔘 Se usa la función de registrar una mascota al elegir 1.
        switch (option) {
            case "1":
                registerPet();
                break;
    //🔘 Se usa la función de listar todas las mascotas al elegir 2.                
            case "2":
                listPets();
                break;
    //🔘 Se usa la función de buscar una mascota por nombre al elegir 3.                
            case "3":
                searchPet();
                break;
    //🔘 Se usa la función de actualizar el estado de salud de una mascota al elegir 4.                
            case "4":
                updateHealthStatus();
                break;
    //🔘 Se usa la función de eliminar una mascota por nombre al elegir 5.                
            case "5":
                deletePet();
                break;
    //🔘 Se muestra un mensaje de despedida al elegir 6.                
            case "6":
                alert("👋 ¡Gracias por usar la veterinaria!");
                break;
    //🔘 Se muestra un mensaje de error al elegir una opción inválida.                
            default:
                alert("⚠️ Opción inválida, intenta de nuevo.");
        }
    //🔘 Se repite el menú mientras la opción sea diferente a 6.        
    } while (option !== "6");
}
    //🔥 Se inicia el programa.
mainMenu();