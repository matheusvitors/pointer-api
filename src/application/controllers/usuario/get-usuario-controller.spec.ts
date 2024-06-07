import { beforeAll, describe, expect, it } from "vitest";
import { InMemoryRepository } from "@/infra/database/InMemoryRepository";
import { getUsuarioController } from "@/application/controllers/usuario";
import { Usuario } from "@/core/models";

describe('Usuario get Controller', () => {
	const repository = new InMemoryRepository<Usuario>();

	beforeAll(() => {
		repository.create({
			id: 1,
			nome: 'Teste',
			username: 'teste',
			password: '123',
			email: 'teste@teste.com'
		})
	})

	it('should get user', async () => {
		const response = await getUsuarioController({repository, id: 1});
		expect(response.status).toEqual(200)
	});

	it('should not found user', async () => {
		const response = await getUsuarioController({repository, id: 0});
		expect(response.status).toEqual(404)
	});

	it('should return 500 if have error server', async () => {
		//@ts-ignore
		const response = await getUsuarioController(null);
		expect(response.status).toEqual(500);
	});
});
