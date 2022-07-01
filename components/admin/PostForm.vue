<template>
	<div
		class="
			container-fluid
			mt-5
			d-flex
			flex-wrap
			justify-content-center
			align-items-center
		"
	>
		<form style="width: 500px" class="mb-5" @submit.prevent="savePost">
			<fieldset>
				<legend>{{ newText }}</legend>
				<div class="form-group">
					<label>Yazar</label>
					<input
						v-model="post.author"
						type="text"
						class="form-control"
						placeholder="Yazarın adınız giriniz.."
					/>
				</div>
				<div class="form-group">
					<label>Baslık</label>
					<input
						v-model="post.title"
						type="text"
						class="form-control"
						placeholder="Yazının baslıgını giriniz.."
					/>
				</div>
				<div class="form-group">
					<label>Alt Baslık</label>
					<input
						v-model="post.subTitle"
						type="text"
						class="form-control"
						placeholder="Yazının alt baslıgını giriniz.."
					/>
				</div>
				<div class="form-group">
					<label for="exampleTextarea">Köse Yazısı</label>
					<textarea
						v-model="post.description"
						class="form-control"
						rows="5"
					></textarea>
				</div>
				<button class="btn btn-danger" @click="$router.push('/admin')">
					İptal
				</button>
				<button
					type="submit"
					class="btn btn-primary"
				>
					Kaydet
				</button>
			</fieldset>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		newText: {
			type: String,
			require: false,
			default: 'Form',
		},
		post: {
			type: Object,
			require: false,
			default: () => {
				return {
					author: null,
					title: null,
					subTitle: null,
					description: null,
				}
			},
		},
	},
	methods: {
		savePost() {
			this.$emit('savePost', this.post);
		},
	}
}
</script>