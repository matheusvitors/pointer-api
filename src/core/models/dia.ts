import { Empresa, Usuario } from "@/core/models";

export interface Dia {
	id: number;
	data: Date;
	ponto: Periodo;
	almoco: Periodo;
	horasTrabalhadas: number; // minutos
	cargaHoraria: number; //minutos
	usuario: Usuario;
	empresa: Empresa;
}

interface Periodo {
	entrada: string;
	saida: string;
}
