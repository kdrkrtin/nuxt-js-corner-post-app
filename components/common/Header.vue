<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light border-0 shadow">
		<nuxt-link to="/" class="navbar-brand"
			>Köşe Yazısı</nuxt-link
		>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="navbarNav" class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
				<li class="nav-item active">
					<nuxt-link to="/yazilar" class="nav-link"
						>Yazılar
						<span class="sr-only">(current)</span></nuxt-link
					>
				</li>
			</ul>
			<ul class="navbar-nav my-2 my-lg-0">
				<li class="nav-item mr-sm-2">
					<nuxt-link to="/admin" class="nav-link">Admin</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>