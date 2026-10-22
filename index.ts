import * as readline from "readline/promises";
import { stdin as input, stdout as output, title } from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
} as any);

// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Administador de tareas";
let version: number = 1.1;
let userName: string = "Juancho";

console.log(`
    +--------------------------------+
        ${systemName} - v${version}
          Bienvenido! ${userName}. 
    +--------------------------------+
    `);

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];

const addTask = (title: string): Task => {
  contId++;
  return {
    id: contId,
    title: title,
    completed: false,
  };
};

const removeTask = () => {
  const removedTask = tasks.pop();
  if (removedTask) {
    console.log(
      `\nSe ha eliminado la tarea ${removedTask.title} exitosamente!`,
    );
  } else {
    console.log("\nNo hay tareas por borrar.");
  }
};

const listTask = () => {
  console.log("\n----LISTADO DE TAREAS-----\n");
  const mappedList = tasks.map(({ id, title, completed }) => {
    return `[${id}] Nombre: ${title}, Completed: ${completed}`;
  });
  mappedList.forEach((newList: string) => {
    console.log(newList);
  });
};

const markCompleted = (idByUser: number) => {
  const task = tasks.find((t: Task) => t.id === idByUser);
  if (task) {
    task.completed = true;
    console.log(`La tarea ${task.title} ha sido completada!`);
  } else {
    console.log(`No hay tareas con ese numero`);
  }
};

const filterPending = () => {
  console.log("\n----TAREAS PENDIENTES-----\n");

  const filteredPendingTask = tasks.filter((t: Task) => t.completed === false);
  const mapPendingTask = filteredPendingTask.map(({ id, title, completed }) => {
    return `[${id}] - Nombre: ${title} - Completed: ${completed}`;
  });
  mapPendingTask.forEach((t: string) => {
    console.log(t);
  });
};

const filterCompleted = () => {
  console.log("\n----TAREAS COMPLETADAS-----\n");

  const filteredCompletedTask = tasks.filter(
    ({ completed }) => completed === true,
  );
  const mapCompletedTask = filteredCompletedTask.map(
    ({ id, title, completed }) =>
      `[${id}] - Nombre: ${title} - Estado: ${completed}`,
  );
  mapCompletedTask.forEach((t: string) => {
    console.log(t);
  });
};

let contId: number = 0;
let userAns: number = 0;
const exitNumber: number = 7;

while (userAns !== exitNumber) {
  userAns = Number(
    await rl.question(
      `Selecciona lo que deseas realizar: 

     ---- MENÚ PRINCIPAL ----
     1. Agregar tarea
     2. Eliminar última tarea                                
     3. Listar tareas
     4. Completar tarea
     5. Listar pendientes
     6. Listar completadas
     7. Salir
     ------------------------                              
     Opcion: `,
    ),
  );

  switch (userAns) {
    case 1:
      const newTaskTitle: string = await rl.question(
        "\nIngresa el titulo de la tarea: ",
      );
      tasks.push(addTask(newTaskTitle));
      console.log(`\n${newTaskTitle} - se agregó exitosamente!\n`);
      break;
    case 2:
      removeTask();
      break;
    case 3:
      listTask();
      break;
    case 4:
      const completeTaskId = Number(
        await rl.question("Ingresa el numero de la tarea que deseas guardar: "),
      );
      markCompleted(completeTaskId);
      break;
    case 5:
      filterPending();
      break;
    case 6:
      filterCompleted();
      break;
    case 7:
      console.log(`Vuelve pronto!`);
      break;
    default:
      console.log("Ingresa una opción valida.");
      break;
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
