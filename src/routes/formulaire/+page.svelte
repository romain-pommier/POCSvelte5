<script lang="ts">
	import { ButtonBoxPrimary, Form, InputText, InputNumber, InputFile } from '@wiseed/wikit';
	import { superForm } from 'sveltekit-superforms/client';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { json, z } from 'zod';
	import { slide } from 'svelte/transition';
	const formulaires = [
		{
			id: 1,
			title: 'formulaire1',
			inputs: [
				{ name: 'name', label: 'Nom', component: InputText }
				// { name: 'email', label: 'email', component: InputEmail }
			],
			schema: z.object({
				name: z.string().min(2)
				// email: z.email()
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
	let action = $state('');
	let SPA = $state(false);

	let { form, enhance, message, validateForm } = superForm(currentForm.schema, {
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		dataType: 'json',
		validators: zod4(currentForm.schema),
		async onSubmit({ cancel, jsonData }) {
			if (!action) {
				const result = await validateForm({ update: true });
				if (result.valid) {
					nextStep();
				} else {
					form.message = { status: 400, text: 'Formulaire non valide' };
				}
				cancel();
			} else {
				jsonData({});
			}
		},
		async onUpdated({ form }) {
			if (form.valid) {
				nextStep();
			} else {
				form.message = {
					status: form.message?.status || 400,
					text: form.message?.text || 'Formulaire non valide'
				};
			}
		}
	});
	const nextStep = () => {
		currentFormIndex = currentFormIndex + 1;
	};
	$effect(() => {
		SPA = currentFormIndex !== 1;
		action = currentFormIndex === 1 ? '/formulaire' : '';
	});
	$inspect($message);
</script>

<h1>Formulaire multi-étapes</h1>

{#if $message}
	<div class="status" class:error={$message.status >= 400} class:success={$message.status == 200}>
		{$message.text}
	</div>
{/if}

<div class="container">
	{#if currentForm}
		<h2>{currentForm.title}</h2>
		{#key currentForm.inputs}
			<Form {enhance} {action}>
				<div transition:slide={{ duration: 600, axis: 'x' }}>
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
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		padding: 6px 12px;
		border-radius: 4px;
		font-weight: 500;
	}
	.status.success {
		background-color: seagreen;
	}
	.status.error {
		background-color: #ff2a02;
	}
</style>
