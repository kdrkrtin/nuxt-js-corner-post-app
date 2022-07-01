<template>
	<PostForm :new-text="'Yeni Köse Yazısı'" @savePost="savePost" />
</template>
<script>
import PostForm from '@/components/admin/PostForm'
export default {
	head: {
		title: 'Yeni Yazı Ekle - Köşe Yazısı'
	},
	components: {
		PostForm,
	},
	methods: {
		savePost(post) {
			this.$store.dispatch('addPost', post, this.$router)
				.then(() => {
					this.$router.push('/admin')
				})
		},
	},
}
</script>