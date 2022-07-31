export const electionInfo = [
	{
		name: "presidential",
		id: 1,
	},
	{
		name: "parliamentary",
		id: 2,
	},
];

export const collationInfo = [
	{
		name: "constituency",
		id: 1,
	},
	{
		name: "regional",
		id: 2,
	},
	{
		name: "national",
		id: 3,
	},
];

export const capitalize = (str) => {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
};
