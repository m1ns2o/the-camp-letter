<template>
	<p>
		{{ text }}
	</p>
</template>

<script>
import axios from "axios";
const url = "http://localhost:4000/mail/";
// let mails = this.mails;
export default {
	data: () => ({
		text: null,
	}),
	methods: {},
	mounted() {
		console.log(this.$route.params.id);
		axios
			.get(url + this.$route.params.id)
			.then((response) => {
				// console.log(response.data);
				this.text = response.data.text;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>
