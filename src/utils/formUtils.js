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

export const regionalInfo = [
	{
		name: "NR",
		id: 0,
	},
	{
		name: "UW",
		id: 1,
	},
	{
		name: "AS",
		id: 2,
	},
	{
		name: "UER",
		id: 3,
	},
];

export const poolingStations = [
	{
		name: "1",
		id: 0,
	},
	{
		name: "2",
		id: 1,
	},
	{
		name: "3",
		id: 2,
	},
	{
		name: "4",
		id: 3,
	},
	{
		name: "5",
		id: 4,
	},
	{
		name: "6",
		id: 5,
	},
];

export const candidates = [
	{
		name: "A",
		id: 0,
	},
	{
		name: "B",
		id: 1,
	},
	{
		name: "C",
		id: 2,
	},
	{
		name: "D",
		id: 3,
	},
	{
		name: "E",
		id: 4,
	},
	{
		name: "F",
		id: 5,
	},
];

export const capitalize = (str) => {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
};
