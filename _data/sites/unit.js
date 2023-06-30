module.exports = {
	name: "Monitoring Performa Website UPT dan Lembaga", // optional, falls back to object key
	description: "Monitoring performa website UPT dan lembaga",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	//skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://uptti.unej.ac.id/",
		"https://kearsipan.unej.ac.id/",
		"https://penerbitan.unej.ac.id/",
		"https://uptbahasa.unej.ac.id/",
		"https://perpustakaan.unej.ac.id/",
		"https://ltsit-cdast.unej.ac.id/",
		"https://agroteknopark.unej.ac.id/",
		// Popular Posts
		"https://spi.unej.ac.id/",
		"https://lp2m.unej.ac.id/",
		"https://lp3m.unej.ac.id/",
		"https://chrm2.unej.ac.id/",
		"https://cgant.unej.ac.id/",
		"https://c-rissh.unej.ac.id/",
		"https://cgs.unej.ac.id/",
		"https://pusatstudigender.unej.ac.id/",
		"https://rsgm.unej.ac.id/",
		"https://umc.unej.ac.id/",
		"https://ppid.unej.ac.id/",
		"https://mmp.unej.ac.id/",
		"https://oailib.unej.ac.id/",
		"https://library.unej.ac.id/",
		"https://jurnal.unej.ac.id/",
		"https://mbkm.unej.ac.id/"
	]
};
