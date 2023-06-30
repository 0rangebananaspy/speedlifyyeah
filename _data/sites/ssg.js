module.exports = {
	name: "Website Fakultas", // optional, falls back to object key
	description: "Monitoring Performa Website Fakultas",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://fk.unej.ac.id/",
		"https://fkg.unej.ac.id/",
		"https://fkep.unej.ac.id/",
		"https://fkm.unej.ac.id/",
		"https://farmasi.unej.ac.id/",
		"https://faperta.unej.ac.id/",
		"https://www.fateta.unej.ac.id/",
		"https://fmipa.unej.ac.id/",
		"https://teknik.unej.ac.id/",
		"https://ilkom.unej.ac.id/",
		"https://fkip.unej.ac.id/",
		"https://fisip.unej.ac.id/",
		"https://fib.unej.ac.id/",
		"https://feb.unej.ac.id/",
		"https://law.unej.ac.id/",
		"https://pasca.unej.ac.id/",
	]
};
