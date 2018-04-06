function attachListeners() {
	$('#app').on('submit', '.log-in-form', handlers.loginHandler)
	$('#app').on('submit', '.log-out-form', handlers.logoutHandler)
	$('#app').on('submit', '.create-account-form', handlers.createAccountHandler)
	$('#app').on('focus', '#newUsername, #newUserPassword', handlers.newUserFocusHandler)

	$('#app').on('click', '.js-lookup-word', handlers.lookupWordHandler)
	$('#app').on('click', '.js-add-text', handlers.addTextHandler)

	$('#app').on('click', '.hamburger-icon', handlers.toggleLeftNavHandler)
}