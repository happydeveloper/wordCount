WordCounter.js
=========

### 소개
WordCount.js는 현재 웹페이지에 있는 각각의 단어들이 얼마나 자주 등장하는지를 알려주는 작은 프로그램 입니다. 

### 사용법
http://www.youtube.com/watch?v=PnSz6sRt-fM&feature=youtu.be

### 북마클릿
<a href="javascript:(function()%7BwordsChunk%20%3D%20document.getElementsByTagName('body')%5B0%5D.textContent.replace(%2F%5Cs%7B2%2C%7D%2Fg%2C%20'').replace(%2F%5Cn%2Fg%2C%20'%20').split('%20')%3BwordSortTable%20%3D%20%7B%7D%3Bfor(i%20%3D%200%3B%20i%20%3C%20wordsChunk.length%3B%20i%2B%2B)%7Bvar%20current%20%3D%20wordsChunk%5Bi%5D.toLowerCase()%3BwordSortTable%5Bcurrent%5D%20%3D%20wordSortTable%5Bcurrent%5D%20%3D%3D%20undefined%20%3F%201%20%3A%20wordSortTable%5Bcurrent%5D%2B1%3B%7DwordSort%20%3D%20%5B%5D%3Bfor(var%20name%20in%20wordSortTable)%7Bif(name.length%20%3D%3D%201%20%26%26%20name.match(%2F%5CW%2Fg))continue%3BwordSort.push(%5Bname%2C%20wordSortTable%5Bname%5D%5D)%3B%7DwordSort.sort(function(a%2C%20b)%20%7Breturn%20b%5B1%5D%20-%20a%5B1%5D%7D)%3BwordSort%20%3D%20wordSort.slice(0%2C%2040)%3Bstr%20%3D%20'WordCounter.js%20(by%20%EC%84%9C%ED%88%B0%20%EC%98%81%EC%96%B4%EC%9D%98%20%EC%8B%9C%EB%8C%80)%5Cn'%3Bfor(var%20i%20%3D%200%3B%20i%20%3C%20wordSort.length%3B%20i%2B%2B)%7Bstr%20%2B%3D%20wordSort%5Bi%5D%5B1%5D%20%2B%22%2C%20%22%2B%20wordSort%5Bi%5D%5B0%5D%20%2B%20%22%5Cn%22%3B%7Dalert(str)%7D)()">북마크</a>
