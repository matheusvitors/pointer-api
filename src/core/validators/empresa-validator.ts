import { ValidationError } from "@/application/errors";
import { Empresa } from "@/core/models";

export const empresaValidator = (input: Empresa) => {
	if(input.nome.length < 3) {
		throw new ValidationError("O nome deve ter 3 ou mais caracteres.")
	}
}
