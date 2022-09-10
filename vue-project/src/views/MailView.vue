<template>
	<div class="table">
		<v-table>
			<thead>
				<tr>
					<th class="text-left">제목</th>
					<th class="text-left">작성자</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="mail in mails" :key="mail._id">
					<td>
						<router-link :to="'/text/' + mail._id">
							{{ mail.title }}</router-link
						>
					</td>
					<td>{{ mail.name }}</td>
				</tr>
			</tbody>
		</v-table>
	</div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:4000/mail";
// let mails = this.mails;
export default {
	data: () => ({
		mails: null,
	}),
	methods: {},
	mounted() {
		console.log("mount");
		axios
			.get(url)
			.then((response) => {
				console.log(response.data);
				this.mails = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>

<style scoped>
.table {
	width: 90%;
	margin-left: auto;
	margin-right: auto;
}
a {
	text-decoration: none;
	color: black;
}

@media screen and (min-width: 768px), (orientation: landscape) {
	.table {
		width: 60%;
		/* margin-top: 10px; */
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0px 2px 10px #d0d3d9;
	}
}
</style>
