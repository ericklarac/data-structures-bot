const queue_switch = (datastructure, selector, host) => {
	switch (selector) {
		case 'image':
			return image_response;
		case 'operation':
			return opearation_response;
		case 'implementation':
			return implementation_response;
		case 'problems':
			return problem_response;
		case 'code':
			return code_response(host);
		case 'vulgarity':
			return {
				fulfillmentMessages: [
					{
						platform: 'TELEGRAM',
						payload: {
							telegram: {
								parse_mode: 'Markdown',
								text: 'Watch your language!',
							},
						},
					},
				],
				outputContexts: [],
			};
		default:
			return [description_response_1, description_response_2][
				Math.floor(Math.random() * 2)
			];
	}
};

const code_response = (host) => {
	return {
		fulfillmentMessages: [
			{
				platform: 'TELEGRAM',
				payload: {
					telegram: {
						parse_mode: 'Markdown',
						text: host + '/queue.png',
					},
				},
			},
		],
		outputContexts: [],
	};
};

const problem_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Here are some common queue problems from leetcode:\n\t- [Recent calls](https://leetcode.com/problems/number-of-recent-calls/) \n\t- [Design circular queue](https://leetcode.com/problems/design-circular-queue)',
				},
			},
		},
	],
	outputContexts: [],
};

const implementation_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Stacks can be implemented using linked lists ant dynamic arrays: \n\n - *Linked list*: \n\t\t - *Enqueue*: Insert at head \n\t\t - *Dequeue*: Remove at head \n\n - *Dynamic Arrays*: \n\t\t - *Enqueue*: Append\n\t\t - *Dequeue*: Remove last element',
				},
			},
		},
	],
	outputContexts: [],
};

const opearation_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Having a queue of `n` elements the space is `O(n)`, its operations are: \n\n- Enqueue, which costs `O(1)`  \n- Dequeue, which costs `O(1)`  \n- Peek, which costs `O(1)`',
				},
			},
		},
	],
	outputContexts: [],
};

const image_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					text: 'https://media.giphy.com/media/A8NkSPltT13H2/giphy.gif',
				},
			},
		},
	],
	outputContexts: [],
};

const description_response_1 = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'A *queue* is also called a *FIFO* (_first in, first out_). It is an abstract data type that serves as a collection of items, and its two main operations are enqueue and deque. \n\n \t - *Enqueue* adds an item at the end of the collection. \n \t - *Dequeue* removes the first item of the collection.',
				},
			},
		},
	],
	outputContexts: [],
};

const description_response_2 = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'*Queue* as the name says is the data structure built according to the _queues of bus stop or train_ where the person who is standing in the front of the queue (standing for the longest time) is the first one to get the ticket',
				},
			},
		},
	],
	outputContexts: [],
};

export { queue_switch };
