import { superValidate, message } from 'sveltekit-superforms/server';
import { setError } from 'sveltekit-superforms';
import { z } from 'zod';
import { zod4 } from 'sveltekit-superforms/adapters';
import { type Actions } from '@sveltejs/kit';

const numberSchema = z.object({
	age: z.coerce.number().min(0).max(120)
});
export const load = async () => {
	console.log('heterere load');
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, zod4(numberSchema));

		// error global set la validation
		// if (!form.valid) return fail(400, { form });

		// permet de donner une erreur custom
		if (!form.valid || form.data.age < 18) return setError(form, 'age', 'pas majeur');

		return message(form, 'Form posted successfully!');
	}
} satisfies Actions;
