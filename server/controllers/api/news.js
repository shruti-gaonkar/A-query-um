const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
    scrapeData: (req, res) => {
        axios.get("https://www.theaquariumguide.com/aquarium-fish-care-guides").then(function (response) {
            var $ = cheerio.load(response.data);
            var results = [];
            $("article.elementor-post").each(function (i, element) {
                var title = $(element).find(".elementor-post__title").text().trim();
                var desc = $(element).find(".elementor-post__excerpt").text();
                var link = $(element).find("a").attr("href");
                var img = $(element).find("img").attr("src");
                results.push({
                    title: title,
                    desc: desc,
                    link: link,
                    image: img
                });
            });
            res.send(results);
        });
    }
};