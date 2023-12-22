function HTMLElements(str) {
  const openTags = str.match(/<\w+>/g);
  const closeTags = str.match(/(<\/\w+>)/g);

  const pairs = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<em>': '</em>',
    '<b>': '</b>',
  };
  for (let i = 0; i < openTags.length; i++) {
    const openTag = openTags[i];
    const closeTag = pairs[openTag];
    if (closeTag) {
      const closeTagIndex = closeTags.indexOf(closeTag);
      if (closeTagIndex > -1) {
        closeTags.splice(closeTagIndex, 1);
      } else return openTags[i].replace(/<|>/g, '');
    }
  }
  return true;
}

console.log(HTMLElements('<b><i>hello</i>world'));
console.log(HTMLElements('<div><i>hello</i>world</div>'));
