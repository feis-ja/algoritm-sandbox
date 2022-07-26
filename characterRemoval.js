const characterRemoval = (strArr) => {
	const [base, data] = strArr;
	// console.log(data);
	const baseSplit = base.split("");
	const dataSplit = data.split(",");
	// console.log(baseSplit)

	const newArr = [];

	dataSplit.forEach((str) => {
		let check = true;
		str.split("").forEach((alp) => {
			if (baseSplit.indexOf(alp) === -1) {
				check = false;
			}
		});
		if (check) {
			newArr.push(str);
		}
	});
	let longest = newArr.sort((a, b) => b.length - a.length)[0].length;

	return baseSplit.length - longest;
};

let char = characterRemoval(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]);
console.log(char);
// characterRemoval(["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])
