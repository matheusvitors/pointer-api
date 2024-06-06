import { ValidationError } from "@/application/errors";
import { Empresa } from "@/core/models";
import { empresaValidator } from "@/core/validators/empresa-validator";
import { describe, expect, it } from "vitest";

describe('Empresa Validator', () => {
	it('should validate a empresa', () => {
		const input:Empresa = {
			id: 1,
			nome: 'Teste'
		}

		expect(() => empresaValidator(input)).not.toThrow();
	});

	it('should not validate if empresa name is below 2 caracters', () => {
		const input = {
			id: 1,
			nome: 't',
		}

		expect(() => empresaValidator(input)).toThrow(ValidationError);
	});

});
