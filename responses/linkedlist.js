const linkedlist_switch = (datastructure, selector, host) => {
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
			return [description_response_2, description_response_2][
				Math.floor(Math.random() * 2)
			];
	}
};

const problem_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Here are some common linked list problems from leetcode:\n\t- [Recent calls](https://leetcode.com/problems/number-of-recent-calls/) \n\t- [Design circular queue](https://leetcode.com/problems/design-circular-queue)',
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
						'```class ListNode:\n\t\t\t\tdef __init__(self, value):\n\t\t\t\t\t\t\t\tself.value = value\n\t\t\t\t\t\t\t\tself.next = None```',
				},
			},
		},
	],
	outputContexts: [],
};

const code_response = (host) => {
	return {
		fulfillmentMessages: [
			{
				platform: 'TELEGRAM',
				payload: {
					telegram: {
						parse_mode: 'Markdown',
						text: host + '/linked-list-node.png',
					},
				},
			},
		],
		outputContexts: [],
	};
};

const opearation_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Given a *linked list* of `n` elements the space is `O(n)`, its operations are: \n\n- Delete, which costs `O(n)`  \n- Insert, which costs `O(n)`  \n- Search, which costs `O(n)`',
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
					text: 'https://media.giphy.com/media/yvzK4m2EoIKs9K0GoF/giphy.gif',
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
						'*Linked lists* are linear collections of items, where each item points to the next item. Types of linked lists: \n\n\t - *Single linked lists*: Each node points to the next node in the list, and the last item points to `null`. E. g. \n`1 -> 2 -> 3 -> None` \n\n\t - *Doubly linked lists* Each node has two references, one reference points to the next node and the other reference points to the previous item E. g. \n`None <- 1 <-> 2 <-> 3 -> None` \n\n\t - *Circular linked lists* A circular linked list can be a single linked list or a doubly linked list, but the elements are connected on a circle. E. g.\n ```\nhead\n|\n1 -> 2 -> 3\n^         |\n|         |\n ---------\n```',
				},
			},
		},
	],
	outputContexts: [],
};

export { linkedlist_switch };
