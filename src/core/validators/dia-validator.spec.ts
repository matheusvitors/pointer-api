import { ValidationError } from "@/application/errors";
import { Dia } from "@/core/models";
import { diaValidator } from "@/core/validators/dia-validator";
import { describe, expect, it } from "vitest";

describe('Dia Validator', () => {
	it('should validade dia', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07:00',
				saida: '12:00'
			},
			vespertino: {
				entrada: '13:00',
				saida: '17:00'
			},
			horasTrabalhadas: 0,
			cargaHoraria: 8 * 60,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).not.toThrow();
	});

	it('should not validate if horasTrabalhadas is below zero', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07:00',
				saida: '12:00'
			},
			vespertino: {
				entrada: '13:00',
				saida: '17:00'
			},
			horasTrabalhadas: -1,
			cargaHoraria: 8 * 60,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if cargaHoraria is below zero', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07:00',
				saida: '12:00'
			},
			vespertino: {
				entrada: '13:00',
				saida: '17:00'
			},
			horasTrabalhadas: 0,
			cargaHoraria: -1,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if entrada matutino is mal formated', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07',
				saida: '12:00'
			},
			vespertino: {
				entrada: '13:00',
				saida: '17:00'
			},
			horasTrabalhadas: 0,
			cargaHoraria: 8 * 60,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if saida matutino is mal formated', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07:00',
				saida: '12'
			},
			vespertino: {
				entrada: '13:00',
				saida: '17:00'
			},
			horasTrabalhadas: 0,
			cargaHoraria: 8 * 60,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if entrada vespertino is mal formated', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07:00',
				saida: '12:00'
			},
			vespertino: {
				entrada: '13',
				saida: '17:00'
			},
			horasTrabalhadas: 0,
			cargaHoraria: 8 * 60,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if saida vespertino is mal formated', () => {
		const input: Dia = {
			id: 0,
			data: new Date(),
			matutino: {
				entrada: '07:00',
				saida: '12:00'
			},
			vespertino: {
				entrada: '13:00',
				saida: '17'
			},
			horasTrabalhadas: 0,
			cargaHoraria: 8 * 60,
			usuario: {
				id: 0,
				nome: "Teste",
				username: "teste",
				password: "123456"
			},
			empresa: {
				id: 0,
				nome: "empresa"
			}
		}

		expect(() => diaValidator(input)).toThrow(ValidationError);
	});

});
