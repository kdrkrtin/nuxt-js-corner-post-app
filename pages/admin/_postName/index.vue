<template>
	<PostForm
		@savePost="updatePost"
		:post="editPost"
		:new-text="'Köşe Yazısı Düzenle'"
	/>
</template>
<script>
import axios from 'axios'
import PostForm from '@/components/admin/PostForm'
export default {
	components: {
		PostForm,
	},
	data() {
		return {
			editPost: {},
			axiosUrl:
				'https://kose-yazisi-vuejs-default-rtdb.firebaseio.com/posts',
		}
	},
	async fetch() {
		const postId = this.$route.params.postName
		const { data } = await axios.get(`${this.axiosUrl}/${postId}.json`)
		this.editPost = data
	},
	methods: {
		updatePost(updatedPost) {
			const postId = this.$route.params.postName
			this.$store
				.dispatch('updatePost', { ...updatedPost, id: postId })
				.then(() => {
					this.$router.push('/admin')
				})
		},
	},
}
</script>