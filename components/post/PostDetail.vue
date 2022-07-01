<template>
	<div
		class="
			container
			mt-5
			d-flex
			flex-column
			justify-content-center
			align-items-center
		"
	>
		<blockquote class="blockquote">
			<h3>{{ post.title }}</h3>
			<p>{{ post.subTitle }}</p>
			<p class="mb-0">
				{{ post.description }}
			</p>
			<footer class="blockquote-footer">
				Frontend Developer
				<cite title="Source Title">{{ post.author }}</cite>
			</footer>
		</blockquote>
	</div>
</template>
<script>
export default {
	props: {
		post: {
			require: true,
			type: Object,
			default: () => {
				return {
					title: null,
					subTitle: null,
					description: null,
					author: null,
				}
			},
		},
	}
}
</script>