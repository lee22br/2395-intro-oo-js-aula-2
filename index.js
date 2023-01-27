import User from "./User.js";
import { Admin } from "./Admin.js";
import { Docente } from "./Docente.js";

const novoUser = new User ('Mariana', 'm@m.com', '2020-04-04');
const novoAdmin = new Admin('Zé', 'z@z.com', '2020-01-01');
console.log(novoUser.exibirInfos())

novoAdmin.nome = ''

console.log(novoAdmin.nome);
// const novoAdmin = new Admin()