export const electionInfo = [
	{
		name: "presidential",
		id: 0,
	},
	{
		name: "parliamentary",
		id: 1,
	},
];

export const collationInfo = [
	{
		name: "constituency",
		id: 0,
	},
	{
		name: "regional",
		id: 1,
	},
	{
		name: "national",
		id: 2,
	},
];

export const constituencyInfo = [
	{
		name: "NC",
		id: 0,
	},
	{
		name: "CP",
		id: 1,
	},
	{
		name: "BE",
		id: 2,
	},
	{
		name: "BC",
		id: 3,
	},
	{
		name: "PS",
		id: 4,
	},
];

export const capitalize = (str) => {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
};
