import express from 'express';
import json from 'body-parser';
import urlencoded from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import { example, stack_switch } from './responses/stacks.js';
import { queue_switch } from './responses/queue.js';
import { linkedlist_switch } from './responses/linkedlist.js';

var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'https://data-structures-bot.herokuapp.com';

// POST route handler
app.post('/', (req, res) => {
	let { queryResult } = req.body;
	const { datastructure, selector } = queryResult.parameters;

	if (datastructure) {
		// console.log(queryResult);
		// console.log(datastructure);
		// console.log('\n');

		switch (datastructure) {
			case 'stack':
				return res.send(stack_switch(datastructure, selector, HOST));
			case 'graph':
				return res.send(example(datastructure));
			case 'queue':
				return res.send(queue_switch(datastructure, selector, HOST));
			case 'heap':
				return res.send(example(datastructure));
			case 'binary tree':
				return res.send(example(datastructure));
			case 'trie':
				return res.send(example(datastructure));
			case 'linked list':
				return res.send(linkedlist_switch(datastructure, selector, HOST));
			default:
				return res.send({
					fulfillmentText: 'What was that?',
				});
		}
	}

	return res.send({
		fulfillmentText: 'What was that?',
	});
});

app.listen(PORT, () => console.log(`Data Structures bot running on ${PORT}`));
