# pixiv-daily-ranking [![Build Status](https://travis-ci.org/akameco/pixiv-daily-ranking.svg?branch=master)](https://travis-ci.org/akameco/pixiv-daily-ranking)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/pixiv-daily-ranking.svg)](https://greenkeeper.io/)

> get links pixiv daily ranking

## Installation

```
$ npm install --save pixiv-daily-ranking 
```

## Usage

```
const pixivDailyRanking = require('pixiv-daily-ranking')
pixivDailyRanking().then(links => {
	console.log(links);
});
```

## License

MIT
