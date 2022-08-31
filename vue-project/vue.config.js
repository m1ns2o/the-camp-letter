const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: true,

	pluginOptions: {
		vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
	},
	// devServer:{
	//   port:8080,
	//   proxy:{
	//     '/':{
	//       'http://192.168.0.17:8000',
	//       // 'https://jsonplaceholder.typicode.com/post',
	//       changeOrigin:true
	//     }
	//   }
	// }
});

// module.exports = {
// 	outputDir: "../express_server/public", // 빌드할 폴더 경로
// };

// module.exports = {
//   devServer:{
//     port:8080,
//     proxy:{
//       '^api':{
//         'http://192.168.0.17:8000',
//         changeOrigin:true
//       }
//     }
//   }
// }
