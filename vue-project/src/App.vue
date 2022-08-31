<template>
	<v-app>
		<div id="app">
			<full-page :options="options" id="fullpage" ref="fullpage">
				<div class="section" id="page1">
					<div class="text">
						<h1>인편 보내기</h1>
						<div class="info">
							<h3>※ 더캠프의 공식서비스가 아닙니다 ※</h3>
							<!-- <h3>Section 1</h3> -->
						</div>
						<div class="soldier">
							<h5>생년월일 : 2002 01 28</h5>
							<h5>입대일 : 2022 09 20</h5>
							<h5>입영부대 : 55사단 신병교육대</h5>
						</div>
					</div>
					<div class="img">
						<img :src="img" id="img" />
						<img :src="arrow" id="arrow" />
					</div>
				</div>
				<div class="section">
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
										:counter="50"
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
										:counter="1500"
										auto-grow="true"
										name="input-7-1"
										label="내용"
										rows="12"
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
			</full-page>
		</div>
	</v-app>
</template>

<script>
// Optional. When using fullpage extensions
// import './fullpage.scrollHorizontally.min'

import axios from "axios";

// const url = "http://192.168.0.17:8000/mail";
const url = "/mail";
export default {
	// data() {
	// return {
	// 	options: {
	// 		licenseKey: "YOUR_KEY_HERE",
	// 		afterLoad: this.afterLoad,
	// 		scrollOverflow: true,
	// 		scrollBar: false,
	// 		menu: "#menu",
	// 		navigation: true,
	// 		anchors: ["page1", "page2", "page3"],
	// 	},
	// };
	data: () => ({
		// imgSrc:
		// 	// "https://w.namu.la/s/6f514e81b9f8a4c01d063caa8bbb6f8ced338474f564f35e7cb6174d8d48b469ac109c0af5d390daa90722d52d9b7d2f33a4910333770f238dea5e8584236ba4089db86c0f7d7bb1d755d8c6dece18bdb8dfbbb8ca9315488ff5de4a17e1d54faf8669ebc63d298748a3c245b7c53f29",
		// 	"@assets/img.jpeg",
		img: require("./assets/img.jpeg"),
		arrow: require("./assets/arrow.svg"),
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
			(v) => v.length <= 50 || "제목은 50자 이하여야 합니다.",
		],
		textRules: [
			(v) => !!v || "내용을 작성해주세요.",
			(v) => v.length <= 1500 || "내용은 1490자 이하여야합니다. ",
		],
		// options: {
		// 	licenseKey: "YOUR_KEY_HERE",
		// 	afterLoad: this.afterLoad,
		// 	scrollOverflow: true,
		// 	scrollBar: false,
		// 	menu: "#menu",
		// 	navigation: true,
		// 	anchors: ["page1", "page2", "page3"],
		// },
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

		afterLoad() {
			console.log("After load");
		},

		addSection(e) {
			e.preventDefault();
			var newSectionNumber =
				document.querySelectorAll(".fp-section").length + 1;

			// creating the section div
			var section = document.createElement("div");
			section.className = "section";
			section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`;

			// adding section
			document.querySelector("#fullpage").appendChild(section);

			// creating the section menu element
			var sectionMenuItem = document.createElement("li");
			sectionMenuItem.setAttribute(
				"data-menuanchor",
				"page" + newSectionNumber
			);
			sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`;

			// adding it to the sections menu
			var sectionsMenuItems = document.querySelector("#menu");
			sectionsMenuItems.appendChild(sectionMenuItem);

			// adding anchor for the section
			this.options.anchors.push(`page${newSectionNumber}`);

			// we have to call `update` manually as DOM changes won't fire updates
			// requires the use of the attribute ref="fullpage" on the
			// component element, in this case, <full-page>
			// ideally, use an ID element for that element too
			this.$refs.fullpage.build();
		},

		removeSection() {
			var sections = document
				.querySelector("#fullpage")
				.querySelectorAll(".fp-section");
			var lastSection = sections[sections.length - 1];

			// removing the last section
			lastSection.parentNode.removeChild(lastSection);

			// removing the last anchor
			this.options.anchors.pop();

			// removing the last item on the sections menu
			var sectionsMenuItems = document.querySelectorAll("#menu li");
			var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1];
			lastItem.parentNode.removeChild(lastItem);
		},

		toggleNavigation() {
			this.options.navigation = !this.options.navigation;
		},

		toggleScrollbar() {
			console.log("Changing scrollbar...");
			this.options.scrollBar = !this.options.scrollBar;
		},
	},
};
</script>

<style>
/* ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
	display: none;
} */
.fp-watermark {
	display: none;
}

/* body {
	width: 100%;
} */
button {
	width: 100%;
	/* margin-right: auto;
	margin-left: auto; */
}

.section {
	/* height: 99%; */
	width: 100%;
	max-width: 900px;
	margin-right: auto;
	margin-left: auto;

	/* margin-top: 0;
	margin-bottom: 1%; */
}

#page1 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}

.text {
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 50px;
}

.img {
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: space-around; */
}

#img {
	/* display: inline-block; */
	width: 80%;
	max-width: 500px;
	/* border: 4px solid #bcbcbc; */
	/* border: 10px solid blue; */
	border-radius: 10px;
	margin-bottom: 10%;
}
#arrow {
	width: 50px;
}

@media screen and (min-width: 768px), (orientation: landscape) {
	.section {
		border-radius: 1%;
		box-shadow: 0px 2px 10px #d0d3d9;
	}
}
</style>
