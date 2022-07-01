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
		<Post
			v-for="(post, index) in posts"
			:key="index"
			:post="post"
			:admin="admin"
		/>
	</div>
</template>
<script>
import Post from '@/components/post/Post'
export default {
	components:{
		Post
	},
	props: {
		admin:{
			type: Boolean,
			require: false,
			default: false
		},
		posts:{
			type: Array,
			require: true
		}
	}
}
</script>