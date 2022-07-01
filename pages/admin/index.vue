<template>
	<div class="page">
		<div class="container d-flex justify-content-center align-items-center mt-5">
			<button class="btn btn-dark" @click="$router.push('/admin/yeni-yazi')">Yeni Bir Yazı Ekle</button>
		</div>
		<PostList :admin="true" :posts="adminPosts"/>
	</div>
</template>

<script>
export default {
	layout: 'admin',
	head: {
		title: 'Admin - Köşe Yazısı'
	},
	computed:{
		adminPosts(){
			return this.$store.getters.getPosts
		}
	}
}
</script>