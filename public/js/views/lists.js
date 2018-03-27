const lists = ( () => {

	function render() {

		const loggedIn = store.loggedIn

		if (!loggedIn) {
			createAccount.render()

		} else {
				const wordList = store.user.wordList

				let html = ""
				for (i=0; i<wordList.length; i++) {
					html = html + `
						<div class="word-in-list">
							<span class="lemma">${wordList[i].word}</span>
							(${wordList[i].count})
						</div>
					`
				}

				$('.word-lists').html(html)
			}
		}

	return {
		render
	}

})()