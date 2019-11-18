const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
	output: {
		assetModuleFilename: "images/[hash][ext]"
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg)$/,
				type: "asset",
				generator: {
					dataUrl: content => {
						if (typeof content !== "string") {
							content = content.toString();
						}

						return svgToMiniDataURI(content);
					}
				}
			}
		]
	},
	experiments: {
		asset: true
	}
};
