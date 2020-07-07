const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey
const sentenceBoundaryDetection = require('sbd')

async function robot(content) {
    await fetchContentFromWikipedia(content)
    sanitizeContent(content)
    breackContentIntoSentences(content)

    async function fetchContentFromWikipedia(content) {
        const algorithmiaAlthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAlthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponce = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContnet = wikipediaResponce.get()

        content.sourceContentOriginal = wikipediaContnet.content
    }

    function sanitizeContent(content) {
        const withoutBlankLinesAndMarkdown = removeBlankLinesAndMarkdown(content.sourceContentOriginal)
        const withoutDatesInParentheses = removeDatesInParenthesis(withoutBlankLinesAndMarkdown)

        content.sourceContentSanitized = withoutDatesInParentheses

        function removeBlankLinesAndMarkdown(text) {
            const allLinens = text.split('\n')

            const withoutBlankLinesAndMarkdown = allLinens.filter((line) => {
                if (line.trim().length === 0 || line.trim().startsWith('=')) {
                    return false
                }
                return true
            })
            return withoutBlankLinesAndMarkdown.join(' ')
        }
    }

    function removeDatesInParenthesis(text) {
        return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g, '')
    }

    function breackContentIntoSentences(content) {
        content.sentences = []

        const sentences = sentenceBoundaryDetection.sentences(content.sourceContentSanitized)
        sentences.forEach((sentence) => {
            content.sentences.push({
                text: sentence,
                keywords: [],
                images: []
            })
        })
    }
}

module.exports = robot