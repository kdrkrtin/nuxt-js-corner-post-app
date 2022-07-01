<template>
	<PostDetail :post="selectedPost" />
</template>

<script>
import axios from 'axios'
import PostDetail from '@/components/post/PostDetail'
export default {
	components: {
		PostDetail,
	},
	data() {
		return {
			selectedPost: {},
		}
	},
	async fetch() {
		const postId = this.$route.params.postName
		const { data } = await axios.get(
			`https://kose-yazisi-vuejs-default-rtdb.firebaseio.com/posts/${postId}.json`
		)
		this.selectedPost = data
	},
}
</script>