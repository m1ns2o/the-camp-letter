<template>
	<v-app>
		<!-- <div class="text">ㄴㅇㅁㄹ몬어</div> -->
		<div class="form">
			<v-form v-model="valid" ref="form">
				<v-container>
					<v-row>
						<v-col cols="12" md="6">
							<v-text-field
								v-model="name"
								:rules="nameRules"
								:counter="10"
								label="이름"
								required
								outlined
							></v-text-field>
						</v-col>
						<v-col cols="12" md="6">
							<v-text-field
								v-model="title"
								:rules="titleRules"
								:counter="100"
								label="제목"
								required
							></v-text-field>
						</v-col>

						<!-- <v-col cols="12" md="4">
						<v-text-field
							v-model="text"
							:rules="emailRules"
							:counter="1500"
							label="내용"
							required
						></v-text-field>
					</v-col> -->

						<v-col>
							<v-textarea
								v-model="text"
								:rules="textRules"
								:counter="1490"
								auto-grow="true"
								name="input-7-1"
								label="내용"
								rows="20"
							></v-textarea>
							<v-btn
								:disabled="!valid"
								color="success"
								class="mr-4"
								@click="validate"
							>
								편지 보내기
							</v-btn>
						</v-col>
					</v-row>
				</v-container>

				<!-- <v-btn class="mr-4" @click="submit"> submit </v-btn> -->
			</v-form>
		</div>
	</v-app>
</template>

<script>
import axios from "axios";

const url = "http://192.168.0.17:8000/";
// const url = "https://jsonplaceholder.typicode.com/post";

export default {
	data: () => ({
		valid: false,
		name: "",
		title: "",
		text: "",
		nameRules: [
			(v) => !!v || "이름을 작성해주세요.",
			(v) => v.length <= 10 || "이름은 10자 이하여야 합니다.",
		],
		titleRules: [
			(v) => !!v || "제목을 작성해주세요.",
			(v) => v.length <= 100 || "제목은 100자 이하여야 합니다.",
		],
		textRules: [
			(v) => !!v || "내용을 작성해주세요.",
			(v) => v.length <= 1490 || "내용은 1490자 이하여야합니다. ",
		],
	}),

	methods: {
		validate() {
			this.$refs.form.validate();

			const json_data = {
				name: this.name,
				title: this.title,
				text: this.text,
			};

			axios
				.post(url, json_data)
				.then(function (response) {
					console.log(response);
					alert("전송에 성공하였습니다");
				})
				.catch(function (error) {
					alert("전송에 실패하였습니다. ");
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
/* body {
	width: 100%;
} */
button {
	width: 100%;
	/* margin-right: auto;
	margin-left: auto; */
}

.form,
.text {
	height: 99%;
	width: 100%;
	max-width: 900px;
	margin-right: auto;
	margin-left: auto;
	margin-top: auto;
	margin-bottom: auto;

	/* flex-direction: row; */
	/* flex-align: center; */
}

@media screen and (min-width: 768px), (orientation: landscape) {
	.form,
	.text {
		border-radius: 1%;
		box-shadow: 0px 2px 10px #d0d3d9;
	}
}
</style>
