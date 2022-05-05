module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/images");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "final-website",
        }
    };
};
