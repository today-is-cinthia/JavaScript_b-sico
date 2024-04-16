// Espera a que cargue la página
document.addEventListener('DOMContentLoaded', function() {
    let counter = 0 ;
    // Selecciona el botón de envío y el input para ser usado luego
    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    // Deshabilita el botón de envío por defecto
    submit.disabled = true;

    // Escucha al input por sí se ha escrito algo 
    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    // Escucha por el envío del formulario
    document.querySelector('form').onsubmit = () => {

        // Encuentra la tarea que el usuario acaba de enviar
        const task = newTask.value;

        // Crea un elemento de una lista para la nueva tarea y luego lo añade
        const li = document.createElement('li');
        li.innerHTML = task;
        const button = document.createElement('button');
        counter++;
        button.innerText = 'eliminar'
        li.setAttribute("id", counter)

        // Añade el nuevo elemento a la lista desordenada
        document.querySelector('#tasks').append(li);
        document.querySelector('#tasks').append(button);

        button.onclick = () =>
        {
            tarea = document.getElementById(String(counter))
            tarea.remove()
            button.remove()
        }
        // Limpia el input
        newTask.value = '';

        // Deshabilita nuevamente el botón
        submit.disabled = true;

        // Evita el envío del formulario
        return false;
    }
});

