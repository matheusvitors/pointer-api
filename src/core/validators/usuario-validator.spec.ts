import { describe, expect, it } from "vitest";
import { ValidationError } from "@/application/errors";
import { usuarioValidator } from "@/core/validators";

describe('Usuario Validator', () => {
	it('should validate a usuario', () => {
		const input = {
			id: 1,
			nome: 'Teste',
			username: 'teste',
			password: '123456',
		}

		expect(() => usuarioValidator(input)).not.toThrow();
	});

	it('should not validate if usuario name is below 2 caracters', () => {
		const input = {
			id: 1,
			nome: 't',
			username: 'teste',
			password: '123456',
			email: 'teste@teste.com'
		}

		expect(() => usuarioValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if usuario username is below 3 caracters', () => {
		const input = {
			id: 1,
			nome: 'teste',
			username: 't',
			password: '123456',
			email: 'teste@teste.com'
		}

		expect(() => usuarioValidator(input)).toThrow(ValidationError);
	});

	it('should not validate if usuario username is below 3 caracters', () => {
		const input = {
			id: 1,
			nome: 'teste',
			username: 'teste',
			password: '1',
			email: 'teste@teste.com'
		}

		expect(() => usuarioValidator(input)).toThrow(ValidationError);
	});

});
