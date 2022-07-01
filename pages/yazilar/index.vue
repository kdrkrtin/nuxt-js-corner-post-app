<template>
	<div class="page">
		<PostList :posts="posts"/>
	</div>
</template>
<script>
export default {
	head: {
		title: 'Yazılar - Köşe Yazısı'
	},
	computed: {
		posts() {
			return this.$store.getters.getPosts
		},
	}
}
</script>