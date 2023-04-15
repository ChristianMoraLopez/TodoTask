
[![TaskAppImage](https://media.discordapp.net/attachments/1008571074981658694/1090663183267659838/image.png?width=1276&height=632 "TaskAppImage")](https://media.discordapp.net/attachments/1008571074981658694/1090663183267659838/image.png?width=1276&height=632 "TaskAppImage")

# TaskManager App
Este es un gestor de tareas sencillo creado con React que permite al usuario agregar, completar, descompletar y eliminar tareas. La aplicación es completamente funcional y utiliza el almacenamiento local para guardar las tareas del usuario. La aplicación está desplegada en los siguientes enlaces:

- taskmanager-git-main-christianmoralopez.vercel.app
- taskmanager-self.vercel.app
- taskmanager-christianmoralopez.vercel.app

## Funcionalidad
La aplicación permite al usuario realizar las siguientes acciones:

- Agregar tareas
- Completar tareas
- Descompletar tareas
- Eliminar tareas
- Filtrar tareas por texto


## Estructura de la aplicación

La aplicación está compuesta por varios componentes:

- TodoCounter: muestra la cantidad total de tareas y la cantidad de tareas completadas.
- TodoSearch: permite buscar tareas por texto.
- TodoList: componente contenedor de la lista de tareas.
- TodoItem: componente que muestra una tarea individual.
- CreateTodoButton: botón para agregar nuevas tareas.
- App: componente principal que une todos los componentes y muestra la aplicación en pantalla.

Además, la aplicación hace uso del archivo index.css para dar estilo a los componentes.

El archivo index.html contiene el esqueleto de la página y carga la aplicación en el elemento con el id root.

## Estilización.

Se está haciendo uso del framework de CSS Tailwind para la estilización de esta aplicación. En el código, se puede ver que se han utilizado clases de Tailwind como "bg-gradient-to-r", "from-bluebg", "to-skinbg", "rounded-xl", "shadow-lg", "space-x-6", "space-y-4", "flex-grow", "p-6", "mt-16", "mb-16", "min-w-lg", "max-w-max", "mx-auto", "justify-center", "mt-4", y otras más.

Tailwind es una herramienta muy útil para estilizar aplicaciones web de manera rápida y sencilla, ya que proporciona un conjunto de clases predefinidas que se pueden aplicar directamente a los elementos HTML sin tener que escribir CSS personalizado. Además, Tailwind es altamente personalizable, lo que significa que se pueden crear clases personalizadas para adaptarse a las necesidades específicas de una aplicación.

## Funcionamiento de la aplicación

La aplicación muestra una lista de tareas pendientes, representadas por objetos con las propiedades text y completed. La propiedad text contiene el contenido de la tarea y la propiedad completed indica si la tarea ha sido completada o no.

Las tareas se muestran en el componente TodoList a través del uso del método map(), que itera sobre el array de tareas y genera un componente TodoItem por cada tarea.

El componente TodoSearch permite buscar tareas por texto. Al escribir en el campo de búsqueda, se actualiza la lista de tareas mostrando solamente aquellas que coinciden con el texto ingresado.

El botón CreateTodoButton permite agregar nuevas tareas a la lista.

El componente TodoCounter muestra la cantidad total de tareas y la cantidad de tareas completadas.

El estado de la aplicación se maneja en el componente App, que contiene el array de tareas y se encarga de actualizarlo cuando se agregan nuevas tareas o se marcan como completadas.
## Créditos
Esta aplicación fue desarrollada por Christian Mora. 


------------

### # README IN ENGLISH


------------


# TaskManager App
This is a simple task manager created with React that allows the user to add, complete, uncomplete, and delete tasks. The application is fully functional and uses local storage to save the user's tasks. The application is deployed at the following links:

- taskmanager-git-main-christianmoralopez.vercel.app
- taskmanager-self.vercel.app
- taskmanager-christianmoralopez.vercel.app

## App structure
The app is composed of several components:

- TodoCounter: displays the total number of tasks and the number of completed tasks.
- TodoSearch: allows you to search for tasks by text.
- TodoList: container component for the list of tasks.
- TodoItem: component that displays an individual task.
- CreateTodoButton: button to add new tasks.
- App: main component that combines all components and displays the app on the screen.
In addition, the app uses the index.css file to style the components.

The index.html file contains the skeleton of the page and loads the app into the element with the id "root".

## Styling

We are using the Tailwind CSS framework for the styling of this app. In the code, you can see that Tailwind classes such as "bg-gradient-to-r", "from-bluebg", "to-skinbg", "rounded-xl", "shadow-lg", "space-x-6", "space-y-4", "flex-grow", "p-6", "mt-16", "mb-16", "min-w-lg", "max-w-max", "mx-auto", "justify-center", "mt-4", and others have been used.

Tailwind is a very useful tool for styling web applications quickly and easily, as it provides a set of predefined classes that can be applied directly to HTML elements without having to write custom CSS. Additionally, Tailwind is highly customizable, meaning that custom classes can be created to fit the specific needs of an application.

## App functionality
The app displays a list of pending tasks, represented by objects with the properties "text" and "completed". The "text" property contains the content of the task and the "completed" property indicates whether the task has been completed or not.

The tasks are displayed in the TodoList component through the use of the "map()" method, which iterates over the array of tasks and generates a TodoItem component for each task.

The TodoSearch component allows you to search for tasks by text. As you type in the search field, the list of tasks is updated to show only those that match the entered text.

The CreateTodoButton component allows you to add new tasks to the list.

The TodoCounter component displays the total number of tasks and the number of completed tasks.

The state of the app is managed in the App component, which contains the array of tasks and is responsible for updating it when new tasks are added or marked as completed.

## Credits
This app was developed by Christian Mora. 
