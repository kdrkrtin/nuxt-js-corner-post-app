<template>
	<div class="page">
		<div class="card mr-3 mb-3 card-success" style="width: 18rem">
			<div class="card-body">
				<h5 class="card-title">{{ post.title }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">
					{{ post.subTitle }}
				</h6>
				<p class="card-text">
					{{ post.description }}
				</p>
				<div v-if="!admin" class="client">
					<nuxt-link
						:to="'/yazilar/' + post.id"
						class="btn btn-outline-info btn-sm"
						>Görüntüle</nuxt-link
					>
				</div>
				<div v-else class="admin">
					<nuxt-link
						:to="'/admin/' + post.id"
						class="btn btn-outline-warning btn-sm"
						>Düzenle</nuxt-link
					>
					<nuxt-link
						:to="'/admin/' + post.id + '/sil'"
						class="btn btn-outline-danger btn-sm"
						>Sil</nuxt-link
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			require: true,
		},
		admin: {
			type: Boolean,
			require: false,
			default: false,
		},
	}
}
</script>