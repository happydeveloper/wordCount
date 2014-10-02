wordsChunk = document.getElementsByTagName('body')[0].innerText.split(' ')
wordSortTable = {};
for(i = 0; i < wordsChunk.length; i++){
    wordSortTable[wordsChunk[i]] = wordSortTable[wordsChunk[i]] == undefined ? 1 : wordSortTable[wordsChunk[i]]+1;
}
wordSort = []
for(var name in wordSortTable){
   if(name.length == 1 && name.match(/\W/g))
    continue;
   wordSort.push([name, wordSortTable[name]]);
}
wordSort.sort(function(a, b) {return a[1] - b[1]})
//wordSort = wordSort.splice(0,200);
str = '';
for(var i = 0; i < wordSort.length; i++){
    str += wordSort[i][1] +"\t"+ wordSort[i][0].replace(/\n/g, "") + "\n"
}
console.log(str);
console.log("%cWord Counter", "text-shadow: -0.06em 0 red, 0.06em 0 cyan; font-size:50px");
console.log('by 서툰 영어의 시대');