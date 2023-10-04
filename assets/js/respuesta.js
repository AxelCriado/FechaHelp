const getContainer = (containerID) => document.getElementById(containerID);
  
const respuesta = (containerID) => {
    let contenedor = document.getElementById(containerID);
    return (texto) => (contenedor.innerHTML = texto);
};

export { getContainer, respuesta };