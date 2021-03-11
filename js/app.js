let map = document.getElementById("map"),
	partInfo = document.getElementById("partInfo"),
	allPart = map.querySelectorAll("g");
	map.addEventListener("click", function(e){ 
		let part = e.target.parentNode;
		if(e.target.nodeName == "path") {
		for (var i=0; i < allPart.length; i++) {
			allPart[i].classList.remove("active");
		}
		part.classList.add("active");
		var partName = part.querySelector("title").innerHTML,
		partPara = part.querySelector("desc p");
		sourceImg = part.querySelector("img"),
		partInfo.innerHTML = "";
		partInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h1>"+partName+"</h1><p>"+partPara.innerHTML+"</p>");
		partInfo.classList.add("show");
		}
	});

	$('.part').hover (
		function() {
			$('.description').html($(this).attr('description-data'));
			$('.description').fadeIn();
		},
		function() {
			$('.description').fadeOut(50);
		}
	);