<script lang="ts">
	import { Form, InputTel, InputText } from '@wiseed/wikit';

	$effect(() => {
		console.log('lkhgfgbhjklmù');
	});
</script>

<h1>Formulaire</h1>

<Form>
	<InputText name="name" label="Nom" />
	<InputTel name="phone" label="Phone" />
	<ButtonBoxPrimary
		label="Go formulaire"
		disabled={!formState.valid}
		fetching={isFetching}
		type="submit"
	/>
</Form>
