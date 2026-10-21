import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
} as any);

// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Administador de tareas";
let version: number = 1.0;
let userName: string = "Juancho";

console.log(`
    +--------------------------------+
        ${systemName} - v${version}
          Bienvenido! ${userName}. 
    +--------------------------------+
    `);

const tasks: string[] = [];
let userAns: number = 0;
const exitNumber: number = 4;

while (userAns !== exitNumber) {
  userAns = Number(await rl.question(
    `\nSelecciona lo que deseas realizar: 

     --- MENÚ PRINCIPAL ---
     1. Agregar tarea
     2. Eliminar última tarea                                
     3. Listar tareas
     4. Salir
     ----------------------                                
     Opcion: `));                                 

  switch (userAns) {
    case 1:
      const newTask: string = await rl.question("\nIngresa el titulo de la tarea: ");
      tasks.push(newTask);
      console.log(`${newTask} - se agregó exitosamente!\n`)
      break;
    case 2:
      const lastTask: string = tasks[tasks.length - 1];
      console.log(`Eliminaste: ${lastTask}\n`)
      tasks.pop();
      break;
    case 3:
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log(`${i + 1}. ${task}`);
      }
      break;
    default:
      console.log("Ingresa una opción valida.")
      break;
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
