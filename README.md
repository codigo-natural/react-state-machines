# State Machines en React JS

**propiedades de los estados:**
- Value: Indica el nombre del estado actual
- Context: Da el contexto al estado actual
- Event: El evento por el cual se llego al estado actual
- Action: Un array de acciones a ejecutar en ese estado
- Activities: Listado de actividades indicando si están en progreso o no
- History: Indica el estado anterior
- Meta: Los metadatos asociados al estado
- NextEvents: Los posibles eventos a ejecutar partiendo del estado que nos encontremos

**Metodos del estado**
- matches(nombre del estado)
- can(nombre del evento)

**Evento:** accion que dispara la transicion de un estado a otro
**Transicion:** proceso en el cual un estado cambia a otro
**Estado:** cambia de uno a otro dependiendo el evento disparado

**Transiciones**

- Transiciones habilitadas
- Transiciones prohibidas
- Wildcards
- Transiciones sin eventos
- Transiciones protegidas
- Transiciones atrasadas