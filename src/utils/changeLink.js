function changeLink(href) {
	const link = document.createElement('a');
	link.href = href;
	link.target = '_blank';
	link.rel = 'noreferrer';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export default changeLink;
