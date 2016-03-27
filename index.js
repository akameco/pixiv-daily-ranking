'use strict';
const got = require('got');
const cheerio = require('cheerio');

module.exports = () => {
	return got('http://www.pixiv.net/ranking.php?mode=daily').then(res => {
		const $ = cheerio.load(res.body);
		return $('.ranking-image-item a').map((i, v) => {
			const href = $(v).attr('href');
			return `http://www.pixiv.net/${href}`;
		}).get();
	});
};
