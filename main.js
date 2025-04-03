            //📦 Se declara la constante de pets.
const pets = [
    
];

            //📦 Se declara la función del menú principal.
function mainMenu() {
    let option;
    do {
            //📦 Se pide una opción.
        option = prompt(
            "📋 Menú Veterinaria:\n\n" +
            "1️⃣ Registrar una nueva mascota.\n" +
            "2️⃣ Listar todas las mascotas.\n" +
            "3️⃣ Buscar una mascota por nombre.\n" +
            "4️⃣ Actualizar el estado de salud de una mascota.\n" +
            "5️⃣ Eliminar una mascota por nombre.\n" +
            "6️⃣ Salir.\n\n" +
            "🔘 Elige una opción:"
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

            // 🐶 Se Registra una nueva mascota con retraso simulando validación.
function registerPet() {
            // 📋 Se piden los datos de la mascota.    
    const name = prompt("🐾 ¿Cuál es el nombre de la mascota?");
    const species = prompt("🐾 ¿Qué especie es? (Perro, Gato, etc.)");
    const age = parseInt(prompt("🐾 ¿Cuál es la edad?"), 10);
    const weight = parseFloat(prompt("🐾 ¿Cuál es el peso en kg?"));
    const health = prompt("🐾 ¿Cuál es el estado de salud? (Sano, Enfermo, En tratamiento)");
            // 🖊️ Se valida que los campos no estén vacíos y que la edad y el peso sean números.
    if (!name || !species || isNaN(age) || isNaN(weight) || !health) {
        alert("⚠️ Todos los campos son obligatorios.");
        return;
    }

            // 💬 Se muestra un mensaje de registro y se agrega la mascota al arreglo.
    alert("⏳ Registrando mascota...");
    
            // 🕒 Se simula un retraso de 2 segundos.
    setTimeout(() => {
        pets.push({ name, species, age, weight, health });
            // 💬 Se muestra un mensaje de éxito.
        alert(`✅ Mascota ${name} registrada exitosamente.`);
    }, 2000);
}

            // 📋 Se listan todas las mascotas.
function listPets() {
            // 🖊️ Se valida que haya mascotas registradas.
    if (pets.length === 0) {
            // 💬 Se muestra un mensaje de error si no hay mascotas registradas.
        alert("📭 No hay mascotas registradas.");
        return;
    }
            // 💬 Se muestra un mensaje con la lista de mascotas.
    let message = "📋 Lista de mascotas:\n\n";
                // ➡️ Se recorren todas las mascotas y se agregan al mensaje.
    pets.forEach((pet, index) => {
        message += `${index + 1}. 🐾 ${pet.name} | ${pet.species} | ${pet.age} años | ${pet.weight}kg | ${pet.health}\n`;
    });
            // 💬 Se muestra el mensaje con la lista de mascotas.
    alert(message);
}

            // 🔍 Se busca una mascota por nombre con retardo
function searchPet() {
    const name = prompt("🔍 Ingresa el nombre de la mascota a buscar:");
            // 🖊️ Se valida que el nombre no esté vacío.
    if (!name) return;
            // 💬 Se muestra un mensaje de búsqueda y se busca la mascota en el arreglo.
    alert("⏳ Buscando en la base de datos...");
            // 🕒 Se simula un retraso de 1.5 segundos.
    setTimeout(() => {
        const pet = pets.find(p => p.name.toLowerCase() === name.toLowerCase());
            // 🖊️ Se valida si se encontró la mascota.
        if (pet) {
            alert(`✅ Mascota encontrada:\n🐾 ${pet.name} | ${pet.species} | ${pet.age} años | ${pet.weight}kg | ${pet.health}`);
        } else {
            alert("❌ Mascota no encontrada.");
        }
    }, 1500);
}

            // 🔄 Actualizar estado de salud
function updateHealthStatus() {
            // 🖊️ Se valida que haya mascotas registradas.
    const name = prompt("✏️ Ingresa el nombre de la mascota para actualizar su estado de salud:");
            // 🖊️ Se valida que el nombre no esté vacío.
    if (!name) return;
            // 💬 Se muestra un mensaje de búsqueda y se busca la mascota en el arreglo.
    const pet = pets.find(p => p.name.toLowerCase() === name.toLowerCase());
            // 🖊️ Se valida si se encontró la mascota.
    if (!pet) {
        alert("❌ Mascota no encontrada.");
        return;
    }
            // 💬 Se muestra el estado de salud actual y se pide el nuevo estado.
    const newHealth = prompt(`🩺 Estado actual: ${pet.health}\n\nIngresa el nuevo estado de salud:`);
    if (!newHealth) return;
            // 💬 Se muestra un mensaje de actualización y se actualiza el estado de salud.
    alert("⏳ Actualizando información del veterinario...");
            // 🕒 Se simula un retraso de 2 segundos.
    setTimeout(() => {
        pet.health = newHealth;
            // 💬 Se muestra un mensaje de éxito.
        alert(`✅ Estado de salud de ${pet.name} actualizado a "${newHealth}".`);
    }, 2000);
}
            //🔥 Se inicia el programa.
mainMenu();