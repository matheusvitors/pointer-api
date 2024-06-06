import { Empresa, Usuario } from "@/core/models";

export interface Dia {
	id: number;
	data: Date;
	matutino: Periodo;
	vespertino: Periodo;
	horasTrabalhadas: number; // minutos
	cargaHoraria: number; //minutos
	usuario: Usuario;
	empresa: Empresa;
}

interface Periodo {
	entrada: string;
	saida: string;
}
