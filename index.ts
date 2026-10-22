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

const listTask = () => {
  console.log("\n----LISTADO DE TAREAS-----\n");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`[${tasks[i].id}] ${tasks[i].title} - ${tasks[i].completed}`);
  }
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

let contId: number = 0;
let userAns: number = 0;
const exitNumber: number = 4;

while (userAns !== exitNumber) {
  userAns = Number(
    await rl.question(
      `Selecciona lo que deseas realizar: 

     ---- MENÚ PRINCIPAL ----
     1. Agregar tarea
     2. Eliminar última tarea                                
     3. Listar tareas
     4. Salir
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
        console.log("\nNos vemos!")
        break;
    default:
      console.log("Ingresa una opción valida.");
      break;
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
