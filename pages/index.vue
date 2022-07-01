<template>
	<div class="page">
		<PostList :posts="posts" />
		<div v-if="posts.length === 0" class="dataDesc text-center">
			<p>Su an kose yazisi yok. <nuxt-link to="/admin/yeni-yazi">Ekleme yapmak icin tiklayiniz.</nuxt-link></p>
		</div>
		<About />
	</div>
</template>

<script>
import PostList from '@/components/post/PostList'
import About from '@/components/home/About'
export default {
	components: {
		PostList,
		About,
	},
	computed: {
		posts() {
			return this.$store.getters.getPosts
		},
	}
}
</script>
