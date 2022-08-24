<template>
	<v-app>
		<v-form v-model="valid" ref="form">
			<v-container>
				<v-row>
					<v-col cols="12" md="6">
						<v-text-field
							v-model="firstname"
							:rules="nameRules"
							:counter="10"
							label="이름"
							required
							outlined
						></v-text-field>
					</v-col>
					<v-col cols="12" md="6">
						<v-text-field
							v-model="lastname"
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
					</v-col>
				</v-row>
			</v-container>
			<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
				Validate
			</v-btn>
			<!-- <v-btn class="mr-4" @click="submit"> submit </v-btn> -->
		</v-form>
	</v-app>
</template>

<script>
import axios from "axios";

const url = "http://localhost:8000/write";

export default {
	data: () => ({
		valid: false,
		firstname: "",
		lastname: "",
		text: "",
		nameRules: [
			(v) => !!v || "Name is required",
			(v) => v.length <= 10 || "이름은 10자 이하여야 합니다.",
		],
		titleRules: [
			(v) => !!v || "Name is required",
			(v) => v.length <= 100 || "제목은 100자 이하여야 합니다.",
		],
		textRules: [
			(v) => !!v || "E-mail is required",
			(v) => v.length <= 1490 || "내용은 1490자 이하여야합니다. ",
		],
	}),

	methods: {
		validate() {
			this.$refs.form.validate();

			let data = new FormData();
			data.append("name", this.name);
			data.append("title", this.title);
			data.append("text", this.text);

			console.log(data);

			axios
				.post(url, data)
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		},
	},
};
</script>
