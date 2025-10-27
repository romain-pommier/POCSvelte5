<script lang="ts">
	import {
		ButtonBoxPrimary,
		Form,
		InputText,
		InputNumber,
		InputFile,
		InputEmail
	} from '@wiseed/wikit';
	import { slide } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { z } from 'zod';
	const formulaires = [
		{
			id: 1,
			title: 'formulaire1',
			inputs: [
				{ name: 'name', label: 'Nom', component: InputText },
				{ name: 'email', label: 'email', component: InputEmail }
			],
			schema: z.object({
				name: z.string().min(2).default('Hello world!'),
				email: z.email()
			})
		},
		{
			id: 2,
			title: 'formulaire2',
			inputs: [{ name: 'age', label: 'age', component: InputNumber }],
			schema: z.object({
				age: z.number()
			})
		},
		{
			id: 3,
			title: 'formulaire3',
			inputs: [{ name: 'file', label: 'file', component: InputFile }],
			schema: z.object({
				file: z
					.instanceof(File, { message: 'Please upload a file.' })
					.refine((f) => f.size < 100_000, 'Max 100 kB upload size.')
			})
		}
	];

	let currentFormIndex = $state(0);

	const currentForm = $derived.by(() => {
		return formulaires[currentFormIndex];
	});

	let { form, errors, constraints, enhance, message } = superForm(currentForm.schema, {
		SPA: true,
		resetForm: false,
		clearOnSubmit: 'errors-and-message',
		dataType: 'json',
		validators: zod4(currentForm.schema),
		async onUpdate({ form }) {
			console.log('form', form);
			if (!form.valid) {
				form.message = {
					status: 400,
					text: 'Formulaire non valide'
				};
				console.log('superFormData', form);
			} else {
				submitFunction(form);
			}
		}
	});
	const submitFunction = () => {
		currentFormIndex = currentFormIndex + 1;
	};
</script>

<h1>Formulaire</h1>

{#if $message}
	<div class="status" class:error={$message.status >= 400} class:success={$message.status == 200}>
		{$message.text}
	</div>
{/if}
<div class="container">
	{#if currentForm}
		<h2>{currentForm.title}</h2>
		{#key currentForm}
			<Form {enhance}>
				<div transition:slide={{ duration: 1400, axis: 'x' }}>
					{#each currentForm.inputs as input}
						{@const InputComponent = input.component}
						<InputComponent {...input} />
					{/each}
				</div>
				<ButtonBoxPrimary label="Envoyer" type="submit" />
			</Form>
		{/key}
	{/if}
</div>

<style lang="postcss">
	.status {
		position: absolute;
		bottom: 20px;
		color: white;
		padding: 4px;
		padding-left: 8px;
		border-radius: 2px;
		font-weight: 500;
		width: 100%;
		height: 100px;
	}

	.status.success {
		background-color: seagreen;
	}

	.status.error {
		background-color: #ff2a02;
	}
</style>
