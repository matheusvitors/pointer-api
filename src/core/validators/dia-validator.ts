import { ValidationError } from "@/application/errors";
import { Dia } from "@/core/models";

export const diaValidator = (input: Dia) => {
	const timeRegex = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')

	if(input.horasTrabalhadas < 0) {
		throw new ValidationError('O campo horas trabalhadas não pode ser inferior a zero.');
	}

	if(input.cargaHoraria < 0) {
		throw new ValidationError('O campo carga horária não pode ser inferior a zero.');
	}

	if(!timeRegex.test(input.matutino.entrada)) {
		throw new ValidationError('O campo entrada deve ser no formato hh:mm.');
	}

	if(!timeRegex.test(input.matutino.saida)) {
		throw new ValidationError('O campo saida deve ser no formato hh:mm.');
	}

	if(!timeRegex.test(input.vespertino.entrada)) {
		throw new ValidationError('O campo entrada do almoço deve ser no formato hh:mm.');
	}

	if(!timeRegex.test(input.vespertino.saida)) {
		throw new ValidationError('O campo saida do almoço deve ser no formato hh:mm.');
	}
}
