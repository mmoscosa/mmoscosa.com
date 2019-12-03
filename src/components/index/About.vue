<template>
	<section class="bg-white border-b py-8">
		<div class="container max-w-5xl mx-auto m-8">
			<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">About Martin</h1>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
	
			<div class="flex flex-wrap">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">{{$static.objective.title}}</h3>
					<p class="text-gray-600 mb-8" v-html="$static.objective.content">
					</p>
				</div>
				<div class="w-full sm:w-1/2 p-6">
					<div class="embed-responsive aspect-ratio-16">
						<iframe  
							src="https://www.youtube.com/embed/XixvLyNjw98" 
							frameborder="0" 
							allow="accelerometer; 
							autoplay; 
							encrypted-media; 
							gyroscope; 
							picture-in-picture" 
							allowfullscreen>
						</iframe>
					</div>
				</div>
			</div>
	
	
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 p-6 mt-6">
					<div class="embed-responsive aspect-ratio-16" >
						<iframe  
							src="https://www.youtube.com/embed/QPHAZFunQ5g" 
							frameborder="0" 
							allow="accelerometer; 
							autoplay; 
							encrypted-media; 
							gyroscope; 
							picture-in-picture" 
							allowfullscreen>
						</iframe>
					</div>
				</div>
				<div class="w-full sm:w-1/2 p-6 mt-6">
					<div class="align-middle">
						<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">{{$static.quickBio.title}}</h3>
						<p class="text-gray-600 mb-8" v-html="$static.quickBio.content"></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<static-query>
query{
	objective:contentfulAbout(id: "6qZ4cAOZWvCH4OcWDE5Vzs"){
    	title,
    	content,
    	side
  },
	quickBio:contentfulAbout(id: "32dcNwLOqp8KmOLfgJCAv"){
    	title,
    	content,
    	side
  } 
}
</static-query>
<script>
	export default {
	
	}
</script>

<style>

	
	.embed-responsive {
		position: relative;
		display: block;
		height: 0;
		padding: 0;
		overflow: hidden;
	
	
	}
	
	.embed-responsive .embed-responsive-item,
	iframe,
	embed,
	object,
	video {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		border: 0;
	}
	
	.aspect-ratio-square {
		padding-top: 100%;
	}
	
	.aspect-ratio-16 {
		padding-top: 56.25%;
	}
	
	.aspect-ratio-4 {
		padding-top: 75%;
	}
	
	.aspect-ratio-21 {
		padding-top: 42.86%;
	}
</style>
