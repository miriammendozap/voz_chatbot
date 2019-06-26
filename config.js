export default {
	app: {
		token: "0ff3a04b505e46f0b692e4e63c65cd2d", // <- enter your token here
		muted: false, // <- mute microphone by default
		googleIt: true // <- ask users to google their request, in case of input.unknown action
	},
	locale: {
		strings: {
			welcomeTitle: "Hola!, preguntame lo que necesites para empezar",
			welcomeDescription: `Puedes escribir "Hola" por ejemplo. Ó solo presiona el micrófono para hablar`,
			offlineTitle: "Ups!...",
			offlineDescription: "Al parecer no tienes internet, está web necesita de ella",
			queryTitle: "Preguntame lo que necesita",
			voiceTitle: "Adelante, te estoy escuchando"
		},
		settings: {
			speechLang: "es", // <- output language
			recognitionLang: "es" // <- input(recognition) language
		}
	}
}